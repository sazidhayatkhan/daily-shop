import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {remove} from '@/store/cartSlice'
import Image from 'next/image'
import { BsArrowLeft,BsShop } from 'react-icons/bs'
import Link from 'next/link'
const CartUi = () => {
    const dispatch = useDispatch()
  const removeFromCart =(id:any) => {
    dispatch(remove(id))
  }
  const cartProducts = useSelector(state => state.cart)
  
  const totalPrice = cartProducts.reduce((total:any, item:any) => total + item.price, 0);
  return (
    <div className=''>
        {
            cartProducts.length > 0 ? (
                <>
                <div className='flex justify-normal'>
            <div className='w-[70%] border-b-2 border-black'>
                <div className='flex justify-between items-center border-b-2 border-black p-4 mb-4'>
                    <p className='text-2xl font-semibold'>Shopping Cart</p>
                    <p className='text-lg font-semibold'>{cartProducts.length} Items</p>
                </div>
                <div className='h-[400px] overflow-hidden overflow-y-auto'>
                    {cartProducts.map((item:any)=>(
                        <div key={item.id} className='flex justify-normal items-start border border-black mx-4 p-3 rounded-md mb-3'>
                            <div className='w-[10%]'>
                                <Image
                                src={item.image ||'/images/67.jpg'}
                                alt=""
                                width={1000}
                                height={1000}
                                className="w-[70px] h-[90px] object-contain"
                                />
                            </div>
                            <div className='w-[80%]'>
                                <p className='text-lg font-medium'>{item.title}</p>
                                <p className='font-medium mb-2'>subtitle</p>
                                <p className='text-pc font-bold text-lg'>${Math.round(item.price)}</p>
                            </div>
                            <div className='w-[20%] text-end'>
                                <button className='text-red-600 font-medium' onClick={()=>removeFromCart(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='bg-gradient-to-r from-rose-100 to-teal-100 w-[30%] pb-6 border-b-2 border-black'>
                <div className='flex justify-between items-center border-b-2 border-black p-4'>
                    <p className='text-2xl font-semibold'>Order Summery</p>
                </div>
                <div className='flex justify-between items-center p-4 text-lg font-semibold'>
                    <p>{cartProducts.length} Item</p>
                    <p className='text-pc text-2xl font-bold'>${Math.round(totalPrice)}</p>
                </div>
                <div className='text-center mb-48'>
                    <p>Promo Code</p>
                </div>
                <div className='mx-4 flex justify-between items-center p-4 text-lg font-semibold border-t-2 border-black'>
                    <p>SUBTOTAL</p>
                    <p className='text-pc text-2xl font-bold'>${Math.round(totalPrice)}</p>
                </div>
                <div className='mx-4 mt-8'>
                    <button className='btn btn-outline btn-primary w-full'>Make Payement</button>
                </div>
            </div>
        </div>
        <div className='flex justify-between items-center mx-6 mt-8'>
                <div>
                    <Link href={'/shop'}>
                        <button className='border border-pc p-2 rounded-md flex justify-start items-center gap-2 text-pc font-semibold hover:bg-pc hover:text-white'><span><BsArrowLeft/></span>Continue Shopping</button>
                    </Link>
                </div>
                <div>
                    <Image
                        src="/images/DailyShopLogo.png"
                        alt=""
                        width={500}
                        height={500}
                        className='w-[100px] h-[100px] object-cover'
                    />
                </div>
        </div>
                </>
            ) : (
                <>
                <div className='w-screen h-screen flex justify-center items-center bg-gradient-to-r from-rose-100 to-teal-100'>
                    <div className='text-center'>
                        <p className='text-pc text-lg font-semibold'>Cart is Empty</p>
                        <Image
                        src="/images/empty.webp"
                        alt=""
                        width={1000}
                        height={1000}
                        className='w-[500px] h-[500px] object-contain mt-[-30px]'
                        />
                        <div className='flex justify-center mt-[-30px]'>
                            <Link href={'/shop'}>
                                <button className='border border-pc p-2 rounded-md flex justify-center items-center gap-2 text-pc font-semibold hover:bg-pc hover:text-white'><span><BsShop/></span>Go to Shop</button>
                            </Link>
                        </div>
                    </div>
                </div>
                </>
            )
        }
        
    </div>
  )
}

export default CartUi