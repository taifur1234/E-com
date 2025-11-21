import React from 'react'
import './E-com.css'
import speaker from './sb3-removebg-preview.png'

export default function Speaker() {
  return (
    <div>
      <div className='m-head4'>
        <div className='s-text'>
          <p>FLAT 25% OFF</p>
          <h2>PARTY</h2>
          <h2>STARTS</h2>
          <p>15 Nov - 7 Dec</p>
        </div>

        <div className='s-img'>
          <img src={speaker} alt='speaker' />
        </div>

        <div className='s-text2'>
          <p>boAt Stone 1200</p>
          <h3>Unleash the Sound</h3>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  )
}



