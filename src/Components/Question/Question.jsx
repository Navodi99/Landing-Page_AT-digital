import React, { useState } from 'react'
import './Question.css'
import Accordian from '../Accordian/Accordian'

import questions from '../Accordian/data'

const Question = () => {

    const[data]=useState(questions);
  return (
    <div className='outer3'>
        <div className='outer'>
         <div className='ques-div'>
        <div className='ques-title'>
            <h2 className='ques-topic'> Frequently asked questions</h2>
            
        </div>
        <div className='ques-accordian-part'>


            {data.map((item)=>{
                return <Accordian key={item.id} question={item.question} answer={item.answer}/>
            })}
            
        </div>
      
    </div>
    </div>
    </div>
   
  )
}

export default Question
