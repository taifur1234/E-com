import './E-com.css'
import { Link } from 'react-router-dom'

export default function Bigdeal() {
const deals = [
  {
    id: 1,
    offer: "Extra ₹100 OFF",
    img: "/imges/ep8.jpeg",
    feature: "Dual Pairing Support",
    rating: 3.8,
    title: "PHIOX TrueBeats 115",
    price: "₹999",
    oldPrice: "₹2,499",
    discount: "55% OFF",
  },  {
    id: 2,
    offer: "Extra ₹250 OFF",
    img: "/imges/sm2.jpeg",
    feature: "Bluetooth Calling & GPS",
    rating: 4.2,
    title: "PHIOX CallTrack 2",
    price: "₹3,499",
    oldPrice: "₹7,999",
    discount: "56% OFF",
  },
  {
    id: 3,
    offer: "Extra ₹80 OFF",
    img: "/imges/we4.jpeg",
    feature: "Durable Tangle-Free",
    rating: 4.0,
    title: "PHIOX PureSound Z",
    price: "₹799",
    oldPrice: "₹1,999",
    discount: "60% OFF",
  },
    {
    id: 4,
    offer: "Extra ₹180 OFF",
    img: "/imges/sp9.jpeg",
    feature: "Up to 15 Hours ",
    rating: 4.5,
    title: "PHIOX Endurance S1",
    price: "₹2,199",
    oldPrice: "₹5,499",
    discount: "60% OFF",
  },
  {
    id: 5,
    offer: "Extra ₹100 OFF",
    img: "/imges/nb4.jpeg",
    feature: "Deep Bass Boost",
    rating: 3.9,
    title: "PHIOX BeatBand 300",
    price: "₹899",
    oldPrice: "₹1,999",
    discount: "55% OFF",
  },
  {
    id: 6,
    offer: "Extra ₹90 OFF",
    img: "/imges/bh8.jpeg",
    feature: "50mm Neodymium",
    rating: 4.0,
    title: "PHIOX PowerAudio",
    price: "₹1,499",
    oldPrice: "₹3,499",
    discount: "57% OFF",
  },

  {
    id: 7,
    offer: "Extra ₹250 OFF",
    img: "/imges/rs1.jpeg",
    feature: '1.43" AMOLED Display',
    rating: 4.6,
    title: "PHIOX Classic 45",
    price: "₹4,499",
    oldPrice: "₹9,999",
    discount: "55% OFF",
  },

  {
    id: 8,
    offer: "Extra ₹600 OFF",
    img: "/imges/ht5.jpeg",
    feature: "HDMI ARC & Optical",
    rating: 4.5,
    title: "PHIOX Connect Hub",
    price: "₹14,999",
    oldPrice: "₹34,999",
    discount: "57% OFF",
  },
];


  return (
    <div className='big-deal-container'>
      <div className='deal-first-heading'>
        <h2>Best Of</h2>
        <h2 style={{marginLeft:'5px'}}>PHIOX</h2>
      </div>

      <div className='big-deal-flex-div'>
        {deals.map((item) => (
          <div key={item.id} className='big-deal-products'
          >
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
