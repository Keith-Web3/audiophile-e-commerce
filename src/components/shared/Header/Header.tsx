import React from 'react'
import { NavLink } from 'react-router-dom'

import cartIcon from '../../../assets/shared/desktop/icon-cart.svg'
import logo from '../../../assets/shared/desktop/logo.svg'
import Hamburger from '../../UI/Hamburger'
import '../../../sass/shared/header/header.scss'

const Header: React.FC = function () {
  return (
    <header className="header">
      <div className="container">
        <Hamburger />
        <img src={logo} alt="logo" />
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
        <img src={cartIcon} alt="cart" />
      </div>
    </header>
  )
}

export default Header
