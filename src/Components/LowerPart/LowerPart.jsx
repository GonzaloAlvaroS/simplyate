import "./LowerPart.css"
import React from 'react'
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom';
import logo1 from "../../assets/logo1.png"
import instagramlogo from "../../assets/instagramlogo.png"
import facebooklogo from "../../assets/facebooklogo.png"

const LowerPart = () => {
  const handleButtonClick = () => {
    navigate('/');   /* <----- Link to social page */
  };
  const handleButtonClick2 = () => {
    navigate('/');   /* <----- Link to social page */
  };

  const navigate = useNavigate();

  const WhoAreWe = () => {
    navigate('who-are-we'); 
  };

  const HowDoesItWork = () => {
    navigate('how-does-it-work');  
  };

  const HowToStart = () => {
    navigate('how-to-start');  
  };

  const FAQ = () => {
    navigate('FAQ');  
  };

return (
    <div className='lowerpart'>
      <div className='lowerpartinfo'>
        <div className='lowerinfo'>
          <img src={logo1} alt=""/>    
        </div>
      <div className='lowerinfo'>
        <h3>Company</h3>
        <p className='wordlinkpage' onClick={WhoAreWe}><b>WHO ARE WE?</b></p>
        <p className='wordlinkpage' onClick={HowDoesItWork}><b>HOW DOES IT WORK?</b></p>
        <p className='wordlinkpage' onClick={HowToStart}><b>HOW TO START?</b></p>
      </div>
      <div className='lowerinfo'>
        <h3>Information</h3>
        <p><Link to="service1" smooth={true} offset={-190} duration={500}>MISION</Link></p>
        <p><Link to="service2" smooth={true} offset={-140} duration={500}>DOUBTS</Link></p>
        <p><Link to="service3" smooth={true} offset={-110} duration={500}>METHODS</Link></p>
        <p><Link to="service4" smooth={true} offset={-100} duration={500}>FACILITIES</Link></p>
        <p className='wordlinkpage' onClick={FAQ}>FAQ</p>
      </div>
      <div className='lowerinfo'>
        <h3>Contact</h3>
        <p>+1 999999999</p>
        <p>info@simplyate.com</p>
          <div className='logobutton'>
            <img src={instagramlogo} alt="" onClick={handleButtonClick} />
            <img src={facebooklogo} alt="" onClick={handleButtonClick2}/>
          </div>
      </div>
      </div>
    </div>
  )
}

export default LowerPart
