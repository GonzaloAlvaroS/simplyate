import "./MethodOne.css"
import React from 'react'
import facilities from "../../../assets/facilities.mp4"

const MethodOne = () => {

return (

    <div className='method-one'>
      <div className="method-one-text">
        <h1 className='method-one-title'>- Affiliation -</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur voluptatum quas iste deleniti nesciunt modi deserunt incidunt aliquam architecto rem, libero possimus ratione sunt in aliquid aut saepe excepturi necessitatibus fuga repellendus, quos mollitia laboriosam. Minima aliquam quis officia, repellat labore est officiis obcaecati quia cupiditate adipisci accusantium asperiores explicabo voluptates odio quam cumque commodi, dolore, sit temporibus! Voluptatum ratione optio consequatur possimus laudantium dicta aspernatur velit. Voluptates eos velit odit itaque libero, ipsa alias magnam officiis iure pariatur reiciendis obcaecati ipsum, esse suscipit dolor sapiente neque. In, quis optio?</p>
      </div>
      <div className='method-one-video'>
        <video src={facilities} width={400} controls muted autoPlay></video>
      </div>
    </div>

  )
}

export default MethodOne
