import React from 'react'

let Shirt = 'https://res.cloudinary.com/dfoqi8rjf/image/upload/v1676279621/Ecommerce-shop/shirt_hreon5.jpg';

function Wishlist() {
  return (
    <>
    <section className='xs:w-10/12 lg:w-8/12 mx-auto py-10'>
        <div className='flex flex-col gap-5'>
            <span className='flex gap-2 items-center'><h3 className='font-medium text-xl'>My Wishlist</h3><p className=''>3 items</p></span>
            <div className='grid grid-cols-1  md:grid-cols-4 gap-5'>
                <div className='flex flex-col rounded-xl overflow-hidden'>
                    <img className='rounded-t-xl object-cover' src={Shirt} alt="shirt" />
                    <div className='text-center py-1'>
                        <h3 className='font-medium text-lg'>Pullover Hoodie</h3>
                        <p className='text-sm'>Men's Hoodie</p>
                        <h3 className='font-medium text-lg'>$150.00</h3>
                    </div>
                    <div>
                        <button className='bg-black text-white w-full h-10'>Add to Cart</button>
                    </div>
                </div>
                <div className='flex flex-col rounded-xl overflow-hidden'>
                    <img className='rounded-t-xl object-cover' src={Shirt} alt="shirt" />
                    <div className='text-center py-1'>
                        <h3 className='font-medium text-lg'>Pullover Hoodie</h3>
                        <p className='text-sm'>Men's Hoodie</p>
                        <h3 className='font-medium text-lg'>$150.00</h3>
                    </div>
                    <div>
                        <button className='bg-black text-white w-full h-10'>Add to Cart</button>
                    </div>
                </div>
                <div className='flex flex-col rounded-xl overflow-hidden'>
                    <img className='rounded-t-xl object-cover' src={Shirt} alt="shirt" />
                    <div className='text-center py-1'>
                        <h3 className='font-medium text-lg'>Pullover Hoodie</h3>
                        <p className='text-sm'>Men's Hoodie</p>
                        <h3 className='font-medium text-lg'>$150.00</h3>
                    </div>
                    <div>
                        <button className='bg-black text-white w-full h-10'>Add to Cart</button>
                    </div>
                </div>
                <div className='flex flex-col rounded-xl overflow-hidden'>
                    <img className='rounded-t-xl object-cover' src={Shirt} alt="shirt" />
                    <div className='text-center py-1'>
                        <h3 className='font-medium text-lg'>Pullover Hoodie</h3>
                        <p className='text-sm'>Men's Hoodie</p>
                        <h3 className='font-medium text-lg'>$150.00</h3>
                    </div>
                    <div>
                        <button className='bg-black text-white w-full h-10'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Wishlist