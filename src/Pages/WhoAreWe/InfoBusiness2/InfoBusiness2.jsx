import "./InfoBusiness2.css"
import React from 'react'
import { useNavigate } from 'react-router-dom';
import facilities from "../../../assets/facilities.mp4"

const InfoBusiness2 = () => {

  const navigate = useNavigate();

  const HowToStart = () => {
    navigate('../how-to-start'); 
  };

return (

    <div className='infobusiness2'>
      <h1>- OUR BEGINNINGS | OUR HISTORY -</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nulla alias officiis quibusdam praesentium porro ipsam? Officiis obcaecati a iure nobis eos voluptates inventore illum voluptatibus officia. Consequuntur aperiam, aspernatur laudantium exercitationem architecto earum, culpa doloremque nisi quam eligendi accusantium deleniti corporis animi nesciunt molestias perferendis. Magnam, corrupti. Beatae voluptatum laborum saepe doloremque facere neque alias, nesciunt libero eligendi corrupti distinctio accusamus, nulla architecto! Nesciunt officiis voluptatum cupiditate suscipit unde inventore architecto nostrum ab in et cumque sint temporibus molestias, hic quaerat distinctio dolores culpa, qui, nisi ullam deserunt alias?</p>
      <video src={facilities}  width={710} height={400} muted autoPlay controls></video>
      <button className='btn btnjoin' onClick={HowToStart}>JOIN NOW!</button>
    </div>
    
  )
}

export default InfoBusiness2
