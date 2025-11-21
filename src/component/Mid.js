import React from 'react'
import './E-com.css'
import ear from './h1.png'
import ear1 from './h2.png'
import ear2 from './h3.png'
import ear3 from './h4.png'
import ear4 from './h5.png'
import ear5 from './h6.png'
import { Link } from 'react-router-dom'
export default function Mid() {
  return (
      <div>
       <div className='main-container'>

          <div className='service-con'>
          <div className='ser-1'>
            <i class="fa-solid fa-truck-fast" id='icon-1'></i>
            <div>
              <p className='heading-1'>Free Shipping</p>
              <p className='heading-2'>Free Shipping On All Order</p>
            </div>
          </div>
          <div className='ser-1'>
            <i class="fa-regular fa-circle-check" id='icon-1'></i>
            <div>
              <p className='heading-1'>Money Guarantee</p>
              <p className='heading-2'>30 Day Money Back</p>
            </div>
          </div>
          <div className='ser-1'>
            <i class="fa-solid fa-headphones-simple" id='icon-1'></i>
            <div>
              <p className='heading-1'>Online Support 24/7</p>
              <p className='heading-2'>Technical Support 24/7</p>
            </div>
          </div>
          <div className='ser-1'>
            <i class="fa-solid fa-wallet" id='icon-1'></i>
            <div>
              <p className='heading-1'>Secure Payments</p>
              <p className='heading-2'>All Cashback Offers</p>
            </div>
          </div>
          


        </div>
          <div className='first-row'>


            <div className='earphone'>
              <div className='ear-dir'>
                <div className='ear-flex'>
                 <p className='e-head1'>Enjoy</p>
                 <p className='e-head2'>With</p>
                 <p className='e-head3'>Earphone</p>
                  <Link to="/buds" onClick={() => localStorage.setItem("citem","Wired Headphones")}>
                 <button className='ear-btn' style={{cursor:"pointer"}}>Browse</button>
                 </Link>
                </div>
                <img src={ear} alt='' className='ear-img' />
              </div>
            </div>


            <div className='watch'>
              <div className='watch-dir'>
                <div className='watch-flex'>
                 <p className='w-head1'>New</p>
                 <p className='w-head2'>Wear</p>
                 <p className='w-head3'>GADGETS</p>
                  <Link to="/buds" onClick={() => localStorage.setItem("citem","Smartwatches")}>
                 <button className='watch-btn' style={{cursor:"pointer"}}>Browse</button>
                 </Link>
                </div>
                <img src={ear1} alt='' className='watch-img' />
              </div>
            </div>


            <div className='laptop'>
              <div className='laptop-dir'>
                <div className='laptop-flex'>
                 <p className='l-head1'>New</p>
                 <p className='l-head2'>Amazon</p>
                 <p className='l-head3'>SPEAKERS</p>
                   <Link to="/buds" onClick={() => localStorage.setItem("citem","Speakers")}>
                 <button className='laptop-btn' style={{cursor:"pointer"}}>Browse</button>
                 </Link>
                </div>
                <img src={ear5} alt='' className='laptop-img'/>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
