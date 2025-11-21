import React, { useEffect, useState } from "react";
import "./order.css";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function OrderTracking() {
 

 
const pr = localStorage.getItem("totalprice")

console.log(pr);


const [x, setx] = useState(true);
const [data, setData] = useState(() => {
  return JSON.parse(localStorage.getItem("formData") || "[]");
});

useEffect(() => {
  if (data && Object.keys(data).length > 0) {
    setx(true);
  } else {
    setx(false);
  }
}, [data]);


console.log(x);


  const [order] = useState({
    id: "ORD20251017",
    name: data.firstName,
    address: `${data.zip},${data.city},${data.state}`,
    phone: data.phone,
    payment: "Online Payment",
    placedOn: "Oct 17, 2025",
    email:data.email,
    deliveryDays: 5,
    items: [
      { name: "Wireless Earbuds", qty: 1, price: 1999 },
      { name: "Smart Watch", qty: 1, price: 2999 },
    ],
  });
  

  const stages = ["Order Placed", "Packed", "Shipped", "Out for Delivery", "Delivered"];
  const [currentStage, setCurrentStage] = useState(0);
  const [deliveryDate, setDeliveryDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const delivery = new Date(today);
    delivery.setDate(today.getDate() + order.deliveryDays);
    setDeliveryDate(delivery.toDateString());
  }, [order]);

  // 🚚 Auto animation till "Shipped" stage (index 2)
  useEffect(() => {
    if (currentStage < 2) {
      const interval = setInterval(() => {
        setCurrentStage((prev) => (prev < 2 ? prev + 1 : prev));
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [currentStage]);




  return (
    <div className="order-track-container">
      { x ? (
      <div className="track-card">
        <CheckCircle className="success-icon" />
        <h2 className="success-title">Order Confirmed!</h2>
        <p className="greeting">
          Hey <strong>{order.name}</strong>, your order is on its way 
        </p>
        <p className="order-id">
          Order ID: <span>{order.id}</span>
        </p>

        {/* Progress Bar + Road */}
        <div className="progress-wrapper">
          <div className="progress-track">
            {/* Road */}
            <div className="road-line"></div>

            {/* Truck */}
            <div
              className="truck"
              style={{
                left: `${(currentStage / (stages.length - 1)) * 100}%`,
              }}
            >
              🚚
            </div>

            {/* Stages */}
            {stages.map((stage, index) => (
              <div key={index} className="stage">
                <div className={`dot ${index <= currentStage ? "active" : ""}`}>
                  {index <= currentStage && <CheckCircle size={14} className="tick" />}
                </div>
                <p>{stage}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="current-line">
          📦 Your order is currently <strong>{stages[currentStage]}</strong> and will be
          delivered by <strong>{deliveryDate}</strong>.
        </p>

        {/* Delivery Info */}
        <div className="details-box">
          <h3>Delivery Info</h3>
          <p><strong>Address:</strong> {order.address}.</p>
          <p><strong>Phone:</strong> {order.phone}.</p>
          <p><strong>Email:</strong> {order.email}.</p>
           <p><strong>Payment:</strong> Done.</p>
           <h4><strong>Total Amount:</strong> {pr}.00</h4>
        </div>
        <Link to="/">   <button className="s-btn" >Continue Shopping</button> </Link>
     
      </div>
      ) : (
  <p>Please order first.</p>
) }

    </div>
  );
}
