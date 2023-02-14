import React from 'react';

let user = 'https://res.cloudinary.com/dfoqi8rjf/image/upload/v1676270820/Ecommerce-shop/vxx_npuato.webp';

function Account() {
  return (
    <>
    <section className='xs:w-10/12 lg:w-8/12 mx-auto'>
        <div className='grid grid-cols-1 xs:gap-10 md:gap-5 lg:gap-10 md:grid-cols-4 py-10'>
            <div className='border-2 rounded-xl px-5 relative overflow-hidden'>
                <h3 className='pt-3 font-medium text-lg'>Account</h3>
                <p className='text-base'>Jane doe</p>
                <hr className='my-2' />
                <ul className='flex flex-col xs:gap-3 md:gap-1 lg:gap-3'>
                    <li>Orders</li>
                    <li>Wishlist</li>
                    <li>Gift cards</li>
                    <li>Contact</li>
                </ul>
                <hr className='my-2' />
                <ul className='flex flex-col xs:gap-3 md:gap-1 lg:gap-3 xs:pb-20 lg:pb-0'>
                    <li>Coupons</li>
                    <li>Saved Cards</li>
                    <li>Saved Addresses</li>
                </ul>
                <button className=' flex items-center justify-center bg-black h-10 text-white w-full absolute bottom-0 right-0'><i class="fa-solid fa-arrow-right-from-bracket pr-2"></i>Logout</button>
            </div>
            <div className='md:col-span-3 flex flex-col gap-8'>
                <div className='flex justify-between lg:pr-10'>
                    <div className='flex gap-3'>
                        <img className='h-14' src={user} alt="user" />
                        <span className='flex flex-col'><h1 className='font-medium text-xl'>Hi... jane doe</h1><p className='text-sm'>Janedoe@xxxx.com</p></span>
                    </div>
                    <button className='border-2 h-fit rounded-xl px-4 text-sm hover:bg-black hover:text-white'>Edit Profile</button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    <div className='border-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 rounded-xl xs:py-7 md:py-4 lg:py-7 px-2 flex flex-col justify-center items-center'>
                        <span><i class="text-3xl fa-solid fa-truck"></i></span>
                        <h4 className='text-center'>Orders</h4>
                        <p className='text-xs text-center'>Check your orders status</p>
                    </div>
                    <div className='border-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 rounded-xl xs:py-7 md:py-4 lg:py-7 px-2 flex flex-col justify-center items-center'>
                        <span><i class="text-3xl fa-regular fa-heart"></i></span>
                        <h4 className='text-center'>Whishlist</h4>
                        <p className='text-xs text-center'>Check your orders status</p>
                    </div>
                    <div className='border-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 rounded-xl xs:py-7 md:py-4 lg:py-7 px-2 flex flex-col justify-center items-center'>
                        <span><i class="text-3xl fa-regular fa-credit-card"></i></span>
                        <h4 className='text-center'>Saved Card</h4>
                        <p className='text-xs text-center'>Save your cards for faster checkout</p>
                    </div>
                    <div className='border-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 rounded-xl xs:py-7 md:py-4 lg:py-7 px-2 flex flex-col justify-center items-center'>
                        <span><i class="text-3xl fa-solid fa-location-dot"></i></span>
                        <h4 className='text-center'>Addresses</h4>
                        <p className='text-xs text-center'>Save addresses for a hassle free checkout</p>
                    </div>
                    <div className='border-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 rounded-xl xs:py-7 md:py-4 lg:py-7 px-2 flex flex-col justify-center items-center'>
                        <span><i class="text-3xl fa-solid fa-gift"></i></span>
                        <h4 className='text-center'>Gift Cards</h4>
                        <p className='text-xs text-center'>Check your orders status</p>
                    </div>
                    <div className='border-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 rounded-xl xs:py-7 md:py-4 lg:py-7 px-2 flex flex-col justify-center items-center'>
                        <span><i class="text-3xl fa-solid fa-circle-dollar-to-slot"></i></span>
                        <h4 className='text-center'>Coupons</h4>
                        <p className='text-xs text-center'>Manage coupons for additional discounts</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Account