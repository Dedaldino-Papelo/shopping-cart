export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem._id === cartItemToAdd._id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem._id === cartItemToAdd._id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const decrease_item = (cartItems, cartItemToDecrease) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem._id === cartItemToDecrease._id
  );

    if(existingCartItem.quantity === 1){
      return cartItems.filter(cartItem =>
        cartItem._id === cartItemToDecrease._id )
    }

    return cartItems.map(cartItem =>
      cartItem._id === cartItemToDecrease._id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
}