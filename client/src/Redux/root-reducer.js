import {combineReducers} from 'redux'

import { products_reducer } from './products/product.reducer'
import { cart_reducer } from './cart/cart.reducer'

export default combineReducers({
    products: products_reducer,
    cart: cart_reducer 
})