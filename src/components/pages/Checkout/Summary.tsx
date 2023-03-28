import React, { useContext, useEffect } from 'react'
import { nanoid } from 'nanoid'

import { calculateTotal } from '../../shared/Cart'
import CartContext from '../../store/CartContextProvider'
import '../../../sass/pages/checkout/summary.scss'
import Button from '../../UI/Button'

const Item: React.FC<{
  imgUrl: string
  name: string
  price: string
  count: number
}> = function ({ imgUrl, name, price, count }) {
  return (
    <div className="item">
      <img src={imgUrl} alt={name} />
      <p className="name">{name}</p>
      <p className="price">{price}</p>
      <p className="count">x{count}</p>
    </div>
  )
}

const Summary: React.FC = function () {
  const ctx = useContext(CartContext)

  useEffect(() => {
    const sendTest = async () => {
      try {
        const res = await fetch(
          'https://audiophile-e-commerce-ashy.vercel.app/'
        )
        const data = await res.json()
        if (data.ok) {
          console.log(data)
        } else {
          console.log(data)
        }
      } catch (err: any) {
        console.log(err.message)
      }
    }
    sendTest()

    // .then(res => res)
    // .then(data => console.log(data))

    // const res = fetch(
    //   'https://audiophile-e-commerce-ashy.vercel.app/create-checkout-session',
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     credentials: 'include',
    //   }
    // )
    //   .then(res => {
    //     console.log(res.json())
    //     if (res.ok) return res.json()
    //     return res.json().then(json => Promise.reject(json))
    //   })
    //   .then(({ url }) => {
    //     console.log(url)
    //   })
    //   .catch(e => {
    //     console.log(e.error)
    //   })
  })

  return (
    <div className="summary">
      <h2>summary</h2>
      {ctx.items.map(item => (
        <Item key={nanoid()} {...item} />
      ))}
      <p>
        <span className="title">total</span>
        <span className="count">
          ${new Intl.NumberFormat('en-US').format(calculateTotal(ctx.items))}
        </span>
      </p>
      <p>
        <span className="title">shipping</span>
        <span className="count">$50</span>
      </p>
      <p>
        <span className="title">vat (included)</span>
        <span className="count">
          $
          {new Intl.NumberFormat('en-US').format(
            Math.round(calculateTotal(ctx.items) * 0.2)
          )}
        </span>
      </p>
      <p>
        <span className="title">grand total</span>
        <span className="count total">
          $
          {new Intl.NumberFormat('en-US').format(
            Math.round(calculateTotal(ctx.items) * 1.2) + 50
          )}
        </span>
      </p>
      <Button className="button-one">check & pay</Button>
    </div>
  )
}

export default Summary
