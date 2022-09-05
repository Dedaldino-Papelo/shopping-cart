import React from 'react'
import './menu.style.css'
import CartIcon from '../cart-icon/Cart-icon'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className='menu'>
            <div className='menu-items'>
                <Link to='/'>
                    <h4 className='logo'>Burger</h4>
                </Link>
                <div className='options'>
                    <CartIcon />
                </div>
            </div>
        </div>
    )
}

export default Menu
