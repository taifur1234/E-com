import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './E-com.css'
import main from './main.png'
import botIcon from './chatbott.png'  
import Swal from 'sweetalert2'
// Add your bot icon image

export default function Main() {
    const [showSearch, setShowSearch] = useState(false);
        const [isRegister, setIsRegister] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showPopup, setShowPopup] = useState(false); 
    const [hasShown, setHasShown] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
const [categoryOpen, setCategoryOpen] = useState(false);
const [order ,setorder] = useState(false);
const [LoggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const storedNames = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCartCount(storedNames.length);
    const handleStorageChange = () => {
      const updated = JSON.parse(localStorage.getItem("cartItems") || "[]");
      setCartCount(updated.length);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

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
      background: "#111",
      color: "#fff",
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

     useEffect(() => {
    if (!hasShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        setHasShown(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
 },[hasShown]);


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

 useEffect(() => {
  const handleBeforeUnload = () => {
    localStorage.removeItem("formData");
  };
  window.addEventListener("beforeunload", handleBeforeUnload);
  return () => {
    window.removeEventListener("beforeunload", handleBeforeUnload);
  };
}, []);


  return (
    <div className='main-page-container'>
   

   



      {/* main */}
      <div className='main-div'>
        <div className='main-text'>
          <p id='p-1'>Beast Solo</p>
          <p id='p-2'>Wireless</p>
          <p id='p-3'>Headphone</p>
          <button id='m-b'>Shop By Categery</button>
        </div>
        <div className='m-img'>
          <div className='m-img2'>
            <img src={main}  alt=''/>
          </div>
        </div>
      </div>

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
