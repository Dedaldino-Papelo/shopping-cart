import React from 'react'
import './checkout.style.css'
import trash from '../../assets/trash.svg'
import { useDispatch } from 'react-redux'
import { removeCartItem } from '../../Redux/cart/cart.actions'
import { addCart_Item, decreseCartItem } from '../../Redux/cart/cart.actions'

const CheckoutItem = ({cartItem}) => {
    const {name,price,quantity} = cartItem

    const dispatch = useDispatch()
  return (
    <div className='checkout-item'>
    <span className='name'>{name}</span>
    <span className='quantity'>
        <div className='arrow' onClick={() => dispatch(decreseCartItem(cartItem))}>&#10094;</div>
        <span className='value'> {quantity}</span>
        <div className='arrow' onClick={() => dispatch(addCart_Item(cartItem))}>&#10095;</div>
    </span>
    <span className='price'>{price}</span>
    <div className='remove-button'>
      <img src={trash} alt='trash' onClick={() => dispatch(removeCartItem(cartItem)) } />
    </div>
</div>
  )
}

export default CheckoutItem
