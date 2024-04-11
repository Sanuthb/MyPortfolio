import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className='right_area4'>
      <div className="heading">
        <h3>Get In Touch</h3>
        <span></span>
      </div>
      <div className="contact_container">
        <div className="contact_info">
          <h3>What’s your story? Get in touch</h3>
          <p>Always available for freelancing if the right project comes along, Feel free to contact me.</p>
          <h4>India,Bangalore</h4>
          <h4>sanuthbibin@gmail.com</h4>
          <h4>+91 9988221166</h4>
        </div>
        <div className="form_container">
          <h3>Say Something</h3>
          <form action="mailto:binu842000@gmail.com" method='post' enctype="text/plain">
            <div className="input1">
            <input type="text" placeholder="Name" required/>
            <input type="text" placeholder="Email" rel=''/>
            </div>
            <input type="text" placeholder="Subject"  className='input2' required/>
            <textarea placeholder="Message" required></textarea>
            <input type="submit" value="Submit"  className='submit_button'/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact