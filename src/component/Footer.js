import React from "react";
import "./E-com.css"; // Import the CSS file
import ins from './instagram.png'
import what from './whatsapp.png'
import face from './facebook.png'
import twit from './twitter.png'
import linkd from './linkdin.png'
import { Link } from "react-router-dom";
import logo from './logo-1.png'

const Footer = () => {
  return (
    <footer className="footer">
      {/* Wave Effect */}
      <div className="wave"></div>

      {/* Footer Content */}
      <div className="footer-container">
        {/* SHOP Section */}
         <div className="subscribe-box">
             <img alt='logo' className='logo-img' src={logo} style={{objectFit:"fill"}}/>
          </div>
        <div className="footer-column">
          <h3>Categories</h3>
          <p>Smartwatch</p>
          <p>Headphone</p>
          <p>Home theater</p>
          <p>Speakers</p>
        </div>

        {/* HELP Section */}
        <div className="footer-column">
          <h3>HELP</h3>
          <p>Contact Us</p>
          <p>Asked Questions</p>
          <p>Accessibility</p>
        </div>

        {/* ABOUT Section */}
        <div className="footer-column">
          <h3>ABOUT</h3>
          <p>Wholesale</p>
          <p>Media & Press</p>
          <p>Vision & Scope</p>
        </div>

        {/* Subscribe Section */}
        <div className="footer-column subscribe">
          <h3>Sign up to get 10% off your first order.</h3>
          {/* Social Media Icons */}
          <div className="social-icons">
            <img src={ins} alt="Instagram" />
            <img  src={face} alt="Facebook" />
            <img  src={twit} alt="Twitter" />
            <img  src={linkd} alt="LinkedIn" />
          </div>
        </div>
         
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Olipop, Inc. All Rights Reserved</p>
        <p>Terms of Service | Privacy Policy | Do Not Sell My Information</p>
      </div>
    </footer>
  );
};

export default Footer;
