import React, { useContext, useEffect } from 'react'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import CartContext from '../store/CartContextProvider'
import '../../sass/shared/cart.scss'
import Button from '../UI/Button'

const Item: React.FC<{
  imgUrl: string
  name: string
  price: string
  count: number
}> = function ({ imgUrl, name, price, count }) {
  const ctx = useContext(CartContext)
  return (
    <div className="cart__item">
      <img src={imgUrl} alt={name} />
      <p className="name">{name}</p>
      <p className="price">{price}</p>
      <div className="cart__btn">
        <p
          className="btn"
          onClick={() =>
            ctx.dispatchItem({
              action: 'REMOVE',
              payload: { name: name },
            })
          }
        >
          -
        </p>
        <motion.p key={count} animate={{ scale: [1.3, 1] }} className="count">
          {count}
        </motion.p>
        <p
          className="btn"
          onClick={() => {
            ctx.dispatchItem({
              action: 'ADD',
              payload: { imgUrl, name, price, count: 1 },
            })
          }}
        >
          +
        </p>
      </div>
    </div>
  )
}
const Cart: React.FC<{
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = function ({ setIsCartOpen }) {
  const ctx = useContext(CartContext)
  const totalPrice = useMotionValue(0)
  const rounded = useTransform(
    totalPrice,
    price => `$${new Intl.NumberFormat('en-US').format(Math.round(price))}`
  )
  const navigate = useNavigate()

  useEffect(() => {
    const controls = animate(totalPrice, calculateTotal(ctx.items))

    return controls.stop
  }, [calculateTotal(ctx.items)])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="cart-main"
    >
      <div className="cart__container">
        <p className="cart__header">
          <span>cart({ctx.items.length})</span>
          <span
            onClick={() => {
              ctx.dispatchItem({ action: 'CLEAR', payload: null })
            }}
          >
            Remove all
          </span>
        </p>
        {ctx.items.map((item, idx) => (
          <Item key={idx} {...item} />
        ))}
        {!ctx.items.length && (
          <p className="empty">Your cart is currently empty</p>
        )}
        <p className="total">
          <span>Total</span>
          <motion.span>{rounded}</motion.span>
        </p>
        <Button
          disabled={!ctx.items.length}
          onClick={() => {
            console.log(ctx.items)
            navigate(`/checkout?items=${JSON.stringify(ctx.items)}`)
            setIsCartOpen(false)
          }}
          className="button-one"
        >
          checkout
        </Button>
      </div>
      <div className="backdrop"></div>
    </motion.div>
  )
}
export const calculateTotal = function (
  items: {
    imgUrl: string
    name: string
    price: string
    count: number
  }[]
) {
  const prices = items.map(item => ({
    price: item.price.replace(/[^0-9]/g, ''),
    count: item.count,
  }))
  const total = (prices as any).reduce(
    (acc: number, item: { price: string; count: number }) => {
      return +item.price * item.count + acc
    },
    0
  )
  return total
}

export default Cart
