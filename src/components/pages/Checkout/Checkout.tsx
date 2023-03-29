import React, { ChangeEventHandler } from 'react'
import { Form, redirect, To, useNavigate } from 'react-router-dom'

import '../../../sass/pages/checkout/checkout.scss'
import { Item } from '../../store/CartContextProvider'
import Summary from './Summary'

export const checkoutAction = async function ({
  request,
}: {
  request: Request
}) {
  const url = request.url
  const params: Item[] = JSON.parse(
    new URL(url).searchParams.get('items') as string
  )
  try {
    const res = await fetch('https://audiophile-e-commerce-ashy.vercel.app/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: params.map(item => {
          return { id: item.name, quantity: item.count }
        }),
      }),
      credentials: 'include',
    })
    if (!res.ok) {
      return res.json().then(json => Promise.reject(json))
    }
    const data = await res.json()
    const paymentUrl = data.url
    throw redirect(paymentUrl)
  } catch (err) {
    throw err
  }
  return null
}
const formVal: ChangeEventHandler<HTMLInputElement> = function (e) {
  let isValid = false
  switch (e.target.name) {
    case 'name': {
      isValid = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(e.target.value)
      break
    }
    case 'address':
    case 'city': {
      isValid = /\w+/g.test(e.target.value)
      break
    }
    case 'zip-code': {
      isValid = /^\d{5}(?:[-\s]\d{4})?$/.test(e.target.value)
      break
    }
    case 'country': {
      isValid = /\w{3,}/.test(e.target.value)
      break
    }
    case 'phone': {
      isValid = /^[0-9+-]+$/.test(e.target.value)
      break
    }
  }
  isValid
    ? e.target.classList.remove('invalid')
    : e.target.classList.add('invalid')
}
const Checkout: React.FC = function () {
  const navigate = useNavigate()

  return (
    <Form method="post" className="checkout">
      <p className="back" onClick={() => navigate(-1 as To, { replace: true })}>
        go back
      </p>
      <div className="container">
        <h1>Checkout</h1>
        <div className="billing-details">
          <h2>billing details</h2>
          <label className="label" htmlFor="name">
            Name
            <input
              type="text"
              placeholder="Alexei Ward"
              name="name"
              onChange={formVal}
              required
            />
            <p>invalid format!!</p>
          </label>
          <label className="label" htmlFor="email">
            Email Address
            <input
              type="email"
              placeholder="alexei@mail.com"
              name="email"
              required
            />
            <p>invalid format!!</p>
          </label>
          <label className="label" htmlFor="phone">
            Phone Number
            <input
              type="text"
              onChange={formVal}
              placeholder="+1 202-555-0136"
              name="phone"
              required
            />
            <p>invalid format!!</p>
          </label>
        </div>
        <div className="shipping-info">
          <h2>shipping info</h2>
          <label className="label" htmlFor="address">
            Your Address
            <input
              type="text"
              placeholder="1137 Williams Avenue"
              name="address"
              onChange={formVal}
              required
            />
            <p>invalid format!!</p>
          </label>
          <label className="label" htmlFor="zip-code">
            ZIP Code
            <input
              type="text"
              placeholder="10001"
              onChange={formVal}
              name="zip-code"
            />
            <p>invalid format!!</p>
          </label>
          <label className="label" htmlFor="city">
            City
            <input
              type="text"
              onChange={formVal}
              placeholder="New York"
              name="city"
              required
            />
            <p>This field is required</p>
          </label>
          <label className="label" htmlFor="country">
            Country
            <input
              type="text"
              placeholder="United States"
              name="country"
              onChange={formVal}
              required
            />
            <p>This field is required</p>
          </label>
        </div>
        <div className="payment-details">
          <h2>Payment Details</h2>
          <div className="method">
            <p>Payment Method</p>
            <label htmlFor="e-money">
              <input type="radio" name="payment" id="e-money" />
              e-Money
            </label>
            <label htmlFor="cash">
              <input type="radio" name="payment" id="cash" />
              Cash on Delivery
            </label>
          </div>
          <label className="label" htmlFor="e-money-number">
            e-Money Number
            <input type="text" name="e-money-number" placeholder="238521993" />
          </label>
          <label className="label" htmlFor="e-money-pin">
            e-Money Pin
            <input type="text" name="e-money-pin" placeholder="6891" />
          </label>
        </div>
      </div>
      <Summary />
    </Form>
  )
}

export default Checkout
