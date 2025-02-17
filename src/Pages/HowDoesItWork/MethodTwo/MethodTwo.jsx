import "./MethodTwo.css"
import React from 'react'
import facilities from "../../../assets/facilities.mp4"

const MethodTwo = () => {

return (

    <div className='method-two'>
      <div className="method-two-text">
        <h1 className='method-two-title'>- Marketing -</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nobis eum exercitationem quasi voluptatum ullam maxime facere eveniet quo perferendis vero corrupti, dolore numquam culpa ab magnam, error eligendi earum quidem tempore quam nisi. Facilis est similique quae, voluptatem cumque neque provident, saepe dolor totam ratione expedita perferendis quo, ducimus iusto facere ipsa. Quaerat, voluptatum vero. Dolorem odio magni repudiandae maiores consectetur repellat laudantium officiis illum architecto. Ipsum possimus porro quis aliquam aut dolorem corrupti deserunt illum ea beatae tenetur officia hic voluptate ratione, nobis dolores reprehenderit quibusdam consequatur! Corrupti!</p>
      </div>
      <div className='method-two-video'>
        <video src={facilities} width={400} controls muted autoPlay></video>
      </div>
    </div>
    
  )
}

export default MethodTwo
