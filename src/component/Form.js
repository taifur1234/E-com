import React from 'react'
import './E-com.css'

export default function Form() {

    

  return (
    <div>
<div className="container">
  <form id="tripForm">
    <div className="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required/>
    </div>
    <div className="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required/>
    </div>
    <div className="form-group">
      <label for="phone">Phone:</label>
      <input type="text" id="phone" name="phone" required/>
    </div>
    <div className="form-group">
      <label for="departureDate">Departure Date:</label>
      <input type="date" id="departureDate" name="departureDate" required/>
    </div>
    <div className="form-group">
      <label for="additionalInfo">Delevery Address:</label>
      <textarea id="additionalInfo" name="additionalInfo" rows="4"></textarea>
    </div>
    <button type="submit">Book Now</button>
  </form>
</div>
    </div>
  )
}
