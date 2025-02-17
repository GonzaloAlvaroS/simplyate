import "./QuestionJoin.css"
import React from 'react'
import { useNavigate } from 'react-router-dom';

const QuestionJoin = () => {

  const navigate = useNavigate();

  const HowToStart = () => {
    navigate('../how-to-start'); 
  };

return (
    <div className='questionjoin'>
      <h2>The best way to grow is together with a team</h2>
      <h1>WHAT'S HOLDING YOU BACK FROM CREATING YOUR COMPANY'S FUTURE?</h1>
      <button className='btn' onClick={HowToStart}>JOIN NOW!</button>
    </div> 
  )
}

export default QuestionJoin
