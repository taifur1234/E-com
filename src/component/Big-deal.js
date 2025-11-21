import React from 'react'
import './E-com.css'
import bd1 from './deal-img-earbudss.jpg'
import bd2 from './deal-img-watch.jpg'
import bd3 from './deal-img-speaker.jpg'
import bd4 from './deal-img-headphones.jpg'
import bd5 from './deal-img-neckband.jpg'
import { Link,useNavigate } from 'react-router-dom'
export default function Bigdeal() {
  const navigate = useNavigate();
  const deals = [
    {
      id: 1,
      offer: 'Extra ₹100 OFF',
      img: bd1,
      feature: '100 Hours Playback',
      rating: 4.5,
      title: 'PHIOX Airdops 181',
      price: '₹999',
      oldPrice: '₹4,999',
      discount: '80% OFF',
    },
    {
      id: 2,
      offer: 'Extra ₹300 OFF',
      img: bd2,
      feature: 'Bluetooth Calling',
      rating: 3.2,
      title: 'PHIOX Watch S2',
      price: '₹1,769',
      oldPrice: '₹2,949',
      discount: '40% OFF',
    },
    {
      id: 3,
      offer: 'Extra ₹450 OFF',
      img: bd3,
      feature: '12 Hours Playback',
      rating: 3.7,
      title: 'PHIOX 620 Speaker',
      price: '₹3,999',
      oldPrice: '₹4,999',
      discount: '20% OFF',
    },
    {
      id: 4,
      offer: 'Extra ₹250 OFF',
      img: bd4,
      feature: 'RGB Gaming Beast',
      rating: 3.9,
      title: 'PHIOX Gaming Headphone',
      price: '₹1,189',
      oldPrice: '₹1,799',
      discount: '30% OFF',
    },
    {
      id: 5,
      offer: 'Extra ₹140 OFF',
      img: bd5,
      feature: 'Noise Out, Vibes In',
      rating: 4.1,
      title: 'PHIOX Neckband P3 Pro',
      price: '₹839',
      oldPrice: '₹1,399',
      discount: '40% OFF',
    },{
      id: 6,
      offer: 'Extra ₹18,999 OFF',
      img: "/imges/ht7.jpeg",
      feature: "Dolby Atmos, 5.1.2",
      rating: 4.1,
      title: "PHIOX Atmos Ultra",
      price: '₹17,999',
      oldPrice: '₹44,999',
      discount: '60% OFF',
    },
  ]

 

  return (
    <div className='big-deal-container'>
      <div className='deal-first-heading'>
        <h2>Big</h2>
        <h2>Deals</h2>
      </div>

      <div className='big-deal-flex-div'>
        {deals.map((item) => (
  <div key={item.id} className='big-deal-products'>
    <Link 
      to="/secondpage"
      onClick={() => localStorage.setItem("productname", item.title)}
    >
      <div className='bd-products'>
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
  )
}
