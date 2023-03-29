import React from 'react'
import { Form, To, useNavigate } from 'react-router-dom'

import '../../../sass/pages/checkout/checkout.scss'
import Summary from './Summary'

export const checkoutAction = async function ({
  request,
}: {
  request: Request
}) {
  const data = await request.formData()
  console.log(data)
}
const Checkout: React.FC = function () {
  const navigate = useNavigate()

  return (
    <Form method="post" action="/checkout" className="checkout">
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
              pattern="^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$"
              name="name"
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
            <input type="text" placeholder="+1 202-555-0136" name="phone" />
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
              pattern="^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$"
              required
            />
            <p>invalid format!!</p>
          </label>
          <label className="label" htmlFor="zip-code">
            ZIP Code
            <input
              type="text"
              placeholder="10001"
              pattern="^\d{5}(?:[-\s]\d{4})?$"
              name="zip-code"
            />
            <p>invalid format!!</p>
          </label>
          <label className="label" htmlFor="city">
            City
            <input type="text" placeholder="New York" name="city" required />
            <p>This field is required</p>
          </label>
          <label className="label" htmlFor="country">
            Country
            <input
              type="text"
              placeholder="United States"
              name="country"
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
