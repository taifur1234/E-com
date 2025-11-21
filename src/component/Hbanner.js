import React from 'react'
import './E-com.css'
import hp from './m1.png'
import { Link } from 'react-router-dom'

export default function Headphone() {
  return (
    <div>
       <div className='explore-first-heading'>
        <h2>Explore</h2>
        <h2>Vibes</h2>
      </div>
     <div className='m-head'>
  <div className='h-text'>
    <p>Special Offer</p>
    <h2>CRISP</h2>
    <h2>BASS</h2>
    <p>Till 7 Dec</p>
  </div>

  <div className='h-img'>
    <img src={hp} alt='headphones' />
  </div>

  <div className='h-text2'>
    <p>PHIOX Headset 751 ANC</p>
    <h3>Noise? Cancelled.</h3>
     <Link to="/buds" onClick={() => localStorage.setItem("citem","Gaming Headphones")}>
    <button>Explore</button>
    </Link>
  </div>
</div>

    </div>
  )
}
