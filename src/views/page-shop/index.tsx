"use client"
import React,{useState,useEffect} from 'react'
import {GrPowerReset} from 'react-icons/gr'
import Card from './components/Card'
import {useQuery} from 'react-query'
import Image from 'next/image'


const fetchProducts = async() =>{
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const res = await fetch('https://fakestoreapi.com/products')
    return res.json()
  }
const ShopUi = () => {
   const{data, status} = useQuery('products',fetchProducts)
   console.log("DATA PAKHI",data);

// -----------------------sort by price -----------
   const [sortBy, setSortBy] = useState('');
   const sortedProducts = () => {
    if (sortBy === 'maxToMin') {
      return data.slice().sort((a:any, b:any) => b.price - a.price);
    } else if (sortBy === 'minToMax') {
      return data.slice().sort((a:any, b:any) => a.price - b.price);
    } else {
      return data; // Default sorting, no change
    }
  };
// -----------------------sort by price -----------
  const handleRefresh = () => {
    setSortBy(''); // Reset sorting filter
  };

  return (
    <>
    {
        status === 'error' && (
          <div>
            <h1 className='text-xl text-white'>Error Occured</h1>
          </div>
        )
       }
       {
        status === 'loading' && (
          <div className='w-screen h-screen flex justify-center items-center bg-gradient-to-r from-rose-100 to-teal-100'>
            <div className='text-center'>
            <div>
                <Image
                    src="/images/DailyShopLogo.png"
                    alt=""
                    width={500}
                    height={500}
                    className='w-[200px] h-[200px] object-cover'
                />
            </div>
             <p className='text-5xl'><span className="loading loading-dots loading-lg text-primary"></span></p>
            </div>
          </div>
        )
       }
       {
        status === 'success' &&(
            <div className='_container'>
                <div className='flex md:hidden justify-between items-center fixed top-[84px] left-0 right-0 z-20 bg-white px-6 py-3'>
                        <div className=''>
                            <select className="select select-bordered w-full max-w-xs"
                            id="sortSelect"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="">Price</option>
                                <option value="maxToMin">Max to Min</option>
                                <option value="minToMax">Min to Max</option>
                            </select>
                        </div>
                        <div className=''>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Type</option>
                                <option>Shirt</option>
                                <option>Pant</option>
                                <option>Shoe</option>
                                <option>Cap</option>
                            </select>
                        </div>
                        <div className=''>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Brand</option>
                                <option>Gucci</option>
                                <option>Yellow</option>
                            </select>
                        </div>
                </div>
                <div className='py-44 md:py-28 flex justify-normal items-start gap-3'>
                    <div className='hidden md:block w-[20%]'>
                        <div className='flex justify-between items-center mb-6 me-4'>
                            <p className='text-lg font-medium text-pc'>Filter</p>
                            <button onClick={handleRefresh} className='text-pc'><GrPowerReset/></button>
                        </div>
                        <div className='w-[92%] mb-3'>
                            <select className="select select-bordered w-full max-w-xs"
                            id="sortSelect"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="">Price</option>
                                <option value="maxToMin">Max to Min</option>
                                <option value="minToMax">Min to Max</option>
                            </select>
                        </div>
                        <div className='w-[92%] mb-3'>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Type</option>
                                <option>Shirt</option>
                                <option>Pant</option>
                                <option>Shoe</option>
                                <option>Cap</option>
                            </select>
                        </div>
                        <div className='w-[92%] mb-3'>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Brand</option>
                                <option>Gucci</option>
                                <option>Yellow</option>
                            </select>
                        </div>
                    </div>
                    <div className='border-l-0 md:border-l-2 ps-0 md:ps-8 w-full md:w-[80%]'>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                         {
                            sortedProducts().map((item: any) => (
                            <div key={item.id} className=''>
                                <Card item={item} />
                            </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        )
       }
    </>
  )
}

export default ShopUi