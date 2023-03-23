import React from 'react'

import Button from '../UI/Button'
import '../../sass/shared/product.scss'
import { Link } from 'react-router-dom'

const Product: React.FC<{
  newProduct?: boolean
  img: string
  header: string
  desc: string
  className: string
  link: string
}> = function ({ className, newProduct, img, header, desc, link }) {
  return (
    <div className={`product ${className}`}>
      <img
        src={img}
        alt="product"
        className={link.split(' ')[0].toLowerCase()}
      />
      {newProduct && <p className="new-product">new product</p>}
      <h2>{header}</h2>
      <p className="desc">{desc}</p>
      <Link to={link}>
        <Button className="button-one">see product</Button>
      </Link>
    </div>
  )
}

export default Product
