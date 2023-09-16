import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className="footer p-10 bg-gradient-to-r from-rose-100 to-teal-100 text-base-content">
        <aside>
        <Image
        src="/images/DailyShopLogo.png"
        alt=""
        width={500}
        height={500}
        className='w-[90px] h-[90px] object-cover'
      />
            <p>Daily Shop Ltd.<br/>Providing reliable shopping since 2009</p>
        </aside> 
        <nav>
            <header className="footer-title">Services</header> 
            <a className="link link-hover">Vegetables</a> 
            <a className="link link-hover">Meats</a> 
            <a className="link link-hover">Electronics</a> 
            <a className="link link-hover">Home Decor</a>
        </nav> 
        <nav>
            <header className="footer-title">Company</header> 
            <a className="link link-hover">About us</a> 
            <a className="link link-hover">Contact</a> 
            <a className="link link-hover">Jobs</a> 
            <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
            <header className="footer-title">Legal</header> 
            <a className="link link-hover">Terms of use</a> 
            <a className="link link-hover">Privacy policy</a> 
            <a className="link link-hover">Cookie policy</a>
        </nav>
    </footer>
  )
}

export default Footer