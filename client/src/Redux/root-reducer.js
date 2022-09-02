import {combineReducers} from 'redux'

import { products_reducer } from './products/product.reducer'

export default combineReducers({
    products: products_reducer
})