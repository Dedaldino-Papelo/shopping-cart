export const addItemToCart = (cartItems, newCartItems) => {

    const existingItem = cartItems.find(cartItem => (
        cartItem.id === newCartItems.id
    ))

    if(existingItem){
        return cartItems.map(cartItem => (
            cartItem.id === newCartItems.id 
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        ))
    }
    return [...cartItems, {newCartItems, quantity: 1}]
}