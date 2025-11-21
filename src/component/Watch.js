import React from 'react'
import './E-com.css'
import w1 from './w-1.png'
import w2 from './w-2.png'
import w3 from './m2.png'
import w4 from './w-4.png'
import w5 from './w-5.png'
import w6 from './w-6.png'
import w7 from './w-7.png'
import w8 from './w-8.png'

export default function Watch() {
  return (
    <div>
         <h2 style={{fontWeight:'800', marginTop:'50px', marginLeft:'470px', letterSpacing:'1px'}}>Best Smartwatch Models</h2>
                <p className='top-p'>There are many variations passages</p>
                <div className='main-headphone'>
                   <div className='head-1'>
                     <img src={w1} style={{width:'120px', height:'120px', marginTop:'25px', marginLeft:'68px'}} alt=''/>
                     <button className='card-btn' style={{marginTop:'20px'}}>Add To Card</button>
                   </div>
                   <div className='head-1'>
                     <img src={w2} style={{width:'150px', height:'150px', marginTop:'15px', marginLeft:'65px'}} alt=''/>
                     <button className='card-btn-2'>Add To Card</button>
                   </div>
                   <div className='head-1'>
                     <img src={w3} style={{width:'250px', height:'150px',  marginTop:'15px', marginLeft:'7px'}} alt=''/>
                     <button className='card-btn-3'>Add To Card</button>
                   </div>
                   <div className='head-1'>
                     <img src={w4} style={{width:'160px', height:'150px',  marginTop:'15px', marginLeft:'47px'}} alt=''/>
                     <button className='card-btn-4'>Add To Card</button>
                   </div>
                </div>
       
                <div className='price-div'>
                   <div className='p-1'>
                      <p className='p-h-1'>BoAt Xtend</p>
                      <h3 className='p-h-2'>$499</h3>
                   </div>
                   <div className='p-1'>
                      <p className='w-h-3'>Fire-Boltt Gladiator</p>
                      <h3 className='w-h-4'>$1,999</h3>
                   </div>
                   <div className='p-1'>
                      <p className='w-h-5'>Realme Talk 2 Pro Ultra</p>
                      <h3 className='w-h-6'>$3,850</h3>
                   </div>
                   <div className='p-1'>
                      <p className='w-h-7'>Noise Pulse 2 Max</p>
                      <h3 className='w-h-8'>$4,150</h3>
                   </div>
                </div>
       
       
       
       
       
       
       
       
                <div className='main-headphone' style={{marginTop:'60px'}}>
                   <div className='head-1'>
                     <img src={w5} style={{width:'160px', height:'140px', marginTop:'25px', marginLeft:'44px'}} alt=''/>
                     <button className='card-btn'>Add To Card</button>
                   </div>
                   <div className='head-1'>
                     <img src={w6} style={{width:'160px', height:'140px', marginLeft:'50px', marginTop:'20px'}} alt=''/>
                     <button className='card-btn-2'>Add To Card</button>
                   </div>
                   <div className='head-1'>
                     <img src={w7} style={{width:'160px', height:'150px',  marginTop:'15px', marginLeft:'49px'}} alt=''/>
                     <button className='card-btn-3'>Add To Card</button>
                   </div>
                   <div className='head-1'>
                     <img src={w8} style={{width:'160px', height:'150px',  marginTop:'15px', marginLeft:'47px'}} alt=''/>
                     <button className='card-btn-4'>Add To Card</button>
                   </div>
                </div>
       
                <div className='price-div'>
                   <div className='p-1'>
                      <p className='p-h-9'>Fastrack Limitless FS1</p>
                      <h3 className='p-h-10'>$799</h3>
                   </div>
                   <div className='p-1'>
                      <p className='w-h-11'>Oppo Wireless M2</p>
                      <h3 className='w-h-12'>$4,700</h3>
                   </div>
                   <div className='p-1'>
                      <p className='w-h-13'>Samsung Galaxy Watch 6</p>
                      <h3 className='w-h-14'>$6,299</h3>
                   </div>
                   <div className='p-1'>
                      <p className='w-h-15'>Noice handband 300X</p>
                      <h3 className='w-h-16'>$2,199</h3>
                   </div>
                </div>
    </div>
  )
}
