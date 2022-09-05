import {combineReducers} from 'redux'

import { products_reducer } from './products/product.reducer'
import { cart_reducer } from './cart/cart.reducer'
import { order_reducer } from './orders/order.reducer'

export default combineReducers({
    products: products_reducer,
    cart: cart_reducer,
    order: order_reducer 
})