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
            <a href='#services'><li>SERVICES</li></a>
            <a href='#about'><li>ABOUT US</li></a>
            <a href='#contact'><li>CONTACT US</li></a>
            <a href='#careers'><li>CAREERS</li></a>
        </ul>
    </nav>
   
  )
}

export default Navbar
