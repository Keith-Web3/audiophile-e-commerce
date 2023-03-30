import React from 'react'
import { motion } from 'framer-motion'

import Products from '../shared/Products'
const variants = {
  hidden: {
    y: '-100vh',
    opacity: 0,
    transition: {
      delay: 0.5,
    },
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
}
const Dropdown: React.FC = function () {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      exit="hidden"
      animate="visible"
      className="drop-down"
    >
      <Products />
      <div className="backdrop"></div>
    </motion.div>
  )
}

export default Dropdown
