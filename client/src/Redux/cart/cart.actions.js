import { cart_types } from "./cart.type";


export const addCart_Item = (product)  => ({
    type: cart_types.ADD_CART,
    payload: product
})

export const removeCartItem = (item) => ({
    type: cart_types.REMOVE_CART_ITEM, 
    payload: item
})