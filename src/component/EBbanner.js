import React from 'react'
import './E-com.css'
import ear from './eb-banner.png'
import { Link } from 'react-router-dom'

export default function Earphone() {
  return (
    <div>
        <div className='eb-first-heading'>
        <h2>Explore The</h2>
        <h2>Beat</h2>
      </div>
      <div className='m-head5'>
        <div className='eb-text'>
          <p>End of Season</p>
          <h2>WIRELESS</h2>
          <h2>VIBES</h2>
          <p>Offer ends soon</p>
        </div>

        <div className='eb-img'>
          <img src={ear} alt='earbuds' />
        </div>

        <div className='eb-text2'>
          <p>PHIOX Airdopes</p>
          <h3>Freedom to Flow</h3>
            <Link to="/buds" onClick={() => localStorage.setItem("citem","Airbuds")}>
          <button>Grab Now</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
