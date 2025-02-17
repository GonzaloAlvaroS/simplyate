import "./Team.css"
import { useRef } from "react"
import next_icon from "../../assets/next_icon.png"
import back_icon from "../../assets/back_icon.png"
import worker1 from "../../assets/worker1.jpg"
import worker2 from "../../assets/worker2.jpg"
import worker3 from "../../assets/worker3.jpg"
import worker4 from "../../assets/worker4.jpg"
import worker5 from "../../assets/worker5.jpg"
import worker6 from "../../assets/worker6.jpg"


const Team = () => {

  const slider = useRef();
  let tx = 0;

const slideForward = ()=>{
     if(tx > -50){
      tx -= 25;
     }
     slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
  if(tx < 0){
    tx += 25;
   }
   slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='team'>
        <div className='team-title'>
          <h1>OUR TEAM OF PROFESSIONALS</h1>
        </div>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={worker1} alt="" className="team-image"/>         
                 <h3>John Smith</h3>
                 <span><b>(CEO)</b></span>
              </div>
            </div>
           </li> 
          <li>
            <div className="slide">
              <div className="user-info">
              <img src={worker2} alt="" className="team-image"/> 
                 <h3>John Smith</h3>
                 <span><b>(Finance Manager)</b></span>
              </div>
            </div>
           </li>
          <li>
            <div className="slide">
              <div className="user-info">
              <img src={worker3} alt="" className="team-image"/> 
                  <h3>John Smith</h3>
                  <span><b>(Operations Manager)</b></span>
              </div>
             </div>
           </li>
          <li>
            <div className="slide">
              <div className="user-info">
              <img src={worker4} alt="" className="team-image" /> 
                 <h3>John Smith</h3>
                 <span><b>(Innovation Manager)</b></span>
              </div>
            </div>
           </li>
           <li>
            <div className="slide">
              <div className="user-info">
              <img src={worker5} alt="" className="team-image" /> 
                 <h3>John Smith</h3>
                 <span><b>(Development Manager)</b></span>
              </div>
            </div>
           </li>
           <li>
            <div className="slide">
              <div className="user-info">
              <img src={worker6} alt="" className="team-image" /> 
                 <h3>John Smith</h3>
                 <span><b>(Sales Manager)</b></span>
              </div>
            </div>
           </li>
        </ul>
      </div>
    </div>
  )
}

export default Team
