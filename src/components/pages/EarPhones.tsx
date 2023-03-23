import React from 'react'
import { nanoid } from 'nanoid'

import Product from '../shared/Product'
import yx1 from '../../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg'
import Products from '../shared/Products'

const EarPhones: React.FC = function () {
  return (
    <>
      {productsInfo.map(el => (
        <Product {...el} key={nanoid()} />
      ))}
    </>
  )
}

const productsInfo = [
  {
    newProduct: true,
    img: yx1,
    header: 'YX1 WIRELESS EARPHONES',
    desc: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
    className: 'yx1',
    link: 'yx1-earphone',
  },
]

export default EarPhones
