import React, { useState, useContext } from 'react'
import { To, useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'

import Button from '../UI/Button'
import '../../sass/shared/product_detail.scss'
import Likes from './Likes'
import CartContext from '../store/CartContextProvider'
import { cartImages } from '../Data/data'
import { motion } from 'framer-motion'

const ProductDetail: React.FC<{
  img: string
  newProduct?: boolean
  title: string
  cartTitle: string
  desc: string
  price: string
  features: [string, string]
  box: [number, string][]
  gallery: [[string, string], [string, string], [string, string]]
  className: string
  likes: [
    [string, string, string, string],
    [string, string, string, string],
    [string, string, string, string]
  ]
}> = function ({
  img,
  newProduct = false,
  title,
  desc,
  price,
  features,
  box,
  gallery,
  className,
  likes,
  cartTitle,
}) {
  const [cartItems, setCartItems] = useState(1)
  const navigate = useNavigate()
  const ctx = useContext(CartContext)

  const cartImgUrl = cartImages.find(el => el[0] === className)![1]

  return (
    <div className="product-detail">
      <div className={`container ${className}`}>
        <p
          className="back"
          onClick={() => navigate(-1 as To, { replace: true })}
        >
          go back
        </p>
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
              <motion.p
                key={cartItems}
                animate={{ scale: [1.3, 1] }}
                className="count"
              >
                {cartItems}
              </motion.p>
              <p
                className="btn"
                onClick={() => {
                  setCartItems(val => val + 1)
                }}
              >
                +
              </p>
            </div>
            <Button
              className="button-one"
              onClick={() => {
                ctx.dispatchItem({
                  action: 'ADD',
                  payload: {
                    name: cartTitle,
                    count: cartItems,
                    price,
                    imgUrl: cartImgUrl,
                  },
                })
                setCartItems(1)
              }}
            >
              add to cart
            </Button>
          </div>
        </section>
        <section>
          <div className="children">
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
          </div>
          <div className="gallery">
            <img className={gallery[0][1]} src={gallery[0][0]} alt="gallery" />
            <img className={gallery[1][1]} src={gallery[1][0]} alt="gallery" />
            <img className={gallery[2][1]} src={gallery[2][0]} alt="gallery" />
          </div>
          <p className="like">You may also like</p>
          <div className="likes">
            {likes.map(like => (
              <Likes key={nanoid()} data={like} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductDetail
