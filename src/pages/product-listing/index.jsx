import React from 'react'
import {Products} from '../../components/constant';
import RangeBar from '../../components/range';
import { useNavigate } from "react-router-dom";

let Offer = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1675926322/Ecommers-shop/off_dvqfpi.jpg'
let sale = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1675930874/Ecommers-shop/sale_vtf7oy.png'

function ProductListing() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/product-page");
  }
  return (
    <>
      <section className='p-5 flex xs:flex-col-reverse md:flex-row flex-1 gap-5'>
        {/* FILTER */}
          <div className='flex flex-col gap-5'>
           <img className='rounded-2xl object-cover' src={Offer} alt="offer" />

           <div className='border-[1px] border-gray-300 rounded-2xl p-5'>
              <h3 className='font-medium text-lg'>Filters</h3>
              <div>
                <RangeBar/>
                <ul className='flex flex-col gap-3 font-medium text-sm py-5'>
                  <li>BRAND</li>
                  <li>SIZE</li>
                  <li>COLOUR</li>
                  <li>DISCOUNT</li>
                  <li>CUSTOMER RATING</li>
                  <li>OFFERS</li>
                  <li>AVAILABILITY</li>
                </ul>
              </div>
           </div>
           <img className='rounded-3xl object-cover' src={sale} alt="sale" />
          </div>

          {/* Products */}
          <div className='md:flex flex-3 flex-col md:pb-40'>
            {/* head */}
            <div>
              <div className='text-lg md:pb-5'>
                <a href="/">Home</a> / <a href="/">Top wear</a> / <a href='/' className='font-medium'>Men's Hoodie</a>
              </div>
              <p className='font-medium text-lg'>Men's Clothing</p>
              <p>(showing 1-40 Products of 1340 Products)</p>
              <div className='flex flex-wrap gap-3 py-3'>
                <p className='bg-black rounded-xl text-white px-3 text-sm'>Popularity</p>
                <p className='border-black border-2 rounded-xl px-3 text-sm'>Price Low to high</p>
                <p className='border-black border-2 rounded-xl px-3 text-sm'>Price High to Low</p>
                <p className='border-black border-2 rounded-xl px-3 text-sm'>Newest first</p>
                <p className='border-black border-2 rounded-xl px-3 text-sm'>Adidas</p>
                <p className='border-black border-2 rounded-xl px-3 text-sm'>Puma</p>
              </div>
            </div>

            {/* items */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10'>
                    {Products.map((item,i) =>
                    <div key={i} onClick={handleClick}>
                        <div className='relative cursor-pointer'>
                          <img className='rounded-t-3xl' src={item.img} alt="product" />
                          <i class="absolute top-5 right-5 text-white fa-regular fa-heart"></i>
                        </div>
                        <div className='relative pt-3'>
                          <h3 className='font-medium text-lg'>{item.title}</h3>
                          <p className='text-sm'>{item.catg}</p>
                          <p className='flex gap-2 font-medium text-lg'>${item.price} <span className='flex items-center font-normal gap-2 text-sm'><p className='line-through'>${item.ogprice}</p><p className='text-green-400'>{item.off}% Off</p></span></p>
                          <i class="absolute bottom-0 right-0 text-4xl cursor-pointer fa-solid fa-circle-plus"></i>
                        </div>
                    </div>
                        )}

  
                    
              </div>
          </div>
      </section>
    </>
  )
}

export default ProductListing