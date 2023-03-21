import React from 'react'

import data from '../Data/data'
import ProductDetail from '../shared/ProductDetail'

const ProductDetailH1: React.FC = function () {
  return <ProductDetail {...data[0]} />
}

export default ProductDetailH1
