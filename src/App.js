import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Mid from './component/Mid';
import Main from './component/Main';
import Wbanner from './component/Wbanner';
import Sbanner from './component/Sbanner';
import EBbanner from './component/EBbanner';
import Ebanner from './component/Ebanner';
import Hbanner from './component/Hbanner';
import Bestsell from './component/Bestseller';
import Bigdeal from './component/Big-deal';
import Bestp from './component/Best-p';
import About from './component/A-section';
import Footer from './component/Footer';
import Addtocart from './component/Add-to-cart';
import Headphone from './component/Headphone';
import Shiping from "./component/Shiping"
import Shipping from "./component/Shipping"
import Contact from './component/Contact';
import Buds from "./component/wireless-buds"
import Order from "./component/Order"
import Navbar from "./component/Navbar"
import Aboutt from './component/About';

function App() {

  // ⭐ GLOBAL CART COUNT
  const [cartCount, setCartCount] = useState(0);

  // Load initial count
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCartCount(stored.length);
  }, []);

  // ⭐ Update when product adds to cart
  const updateCart = () => {
    const stored = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCartCount(stored.length);
  };

  return (
    <Router>
      <Routes>

        {/* ---------------- HOME PAGE ---------------- */}
        <Route
          path="/"
          element={
            <>
              <Navbar cartCount={cartCount} />
              <Main />
              <Mid />
              <Hbanner />
              <Bigdeal />
              <Bestsell />
              <EBbanner />
              <Bestp />
              <About />
              <Footer />
            </>
          }
        />

        {/* ---------------- ADD TO CART PAGE ---------------- */}
        <Route
          path="/add-to-cart"
          element={
            <>
              <Navbar cartCount={cartCount} />
              <Addtocart updateCart={updateCart} />
            </>
          }
        />

        {/* ---------------- PRODUCT PAGE ---------------- */}
        <Route
          path="/secondpage"
          element={
            <>
              <Navbar cartCount={cartCount} />
              <Headphone updateCart={updateCart} />
            </>
          }
        />

        {/* SAME FOR ALL OTHER PAGES */}
        <Route path="/billingpage" element={<><Navbar cartCount={cartCount} /><Shiping /></>} />
        <Route path="/contactpage" element={<><Navbar cartCount={cartCount} /><Contact /><Footer /></>} />
        <Route path="/shippingpage" element={<><Navbar cartCount={cartCount} /><Shipping /></>} />
        <Route path="/buds" element={<><Navbar cartCount={cartCount} /><Buds updateCart={updateCart} /></>} />
        <Route path="/aboutt" element={<><Navbar cartCount={cartCount} /><Aboutt /><Footer /></>} />
        <Route path="/order" element={<><Navbar cartCount={cartCount} /><Order /></>} />

      </Routes>
    </Router>
  );
}

export default App;
