import "./Headphone.css";
import item from "./Item-data.json"
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  faShieldAlt,
  faUndo,
  faTruckFast,
  faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";





const AboutSection = () => {
  const [showSearch, setShowSearch] = useState(false);
 const [cartCount, setCartCount] = useState(0);
   const [showMessage, setShowMessage] = useState(false);
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
        if (!showSearch) return;

        const interval = setInterval(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 2500); // change every 2.5 seconds

        return () => clearInterval(interval);
      }, [showSearch]);

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
;
const addtocart = () => {
  
  const stored = JSON.parse(localStorage.getItem("cartItems") || "[]");

  
  const existingItem = stored.find(item => item.productName === x.productName);

  if (existingItem) {
   
    existingItem.quantity += 1;
  } else {
   
    stored.push({ productName: x.productName, price: x.price || 0, quantity: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(stored));
  setShowMessage(true);
  setTimeout(() => setShowMessage(false), 5000);
  const totalCount = stored.length;
  setCartCount(totalCount);
};


    const products = [
     {
      id: 1,
      title: "PHIOX SonicBoom 100",
      newPrice: "₹3,299",
      oldPrice: "₹5,499",
      discount: "40% OFF",
      playback: "24 Hrs Playback",
      rating: "⭐ 4.6",
      tag: "EXTRA ₹230 OFF",
      features: ["25W RMS", "Dual Bass Radiators", "IPX6 Resistance"],
       img: "/imges/speaker.jpeg",
    
    },
    {
      id: 2,
      title: "PHIOX Airdrops Neo",
      newPrice: "₹2,599",
      oldPrice: "₹6,499",
      discount: "60% OFF",
      playback: "80 Hrs Playback",
      rating: "⭐ 4.8",
      tag: "EXTRA ₹320 OFF",
      features: ["Hybrid ANC", "Wireless Charging", "Bass Boost"],
      img: "/imges/earbuds.webp",
    },
    {
      id: 3,
      title: "PHIOX Wired Pro ZX",
      newPrice: "₹1,499",
      oldPrice: "₹2,299",
      discount: "35% OFF",
      playback: "Wired Audio",
      rating: "⭐ 4.4",
      tag: "EXTRA ₹250 OFF",
      features: ["50mm Drivers", "Memory Cushions", "Gold-Plated Jack"],
      img: "/imges/wired.jpeg",
    },
    {
      id: 4,
      title: "PHIOX Watch Nova 5",
      newPrice: "₹2,699",
      oldPrice: "₹4,499",
      discount: "40% OFF",
      playback: "14 Days Battery",
      rating: "⭐ 4.7",
      tag: "EXTRA ₹140 OFF",
      features: ["AMOLED Display", "BT Calling", "ECG + SpO2 Sensors"],
      img: "/imges/watch.jpeg",
    
    },
    {
      id: 5,
      title: "PHIOX BassMaster X",
      newPrice: "₹1,999",
      oldPrice: "₹3,299",
      discount: "39% OFF",
      playback: "60 Hrs Playback",
      rating: "⭐ 4.6",
      tag: "EXTRA ₹100 OFF",
      features: ["Dual EQ", "Foldable Design", "Soft Ear Cushions"],
      img: "/imges/headphonee.jpg",
    }
    ];


    function addtocartitem(pn) {
  const stored = JSON.parse(localStorage.getItem("cartItems") || "[]");

  const existingItem = stored.find(item => item.productName === pn);

  if (existingItem) {
    
    console.log(`${pn} is already in cart`);
    return;
  }
  const updatedCart = [...stored, { productName: pn, qty: 1 }];
  localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  setShowMessage(true);
  setTimeout(() => setShowMessage(false), 3000);
  const totalCount = updatedCart.reduce((acc, item) => acc + item.qty, 0);
  setCartCount(totalCount);
}

function handlebill() {
 
  localStorage.setItem("cartItemsForBilling", JSON.stringify(JSON.parse(localStorage.getItem("cartItems") || "[]")));
  navigate("/billingpage");
}


function handlenav(pn){
  localStorage.setItem("productname", pn)
   window.location.href = "/secondpage";
}
  return (
    <section className="about-section">
      <div className="about-container">

        <div className="about-header">
          <h2>About Us</h2>
          <p>
            We are a fast-growing e-commerce brand committed to bringing you the latest and most reliable tech products — from immersive headphones and powerful speakers to modern smartwatches and everyday wearable accessories. Our mission is simple: to make premium technology accessible, affordable, and enjoyable for everyone.

We carefully select every product to ensure the perfect balance of durability, performance, and value. Whether you're searching for deep bass headphones, long-lasting earbuds, stylish watches, or portable speakers for your next trip, we’ve got something for every lifestyle.

Customer satisfaction is at the heart of our business. From smooth ordering to fast delivery and dedicated support, we ensure your shopping experience is as seamless as possible. Thank you for choosing us — we’re here to help you enjoy technology in a smarter way.
          </p>
        </div>

      </div>

      <div className="recommended-section">
  <h2 className="section-title">
    Recommended <span>products</span>
  </h2>

  <div className="product-container">
    {products.map((product) => (
   
      <div key={product.id} className="product-card">
        <div className="product-image" onClick={() => handlenav(product.title)}>
          <img src={product.img} alt={product.title}  />
          
          <div className="playback-rating">
            <span className="playback">{product.playback}</span>
            <span className="rating">{product.rating}</span>
          </div>
          <div className="product-tag">{product.tag}</div>
        </div>

        <div className="product-info">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">
            <span className="new-price">{product.newPrice}</span>
            <span className="old-price">{product.oldPrice}</span>
            <span className="discount">{product.discount}</span>
          </p>
          <div className="features">
            {product.features.map((feature, index) => (
              <span key={index} className="feature">
                {feature}
              </span>
            ))}
          </div>
         <button className="add-btn" onClick={() => addtocartitem(product.title)}>
  Add To Cart
</button>

        </div>
      </div>
  
    ))}
  </div>
</div>
    </section>
  );
};

export default AboutSection;
