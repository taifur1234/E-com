import React, { useState } from 'react';
import './contact.css';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  Swal.fire({
    icon: "info",
    title: "your message is Sending ...",
    text: "Please wait while we process your request.",
    iconColor: "#ff6a00",
     color: "#fff",
   background: "#111",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    
  });

  
  setTimeout(() => {
    Swal.fire({
      icon: "success",
      title: "Your message is successfully sent!",
      text: "Thank you for contacting us. We'll reply soon ",
      iconColor: "#28a745", 
      confirmButtonText: "OK",
      confirmButtonColor: "#4CAF50", 
     background: "#111",
      color: "#fff",
    });
  }, 1500);
  setFormData({email: '' , name: '' ,message:''})
 
};

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Have questions? Send us a message!</p>
      </div>

      <div className="contact-content">
        {/* Form Section */}
        <div className="contact-form-section">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>

       
        <div className="contact-info-section">
          <h2>Contact Info</h2>
          <div className="info-item">
            <i className="fa-solid fa-phone"></i>
            <div>
              <p>Phone</p>
              <span>+93454-29434</span>
            </div>
          </div>
          <div className="info-item">
            <i className="fa-regular fa-envelope"></i>
            <div>
              <p>Email</p>
              <span>example@gmail.com</span>
            </div>
          </div>
          <div className="info-item">
            <i className="fa-brands fa-whatsapp"></i>
            <div>
              <p>WhatsApp</p>
              <span>+001-002-003</span>
            </div>
          </div>
          <div className="info-item">
            <i className="fa-solid fa-location-dot"></i>
            <div>
              <p>Office</p>
              <span>231 Road, Khargone (M.P.)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
