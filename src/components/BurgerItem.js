import React, { useEffect, useRef } from 'react';
import '../styles/Home.css';
import { motion, useInView, useAnimation } from 'framer-motion';

function BurgerItem({ description, name, image }) {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const slideAnimation = useAnimation()

  useEffect(() => {
    if (isInView) {
      slideAnimation.start('visible');
    }
  },[isInView, slideAnimation])

  const container = {
    hidden: { 
      opacity: 1, 
      scale: 0 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
  }
  }

  const item = {
    hidden: { 
      y: 20, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1
    }
  }


  return (
    <motion.div 
    className='burgerItem'
    variants={container}
    initial='hidden'
    animate={slideAnimation}
    ref={ref}
    >
      <motion.div className='burgerDesc' variants={item}>
          <h1> {name} </h1>
          <p> {description} </p>
      </motion.div>
      <motion.div className='burgerImg' variants={item} style={{backgroundImage: `url(${ image })`}}>
      </motion.div>
    </motion.div>
  )
}

export default BurgerItem