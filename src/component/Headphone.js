import React from 'react'
import "./Headphone.css";
import watch from "./watch.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import item from "./Item-data.json"
import logo from './logo.jpg';
import c_earbuds from './category-earbuds.png'
import c_neckband from './category-neckband.png'
import c_wire_earphone from './h1.png'
import c_headphone from './head-3.png'
import c_s_watch from './w-1.png'
import c_r_watch from './w-4.png'
import c_b_watch from './c-handband.png'
import c_c_watch from './c-chain.png'
import { Link ,useNavigate } from 'react-router-dom';
import { useEffect ,useState} from 'react';
import {
  faShieldAlt,
  faUndo,
  faTruckFast,
  faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";


const features = [
  {
    icon: faShieldAlt,
    title: "12+3 Months",
    subtitle: "Warranty",
  },
  {
    icon: faUndo,
    title: "7-day",
    subtitle: "Replacement",
  },
  {
    icon: faTruckFast,
    title: "Free Express",
    subtitle: "Delivery*",
  },
  {
  
    icon: faFileInvoice,
    title: "GST",
    subtitle: "Billing",
  },
];
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


const Headphone = ({ updateCart }) => {
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
    stored.push({
      productName: x.productName,
      price: x.price || 0,
      quantity: 1
    });
  }

  localStorage.setItem("cartItems", JSON.stringify(stored));

  setShowMessage(true);
  setTimeout(() => setShowMessage(false), 3000);

  // ⭐ Update Navbar instantly
  updateCart();
};


function addtocartitem(pn) {
  const stored = JSON.parse(localStorage.getItem("cartItems") || "[]");

  const existingItem = stored.find(item => item.productName === pn);

  if (existingItem) {
    console.log(`${pn} is already in cart`);
    return;
  }

  const updatedCart = [...stored, { productName: pn, qty: 1 }];

  localStorage.setItem("cartItems", JSON.stringify(updatedCart));

  // Show message popup
  setShowMessage(true);
  setTimeout(() => setShowMessage(false), 3000);

  // VERY IMPORTANT: Update navbar count
  updateCart();  // <-- This replaces setCartCount()
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
    <div className='main-headphone-div'>
     
          
       
        <header className='header-section'>
       <div className='header-img-div'>
              <div>
                <img src={x.img} alt="watch"/>
              </div>
            </div>

             <div className='header-rigth-div'>
              <div>
                  <h2>{x.productName}</h2>
                
                <p className='desc'>{x.oneLineSpec} </p>

              </div>
                <div className='price'>

                    <div className='price-div'>                    <p className='price-1'>{x.discountPrice} </p> <p className='price-2'>{x.oldPrice}</p> <p className='price-3'>{x.discount}</p> </div>
                   <p className='price-4'>MRP(inclusive of all texes)</p>
                </div>
                
                <div>  
                    <h4 className='check'>Check delivery</h4>
                <div className='pincode'>
                     <div className='pincode-div'> 
                       <div className='pincode-input-div'>
                          <input type='number' />  
                     <button>Check</button>  
                       </div>
                       <span className='free'>Free delivery</span> <span>| By Friday, 10 Oct</span>
                    </div> 
                    <i class="fa-solid fa-truck"></i>
                </div>
               </div>
             
               <div className='active-offers'>
               <h3 className='check'>Active Offers</h3>
                <div className='active-offers-div'>
                 <div className='AO-box'>
                    <div> <p>MOST POPULAR</p></div>
                     <div>   <h3> Buy 2 or <br/> more</h3></div>
                        <h4>Get 6% off</h4>
                        <p>Code:BOAT6</p>
                 </div>
                
                    <div className='AO-box'>
                    <div  id='black-div'> <p>MOST POPULAR</p></div>
                     <div>   <h3> Buy 5 or <br/> more</h3></div>
                        <h4>Get 8% off</h4>
                        <p>Code:BOAT8</p>
                 </div>

                     <div className='AO-box'>
                    <div id='black-div'> <p>MOST POPULAR</p></div>
                     <div>   <h3> Buy 10 or <br/> more</h3></div>
                        <h4>Get 10% off</h4>
                        <p>Code:BOAT10</p>
                 </div>

                </div>
               </div>
              
             <div className='header-button'>
              <button onClick={addtocart}>Add To Cart</button>
             
                <button onClick={handlebill}>Buy Now</button>
               
              
             </div>
 
             </div>
        </header>
    
       <div className="features-container">
      {features.map((item, index) => (
        <div className="feature-item" key={index}>
          <FontAwesomeIcon icon={item.icon} className="feature-icon" />
          <div className="feature-text">
            <span className="feature-title">{item.title}</span>{" "}
            <span className="feature-subtitle">{item.subtitle}</span>
          </div>
        </div>
      ))}
    </div>

   <div className='specs'>
     <div className="specs-container">
      <h2 className="specs-title">
        Product <span>Specifications</span>
      </h2>

      <div className="specs-grid">
        <div className="spec-item">
          <p className="spec-label">Name</p>
          <p className="spec-value">{x.productName}</p>
        </div>

        <div className="spec-item">
          <p className="spec-label">Category</p>
          <p className="spec-value">{x.specifications.Category}</p>
        </div>

        <div className="spec-item">
          <p className="spec-label">Net Content</p>
          <p className="spec-value">
          {x.specifications['Net Content']}
          </p>
        </div>

        <div className="spec-item">
          <p className="spec-label">Product Dimensions</p>
          <p className="spec-value">{x.specifications['Product Dimensions']}</p>
                    <p className="spec-label">MRP (Inclusive All Taxes)</p>
          <p className="spec-value">{x.oldPrice}</p>
        </div>

        <div className="spec-item">
          <p className="spec-label">Country Of Origin</p>
          <p className="spec-value">India</p>
        </div>

        <div className="spec-item">
          <p className="spec-label">Marketed By</p>
          <p className="spec-value">
         {x.specifications['Marketed By']}
          </p>
        </div>

      
      <div className="spec-item">
        <p className="spec-label">Manufactured By</p>
        <p className="spec-value">{x.specifications?.['Manufactured By'] || "NaN"}</p>
      </div>

        <div className="spec-item">
          <p className="spec-label">
            For consumer complaints contact us at:
          </p>
          <p className="spec-value">022-6918-1920 info@imaginemarketingindia.com Imagine Marketing Limited Address: Unit No. 204&amp;205, D-wing &amp; E-wing, Corporate Avenue, Andheri Ghatkopar Link Road, Andheri East, Mumbai-400093</p>
        </div>

        <div className="spec-item">
          <p className="spec-label">Net Quantity</p>
          <p className="spec-value">1 Unit</p>
        </div>
 
      <div className="spec-item">
        <p className="spec-label">IPX</p>
        <p className="spec-value">{x.specifications?.IPX || "NaN"}</p>
      </div>


      <div className="spec-item">
        <p className="spec-label">Charging Time</p>
        <p className="spec-value">{x.specifications?.['Charging Time'] || "NaN"}</p>
      </div>

      <div className="spec-item">
        <p className="spec-label">Bluetooth</p>
        <p className="spec-value">{x.specifications?.Bluetooth || "NaN"}</p>
      </div>


      </div>
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









    </div>
  )
}

export default Headphone
