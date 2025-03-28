import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className="multifields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='email address' />
        <input type="text" placeholder='street' />
        <div className="multifields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multifields">
          <input type="text" placeholder='Pin Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='phone' />
      </div>
      <div className='place-order-right'>
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-deltails">
              <p>SubTotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-deltails">
              <b>Delivery Fee</b>
              <p>{20}</p>
            </div>
            <hr />
            <div className="cart-total-deltails">
              <b>Total</b>
              <p>{getTotalCartAmount() + 20}</p>
            </div>
            <hr />
          </div>
          <button >PROCEED TO PAYMENT</button>
        </div>
      </div>

    </form>
  )
}

export default PlaceOrder
