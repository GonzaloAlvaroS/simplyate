import "./Contact.css"
import React from 'react'
import msg_icon from "../../../assets/msg-icon.png"
import mail_icon from "../../../assets/mail-icon.png"
import phone_icon from "../../../assets/phone-icon.png"
import white_arrow from "../../../assets/white-arrow.png"

const Contact = () => {

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

return (

    <div className='contact'>
      <div className="contact-col">
        <h3>Send us an email with your project <img src={msg_icon} alt="" /></h3>
        <p>Make sure to send a professional email. You must follow all the rules and steps so that we can accept your project and start growing together. If any of the rules are not followed, we will ignore your email. For more information please read the FAQ where you will find all the steps to follow to be able to contact us.</p>
        <ul>
          <li><img src={mail_icon} alt="" />info@simplyate.com</li>
          <li><img src={phone_icon} alt="" />+1 999999999</li>
        </ul>
      </div>
      <div className="contact-col contact-col2">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone number</label>
            <input type="tel" name='phone' placeholder='Enter your phone number' required/>
            <label>Write your project description here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Send <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>  
    
  )
}

export default Contact
