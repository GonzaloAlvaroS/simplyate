import "./Service4.css"
import React from 'react'
import { useNavigate } from 'react-router-dom';
import facilities from "../../assets/facilities.mp4"

const Service4 = () => {

  const navigate = useNavigate();

  const HowToStart = () => {
    navigate('how-to-start'); 
  };

return (

    <div className='service4'>
      <h1>-DON'T MISS THE OPPORTUNITY TO GROW-</h1>
      <video src={facilities}  width={710} height={400} muted autoPlay controls loop></video>
    </div>

  )
}

export default Service4
