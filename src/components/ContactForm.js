import React from 'react'
import "./ContactFormStyle.css";

function ContactForm() {
  return (
    <div className='contact-container'>
        <h1>Send a Message to Us..!</h1>
            <form>
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Subject' />
                <input type="text" placeholder='Phone Number' />
                <textarea rows="4" placeholder='Text Here'></textarea>
                <button>Send Message</button>
            </form>
    </div>
  )
}

export default ContactForm