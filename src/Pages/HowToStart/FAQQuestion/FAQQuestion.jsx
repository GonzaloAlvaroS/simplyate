import "./FAQQuestion.css"
import React from 'react'
import { useNavigate } from 'react-router-dom';


const FAQQuestion = () => {

  const navigate = useNavigate();

  const FAQ = () => {
    navigate('../FAQ'); 
  };

return (

    <div className='faq-question'>
      <h1>Still don't know how to send an optimal email to present your company?</h1>
      <button className='btn' onClick={FAQ}>SEE FAQ</button>
    </div>
    
  )
}

export default FAQQuestion
