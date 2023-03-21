import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import Products from '../shared/Products'

const CategoryLayout: React.FC = function () {
  const location = useLocation()

  return (
    <div className="category">
      <div className="hero-section">
        <h1>{location.pathname.slice(1)}</h1>
      </div>
      <div className="container">
        <Outlet />
        <Products />
      </div>
    </div>
  )
}

export default CategoryLayout
