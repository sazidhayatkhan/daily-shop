"use client"
import CartUi from '@/views/page-cart'
import React from 'react'
import {Provider} from 'react-redux'
import store from '@/store/store'


const Cart = () => {
  return (
    <Provider store={store}>
        <div className=''>
            <CartUi/>
        </div>
    </Provider>
  )
}

export default Cart