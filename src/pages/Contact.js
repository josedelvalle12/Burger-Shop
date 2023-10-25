import React from 'react';
import ContactLeft from '../assets/contact.jpg';
import '../styles/Contact.css';
import { motion } from 'framer-motion'

function Contact() {
  return (
    <motion.div className='contact'
    initial={{ width: 0 }} 
    animate={{ width: "100%" }} 
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
        <div className='leftSide' style={{ backgroundImage: `url(${ContactLeft})` }}></div>
        <div className='rightSide'>
            <h1> Contact Us </h1>
            <form id='contact-form' method='POST'>
                <label htmlFor='name'>Full Name</label>
                <input name='name' placeholder='Enter Full Name...' type='text'></input>
                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='Enter Email...' type='email'></input>
                <label htmlFor='message'>Message</label>
                <textarea rows='6' placeholder='Enter message...' name='message' required></textarea>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    </motion.div>
  )
}

export default Contact