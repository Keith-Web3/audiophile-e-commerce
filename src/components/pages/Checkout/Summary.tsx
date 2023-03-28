import React, { useContext, useEffect, useState } from 'react'
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
  const [paymentLink, setPaymentLink] = useState('')

  useEffect(() => {
    const res = fetch('https://audiophile-e-commerce-ashy.vercel.app/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: ctx.items.map(item => {
          return { id: item.name, quantity: item.count }
        }),
      }),
      credentials: 'include',
    })
      .then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
      })
      .then(({ url }) => {
        setPaymentLink(url)
      })
      .catch(e => {
        console.log(e.error)
      })
  }, [])

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
      <Button className="button-one" onClick={() => window.open(paymentLink)}>
        check & pay
      </Button>
    </div>
  )
}

export default Summary
