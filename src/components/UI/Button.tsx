import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

import '../../sass/ui/buttons.scss'

interface Props {
  className: 'button-one' | 'button-two' | 'button-three'
  children: ReactNode
}

const Button: React.FC<Props> = function ({ className, children, ...props }) {
  const hoverVariant = {
    color: className === 'button-three' ? '#D87D4A' : '#FFFFFF',
    backgroundColor:
      className === 'button-three'
        ? 'transparent'
        : className === 'button-one'
        ? '#FBAF85'
        : '#000000',
  }
  return (
    <motion.button
      key={className}
      whileHover={hoverVariant}
      className={`buttons ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
