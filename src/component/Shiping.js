import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "./shiping.css";
import bd1 from "./deal-img-earbuds.jpg";
import item from "./Item-data.json";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [upiId, setUpiId] = useState("");
  const [netBank, setNetBank] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
 const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    zip: "",
  });

  const [autoFill, setAutoFill] = useState(false);

  // Example saved data (you can later replace this with localStorage data)
  const savedAddress = {
    firstName: "Monu",
    lastName: "Khan",
    email: "monu@gmail.com",
    phone: "9876543210",
    state: "Madhya Pradesh",
    city: "Khargone",
    zip: "451001",
  };

  // Handle checkbox toggle
  const handleAutoFill = (e) => {
    const checked = e.target.checked;
    setAutoFill(checked);

    if (checked) {
      setFormData(savedAddress); // ✅ Fill fields with data
    } else {
      // ❌ Clear fields
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        state: "",
        city: "",
        zip: "",
      });
    }
  };

  // Handle manual input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Continue button -> validate shipping and open payment modal
  const handleContinue = () => {
    if (Object.values(formData).some((v) => v.trim() === "")) {
      Swal.fire({
        icon: "warning",
        title: "Please fill all required fields!",
      });
      return;
    }
    // Reset payment form each time
    setPaymentMethod("card");
    setCardNumber("");
    setCardName("");
    setExpiry("");
    setCvv("");
    setUpiId("");
    setNetBank("");
    setShowPayment(true);
  };

  // Luhn check for card number
  const isValidLuhn = (num) => {
    const digits = num.replace(/\s+/g, "").split("").reverse().map(Number);
    if (digits.some(isNaN)) return false;
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
      let d = digits[i];
      if (i % 2 === 1) {
        d *= 2;
        if (d > 9) d -= 9;
      }
      sum += d;
    }
    return sum % 10 === 0;
  };

  // expiry in MM/YY or MM/YYYY
  const isValidExpiry = (exp) => {
    if (!/^\s*\d{2}\/\d{2,4}\s*$/.test(exp)) return false;
    const [mm, yyRaw] = exp.split("/").map((s) => s.trim());
    const mmNum = Number(mm);
    let yyNum = Number(yyRaw);
    if (yyRaw.length === 2) {
      const prefix = new Date().getFullYear().toString().slice(0, 2);
      yyNum = Number(prefix + yyRaw);
    }
    if (mmNum < 1 || mmNum > 12) return false;
    const lastDay = new Date(yyNum, mmNum, 0, 23, 59, 59);
    return lastDay >= new Date();
  };

  const isValidCvv = (c) => /^\d{3,4}$/.test(c.trim());

  // Simulate processing with progress animation
  const startProcessing = (onSuccess) => {
    setProcessing(true);
    setProgress(6);
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.ceil(Math.random() * 12);
        if (next >= 98) {
          clearInterval(interval);
          setProgress(98);
          // finalize after short delay
          setTimeout(() => {
            setProgress(100);
            setProcessing(false);
            onSuccess();
          }, 700);
        }
        return Math.min(next, 98);
      });
    }, 300);
  };

  const handlePayNow = () => {
    // Validate depending on method
    if (paymentMethod === "card") {
      const rawNum = cardNumber.replace(/\s+/g, "");
      if (rawNum.length < 12 || !isValidLuhn(rawNum)) {
        Swal.fire({ icon: "error", title: "Invalid card number" });
        return;
      }
      if (!cardName.trim()) {
        Swal.fire({ icon: "error", title: "Cardholder name required" });
        return;
      }
      if (!isValidExpiry(expiry)) {
        Swal.fire({ icon: "error", title: "Invalid expiry date" });
        return;
      }
      if (!isValidCvv(cvv)) {
        Swal.fire({ icon: "error", title: "Invalid CVV" });
        return;
      }

      // simulate processing
      startProcessing(() => {
        setShowPayment(false);
        const receipt = {
          id: "DEMO-" + Date.now(),
          method: "Card",
          amount: `₹${totalPrice}.00`,
        };
        Swal.fire({
          icon: "success",
          title: "Payment Successful",
          html: `<p>Payment ID: <b>${receipt.id}</b></p><p>Method: <b>${receipt.method}</b></p><p>Amount: <b>${receipt.amount}</b></p>`,
          confirmButtonColor: "#ff6a00",
        });
        setTimeout(() => setShowPopup(true), 1400);
      });
    } else if (paymentMethod === "upi") {
      if (!upiId.trim() || !/@/.test(upiId)) {
        Swal.fire({ icon: "error", title: "Enter a valid UPI ID (e.g. demo@upi)" });
        return;
      }
      startProcessing(() => {
        setShowPayment(false);
        const receipt = {
          id: "DEMO-UPI-" + Date.now(),
          method: "UPI",
          amount: `₹${totalPrice}.00`,
        };
        Swal.fire({
          icon: "success",
          title: "UPI Payment Successful",
          html: `<p>Payment ID: <b>${receipt.id}</b></p><p>UPI: <b>${upiId}</b></p><p>Amount: <b>${receipt.amount}</b></p>`,
          confirmButtonColor: "#ff6a00",
        });
        setTimeout(() => setShowPopup(true), 1400);
      });
    } else {
      // netbanking
      if (!netBank.trim()) {
        Swal.fire({ icon: "error", title: "Select or enter a bank" });
        return;
      }
      startProcessing(() => {
        setShowPayment(false);
        const receipt = {
          id: "DEMO-NB-" + Date.now(),
          method: "NetBanking",
          amount: `₹${total}.00`,
        };
        Swal.fire({
          icon: "success",
          title: "NetBanking Successful",
          html: `<p>Payment ID: <b>${receipt.id}</b></p><p>Bank: <b>${netBank}</b></p><p>Amount: <b>${receipt.amount}</b></p>`,
          confirmButtonColor: "#ff6a00",
        });
         localStorage.setItem("formData", JSON.stringify(formData));
         localStorage.setItem("totalprice",total)
        setTimeout(() => setShowPopup(true), 1400);
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !text.trim() || rating === 0) {
      Swal.fire({
        icon: "warning",
        title: "Please fill all fields!",
        text: "Name, feedback, and rating are required.",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Thank you for your feedback!",
      confirmButtonColor: "#ff6a00",
    }).then(() => {
      setName("");
      setText("");
      setRating(0);
      setShowPopup(false);
      navigate("/order");
    });
  };

  // load cart
 const [x, setx] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const clickedName = localStorage.getItem("productname"); // get from localStorage
      if (!clickedName) return;

      const product = item.find((p) => p.productName === clickedName);
      setx(product);
    };
    fetchData();
  }, []);
  if (!x) {
  return <div>Loading product Please wait...</div>;
}

  const totalprice = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalPrice = totalprice + 60;
  let a = parseFloat(x.discountPrice.replace(/[^0-9.]/g, '')); 
  let total = a+61;

  // Format card number with spaces
  const formatCard = (v) =>
    v
      .replace(/\D/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();

  return (
    <div className="checkout-container">
      <div className="checkout-wrapper">
        {/* Shipping Section */}
        <div className="shipping-section">
          <div className="cart-step">
            <div className="step active">
              <span className="step-number">1</span>
              <p className="step-label">Cart</p>
            </div>
            <div className="step-line"></div>
            <div className="step active">
              <span className="step-number">2</span>
              <p className="step-label">Shipping</p>
            </div>
            <div className="step-line"></div>
            <div className="step">
              <span className="step-number">3</span>
              <p className="step-label">Payment</p>
            </div>
          </div>

         <div className="shipping-container">
      <h2>Shipping Address</h2>

      <label className="auto-fill-label">
        <input style={{marginTop:"15px",marginBottom:"10px"}} type="checkbox" checked={autoFill} onChange={handleAutoFill} />{" "}
        Auto-fill
      </label>

      <form className="shipping-form">
        <div className="form-row">
          <div className="form-group">
            <label>First Name*</label>
            <input
              type="text"
              name="firstName"
              placeholder="Diyansh"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name*</label>
            <input
              type="text"
              name="lastName"
              placeholder="Agarwal"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Email*</label>
          <input
            type="email"
            name="email"
            placeholder="diyansh@webyarshh.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Phone number*</label>
          <div className="phone-input">
            <select>
              <option>IND +91</option>
            </select>
            <input
              type="text"
              name="phone"
              placeholder="8775866443"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>State*</label>
            <input
              type="text"
              name="state"
              placeholder="Karnataka"
              value={formData.state}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>City*</label>
            <input
              type="text"
              name="city"
              placeholder="Bangalore"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Zip Code*</label>
            <input
              type="text"
              name="zip"
              placeholder="560021"
              value={formData.zip}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
        </div>

        {/* Right Section - Cart */}
   <div className="cart-section">
     <h2 className="cart-title">Your Product</h2>
      <div className="cart-item-div"> <img src={x.img} alt="item" />
       <span className="product-quantity">1</span> <div className="cart-item-div-info">
         <p className="item-title">{x.specifications.Category}</p> <p className="item-subtitle">{x.specifications['Net Content']} </p> 
         </div> <span className="item-price">{x.discountPrice}</span> </div> 
          <div className="summary"> <div className="summary-row"> <span>Subtotal</span> <span>{x.discountPrice}</span> </div> 
          <div className="summary-row"> <span>Shipping</span> <span>₹61.00</span> </div> 
          <div className="summary-row"> <span>Estimated taxes</span> <span>₹0.00</span> </div>
           <div className="summary-total"> <span>Total</span> <span>₹{total}.00</span> </div>
            </div> {/* 👇 Updated button handler */} 
            <button className="continue-btn" onClick={handleContinue}> Continue to Payment </button> </div>

      </div>

      {/* Payment Modal */}
      {showPayment && (
        <div className="popup-overlay" onClick={() => !processing && setShowPayment(false)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()} style={{ width: 480 }}>
            <span
              className="close-popup"
              onClick={() => !processing && setShowPayment(false)}
              style={{ cursor: processing ? "not-allowed" : "pointer" }}
            >
              ×
            </span>

            <h3 style={{ marginTop: 4 }}>Demo Payment Gateway</h3>
            <p style={{ marginTop: 0 }}>Amount: <strong>₹{totalPrice}.00</strong></p>

            <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
              <button
                className={`method-btn ${paymentMethod === "card" ? "active" : ""}`}
                onClick={() => !processing && setPaymentMethod("card")}
              >
                Card
              </button>
              <button
                className={`method-btn ${paymentMethod === "upi" ? "active" : ""}`}
                onClick={() => !processing && setPaymentMethod("upi")}
              >
                UPI
              </button>
              <button
                className={`method-btn ${paymentMethod === "netbanking" ? "active" : ""}`}
                onClick={() => !processing && setPaymentMethod("netbanking")}
              >
                NetBanking
              </button>
            </div>

            <div style={{ marginTop: 12 }}>
              {paymentMethod === "card" && (
                <div className="card-form">
                  <label>Card Number</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="4242 4242 4242 4242"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCard(e.target.value))}
                    disabled={processing}
                    maxLength={23}
                  />

                  <div style={{ display: "flex", gap: 8 }}>
                    <div style={{ flex: 1 }}>
                      <label>Expiry (MM/YY)</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        disabled={processing}
                        maxLength={7}
                      />
                    </div>
                    <div style={{ width: 110 }}>
                      <label>CVV</label>
                      <input
                        type="password"
                        placeholder="123"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        disabled={processing}
                        maxLength={4}
                      />
                    </div>
                  </div>

                  <label style={{ marginTop: 8 }}>Name on Card</label>
                  <input
                    type="text"
                    placeholder="Diyansh Agarwal"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    disabled={processing}
                  />
                </div>
              )}

              {paymentMethod === "upi" && (
                <div style={{ marginTop: 6 }}>
                  <label>UPI ID</label>
                  <input
                    type="text"
                    placeholder="demo@upi"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    disabled={processing}
                  />
                  <p style={{ margin: "6px 0 0", fontSize: 13, color: "#666" }}>
                    Enter a UPI ID (demo@upi). This is a simulated flow.
                  </p>
                </div>
              )}

              {paymentMethod === "netbanking" && (
                <div style={{ marginTop: 6 }}>
                  <label>Choose Bank</label>
                  <select value={netBank} onChange={(e) => setNetBank(e.target.value)} disabled={processing}>
                    <option value="">-- Select Bank --</option>
                    <option>State Bank of Demo</option>
                    <option>Demo National Bank</option>
                    <option>Demo City Bank</option>
                    <option>Other Bank</option>
                  </select>
                </div>
              )}
            </div>

            {/* progress bar */}
            {processing && (
              <div style={{ marginTop: 12 }}>
                <div style={{ height: 8, background: "#eee", borderRadius: 6, overflow: "hidden" }}>
                  <div
                    style={{
                      width: `${progress}%`,
                      height: "100%",
                      background: "#ff6a00",
                      transition: "width 300ms linear",
                    }}
                  />
                </div>
                <p style={{ marginTop: 8, fontSize: 13, color: "#444" }}>Processing payment — please wait</p>
              </div>
            )}

            <div style={{ marginTop: 14, display: "flex", gap: 10, justifyContent: "flex-end" }}>
              <button
                onClick={() => !processing && setShowPayment(false)}
                style={{
                  padding: "8px 12px",
                  borderRadius: 6,
                  border: "1px solid #ccc",
                  background: "#fff",
                  cursor: processing ? "not-allowed" : "pointer",
                }}
                disabled={processing}
              >
                Cancel
              </button>

              <button
                onClick={handlePayNow}
                style={{
                  padding: "8px 14px",
                  borderRadius: 6,
                  border: "none",
                  background: "#ff6a00",
                  color: "#fff",
                  cursor: processing ? "not-allowed" : "pointer",
                }}
                disabled={processing}
              >
                {processing ? "Processing..." : `Pay ₹${total}.00`}
              </button>
            </div>

            <small style={{ display: "block", marginTop: 12, color: "#666" }}>
              Demo gateway — no real transaction. Use test card like <code>4242 4242 4242 4242</code> for demo.
            </small>
          </div>
        </div>
      )}

      {/* Review Popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <span className="close-popup"onClick={() => {
    if (!processing) {
      setShowPopup(false);   // close popup
      navigate("/order");      // ✅ redirect to another page
    }
  }}>
              ×
            </span>
            <h3>Give Your Feedback</h3>

            <form onSubmit={handleSubmit}>
              <div className="popup-field">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="popup-field">
                <label>Your Rating</label>
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${star <= (hover || rating) ? "active" : ""}`}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(0)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <div className="popup-field">
                <label>Your Review</label>
                <textarea
                  placeholder="Write your feedback..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>

              <div className="popup-btn">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
