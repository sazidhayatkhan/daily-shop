import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import {BsTrash} from 'react-icons/bs'
import { useSelector,useDispatch } from 'react-redux'
import {remove} from '@/store/cartSlice'
const SideCart = ({ isOpen, onClose }:any) => {

  const closeCart = () => {
    onClose();
  };
  const dispatch = useDispatch()
  const removeFromCart =(id:any) => {
    dispatch(remove(id))
  }
  const cartProducts = useSelector(state => state.cart)
  
  const totalPrice = cartProducts.reduce((total:any, item:any) => total + item.price, 0);
  return (
    <div
      className={`drop-shadow-sm fixed right-0 top-0 h-full w-[400px] bg-white z-50 transform transition-transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="bg-gradient-to-r from-rose-100 to-teal-100 flex justify-between py-5 px-4 border-b text-black">
        <h2 className="text-xl font-semibold">Shopping Cart</h2>
        <button onClick={closeCart}>Close</button>
      </div>
      {
        cartProducts.length > 0 ? (
          <>
          <div className='h-[calc(100vh-160px)] overflow-hidden overflow-y-auto'>
      {
        cartProducts.map((item:any)=>(
          <>
          <div key={item.id} className='flex justify-normal items-start gap-3 p-4'>
            <div className="w-[20%] border">
              <Image
              src={item.image || '/images/67.jpg'}
              alt=""
              width={1000}
              height={1000}
              className="w-[70px] h-[90px] object-contain p-2"
              />
            </div>
            <div className='w-[72%]'>
              <p className="font-semibold mb-2">{item.title}</p>
              <p>${Math.round(item.price)}</p>
            </div>
            <div className="w-[8%]">
              <button className='text-red-600' onClick={()=>removeFromCart(item.id)}><BsTrash/></button>
            </div>
          </div>
          <hr/>
          </>
        ))
      }
      </div>
      <div className='w-full bg-gradient-to-r from-rose-100 to-teal-100 p-4'>
        <div className='flex justify-between items-center mb-3 font-semibold'>
          <p className=''>Subtotal</p>
          <p className='text-end'>${Math.round(totalPrice)}</p>
        </div>
        <Link href={"/cart"}>
          <button onClick={closeCart} className='bg-white text-pc border border-pc w-full py-1 text-sm rounded-md font-semibold'>Checkout</button>
        </Link>
      </div>
          </>
        ) : (
          <>
          <div className='mt-28 flex justify-center items-center'>
           <div className='text-center'>
                <Image
                src="/images/empty.webp"
                alt=""
                width={1000}
                height={1000}
                className='w-[300px] h-[300px] object-contain'
                />
              <p className='text-pc mt-[-30px] text-lg font-semibold'>Cart is Empty</p>
           </div>
          </div>
          </>
        )
      }
      

      
      {/* Cart items and total here */}
    </div>
  );
};

export default SideCart;
