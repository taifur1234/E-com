import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./Add-to-cart.css";
import itemData from "./Item-data.json"; // your JSON
import logo from './logo.jpg';
import c_earbuds from './category-earbuds.png'
import c_neckband from './category-neckband.png'
import c_wire_earphone from './h1.png'
import c_headphone from './head-3.png'
import c_s_watch from './w-1.png'
import c_r_watch from './w-4.png'
import c_b_watch from './c-handband.png'
import c_c_watch from './c-chain.png'

const Cart = ({ updateCart }) => {
 const [items, setItems] = useState([]);
const [discount, setDiscount] = useState(0);
 const [cartCount, setCartCount] = useState(0);
 const [showMessage, setShowMessage] = useState(false);

 useEffect(() => {
  // Get the cart from localStorage
  const storedCart = JSON.parse(localStorage.getItem("cartItems") || "[]");

  // Update cart count (sum of quantities)
const totalCount = storedCart.length;
setCartCount(totalCount);


  const handleStorageChange = () => {
    const updatedCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const total = updatedCart.length; // number of items in array

    setCartCount(total);
  };

  window.addEventListener("storage", handleStorageChange);
  return () => window.removeEventListener("storage", handleStorageChange);
}, []);

useEffect(() => {
  const storedCart = JSON.parse(localStorage.getItem("cartItems") || "[]");

  // Map the cart items with quantity and price calculations
  const cartItems = storedCart.map((cartItem) => {
    const product = itemData.find(p => p.productName === cartItem.productName);
    if (!product) return null;

    const oldPriceNum = Number(product.oldPrice.replace(/[^\d.-]/g, ""));
    const discountPriceNum = Number(product.discountPrice.replace(/[^\d.-]/g, ""));
    const discountValue = oldPriceNum - discountPriceNum;

    return {
      ...product,
      qty: cartItem.qty || 1, // ✅ FIXED here
      x: discountValue,
    };
  }).filter(Boolean); // remove nulls

  setItems(cartItems);
}, []);



// ✅ Recalculate total discount whenever items change
useEffect(() => {
  const totalDiscount = items.reduce((acc, item) => acc + item.x * item.qty, 0);
  setDiscount(totalDiscount);
}, [items]);


  const subtotal = items.reduce((acc, item) => acc + parseFloat(item.oldPrice.replace(/[^0-9.]/g, '')) * item.qty, 0);
  const total = subtotal - discount;

const updateQty = (productName, change) => {
  setItems((prev) => {
    const updated = prev.map((item) =>
      item.productName === productName
        ? { ...item, qty: Math.max(1, item.qty + change) } // ✅ prevents qty < 1
        : item
    );

    // ✅ Save only needed fields to localStorage
    const localData = updated.map((item) => ({
      productName: item.productName,
      qty: item.qty,
    }));

    localStorage.setItem("cartItems", JSON.stringify(localData));
   
    return updated;
  });
};



const removeFromCart = (productName) => {
  const updatedItems = items.filter(item => item.productName !== productName);

  // Update state
  setItems(updatedItems);

  // Save updated items to localStorage
  const localData = updatedItems.map(item => ({
    productName: item.productName,
    qty: item.qty
  }));
  localStorage.setItem("cartItems", JSON.stringify(localData));

  // Update navbar cart count
  updateCart();   // <-- REPLACED setCartCount()

  // Show message
  setShowMessage(true);
  setTimeout(() => setShowMessage(false), 5000);
};



const [showSearch, setShowSearch] = useState(false);

      let a = "Earbuds";
      let b = "Headphones";
      let c = "Smartwatches";
      let d = "Speakers";
      const words = [
        `Search for "${a}"`,
        `Search for "${b}"`,
        `Search for "${c}"`,
        `Search for "${d}"`,
      ];

      const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
        if (!showSearch) return;

        const interval = setInterval(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 2500); // change every 2.5 seconds

        return () => clearInterval(interval);
      }, [showSearch]);

  return (
    <div>
    
      <div className="cart-box">
      
          
        <div className="cart-header">
          <h1>Cart</h1>
            <div className="cart-step" id="cart-steps">
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
        </div>
{items.length === 0 ? (
        <h2 style={{ textAlign: "center", marginTop: "250px" }}>
          There is no item in your cart. Please add items!
        </h2>
      ) : (
        <div className="cart-grid">
          {/* Items */}
          <div className="cart-items">
            {items.map((item) => (
             
              <div className="cart-item" key={item.id}>
                  <Link to="/secondpage" onClick={() => localStorage.setItem("productname", item.productName)}>
                <div className="item-info">
                  <img src={item.img} alt={item.productName} />
                   
                  <div className="item-details">
                    <h2>{item.productName}</h2>
                    <p>{item.oneLineSpec}</p>
                    <div className="item-price">
                      <h3>{item.discountPrice}</h3>
                      <small>{item.oldPrice}</small>
                      <span>{item.discount}</span>
                    </div>
                  </div>
                </div>
                 </Link>
                <div className="qty-controls">
                  <div className="qty-controls-div"> 
                    <button onClick={() => updateQty(item.productName, -1)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.productName, 1)}>+</button>
                  </div>
                  <div className="dustbin" onClick={() => removeFromCart(item.productName)}>
                    <i className="fa-solid fa-trash-can"></i>
                  </div>
                </div>
              </div>
           
            ))}
          </div>

          {/* Summary */}
          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-details">
              <div>
                <span>Sub Total</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div>
                <span>Discount</span>
                <span>-₹{discount.toFixed(2)}</span>
              </div>
              <hr />
              <div className="total-line">
                <b>Total</b>
                <b>₹{total.toFixed(2)}</b>
              </div>
            </div>
            <Link to="/shippingpage">
            
            <button className="checkout-btn">Proceed to Checkout</button></Link>
          </div>
        </div>
           )}
      </div>
    </div>
  );
};

export default Cart;
