import { cart_types } from "./cart.type";


export const addCart_Item = (product)  => ({
    type: cart_types.ADD_CART,
    payload: product
})