import React from 'react'
import'./Footer.css'
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-section'>
            <div className='footer-links'>
                <div className='footer-content'>
                    <div className='inner'>
                        <img src={logo} alt="" className='logo'/>
                        <h1 className='company-name'>AT DIGITAL</h1>
                    </div>
                    <div className='about-container'>
                        <p className='about'>Your goal is our target. Not anything in between. We use<br/> online marketing platforms and tools to achieve single<br/> objective - your business results.</p>
                    </div>
                </div>
                <div className='footer-content'>
                    <h4 className='link-title'>Our Technologies</h4>
                    <p>ReactJS</p>
                    <p>Gatsby</p>
                    <p>NextJS</p>
                    <p>NodeJS</p>
                </div>
                <div className='footer-content'>
                    <h4 className='link-title'> Our Services</h4>
                    <p>Social media Marketing</p>
                    <p>Web & Mobile App<br/> Development</p>
                    <p>Data & Analytics</p>
                </div>
            </div>
            <hr className='h'/>
            <div className='footer-below'>
            
                <div className='footer-copyright'>
                    <p className='copyright'>Privacy Policy | Term & Conditions</p>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Footer
