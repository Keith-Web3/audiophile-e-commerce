import React, { useState } from 'react'
import { motion } from 'framer-motion'

import '../../sass/ui/hamburger.scss'

const Hamburger: React.FC = function () {
  const [isOpen, setIsOpen] = useState('closed')

  const toggleMenu = function () {
    setIsOpen(prevValue => (prevValue === 'open' ? 'closed' : 'open'))
  }

  const variants = [
    {
      open: {
        y: '0.8em',
        rotate: 45,
        transition: openTransition,
      },
      closed: {
        y: '0em',
        rotate: 0,
        transition: closeTransition,
      },
    },
    {
      open: {
        opacity: 0,
        transition: { duration: 0.5 },
      },
      closed: {
        opacity: 1,
        transition: { duration: 0.5 },
      },
    },
    {
      open: {
        y: '0.8em',
        rotate: 135,
        transition: openTransition,
      },
      closed: {
        y: '1.6em',
        rotate: 0,
        transition: closeTransition,
      },
    },
  ]

  return (
    <div className="hamburger" onClick={toggleMenu}>
      {variants.map((variant, idx) => (
        <motion.div variants={variant} animate={isOpen} key={idx}></motion.div>
      ))}
    </div>
  )
}

const openTransition = {
  y: { type: 'spring', duration: 0.5 },
  rotate: {
    delay: 0.25,
    type: 'spring',
    duration: 0.5,
    stiffness: 700,
    damping: 20,
  },
}
const closeTransition = {
  rotate: { type: 'spring', duration: 0.5 },
  y: { delay: 0.5 },
}

export default Hamburger
