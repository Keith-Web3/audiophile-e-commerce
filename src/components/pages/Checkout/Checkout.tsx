import React from 'react'
import { Form, To, useNavigate } from 'react-router-dom'

import '../../../sass/pages/checkout/checkout.scss'
import Summary from './Summary'

const Checkout: React.FC = function () {
  const navigate = useNavigate()

  return (
    <div className="checkout">
      <p className="back" onClick={() => navigate(-1 as To, { replace: true })}>
        go back
      </p>
      <Form method="post">
        <h1>Checkout</h1>
        <div className="billing-details">
          <h2>billing details</h2>
          <label className="label" htmlFor="name">
            Name
            <input type="text" placeholder="Alexei Ward" name="name" />
          </label>
          <label className="label" htmlFor="email">
            Email Address
            <input type="email" placeholder="alexei@mail.com" name="email" />
          </label>
          <label className="label" htmlFor="phone">
            Phone Number
            <input type="text" placeholder="+1 202-555-0136" name="phone" />
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
            />
          </label>
          <label className="label" htmlFor="zip-code">
            ZIP Code
            <input type="text" placeholder="10001" name="zip-code" />
          </label>
          <label className="label" htmlFor="city">
            City
            <input type="text" placeholder="New York" name="city" />
          </label>
          <label className="label" htmlFor="country">
            Country
            <input type="text" placeholder="United States" name="country" />
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
      </Form>
      <Summary />
    </div>
  )
}

export default Checkout
