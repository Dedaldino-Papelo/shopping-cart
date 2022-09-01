import React from 'react'
import './menu.style.css'
import CartIcon from '../cart-icon/Cart-icon'

const Menu = () => {
    return (
        <div className='menu'>
            <h4>Burger</h4>
            <div className='options'>
                <CartIcon />
            </div>
        </div>
    )
}

export default Menu
