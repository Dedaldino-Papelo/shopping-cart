import React from 'react'
import './home.style.css'
import { useEffect } from 'react'
import Products from '../../Components/Product/Products'
import {useSelector, useDispatch} from 'react-redux'
import { product_actions } from '../../Redux/products/product.actions'
import Loader from '../../Components/Loader'
import Header from '../../Components/header/Header'


const Home = () => {

  const dispatch = useDispatch()

  const productsList = useSelector(state => state.products)
  const {loading, products, error} = productsList

  useEffect(() =>{
    dispatch(product_actions())
  },[dispatch])

  return (
    <div className='Home'>
      <Header />
      
      {loading && <Loader />}
      {error && <h2>{error}</h2>}
      
      <div className='home-container'>
      {
        products.map(prod => (
            <Products key={prod._id} product={prod} />
        ))
      }    
    </div>
    </div>
  )
}

export default Home
