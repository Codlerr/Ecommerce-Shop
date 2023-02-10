import React from 'react'

function navbar() {
  return (
    <>
    <header className='flex justify-around items-center h-24 shadow-md'>
      <ul className='xs:hidden md:flex lg:pl-40 gap-5 text-xl font-normal'>
        <li>Top Wear</li>
        <li>Bottom Wear</li>
        <li>Footerwear</li>
      </ul>
      <div className='relative'>
        <input className='border-2 rounded-3xl border-gray-500 w-full xs:w-[200px] lg:w-[500px] p-1.5 outline-none xs:text-xs md:text-base' type="search" placeholder='Search for Products, Brands, More....' />
        <i class=" absolute xs:right-2 md:right-8 xs:top-0.5 md:top-1 text-xl fa-solid fa-magnifying-glass"></i>
      </div>
      <div className='flex gap-8 text-2xl'>
        <i class="fa-regular fa-user"></i>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </header>
    </>
  )
}

export default navbar