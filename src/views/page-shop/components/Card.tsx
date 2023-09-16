"use client"
import SideCart from '@/components/SideCart'
import Modal from '@/components/modal/Modal'
import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import {add} from '@/store/cartSlice'
type Props ={
    item?:any
}
const Card = ({item}:Props) => {
  const dispatch = useDispatch()
    const [isCartOpen, setCartOpen] = useState(false);

    const toggleCart = () => {
      setCartOpen(true);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    const addToCart = (item:any) =>{
      dispatch(add(item))
    }
  return (
    <div className="card card-compact bg-base-100 shadow-xl border">
        <div onClick={openModal} className='flex justify-center py-6'>
            <Image 
              src={item.image || '/images/67.jpg'}
              alt=""
              width={1500}
              height={1500}
              className="w-[200px] h-[120px] object-contain"
            />
        </div>
        <div className="card-body">
            <div onClick={openModal} className='cursor-pointer'>
                <h2 className="card-title line-clamp-1">{item.title}</h2>
                <p className='line-clamp-3'>{item.description}</p>
            </div>
            <div className="mt-4 card-actions flex justify-end items-center">
              <p className='text-3xl font-bold text-pc'>${Math.round(item.price)}</p>
              <button onClick={()=>addToCart(item)} className='btn btn-outline btn-primary'>Buy Now</button>
            <SideCart isOpen={isCartOpen} onClose={()=>setCartOpen(false)}/>
            <Modal isOpen={isModalOpen} onClose={closeModal} imgUrl={item.image || '/images/67.jpg'} desc={item.description} title={item.title} slug={item.title}/>
            </div>
        </div>
    </div>
  )
}

export default Card