import React from 'react'

let Psm= 'https://res.cloudinary.com/dfoqi8rjf/image/upload/v1676008691/Ecommerce-shop/imgs_pm48ey.png';


function AllOrders() {
  return (
    <>
    <section className="xs:w-10/12 lg:w-8/12 mx-auto">
        <div className="grid grid-cols-1 xs:gap-10 md:gap-5 lg:gap-10 md:grid-cols-4 py-10">
          <div className="border-2 rounded-xl px-5 relative overflow-hidden h-fit">
            <h3 className="pt-3 font-medium text-lg">Account</h3>
            <p className="text-base">Jane doe</p>
            <hr className="my-2" />
            <ul className="flex flex-col xs:gap-3 md:gap-1 lg:gap-3">
              <li>Orders</li>
              <li>Wishlist</li>
              <li>Gift cards</li>
              <li>Contact</li>
            </ul>
            <hr className="my-2" />
            <ul className="flex flex-col xs:gap-3 md:gap-1 lg:gap-3 xs:pb-20 lg:pb-16">
              <li>Coupons</li>
              <li>Saved Cards</li>
              <li>Saved Addresses</li>
            </ul>
            <button className=" flex items-center justify-center bg-black h-10 text-white w-full absolute bottom-0 right-0">
              <i class="fa-solid fa-arrow-right-from-bracket pr-2"></i>Logout
            </button>
          </div>
          <div className="md:col-span-3 flex flex-col gap-5 xs:mx-auto md:mx-0 lg:pr-20">
            <div className='flex justify-between'>
                <h3 className='text-lg font-medium'>All Orders</h3>
                <button className='rounded-2xl text-base px-4 border-2'><i class="fa-solid fa-sliders pr-1"></i>Filter</button>
            </div>
            <div className='border-2 rounded-t-xl pt-3 pb-1'>
                <div className='flex xs:flex-col md:flex-row justify-between px-4'>
                    <div className='flex gap-3'>
                        <i class="bg-black text-white w-fit h-fit p-3 text-xl rounded-full fa-solid fa-box-open"></i>
                        <span>
                            <h4 className='text-green-600 font-medium text-sm'>Arriving Friday</h4>
                            <p className='text-gray-600'>Ordered On 15 Dec 2022</p>
                        </span>
                    </div>
                    <div>
                        <span className='md:text-right text-sm text-gray-600'>
                            <h4>Order ID: 10236264632</h4>
                            <p>Prepaid using Credit Card</p>
                        </span>
                    </div>
                </div>
                <div className='flex xs:gap-1 md:gap-3 mt-5 bg-gray-200 rounded-t-lg mx-1 p-1'>
                    <div className='xs:basis-1/3 md:basis-1/6 '>
                        <img src={Psm} alt="prod" />
                    </div>
                    <div className='xs:basis-1/3 md:basis-4/6 flex flex-col gap-1 py-2'>
                        <h4 className='font-medium'>Pullover Hoodie</h4>
                        <p className='text-sm'>Men's solid gray pullover hoodie</p>
                        <p className='text-sm'>Size: M</p>
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2 items-center'><i class="fa-regular fa-circle text-green-600 "></i><p className='text-sm'>Shipped thursday, 5Dec</p></div>
                            <div className='flex gap-2 items-center'><i class="fa-regular fa-circle text-green-600 "></i><p className='text-sm'>Shipped reached Thrissur, Kerala 7march, 2023 | 10:00 am</p></div>
                            <div className='flex gap-2 items-center'><i class="fa-regular fa-circle-dot text-green-600 "></i><p className='text-sm'>Out For Delivery</p></div>
                            <div className='flex gap-2 items-center'><i class="fa-regular fa-circle text-green-600 "></i><p className='text-sm'>Arriving Today</p></div>
                        </div>
                        <div className='flex gap-3 mt-2'>
                            <button className='bg-black hover:bg-white xs:text-xs md:text-base hover:text-black border-2 hover:border-0 border-black rounded-2xl text-white px-6 h-8'>Cancel</button>
                            <button className='hover:bg-black bg-white xs:text-xs md:text-base hover:text-white text-black  rounded-2xl px-6 h-8'>Track Order</button>
                        </div>
                    </div>
                    <div className='xs:basis-1/3 md:basis-1/6 flex justify-center items-center text-gray-400'>
                        <i class="cursor-pointer text-xl fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className='border-2 rounded-t-xl pt-3 pb-1'>
                <div className='flex justify-between px-4'>
                    <div className='flex gap-3'>
                        <i class="bg-black text-white w-fit h-fit p-3 text-xl rounded-full fa-solid fa-box-open"></i>
                        <span>
                            <h4 className='text-green-600 font-medium text-sm'>Delivered</h4>
                            <p className='text-gray-600'>On Thus, 17 Feb</p>
                        </span>
                    </div>
                    <div>
                        <span className='text-right text-sm text-gray-600'>
                            <h4>Order ID: 10236264632</h4>
                            <p>Cash On delivery (COD)</p>
                        </span>
                    </div>
                </div>
                <div className='flex md:gap-3 mt-5 bg-gray-200 rounded-t-lg mx-1 p-1'>
                    <div className='xs:basis-1/3 md:basis-1/6 '>
                        <img src={Psm} alt="prod" />
                    </div>
                    <div className='xs:basis-1/3 md:basis-4/6 flex flex-col gap-1 py-2'>
                        <h4 className='font-medium'>Pullover Hoodie</h4>
                        <p className='text-sm'>Men's solid gray pullover hoodie</p>
                        <p className='text-sm'>Size: M</p>
                       
                        <div className='flex gap-3 mt-2'>
                            <button className='bg-black hover:bg-white  hover:text-black border-2 hover:border-0 border-black rounded-2xl text-white px-6 h-8'>Exchange</button>
                            <button className='hover:bg-black bg-white  hover:text-white text-black  rounded-2xl px-6 h-8'>Return</button>
                        </div>
                    </div>
                    <div className='xs:basis-1/3 md:basis-1/6 flex justify-center items-center text-gray-400'>
                        <i class="cursor-pointer text-xl fa-solid fa-chevron-right"></i>
                    </div>
                </div>
                <div className='bg-gray-200 mx-1 m-1 py-2  flex gap-1 items-center'>
                    <p className='px-2'>Rate the Product</p>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
            </div>
            {/*  */}
            <div className='border-2 rounded-t-xl pt-3 pb-1'>
                <div className='flex justify-between px-4'>
                    <div className='flex gap-3'>
                        <i class="bg-black text-white w-fit h-fit p-3 text-xl rounded-full fa-solid fa-box-open"></i>
                        <span>
                            <h4 className='text-green-600 font-medium text-sm'>Delivered</h4>
                            <p className='text-gray-600'>On Thus, 20 Feb</p>
                        </span>
                    </div>
                    <div>
                        <span className='text-right text-sm text-gray-600'>
                            <h4>Order ID: 10236264632</h4>
                            <p>Cash On delivery (COD)</p>
                        </span>
                    </div>
                </div>
                <div className='flex md:gap-3 mt-5 bg-gray-200 rounded-t-lg mx-1 p-1'>
                    <div className='xs:basis-1/3 md:basis-1/6 '>
                        <img src={Psm} alt="prod" />
                    </div>
                    <div className='xs:basis-1/3 md:basis-4/6 flex flex-col gap-1 py-2'>
                        <h4 className='font-medium'>Pullover Hoodie</h4>
                        <p className='text-sm'>Men's solid gray pullover hoodie</p>
                        <p className='text-sm'>Size: M</p>
                       
                        <p className='text-sm pt-2'>Exchange/Return window closed on tue, 3 Feb 2023</p>
                    </div>
                    <div className='xs:basis-1/3 md:basis-1/6 flex justify-center items-center text-gray-400'>
                        <i class="cursor-pointer text-xl fa-solid fa-chevron-right"></i>
                    </div>
                </div>
                <div className='bg-gray-200 mx-1 m-1 py-2  flex gap-1 items-center'>
                    <p className='px-2'>Rate the Product</p>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
            </div>
            {/*  */}
          </div>
        </div>
      </section>
    </>
  )
}

export default AllOrders