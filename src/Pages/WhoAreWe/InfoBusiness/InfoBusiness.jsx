import "./InfoBusiness.css"
import React from 'react';
import animatedcompany from "../../../assets/animatedcompany.png"

const InfoBusiness = () => {

return (

    <div className='infobusiness'>
      <div className='titleinfobusiness'>
        <h1></h1>
      </div>
        <div className='infobusinessall'>
          <div className="infobusiness-right">
            <img src={animatedcompany} alt="" className='image-infobusiness'/>
          </div>
          <div className="infobusiness-left">
            <h3>We were small and they helped us grow. It's our turn to do so.</h3>
            <h2>SIMPLYATE</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, vel rem odit sunt velit eaque, vero, commodi animi saepe id dicta eligendi! Iste minus magni veniam. Aut sequi ab nulla, officiis, illo a, ratione at laboriosam dignissimos magni ea veniam maxime nobis unde explicabo reiciendis voluptatem vel consequuntur ex voluptates eaque. Eum atque sit porro voluptatum. Odio veniam eaque, voluptas accusantium esse a mollitia, eligendi doloremque possimus ad ea nostrum eos consequuntur tenetur pariatur illum animi suscipit nemo officia dolor, asperiores distinctio? Voluptas hic voluptates maxime praesentium ipsum laudantium vero.</p>
          </div>
        </div>
    </div>

  )
}

export default InfoBusiness
