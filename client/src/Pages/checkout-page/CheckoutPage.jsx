import React from 'react'
import './checkout.style.css'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutItem from '../../Components/checkout-item/CheckoutItem'
import CustomButton from '../../Components/custom-button/Custom-button'
import { useState } from 'react'
import { orderActions } from '../../Redux/orders/order.actions'
import { useNavigate } from 'react-router-dom'

const CheckoutPage = () => {
  const [nome, setNome] = useState('')
  const [sobrenome, setSobreNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cidade, setCidade] = useState('')
  const [rua, setRua] = useState('')
  const [bairro, setBairro] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const CreateOrder = useSelector(state => state.order)
  const {loading, order} = CreateOrder

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  let total = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.price * cartItem.quantity
  }, 0)

  const HandleSubmit = (e) => {
    e.preventDefault()
    dispatch(orderActions({
      nome,
      sobrenome,
      telefone,
      cidade,
      rua,
      bairro
    }))

    setNome('')
    setSobreNome('')
    setTelefone('')
    setCidade('')
    setBairro('')
    setRua('')

    if(order){
      navigate('/Success')
    }
  }

  return (
    <div className="checkout-page">
      <form className='checkout-form' onSubmit={HandleSubmit}>
        <div className='user-form'>
          <h2 className='header-title'>
            Forneça o seu Endereço de Entrega
          </h2>
          <div className='both user-name'>
            <input
              type='text'
              placeholder='Nome'
              value={nome}
               required
              onChange={(e) => setNome(e.target.value)} />

            <input
              type='text'
              placeholder='Sobrenome'
              value={sobrenome} 
              required
              onChange={(e) => setSobreNome(e.target.value)}
            />
          </div>

          <div className='full user-country'>
            <input
              type='text'
              placeholder='Telefone'
              value={telefone}
              required
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>

          <div className='full user-city'>
            <input
              type='text'
              placeholder='Cidade'
              value={cidade}
              required
              onChange={(e) => setCidade(e.target.value)}
            />
          </div>

          <div className='both user-address'>
            <input
              type='text'
              placeholder='Rua'
              value={rua}
              required
              onChange={(e) => setRua(e.target.value)}
            />
            <input
              type='text'
              placeholder='Bairro'
              value={bairro}
              required
              onChange={(e) => setBairro(e.target.value)}
            />
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
          <CustomButton loading={loading}>
            Finalizar Pedido
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default CheckoutPage
