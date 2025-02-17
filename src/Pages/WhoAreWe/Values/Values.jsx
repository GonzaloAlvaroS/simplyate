import "./Values.css"
import React from 'react';
import support from "../../../assets/support.png"
import determination from "../../../assets/determination.png"
import fellowship from "../../../assets/fellowship.png"
import leadership from "../../../assets/leadership.png"

const Values = () => {

return (
    <div className='values'>
      <div className='values-text'>
        <h2>Values are paramount to growing a business</h2>
        <h1>We always keep our values in mind</h1>
      </div>
      <div className='values-all-images'>
        <div className="values-images1">
          <div className='values-block'>
            <img src={support} alt=""/>
            <button className='btnwhite'>Support</button>
          </div>
          <div className='values-block'>
            <img src={determination} alt="" className='image-values'/>
            <button className='btnwhite'>Determination</button>
          </div> 
        </div>
        <div className="values-images2">
          <div className='values-block'>
            <img src={fellowship} alt=""/>
            <button className='btnwhite'>Fellowship</button>
          </div>
          <div className='values-block'>
            <img src={leadership} alt="" className='image-values'/>
            <button className='btnwhite'>Leadership</button>
          </div>
        </div>  
      </div>
    </div>
    
  )
}

export default Values
