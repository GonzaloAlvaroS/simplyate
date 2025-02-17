import "./MethodThree.css"
import React from 'react'
import facilities from "../../../assets/facilities.mp4"

const MethodThree = () => {

return (

    <div className='method-three'>
      <div className="method-three-text">
        <h1 className='method-three-title'>- Investment -</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis illo delectus dolores harum totam laborum quaerat deleniti neque veritatis distinctio ab veniam quia amet hic voluptates blanditiis eum, facilis alias architecto sapiente doloremque enim soluta? Harum commodi qui doloribus nostrum? Voluptatum molestiae iste fugit, delectus suscipit beatae maxime? Voluptate molestias magni natus ab accusamus porro quo earum dolore animi excepturi illum dolorem optio ad quibusdam, veritatis sequi odio distinctio harum officia quod! Architecto illo cupiditate magni soluta doloremque voluptatum consequuntur omnis amet quia saepe libero cumque quo, doloribus deserunt consectetur.</p>
      </div>
      <div className='method-three-video'>
        <video src={facilities} width={400} controls muted autoPlay></video>
      </div> 
    </div>
    
  )
}

export default MethodThree
