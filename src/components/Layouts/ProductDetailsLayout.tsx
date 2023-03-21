import React from 'react'
import { Outlet } from 'react-router-dom'

import Products from '../shared/Products'

const ProductDetailsLayout: React.FC = function () {
  return (
    <div className="product-details">
      <div className="container">
        <Outlet />
        <Products />
      </div>
    </div>
  )
}

export default ProductDetailsLayout
