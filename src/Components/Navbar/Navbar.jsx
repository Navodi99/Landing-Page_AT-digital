import React from 'react'
import './Navbar.css'
import logo  from '../../assets/logo.png'

const Navbar = () => {
  return (

    <nav className='container'>
        <div className='inner'>
        <img src={logo} alt="" className='logo'/>
        <h1 className='company-name'>AT DIGITAL</h1>
        </div>
        

        <ul>
            <li>SERVICES</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
            <li>CAREERS</li>
        </ul>
    </nav>
   
  )
}

export default Navbar
