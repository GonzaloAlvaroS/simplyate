import "./Conclusion.css"
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Conclusion = () => {

  const navigate = useNavigate();

  const HowToStart = () => {
    navigate('../how-to-start'); 
  };

return (
  
    <div className='conclusion'>
      <h2>You've already read the 3 main methods, but there are more...</h2>
      <h1>WHAT ARE YOU WAITING FOR TO START SHAPING THE FUTURE OF YOUR COMPANY?</h1>
      <button className='btn' onClick={HowToStart}>JOIN NOW!</button>
    </div>
    
  )
}

export default Conclusion
