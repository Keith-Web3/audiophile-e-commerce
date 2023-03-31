import React, { useContext } from 'react'

import { calculateTotal } from './Cart'
import checkIcon from '../../assets/checkout/icon-order-confirmation.svg'
import CartContext from '../store/CartContextProvider'
import Button from '../UI/Button'
import '../../sass/shared/ordersuccess.scss'
import { Link } from 'react-router-dom'

const OrderSuccess: React.FC = function () {
  const ctx = JSON.parse(localStorage.getItem('store')!)

  return (
    <div className="order-success">
      <div className="modal">
        <img className="check" src={checkIcon} alt="success" />
        <p className="title">THANK YOU FOR YOUR ORDER</p>
        <p className="confirmation">
          You will receive an email confirmation shortly.
        </p>
        <div className="order-summary">
          <div className="main">
            <img src={ctx[0].imgUrl} alt={ctx[0]?.name} />
            <p className="name">{ctx[0].name}</p>
            <p className="price">{ctx[0].price}</p>
            <p className="count">x{ctx[0].count}</p>
            {ctx.length - 1 ? (
              <>
                <div className="line"></div>
                <p className="others">and {ctx.length - 1} other item(s)</p>
              </>
            ) : (
              ''
            )}
          </div>
          <div className="total">
            <p>Grand Total</p>
            <p>
              $
              {new Intl.NumberFormat('en-US').format(
                Math.round(calculateTotal(ctx) * 1.2) + 50
              )}
            </p>
          </div>
        </div>
        <Button className="button-one">
          <Link to="/">back to home</Link>
        </Button>
      </div>
    </div>
  )
}

export default OrderSuccess
