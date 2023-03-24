import React from 'react'
import { motion } from 'framer-motion'

import Products from '../shared/Products'

const Dropdown: React.FC = function () {
  return (
    <motion.div
      initial={{ y: '-100vh', opacity: 0 }}
      exit={{
        y: '-100vh',
        opacity: 0,
      }}
      animate={{ y: '0', opacity: 1 }}
      className="drop-down"
    >
      <Products />
      <div className="backdrop"></div>
    </motion.div>
  )
}

export default Dropdown
