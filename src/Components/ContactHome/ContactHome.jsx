import "./ContactHome.css"
import React from 'react'
import { useNavigate } from 'react-router-dom';
import msg_icon from "../../assets/msg-icon.png"
import white_arrow from "../../assets/white-arrow.png"

const ContactHome = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append(/*Access key*/);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Email sent successfully!");
        event.target.reset();
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
    const navigate = useNavigate();

  const HowToStart = () => {
    navigate('../how-to-start'); 
  };

return (
    <div className='contacthome'>
      <div className="contacthome-col">
        <h3>Send us an email with your project <img src={msg_icon} alt="" /></h3>
        <p>Make sure to send a professional email. You must follow all the rules and steps so that we can accept your project and start growing together. If any of the rules are not followed, we will ignore your email. For more information please read the FAQ where you will find all the steps to follow to be able to contact us.</p>
          <button className='btn btn-little' onClick={HowToStart}>View more</button>
      </div>
      <div className="contacthome-col contacthome-col2">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone number</label>
            <input type="tel" name='phone' placeholder='Enter your phone number' required/>
            <label>Write your project description here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn'>Send <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>  
  )
}

export default ContactHome

