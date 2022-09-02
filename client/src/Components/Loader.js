import React from 'react'
import {Spinner} from 'react-bootstrap'

const Loader = () => {
  return (
    <div>
      <Spinner 
      animation="border"
      variant='warning'
      role="status"
      style={{ 
          width: '50px', 
          height: '50px',
          margin:'auto',
          display: 'block' }}
      >
         
      </Spinner>
    </div>
  )
}

export default Loader
