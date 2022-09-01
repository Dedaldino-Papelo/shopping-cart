import React from 'react'
import './products.style.css'

const Products = ({product}) => {
    const {name, image, price} = product
  return (
    <div className='grid-item'>
        <img src={image} alt={name} />
        <div className='body'>
            <div className='info'>
                <h3 className='title'>{name}</h3>
                <h4>{price} Kz</h4>
            </div>
        <button className='btn-cart'>Add to Cart</button>
        </div>
    </div>
  )
}

export default Products
