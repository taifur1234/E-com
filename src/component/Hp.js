import React from 'react'
import './E-com.css'
import h1 from './head-1.png'
import h2 from './head-2.png'
import h3 from './head-3.png'
import h4 from './head-4.png'
import h5 from './head-5.png'
import h6 from './head-6.png'
import h7 from './head-7.png'
import h8 from './head-8.png'

export default function Hp() {
  return (
      <div>
         <h2 style={{fontWeight:'800', marginTop:'50px', marginLeft:'470px', letterSpacing:'1px'}}>Best Headphones Models</h2>
         <p className='top-p'>There are many variations passages</p>
         <div className='main-headphone'>
            <div className='head-1'>
              <img src={h1} style={{width:'120px', height:'120px', marginTop:'25px', marginLeft:'68px'}} alt=''/>
              <button className='card-btn' style={{marginTop:'20px'}}>Add To Card</button>
            </div>
            <div className='head-1'>
              <img src={h2} style={{width:'165px', height:'165px', marginLeft:'44px'}} alt=''/>
              <button className='card-btn-2'>Add To Card</button>
            </div>
            <div className='head-1'>
              <img src={h3} style={{width:'160px', height:'150px',  marginTop:'15px', marginLeft:'45px'}} alt=''/>
              <button className='card-btn-3'>Add To Card</button>
            </div>
            <div className='head-1'>
              <img src={h4} style={{width:'160px', height:'150px',  marginTop:'15px', marginLeft:'47px'}} alt=''/>
              <button className='card-btn-4'>Add To Card</button>
            </div>
         </div>

         <div className='price-div'>
            <div className='p-1'>
               <p className='p-h-1'>Boats</p>
               <h3 className='p-h-2'>$995</h3>
            </div>
            <div className='p-1'>
               <p className='p-h-3'>Rockey Mountain</p>
               <h3 className='p-h-4'>$8,250</h3>
            </div>
            <div className='p-1'>
               <p className='p-h-5'>Red Magic Gaming Headphone</p>
               <h3 className='p-h-6'>$1,350</h3>
            </div>
            <div className='p-1'>
               <p className='p-h-7'>Oneplus 650B</p>
               <h3 className='p-h-8'>$2,750</h3>
            </div>
         </div>








         <div className='main-headphone' style={{marginTop:'60px'}}>
            <div className='head-1'>
              <img src={h5} style={{width:'160px', height:'140px', marginTop:'25px', marginLeft:'44px',}} alt=''/>
              <button className='card-btn'>Add To Card</button>
            </div>
            <div className='head-1'>
              <img src={h6} style={{width:'160px', height:'140px', marginLeft:'50px', marginTop:'20px'}} alt=''/>
              <button className='card-btn-2'>Add To Card</button>
            </div>
            <div className='head-1'>
              <img src={h7} style={{width:'160px', height:'150px',  marginTop:'15px', marginLeft:'49px'}} alt=''/>
              <button className='card-btn-3'>Add To Card</button>
            </div>
            <div className='head-1'>
              <img src={h8} style={{width:'160px', height:'150px',  marginTop:'15px', marginLeft:'47px'}} alt=''/>
              <button className='card-btn-4'>Add To Card</button>
            </div>
         </div>

         <div className='price-div'>
            <div className='p-1'>
               <p className='p-h-9'>Goro Wear C7</p>
               <h3 className='p-h-10'>$499</h3>
            </div>
            <div className='p-1'>
               <p className='p-h-11'>Wireless audio system 300</p>
               <h3 className='p-h-12'>$6,999</h3>
            </div>
            <div className='p-1'>
               <p className='p-h-13'>Realme Rgb 300C</p>
               <h3 className='p-h-14'>$9,550</h3>
            </div>
            <div className='p-1'>
               <p className='p-h-15'>Boat Special Edition</p>
               <h3 className='p-h-16'>$750</h3>
            </div>
         </div>


      </div>
  )
}
