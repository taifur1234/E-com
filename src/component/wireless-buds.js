
import './E-com.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import item from "./category-data.json"
export default function Bigdeal() {
    

 const [showSearch, setShowSearch] = useState(false);
      const [cartCount, setCartCount] = useState(0);
      const [title ,settitle] = useState("xyz");
       const [x, setx] = useState(null);
             const [wordIndex, setWordIndex] = useState(0);
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
useEffect(() => {
  const fetchData = () => {
    const clickedName = localStorage.getItem("citem");
    if (!clickedName) return;

    settitle(clickedName);

    const product = item[clickedName];
    console.log(product);
    setx(product);
  };

  fetchData();
}, [localStorage.getItem("citem")]);

  if (!x) {
  return <div>Loading product Please wait...</div>;
}




  return (
    <div>
   

    <div className='big-deal-container' style={{marginTop:"60px"}} id='big-deal-container' >
      <div className='deal-first-heading' id='heading-category'>
        
        <h2>{title}</h2>
      </div>

      <div className='big-deal-flex'>
        {x.map((item) => (
  <div key={item.id} className='big-deal-products'>
    <Link 
       to="/secondpage"
       onClick={() => localStorage.setItem("productname", item.title)}
     >
      <div className='bd-products'style={{marginBottom:"25px"}}>
        <div className='offer-badge'>{item.offer}</div>
        <img src={item.img} alt={item.title} />
        <div className='img-bottom'>
          <p>{item.feature}</p>
          <div className='big-deal-rating'>
            <i className='fa-solid fa-star'></i>
            <span>{item.rating}</span>
          </div>
        </div>
        <h5>{item.title}</h5>
        <div className='price-section'>
          <span className='big-deal-price'>{item.price}</span> <br />
          <span className='old-price'>{item.oldPrice}</span>
          <span className='discount-tag'>{item.discount}</span>
        </div>
      </div>
 </Link>
  </div>
))}

      </div>
    </div>
    </div>
  )
}
