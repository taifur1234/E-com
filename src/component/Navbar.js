import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './E-com.css'
import main from './main.png'
import c_earbuds from './category-earbuds.png'
import c_neckband from './category-neckband.png'
import c_wire_earphone from './h1.png'
import c_headphone from './head-3.png'
import c_s_watch from './w-1.png'
import c_r_watch from './w-4.png'
import c_b_watch from './spekarn-removebg-preview.png'
import c_c_watch from './homet-removebg-preview.png'
import logo from './logo-1.png'
import botIcon from './chatbott.png'  
import Swal from 'sweetalert2'
import { motion } from "framer-motion";
// Add your bot icon image

export default function Main({ cartCount }) {
    const [showSearch, setShowSearch] = useState(false);
        const [isRegister, setIsRegister] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showPopup, setShowPopup] = useState(false); 
    const [hasShown, setHasShown] = useState(false);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
const [categoryOpen, setCategoryOpen] = useState(false);
const [LoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();


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
  const leftNav = document.querySelector(".left-nav");
  const a = document.querySelector("#add-to-cart");
  const b = document.querySelector(".login");
  const c = document.querySelector(".cart-count");

  if (showSearch) {
    // Jab search active ho, to left-nav hide ho
    if (leftNav) leftNav.style.display = "none";
    if (a) a.style.display = "none";
    if (b) b.style.display = "none";
    if(c) c.style.display = "none";
    
  } else {
    // Jab search close ho, to left-nav wapas show ho
    if (leftNav) leftNav.style.display = "flex";
     if (a) a.style.display = "block";
      if (b) b.style.display = "block";
       if(c) c.style.display = "block";
  }

  const interval = setInterval(() => {
    setWordIndex((prev) => (prev + 1) % words.length);
  }, 2500);

  return () => clearInterval(interval);
  }, [showSearch]);

      useEffect(() => {
        if (!showSearch) return;

        const interval = setInterval(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 2500); // change every 2.5 seconds

        return () => clearInterval(interval);
      }, [showSearch]);

      // ChatBot state
  const [chatOpen, setChatOpen] = useState(false);
const [chatMessages, setChatMessages] = useState([
  { sender: "bot", text: "Hi! Tap a question below to see the answer." },
]);
const isMobilee = window.innerWidth < 768;
const faq = [
  { question: "1. What are your shipping options?", answer: "We offer standard and express shipping across India." },
  { question: "2. What is your return policy?", answer: "You can return products within 15 days of delivery." },
  { question: "3. Do you provide warranty?", answer: "Yes! Most products come with a 6-12 month warranty." },
  { question: "4. How can I track my order?", answer: "You can track your order from your account under 'My Orders'." },
  { question: "5. Do you offer discounts?", answer: "Yes! We offer seasonal discounts and coupons." },
  { question: "6. How can I contact support?", answer: "You can reach out to our support team via the chat or email." },
   { question: "7. What payment methods are accepted?", answer: "We accept Credit/Debit cards, UPI, and popular e-wallets." },
  { question: "8. Can I cancel my order?", answer: "Yes! Orders can be cancelled within 2 hours of placing them." },
  { question: "9. Do you ship internationally?", answer: "Currently we only ship within India." },
  { question: "10. How can I get product recommendations?", answer: "Check our 'Shop by Category' section or contact support for suggestions." },
];

const messagesEndRef = useRef(null);

const handleFaqClick = (question, answer) => {
 
  setChatMessages([
    { sender: "user", text: question }, 
    { sender: "bot", text: answer }      
  ]);
};



const handleRefreshChat = () => {
  setChatMessages([{ sender: "bot", text: "Hi! Tap a question below to see the answer." }]);
};

useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [chatMessages]);


useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

      
  const showAlert = (title, text, emoji) => {
    Swal.fire({
      title: `${emoji} ${title}`,
      text,
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#4CAF50",
    }).then(() => setShowPopup(false)); 
  };

const handleSubmit = (e) => {
  e.preventDefault();

  if (isRegister) {
    showAlert("Registered Successfully!", "Your account has been created 🎉", "🎊");
  } else {
    showAlert("Login Successful!", "Welcome back, explorer! 🌍", "🚀");
  }

  setLoggedIn(true);   
  setShowPopup(false);    
};


 const suggestions = [
    "Airbuds",
    "Neckband",
    "Wired Headphone",
    "Gaming Headphone",
    "Smartwatch",
    "Round Smartwatch",
    "Speaker",
    "HomeTheater",
  ];

 const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setFiltered([]);
    } else {
      const matches = suggestions.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(matches);
    }
  };

  const handleSelect = (option) => {
    setQuery(option);
    setFiltered([]);
  };
   const handleSearch = () => {
  const trimmedQuery = query.trim();
  if (trimmedQuery === "") return;
  const found = suggestions.some(
    (item) => item.toLowerCase() === trimmedQuery.toLowerCase()
  );

  if (found) {
    localStorage.setItem("citem", trimmedQuery);
    console.log("Saved:", trimmedQuery);
    navigate("/buds");
  } else {
    alert("Please Search The Recmonded Product");
  }
};


  return (
    <div className='main-page-container'>
    <div>
  {showPopup && (
  <div
    className="login-overlay"
    onClick={() => setShowPopup(false)} 
  >
    <div
      className="login-container"
      style={{
        flexDirection: isMobile ? "column" : "row",
      }}
      onClick={(e) => e.stopPropagation()} 
    >
      <div className="left-side">
        <h1 className="logo">PHIOX</h1>
      </div>

      <div className="right-side">
        <button
          className="close-btn-login"
          onClick={() => setShowPopup(false)} 
        >
          <i className="fa-solid fa-circle-xmark"></i>
        </button>

        <div className="login-box">
          <h2>{isRegister ? "REGISTER" : "SIGN IN"}</h2>
          <p>
            {isRegister
              ? "Please fill the details below to create an account."
              : "Please enter your username and password"}
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              className="input-field-1"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="input-field-2"
              required
            />
            {isRegister && (
              <input
                type="number"
                placeholder="Phone Number"
                className="input-field-2"
                required
              />
            )}

            {!isRegister ? (
              <>
                <button type="submit" className="btn">
                  SIGN IN
                </button>
                <button
                  type="button"
                  className="btn-2"
                  onClick={() => setIsRegister(true)}
                >
                  REGISTER
                </button>
              </>
            ) : (
              <>
                <button type="submit" className="btn">
                  REGISTER
                </button>
                <button
                  type="button"
                  className="btn-2"
                  onClick={() => setIsRegister(false)}
                >
                  SIGN IN
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  </div>
)}

</div>

   <div className='m-nav'>
 <div className='left-nav'>
  {/* Hamburger icon for mobile */}
  <motion.div
    className='hamburger-toggle'
    onClick={() => setMenuOpen(!menuOpen)}
   initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
  whileTap={{ scale: 0.8 }}  
  >
    {menuOpen ? (
      <i className='fa-solid fa-xmark'></i>
    ) : (
      <motion.i
       key={menuOpen ? "close" : "open"}   // important for animation
    className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
    initial={{ rotate: -90, opacity: 0 }}
    animate={{ rotate: 0, opacity: 1 }}
    exit={{ rotate: 90, opacity: 0 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
      ></motion.i>
    )}
  </motion.div>

  {/* Logo */}
  <div className='logo-div'>
    <img alt='logo' className='logo-img' src={logo} />
  </div>

  {/* Navigation Menu */}
  <motion.div className={`m-nav1 ${menuOpen ? "open" : ""}`}
  initial={isMobilee ? { x: "-100%", opacity: 0 } : {}}   // <-- no false
  animate={
    isMobilee
      ? { x: menuOpen ? 0 : "-100%", opacity: menuOpen ? 1 : 0 }
      : {}
  }
  transition={{
    type: "spring",
    stiffness: 70,  // smoother movement
    damping: 22,    // smoother stop
  }}
  >
    <Link to="/" onClick={()=>setMenuOpen(false)}> <p>Home</p></Link><br/>
   

    {/* Category Dropdown */}
    
    <div className='category-menu' id="myorder">
      <p
        className='category-title'
        onClick={() => setCategoryOpen(!categoryOpen)}
      >
        Categories
      </p>

      <div className={`dropdown ${categoryOpen ? "open" : "close"}`}
    
      >
        <div className='dropdown-grid'>

          <Link to="/buds" onClick={() => {localStorage.setItem("citem","Airbuds");setMenuOpen(false);setCategoryOpen(!categoryOpen);}}>
            <div className='dropdown-item'>
              <img src={c_earbuds} alt='Earbuds' />
              <p>True Wireless Earbuds</p>
            </div>
          </Link>

          <Link to="/buds" onClick={() => {localStorage.setItem("citem","Wired Headphones");setMenuOpen(false);setCategoryOpen(!categoryOpen);}}>
            <div className='dropdown-item'>
              <img src={c_wire_earphone} alt='Wired Earphones' />
              <p>Wired Earphones</p>
            </div>
          </Link>

          <Link to="/buds" onClick={() => {localStorage.setItem("citem","Neckbands");setMenuOpen(false);setCategoryOpen(!categoryOpen);}}>
            <div className='dropdown-item'>
              <img src={c_neckband} alt='Neckband' />
              <p>Neckbands</p>
            </div>
          </Link>

          <Link to="/buds" onClick={() =>{ localStorage.setItem("citem","Gaming Headphones");setMenuOpen(false);setCategoryOpen(!categoryOpen);}}>
            <div className='dropdown-item'>
              <img src={c_headphone} alt='Wireless Headphones' />
              <p>Wireless Headphones</p>
            </div>
          </Link>

          <Link to="/buds" onClick={() =>{ localStorage.setItem("citem","Smartwatches");setMenuOpen(false);setCategoryOpen(!categoryOpen);}}>
            <div className='dropdown-item'>
              <img src={c_s_watch} alt='Smartwatch' />
              <p>Square Smartwatch</p>
            </div>
          </Link>

          <Link to="/buds" onClick={() => {localStorage.setItem("citem","Round Smartwatches");setMenuOpen(false);setCategoryOpen(!categoryOpen);}}>
            <div className='dropdown-item'>
              <img src={c_r_watch} alt='Round Smartwatch' />
              <p>Round Smartwatch</p>
            </div>
          </Link>

          <Link to="/buds" onClick={() =>{ localStorage.setItem("citem","Speakers");setMenuOpen(false);setCategoryOpen(!categoryOpen);}}>
            <div className='dropdown-item'>
              <img src={c_b_watch} alt='Speaker' />
              <p>Speaker</p>
            </div>
          </Link>

          <Link to="/buds" onClick={() => {localStorage.setItem("citem","Home Theaters");setMenuOpen(false);setCategoryOpen(!categoryOpen);}}>
            <div className='dropdown-item'>
              <img src={c_c_watch} alt='Home Theater' />
              <p>Home Theater</p>
            </div>
          </Link>

        </div>
      </div>
    </div>


    <Link to="/order" onClick={()=>setMenuOpen(false)} ><p>My Order</p></Link> <br/>
    <Link to="/aboutt" onClick={()=>setMenuOpen(false)}><p>About us</p></Link> <br/>
    <Link to="/contactpage" onClick={()=>setMenuOpen(false)}><p>Contact us</p></Link>
  </motion.div>
</div>


    <div className="m-nav2">
      {showSearch && (
        <div className="search-wrapper" style={{ position: "relative" }}>
          <i className="fa-solid fa-magnifying-glass search-inside" onClick={handleSearch}></i>

          <input
            type="text"
            className="search-input"
            autoFocus
            value={query}
            onChange={handleChange}
          />

          {/* Animated placeholder — hidden when typing */}
          {query.length === 0 && (
            <span className="animated-placeholder">
              {(() => {
                const parts = words[wordIndex].split(" ");
                const lastWord = parts.pop();
                return (
                  <>
                    {parts.join(" ")}{" "}
                    <span style={{ fontWeight: 600, color: "#4e5358" }}>
                      {lastWord}
                    </span>
                  </>
                );
              })()}
            </span>
          )}

          {/* 🔽 Suggestions */}
          {filtered.length > 0 && (
            <ul
              className="suggestion-list"
              style={{
                position: "absolute",
                top: "40px",
                left: 0,
                width: "100%",
                background: "#fff",
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                borderRadius: "6px",
                listStyle: "none",
                padding: "5px 0",
                margin: 0,
                zIndex: 100,
              }}
            >
              {filtered.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(item)}
                  style={{
                    padding: "8px 12px",
                    cursor: "pointer",
                    fontSize: "15px",
                  }}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <p
        onClick={() => setShowSearch(!showSearch)}
        style={{ cursor: "pointer" }}
      >
        {showSearch ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-magnifying-glass"></i>
        )}
      </p>

      <p id="shopping">
        <Link to="/add-to-cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </p>

    <button
      onClick={() => {
        if (LoggedIn) {
    
          
          Swal.fire({
            title: "Are you sure?",
            text: "Do you really want to logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Logout",
            cancelButtonText: "Cancel",
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            showClass: {
              popup: `animate__animated animate__zoomIn`
            },
            hideClass: {
              popup: `animate__animated animate__zoomOut`
            }
          }).then((result) => {
            if (result.isConfirmed) {
           
              setLoggedIn(false);
              localStorage.removeItem("user");
    
             
              Swal.fire({
                title: "Logged Out!",
                text: "You have been successfully logged out.",
                icon: "success",
                timer: 1500,
                showConfirmButton: false
              });
            }
          });
    
        } else {
         
          setShowPopup(true);
        }
      }}
      className="sign-btn"
    >
      <i className="fa-regular fa-user" style={{ marginRight: "10px" }}></i>
      {LoggedIn ? "Log-out" : "Sign-In"}
    </button>
    </div>
</div>

      {/* main */}
    

    {/* --- ChatBot --- */}
      {!chatOpen && (
        <div className="chatbot-icon" onClick={() => setChatOpen(true)}>
          <img src={botIcon} alt="Chat Bot" />
        </div>
      )}

    {chatOpen && (
  <div className="chatbox">
    <div className="chatbox-header">
      <h4>Support</h4>
      <div className="chat-header-right">
        <div className="refresh-icon" onClick={handleRefreshChat} title="Refresh Chat">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="white" d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.25-.38 2.41-1.02 3.36l1.46 1.46C19.19 15.12 20 13.65 20 12c0-4.42-3.58-8-8-8zm-6.44 1.9L4.1 7.36C3.38 8.29 3 9.44 3 10.7c0 4.42 3.58 8 8 8v3l4-4-4-4v3c-3.31 0-6-2.69-6-6 0-1.25.38-2.41 1.02-3.36z"/>
          </svg>
        </div>
        <span className="close-btn-chat" onClick={() => setChatOpen(false)}>&times;</span>
      </div>
    </div>

   <div className="chatbox-messages">
  {chatMessages.map((msg, i) => (
    <div key={i} className={`message ${msg.sender === "bot" ? "bot" : "user"}`}>
      {msg.text}
    </div>
  ))}
  <div ref={messagesEndRef}></div>

 
  {chatMessages.length === 1 && chatMessages[0].text.includes("Hi!") && (
    faq.map((item, index) => (
      <div 
        key={index} 
        className="message bot question-bubble" 
        onClick={() => handleFaqClick(item.question, item.answer)}
      >
        {item.question}
      </div>
    ))
  )}
</div>

  </div>
)}

    </div>
  )
}
