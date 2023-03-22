import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'

import Button from '../UI/Button'
import '../../sass/shared/product_detail.scss'

const ProductDetail: React.FC<{
  img: string
  newProduct?: boolean
  title: string
  desc: string
  price: string
  features: [string, string]
  box: [number, string][]
  gallery: [string, string, string]
}> = function ({
  img,
  newProduct = false,
  title,
  desc,
  price,
  features,
  box,
  gallery,
}) {
  const [cartItems, setCartItems] = useState(1)

  return (
    <div className="product-detail">
      <div className="container">
        <Link className="back" to="..">
          go back
        </Link>
        <section>
          <img src={img} alt={title} />
          {newProduct && <p className="new-product">new product</p>}
          <h2>{title}</h2>
          <p className="desc">{desc}</p>
          <p className="price">{price}</p>
          <div className="cart">
            <div className="cart__increment">
              <p
                className="btn"
                onClick={() => {
                  setCartItems(val => (val === 1 ? val : val - 1))
                }}
              >
                -
              </p>
              <p className="count">{cartItems}</p>
              <p
                className="btn"
                onClick={() => {
                  setCartItems(val => val + 1)
                }}
              >
                +
              </p>
            </div>
            <Button className="button-one">add to cart</Button>
          </div>
        </section>
        <section>
          <div className="features">
            <h3>Features</h3>
            <p>{features[0]}</p>
            <p>{features[1]}</p>
          </div>
          <div className="box">
            <h3>in the box</h3>
            <div className="items">
              {box.map(el => (
                <p key={nanoid()} className="items_details">
                  <span>{el[0]}x</span> {el[1]}
                </p>
              ))}
            </div>
          </div>
          <div className="gallery">
            <img src={gallery[0]} alt="gallery" />
            <img src={gallery[1]} alt="gallery" />
            <img src={gallery[2]} alt="gallery" />
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductDetail
