import React from 'react'
import {Link} from 'react-router-dom'
import Logo from "../Assests/logo.png"
import "../Styles/Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navLogo'>
        <Link to="/" > <img src={Logo} /> </Link>  
      </div>
      <div className='navbarLinks'>
        <Link to="/services">Services</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About</Link>
        <Link to="#contact">Contact</Link>
      </div>
      <div className='booking'>
        <button id='bookingButton'>Book Now</button>
      </div>
    </div>
  )
}

export default Navbar
