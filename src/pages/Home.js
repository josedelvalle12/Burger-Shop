import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Home.css';
import bannerImage from '../assets/burger-bg2.png';
import { BurgerList } from '../helpers/BurgerList.js';
import BurgerItem from '../components/BurgerItem.js';
import { motion } from 'framer-motion'


function Home() {

  return (
    <motion.div className='home' 
    >
    <motion.div className='orderNow'>
      <div className='headerContainer'>
        <h1> BURGER SHOP </h1>
        <p> Bite into Bliss: Where Burgers Become Dreams. </p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
      <motion.div className='headerContainer2'>
        <img src={bannerImage} alt='burger-home'></img>
      </motion.div>
    </motion.div>
        <div className='burgerList'>
        {BurgerList.map((burgerItem, key) => {
          return(
            <BurgerItem
              key= { key }
              name = { burgerItem.name }
              description = { burgerItem.description }
              image = { burgerItem.image }>            
            </BurgerItem>
          )
        })}
        </div>
        
    </motion.div>
  )
}

export default Home