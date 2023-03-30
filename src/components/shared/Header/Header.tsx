import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import cartIcon from '../../../assets/shared/desktop/icon-cart.svg'
import logo from '../../../assets/shared/desktop/logo.svg'
import Hamburger from '../../UI/Hamburger'
import '../../../sass/shared/header/header.scss'
import CartContext from '../../store/CartContextProvider'
import { calculateTotal } from '../Cart'

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
        <img
          data-items={calculateTotal(ctx.items)}
          onClick={() => setIsCartOpen(prev => !prev)}
          className="cartIcon"
          src={cartIcon}
          alt="cart"
        />
      </div>
    </header>
  )
}

export default Header
