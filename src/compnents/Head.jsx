import React from 'react'
import  './Head.css'

const Head = () => {
  return (
    <div className='header' >
      
        <div className='left'>
      <h1 >NETFLIX </h1>
            
             </div>
        <div className='right'>
        <h6 >UNLIMITED TV SHOWS & MOVIE </h6>

        <div className='join'>
           <button style={{backgroundColor:"red"}}> JOIN NOW</button>
        </div>
        <div className='join2'>
           <button style={{backgroundColor:"red"}}>SIGN NOW</button> 
        </div>

</div>
        
    </div>
  )
}

export default Head
