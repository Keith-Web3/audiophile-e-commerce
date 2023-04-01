import React, { ChangeEventHandler } from 'react'
import ReactDOM from 'react-dom'
import {
  Form,
  redirect,
  To,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'

import '../../../sass/pages/checkout/checkout.scss'
import OrderSuccess from '../../shared/OrderSuccess'
import { Item } from '../../store/CartContextProvider'
import Summary from './Summary'

export const checkoutAction = async function ({
  request,
}: {
  request: Request
}) {
  const url = request.url
  const formData = await request.formData()
  const paymentMethod = formData.get('payment')
  const userName = formData.get('name')
  const params: Item[] = JSON.parse(
    new URL(url).searchParams.get('items') as string
  )
  try {
    let res
    let paymentUrl
    if (paymentMethod === 'card') {
      res = await fetch(
        'https://audiophile-e-commerce-ashy.vercel.app/create-checkout',
        {
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
        }
      )
      const data = await res.json()
      paymentUrl = data.url
    } else {
      res = await fetch(
        `https://audiophile-e-commerce-ashy.vercel.app/create-charge?params=${JSON.stringify(
          params
        )}&name=${userName}`,
        { credentials: 'include' }
      )
      const data = await res.json()
      paymentUrl = data.hosted_url
    }
    if (!res.ok) {
      return res.json().then(json => Promise.reject(json))
    }
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
  const [searchParams, setSearchParams] = useSearchParams()

  if (searchParams.get('orderSuccess') === 'false') {
    throw new Error('Something went wrong with your payment. Please try again.')
  }

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
              pattern="^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$"
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
              pattern="^[0-9+-]+$"
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
              pattern="[A-Za-z0-9,\s]+"
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
              pattern="^\d{5}(?:[-\s]\d{4})?$"
              name="zip-code"
            />
            <p>invalid format!!</p>
          </label>
          <label className="label" htmlFor="city">
            City
            <input
              type="text"
              onChange={formVal}
              pattern="[A-Za-z0-9,\s]+"
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
              pattern="[A-Za-z0-9,-\s]{3,}"
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
            <label htmlFor="card">
              <input
                type="radio"
                name="payment"
                value="card"
                id="card"
                required
              />
              Pay with card
            </label>
            <label htmlFor="crypto">
              <input
                type="radio"
                name="payment"
                value="crypto"
                id="crypto"
                required
              />
              Pay with crypto
            </label>
          </div>
        </div>
      </div>
      <Summary />
      {searchParams.get('ordersuccess') &&
        ReactDOM.createPortal(
          <OrderSuccess />,
          document.getElementById('modal-root')!
        )}
    </Form>
  )
}

export default Checkout
