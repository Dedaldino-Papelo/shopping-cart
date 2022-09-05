import React from 'react'
import './products.style.css'
import {useDispatch} from 'react-redux'
import { addCart_Item } from '../../Redux/cart/cart.actions'
import CustomButton from '../custom-button/Custom-button'

const Products = ({product}) => {
    const {name, image, price} = product

    const dispatch = useDispatch()

  return (
    <div className='grid-item'>
        <img src={image} alt={name} />
        <div className='body'>
            <div className='info'>
                <h3 className='product-name'>{name}</h3>
                <h4 className='product-price'>{price} Kz</h4>
            </div>

          <CustomButton onClick={() => dispatch(addCart_Item(product))}>
            Add to Cart
          </CustomButton>

        </div>
    </div>
  )
}

export default Products
