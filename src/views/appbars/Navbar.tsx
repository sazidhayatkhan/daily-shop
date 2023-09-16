"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SideCart from '@/components/SideCart'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(true);
  };
  const cartProducts = useSelector(state => state.cart)
  return (
    <>
    <div className="navbar bg-gradient-to-r from-rose-100 to-teal-100 fixed top-0 z-20">
  <div className="ms-4 flex-1">
    <Link href={"/"}>
      <Image
        src="/images/DailyShopLogo.png"
        alt=""
        width={500}
        height={500}
        className='w-[70px] h-[70px] object-cover'
      />
    </Link>
  </div>
  <div className="flex-none">
    <div className='me-4'>
      {/* <button onClick={toggleCart} className='text-3xl'><AiOutlineShoppingCart/></button> */}
    <button onClick={toggleCart} type="button" className="relative inline-flex items-center p-3 text-3xl font-medium text-center">
                    <AiOutlineShoppingCart/>
                    {cartProducts?.length > 0 &&
                        <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-pc border-2 border-white rounded-full top-[2px] right-1">{cartProducts.length}</div>
                    }
                </button>
    </div>
    <div className="dropdown dropdown-end ">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar me-4">
        <div className="">
          <Image 
          src="/images/33.jpg"
          alt=""
          width={1000}
          height={1000}
          className="w-10 rounded-full"
          />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-40 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
<SideCart isOpen={isCartOpen} onClose={()=>setCartOpen(false)}/>
</>
  )
}

export default Navbar