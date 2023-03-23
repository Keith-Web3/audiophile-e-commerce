import React from 'react'
import { nanoid } from 'nanoid'
import { motion } from 'framer-motion'

import Product from '../shared/Product'
import zx7 from '../../assets/product-zx7-speaker/mobile/image-category-page-preview.jpg'
import zx9 from '../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg'

const Speakers: React.FC = function () {
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
    img: zx9,
    header: 'ZX9 SPEAKER',
    desc: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
    className: 'zx9',
    link: 'zx9-speaker',
  },
  {
    img: zx7,
    header: 'ZX7 SPEAKER',
    desc: 'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
    className: 'zx7',
    link: 'zx7-speaker',
  },
]

export default Speakers
