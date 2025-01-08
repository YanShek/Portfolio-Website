import React from 'react'
import Navbar from '../navbar/Navbar';
import './contact.scss'
import {motion} from 'framer-motion'



const Contact = () => {
  return (
    <div>
    <Navbar displayText={"Contact"} />
    <div className='contact'>
        <div className="container">
            <h2>Contact Me</h2>
            <div className='verticalLine'></div>
            <div className='contactMethods'>
                <a href="mailto:yanshek1123@gmail.com" className='email'><img src='email.svg'/></a>
                <a href="https://www.linkedin.com/in/yan-shek-609369309" target="_blank"><img src="/LinkedIn_icon.svg" alt="LinkedIn"/></a>
            </div>
        </div>
        <motion.h2>Let's get in touch!</motion.h2>
      </div>
    </div>
  )
}

export default Contact;
