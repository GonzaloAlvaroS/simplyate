import "./Service1.css"
import React from 'react';
import shakinghands from "../../assets/shakinghands.png"

const Service1 = () => {

return (
    <div className='service1'>
      <div className="service1-left">
        <img src={shakinghands} alt="" className='image-service'/>
      </div>
      <div className="service1-right">
        <h2>The business of the future</h2>
        <p>At SIMPLYATE we help the best businesses with absolute potential. We are on a mission to support brave and determined people who have decided to start a business with a bright future, but do not have the resources or the support necessary to take that business forward.</p>
        <h3>Ready to start creating a future?</h3>
      </div>
    </div>
  )
}

export default Service1
