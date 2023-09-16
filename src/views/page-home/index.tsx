import React from 'react'
import Link from 'next/link'

const HomeUi = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://img.freepik.com/premium-photo/people-sharing-shopping-tips-information_670382-109351.jpg?w=2000)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">Daily Shop</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Link href={"/shop"}>
              <button className="btn btn-primary text-white">Shop Now</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default HomeUi