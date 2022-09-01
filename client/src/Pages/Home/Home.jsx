import React from 'react'
import './home.style.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Products from '../../Components/Product/Products'


const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/products")
        .then(resp => {
            setProducts(resp.data)
        }).catch(err => console.log(err))
    },[])

  return (
    <div className='Home'>
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
