import React from 'react'
import './E-com.css'
import ear from './h1.png'

export default function Earphone() {
  return (
    <div>
     <div className='m-head3'>
  <div className='e-text'>
    <p>Exclusive Deal</p>
    <h2>DEEP</h2>
    <h2>BASS</h2>
    <p>15 Nov – 7 Dec</p>
  </div>

  <div className='e-img'>
    <img src={ear} alt='earphones' />
  </div>

  <div className='e-text2'>
    <p>boAt Nirvanaa 100</p>
    <h3>Music, Unplugged</h3>
    <button>Explore</button>
  </div>
</div>

    </div>
  )
}
