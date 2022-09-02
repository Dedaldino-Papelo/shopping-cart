import React from 'react'
import {Spinner} from 'react-bootstrap'

const Loader = () => {
  return (
    <div>
      <Spinner 
      animation="grow"
      variant='warning'
      role="status"
      style={{ 
          width: '40px', 
          height: '40px',
          margin:'auto',
          display: 'block' }}
      >
         
      </Spinner>
    </div>
  )
}

export default Loader
