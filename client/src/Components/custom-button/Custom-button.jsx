import React from 'react'
import './custom-button.style.css'

const CustomButton = ({children, loading, ...props}) => {
  return (
    <button className='custom-button' {...props}>
        {loading ? 'Loading': children}
    </button>
  )
}

export default CustomButton
