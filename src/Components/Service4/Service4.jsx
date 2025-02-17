import "./Service4.css"
import React from 'react'
import facilities from "../../assets/facilities.mp4"

const Service4 = () => {

return (
    <div className='service4'>
      <h1>DON'T MISS THE OPPORTUNITY TO GROW</h1>
      <video src={facilities}  width={710} height={400} muted autoPlay controls loop></video>
    </div>
  )
}

export default Service4
