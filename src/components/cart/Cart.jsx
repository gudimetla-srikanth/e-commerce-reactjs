import React from 'react'
import './Cart.css'
import CloseIcon from '@mui/icons-material/Close';
import CartItem from '../cartitem/CartItem'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
export default function Cart({ open, set }) {
  const cartdata = useSelector(state => state.data.cart)
  const total = useSelector(state => state.data.total)
  return (
    <div className="cart">
      <CloseIcon className='cart_close' onClick={() => set(false)} />
      <div className="cart_items_header"><h3>your cart items are</h3></div>
      <div className="cart_items">
        {cartdata?.map((data) => {
          return <CartItem data={data} key={data.id} />
        })}
      </div>
      <div className="total">Total : ${total}</div>
      <div className="order_Now" onClick={() => {
        alert("The payment page is not added")
      }}>Order Now</div>
    </div>
  )
}
