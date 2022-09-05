import React from 'react'
import './checkout.style.css'
import { useSelector } from 'react-redux'
import CheckoutItem from '../../Components/checkout-item/CheckoutItem'
import CustomButton from '../../Components/custom-button/Custom-button'

const CheckoutPage = () => {

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  let total = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.price * cartItem.quantity
  }, 0)

  const HandleSubmit = (e) => {
    e.preventDefault()
    alert("Iam working")
  }

  return (
    <div className="checkout-page">
      <form className='checkout-form' onSubmit={HandleSubmit}>
        <div className='user-form'>
          <h2 className='header-title'>
            Forneça o seu Endereço de Entrega
          </h2>
          <div className='both user-name'>
            <input type='text' placeholder='Nome' />
            <input type='text' placeholder='Sobrenome' />
          </div>

          <div className='full user-country'>
            <input type='text' placeholder='Telefone' />
          </div>

          <div className='full user-city'>
            <input type='text' placeholder='Cidade' />
          </div>

          <div className='both user-address'>
            <input type='text' placeholder='Rua' />
            <input type='text' placeholder='Bairro' />
          </div>

        </div>

        <div className='cart-items'>
          <h2 className='header-title'>Produtos do seu Carrinho</h2>
          {cartItems.length === 0 ? (
            <div className='empty-cart'> 
                <h3 className='empty'>Your Cart is Empty</h3>
            </div>
          ) :
            cartItems.map(cartItem => (
              <CheckoutItem key={cartItem._id} cartItem={cartItem} />
            ))
          }

          <div className='total-items'>
            <span className='total'>Total</span>
            <span className='total-number'>KZ {total}</span>
          </div>
          <CustomButton>
            Finalizar Pedido
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default CheckoutPage
