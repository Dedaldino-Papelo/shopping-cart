import React from 'react'
import './checkout.style.css'
import trash from '../../assets/trash.svg'

const CheckoutItem = ({cartItem}) => {
    const {name,price,quantity} = cartItem
  return (
    <div className='checkout-item'>
    <span className='name'>{name}</span>
    <span className='quantity'>
        <div className='arrow'>&#10094;</div>
        <span className='value'> {quantity}</span>
        <div className='arrow' >&#10095;</div>
    </span>
    <span className='price'>{price}</span>
    <div className='remove-button'>
      <img src={trash} alt='trash' />
    </div>
</div>
  )
}

export default CheckoutItem
