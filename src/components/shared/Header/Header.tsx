import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

import cartIcon from '../../../assets/shared/desktop/icon-cart.svg'
import logo from '../../../assets/shared/desktop/logo.svg'
import Hamburger from '../../UI/Hamburger'
import '../../../sass/shared/header/header.scss'
import CartContext from '../../store/CartContextProvider'

const Header: React.FC<{
  isNavOpen: 'open' | 'closed'
  setIsNavOpen: React.Dispatch<React.SetStateAction<'open' | 'closed'>>
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = function ({ isNavOpen, setIsNavOpen, setIsCartOpen }) {
  const ctx = useContext(CartContext)

  return (
    <header className="header">
      <div className="container">
        <Hamburger isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <img className="logo" src={logo} alt="logo" />
        <nav>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            home
          </NavLink>
          <NavLink
            to="/headphones"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            headphones
          </NavLink>
          <NavLink
            to="/speakers"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            speakers
          </NavLink>
          <NavLink
            to="/earphones"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            earphones
          </NavLink>
        </nav>
        <div className="cart-img" onClick={() => setIsCartOpen(prev => !prev)}>
          <img className="cartIcon" src={cartIcon} alt="cart" />
          <motion.p
            key={ctx.items.length}
            initial={{ y: '-60%', x: '50%' }}
            animate={{ fontSize: ['1.1rem', '1rem'], y: '-60%', x: '50%' }}
            className="count"
          >
            {ctx.items.length || null}
          </motion.p>
        </div>
      </div>
    </header>
  )
}

export default Header
