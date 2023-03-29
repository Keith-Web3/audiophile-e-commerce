import React, { useContext } from 'react'

import { calculateTotal } from './Cart'
import checkIcon from '../../assets/checkout/icon-order-confirmation.svg'
import CartContext from '../store/CartContextProvider'
import Button from '../UI/Button'
import '../../sass/shared/ordersuccess.scss'

const OrderSuccess: React.FC = function () {
  const ctx = useContext(CartContext)

  return (
    <div className="order-success">
      <div className="modal">
        <img src={checkIcon} alt="success" />
        <p className="title">THANK YOU FOR YOUR ORDER</p>
        <p>You will receive an email confirmation shortly.</p>
        <div className="summary">
          <div className="main">
            <img src={ctx.items[0].imgUrl} alt={ctx.items[0]?.name} />
            <p className="name">{ctx.items[0].name}</p>
            <p className="price">{ctx.items[0].price}</p>
            <p className="count">x{ctx.items[0].count}</p>
            {ctx.items.length - 1 ? (
              <>
                <div className="line"></div>
                <p className="others">
                  and {ctx.items.length - 1} other item(s)
                </p>
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
                Math.round(calculateTotal(ctx.items) * 1.2) + 50
              )}
            </p>
          </div>
        </div>
        <Button className="button-one">back to home</Button>
      </div>
      <div className="backdrop"></div>
    </div>
  )
}

export default OrderSuccess
