import React from 'react'
import './E-com.css'

import w from './w-3.png'

export default function Whatch() {
  return (
    <div>
      <div className='m-head2'>
  <div className='w-text'>
    <p>Limited Time Deal</p>
    <h2>SMART</h2>
    <h2>MOVES</h2>
    <p>15 Nov – 7 Dec</p>
  </div>

  <div className='w-img'>
    <img src={w} alt='smartwatch' />
  </div>

  <div className='w-text2'>
    <p>boAt Lunar Connect</p>
    <h3>Style Meets Tech</h3>
    <button>Explore</button>
  </div>
</div>

    </div>
  )
}