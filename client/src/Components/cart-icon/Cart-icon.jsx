import React from 'react'
import './cart-icon.style.css'
import {ReactComponent as ShoppingIcon} from '../../assets/cart.svg'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CartIcon = () => {
  const navigate = useNavigate()

  const cart = useSelector(state => state.cart)
  const {cartItems} = cart

  const itemCount = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.quantity
  },0)
  
  return (
    <div className='cart-icon' onClick={() => navigate("/checkout")}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
  )
}

export default CartIcon
