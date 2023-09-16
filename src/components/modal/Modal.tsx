"use client"
import React,{useState} from 'react';
import styles from './modal.module.css'
import {AiFillCloseCircle,AiOutlineHeart} from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'
import SideCart from '../SideCart';
// interface ModalProps {
// 	open: boolean;
// 	handleClose: () => void;
// 	children: React.ReactNode;
// 	clses?: string;
// }

const Modal = ({ isOpen, onClose, desc,imgUrl,title,slug }:any) => {
	const [isCartOpen, setCartOpen] = useState(false);

    const toggleCart = () => {
      setCartOpen(true)

    };
  return (
    <div className={`${styles.modal} ${isOpen ? `${styles.modal_open}` : ''}`}>
      <div className={`${styles.modal_content} bg-white w-[90%] md:w-[800px] rounded-xl p-6`}>
		<div className='text-end'>
			<button onClick={onClose} className='text-pc relative top-[0px] right-[0px] text-2xl'><AiFillCloseCircle/></button>
		</div>
		<div className='flex justify-normal items-center gap-3 pb-6'>
			<div className='w-[35%] md:w-[45%]'>
				<Image 
				src={imgUrl || "/images/jahan.jpg"}
				alt=""
				width={1000}
				height={1000}
				className="w-[100px] h-[100px] md:w-[320px] md:h-[400px] rounded-lg object-contain"
				/>
			</div>
			<div className='w-[65%] md:w-[55%]'>
				<p className='text-lg md:text-4xl mb-2 md:mb-5 font-bold'>{title}</p>
				<p className='text-xs md:text-base mt-2 md:mt-5 line-clamp-3 text-justify w-[90%]'>{desc}</p>
				<div className='mt-5 flex justify-start items-center gap-4'>
				<button onClick={toggleCart} className='bg-pc text-white px-8 py-2 rounded-md text-xs md:text-lg'>Buy Now</button>
					<button className='text-lg md:text-4xl'><AiOutlineHeart/></button>
				</div>
			</div>
			<SideCart isOpen={isCartOpen} onClose={()=>setCartOpen(false)}/>
		</div>
      </div>
    </div>
  );
};

export default Modal;

function setIsModalOpen(arg0: boolean) {
	throw new Error('Function not implemented.');
}
