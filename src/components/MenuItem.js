import React from 'react';
import { motion } from 'framer-motion'

function MenuItem({ image, name, price }) {
  return (
    <motion.div className='menuItem'
    whileHover={{ scale: 1.1 }}
    >
        <div style={{backgroundImage: `url(${ image })`}}></div>
        <h1> {name} </h1>
        <p> ${price} </p>
    </motion.div>
  )
}

export default MenuItem