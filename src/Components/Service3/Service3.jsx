import "./Service3.css"
import React from 'react'
import optionaffiliation from "../../assets/optionaffiliation.png"
import optionmarketing from "../../assets/optionmarketing.png"
import optioninvest from "../../assets/optioninvest.png"


const Service3 = () => {

return (
    <div className='service3'>
      <div className='service3-text'>
        <h2>Let's start creating a future for you</h2>
        <h1>Multiple options to boost your business</h1>
      </div>
        <div className="service3-images">
          <div className='service3-image'>
            <img src={optionaffiliation} alt=""/>
              <div className='service3-imagetext'>
                <p>Affiliation</p>
              </div>
          </div>
          <div className='service3-image'>
            <img src={optionmarketing} alt=""/>
              <div className='service3-imagetext'>
                <p>Marketing</p>
              </div>
          </div>
          <div className='service3-image'>
            <img src={optioninvest} alt=""/>
              <div className='service3-imagetext'>
                <p>Investment</p>
              </div>
          </div>
       </div>
    </div>   
  )
}

export default Service3
