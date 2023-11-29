'use client'


import React, { use } from 'react'
const AddToCartButton = () => {
  return (
    <div>
        <button onClick={() => console.log('button clicked from client side rendering')}> Add to cart</button>
    </div>
  )
}

export default AddToCartButton