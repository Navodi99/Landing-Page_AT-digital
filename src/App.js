import React from 'react'
import Navbar from './Components/Navbar/Navbar'

import hero from './assets/background-img.jpg'
import Button from './Components/Button/Button'

import './App.css'
import pic from './assets/pic1.png'
import search from './assets/search.png'

import Footer from './Components/Footer/Footer'
import Question from './Components/Question/Question'



const App = () => {
  return (
    <div  className='main'>
      <Navbar/>
      <div className='card'>
        <img src={hero} alt="" className='background'/>
        <div className='content'>
          <h1 className='title'>We Crush Your Competitors, Goals, And Sales Records - Without The B.S.</h1>
          <Button title={"GET FREE CONSULTATION"}/>
        </div>
      </div>
    <div className='box-container'>
      <div className='box'>
        <div className='pic'>
          <img src={pic} alt="" className='img'/>
        </div>
       
      
        <div className='box1-content'>
          <h3 className='topic'>Web & Mobile App Development</h3>
          <p className='paragraph'>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
          <Button title={"LEARN MORE"}/>
        </div>
      </div>
    </div>

    <div className='box-container'>
      <div className='box'>
        <div className='box1-content'>
          <h3 className='topic'>Digital Strategy Consulting</h3>
          <p className='paragraph'>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
          <Button title={"LEARN MORE"}/>
        </div>
        
        <div className='pic'>
          <img src={search} alt="" className='search-img'/>
        </div>
       
      
       
      </div>
    </div>
    
    {/* <FAQ items={data} keepPthersOpen={true}/>  */}
    {/* <Accordian/> */}
    <Question/>
    <Footer/>
   {/* <Question/> */}
  </div>
  )
}

export default App
