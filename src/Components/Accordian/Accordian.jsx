import React, { useState } from 'react'
import './Accordian.css'
import {MdAdd} from 'react-icons/md'
import {MdMinimize} from 'react-icons/md'

const Accordian = (props) => {

    const[show,setShow]=useState(false);
  return (
    // <div className='outer'>
        <div  className='accordian-box'>
        <div className='ques-icon-div'>
           
            <div className='ques-ans-div'>
                <h4>{props.question}</h4>

                {show && <p className='answer'>{props.answer}</p> }
                
            </div>
            <div className='icon-div'>
                <p onClick={()=> setShow(!show)}>
                    {
                        show ? (<MdMinimize style ={{marginRight:"1rem"}}/>)
                        : (<MdAdd style={{marginRight : "1rem"}}/>)
                    }

                </p>
            </div>
        </div>
      
    </div>
    // </div>
    
  )
}

export default Accordian
