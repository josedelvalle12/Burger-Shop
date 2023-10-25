import React from 'react';
import bannerBurger from '../assets/bannerabout.jpg';
import '../styles/About.css';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div className='about'
    initial={{ width: 0 }} 
    animate={{ width: "100%" }} 
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
        <div className='aboutTop' style={{ backgroundImage: `url(${bannerBurger})` }}></div>
        <div className='aboutBottom'>
            <h1> ABOUT US </h1>
            <p> At Burger Shop, we're not just another burger joint – we're a culinary destination. Since 1995, we've been crafting the juiciest and most mouthwatering burgers, 
            using only the freshest, top-quality ingredients. Our unwavering commitment to culinary excellence and customer satisfaction has made us the go-to spot for 
            burger enthusiasts. At Burger Shop, we don't just make burgers; we create memories. Join us and discover why we're the number one choice for burger lovers in town.</p>
        </div>
    </motion.div>
  )
}

export default About