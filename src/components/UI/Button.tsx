import React, { MouseEventHandler, ReactNode } from 'react'
import { motion } from 'framer-motion'

import '../../sass/ui/buttons.scss'

interface Props {
  className: 'button-one' | 'button-two' | 'button-three' | 'button-four'
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<Props> = function ({ className, children, onClick }) {
  const hoverVariant = {
    color: className === 'button-three' ? '#D87D4A' : '#FFFFFF',
    backgroundColor:
      className === 'button-three'
        ? 'transparent'
        : className === 'button-one'
        ? '#FBAF85'
        : className === 'button-four'
        ? '#4C4C4C'
        : '#000000',
  }
  return (
    <motion.button
      key={className}
      whileHover={hoverVariant}
      className={`buttons ${className}`}
      onClick={onClick || (() => {})}
    >
      {children}
    </motion.button>
  )
}

export default Button
