import React from 'react';
import '../../App.css';
import SimilarProd from '../../components/similar-Products'

let Pbg= 'https://res.cloudinary.com/dfoqi8rjf/image/upload/v1676008693/Ecommerce-shop/imgb_mqii0k.png';
let Psm= 'https://res.cloudinary.com/dfoqi8rjf/image/upload/v1676008691/Ecommerce-shop/imgs_pm48ey.png';

function ProductPage() {
  return (
    <>
    <section className='w-11/12 mx-auto py-5'>
            <div className='text-lg pb-5'>
                <a href="/">Home</a> / <a href="/">Top wear</a> / <a href="/">Men's Hoodie</a> / <a href='/' className='font-medium'>Pullover Hoodie</a>
              </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 product-inner'>
            {/* Left */}
            <div className='grid grid-cols-1 lg:grid-cols-5   gap-3 overflow-hidden'>
               <div className='md:col-span-2 grid grid-cols-2 grid-rows-3 gap-3'>
                    <div className='overflow-hidden'><img className='xs:h-64 md:h-[10.5rem] rounded-xl w-full object-fill hover:scale-105 transition-all duration-300' src={Psm} alt="pImage" /></div>
                    <div className='overflow-hidden'><img className='xs:h-64 md:h-[10.5rem] rounded-xl w-full object-fill hover:scale-105 transition-all duration-300' src={Psm} alt="pImage" /></div>
                    <div className='overflow-hidden'><img className='xs:h-64 md:h-[10.5rem] rounded-xl w-full object-fill hover:scale-105 transition-all duration-300' src={Psm} alt="pImage" /></div>
                    <div className='overflow-hidden'><img className='xs:h-64 md:h-[10.5rem] rounded-xl w-full object-fill hover:scale-105 transition-all duration-300' src={Psm} alt="pImage" /></div>
                    <div className='overflow-hidden'><img className='xs:h-64 md:h-[10.5rem] rounded-xl w-full object-fill hover:scale-105 transition-all duration-300' src={Psm} alt="pImage" /></div>
                    <div className='overflow-hidden'><img className='xs:h-64 md:h-[10.5rem] rounded-xl w-full object-fill hover:scale-105 transition-all duration-300' src={Psm} alt="pImage" /></div>
               </div>
               <div className='md:col-span-3 row-span-1 overflow-hidden'>
                    <img className='h-fit hover:scale-105 transition-all duration-300' src={Pbg} alt="pImage" />
               </div>
            </div>
            {/* Right */}
            <div className='md:h-[1000px] lg:h-[500px] overflow-y-scroll pb-10'>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-2xl font-medium'>Pullover Hoddie</h2>
                        <p className='text-lg'>Mens'Hoddies</p>
                        <span className='bg-black rounded-xl text-white flex items-center gap-4 py-1 px-3 text-xs w-fit'><p>4.4<i class="text-white pl-1 fa-solid fa-star"></i></p><p>10 Ratings</p></span>
                        <span className='flex items-center gap-2'><h2 className='text-2xl font-medium'>$150.00</h2> <p className='line-through'>$280.50</p> <p className='text-green-500'>20% Off</p></span>
                        <p className='text-green-500 text-base'>inclusive of all taxes</p>
                    </div>
                    <div className='flex gap-2 border-[1px] bg-white hover:bg-black hover:text-white transition-all duration-200 border-black rounded-2xl py-1 px-3 h-fit'><i class="flex items-center fa-solid fa-share"></i><a href="/" className='font-medium'>Share</a></div>
                </div>

                <div className='flex flex-col gap-3 pt-5 xs:w-[80%] lg:w-[50%]'>
                    <span className='flex justify-between font-normal text-lg'><p>Size</p><p>Size chart</p></span>
                    <div className='flex gap-1 justify-between text-sm font-medium'>
                        <p className='bg-black rounded-full py-3 px-5 w-fit text-white'>S</p>
                        <p className='border-[1px] bg-white hover:bg-black border-black text-black hover:text-white rounded-full py-3 px-4 w-fit'>M</p>
                        <p className='border-[1px] bg-white hover:bg-black border-black text-black hover:text-white rounded-full py-3 px-5 w-fit'>L</p>
                        <p className='border-[1px] bg-white hover:bg-black border-black text-black hover:text-white rounded-full py-3 px-4 w-fit'>XL</p>
                        <p className='border-[1px] bg-white hover:bg-black border-black text-black hover:text-white rounded-full py-3 px-3 w-fit'>XXL</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='font-normal text-lg'>Colour</p>
                        <div className='flex justify-between'>
                            <div className='border-[1px] border-black rounded-3xl p-1 w-fit flex flex-col items-center cursor-pointer'><p className='bg-red-600 h-10 w-10 rounded-full'></p><p className='text-xs pt-2'>Red</p></div>
                            <div className='border-[1px] hover:border-black rounded-3xl p-1 w-fit flex flex-col items-center cursor-pointer'><p className='bg-gray-600 h-10 w-10 rounded-full'></p><p className='text-xs pt-2'>Gray</p></div>
                            <div className='border-[1px] hover:border-black rounded-3xl p-1 w-fit flex flex-col items-center cursor-pointer'><p className='bg-green-600 h-10 w-10 rounded-full'></p><p className='text-xs pt-2'>Green</p></div>
                            <div className='border-[1px] hover:border-black rounded-3xl p-1 w-fit flex flex-col items-center cursor-pointer'><p className='bg-blue-600 h-10 w-10 rounded-full'></p><p className='text-xs pt-2'>Blue</p></div>
                            <div className='border-[1px] hover:border-black rounded-3xl p-1 w-fit flex flex-col items-center cursor-pointer'><p className='bg-orange-600 h-10 w-10 rounded-full'></p><p className='text-xs pt-2'>Orange</p></div>
                        </div>
                    </div>

                    <div className='pt-5 flex gap-5'>
                        <button className='bg-black border-[1px] border-black hover:bg-white text-white hover:text-black rounded-3xl px-5 py-2 text-2xl flex gap-3 justify-center items-center transition-all duration-300'>Add to Cart <i class="fa-solid fa-cart-shopping"></i></button>
                        <span className='border-2 border-black hover:bg-black hover:text-white rounded-full px-3 flex items-center transition-all duration-300'><i class=" text-2xl fa-regular fa-heart"></i></span>
                    </div>
                </div>

                <hr className='my-5'/>

                <div className='flex flex-col gap-5 '>
                    <div className='flex gap-8 items-center'>
                        <p className='font-medium text-lg'>Delivery Options</p>
                        <i class="fa-solid fa-truck"></i>
                    </div>
                    <span className='relative border-2 border-black rounded-3xl overflow-hidden flex xs:w-[90%] lg:w-[50%]'>
                        <input className='outline-none w-[70%] p-2' type="number" placeholder='Enter Pincode'/>
                        <button className='bg-black text-white w-[30%]'>Check</button>
                    </span>
                    <p className='text-xs'>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                </div>
                <div className='text-sm flex flex-col gap-2 pt-5'>
                    <p>100% Original Products</p>
                    <p>Pay on delivery might br available</p>
                    <p>Easy 30 days returns and exchanges</p>
                </div>
                <div className='pt-5'>
                    <div className='flex gap-8 items-center'>
                        <p className='font-medium text-lg'>Available offers</p>
                        <i class="fa-solid fa-tag"></i>
                    </div>
                    <div className='text-sm flex flex-col gap-2 pt-3'>
                        <p><span className='font-medium'>Special Price</span> get at flat 009 T&C</p>
                        <p><span className='font-medium'>Bank Offer</span> 10% off on ICICI Bank Creadit Cards, up to $300 On orders of $1750 and above T&C</p>
                        <p><span className='font-medium'>Bank Offer</span> 10% off on Kotak Bank Debit Card Transactions, up to $500 T&C</p>
                        <p className='text-green-600'>+2 More Offers</p>
                    </div>
                    
                </div>

                <hr className='my-5'/>

                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-3 text-lg'>
                        <p className='font-medium'>Rating</p>
                        <i class="pl-1 fa-solid fa-star"></i>
                    </div>
                    <div className=' flex gap-5'>
                        <div className='flex flex-col gap-2 justify-center items-center w-fit pr-5 border-r-2'>
                            <span className='text-5xl w-fit text-white bg-black rounded-full py-3 px-7'>4.4</span>
                            <p className='text-xs'>10 verfied Buyers</p>
                        </div>
                        <div className='text-sm flex flex-col gap-1'>
                            <p>5<i class="pl-1 fa-solid fa-star"></i></p>
                            <p>4<i class="pl-1 fa-solid fa-star"></i></p>
                            <p>3<i class="pl-1 fa-solid fa-star"></i></p>
                            <p>2<i class="pl-1 fa-solid fa-star"></i></p>
                            <p>1<i class="pl-1 fa-solid fa-star"></i></p>
                        </div>
                    </div>
                </div>

                <hr className='my-5'/>

                <div className='flex flex-col gap-5'>
                    <div className='flex gap-8 items-center'>
                        <p className='font-medium text-lg'>Product Details</p>
                        <i class="fa-solid fa-file-lines"></i>
                    </div>

                    <div className='grid grid-cols-2 gap-y-3  md:w-[70%]'>
                        <p>Type</p><p>Round Neck</p>
                        <p>Sleeve</p><p>Full Sleeve</p>
                        <p>Fit</p><p>Regular</p>
                        <p>Fabric</p><p>Cotton Blend</p>
                        <p>Pack of</p><p>1</p>
                        <p>Style Code</p><p>A11 RBC white-one</p>
                        <p>Neck Type</p><p>Round neck</p>
                        <p>Ideal For</p><p>Men</p>
                    </div>
                    <p className='text-green-600'>Read More</p>
                </div>

            </div>
        </div>
    </section>
    {/* Similar Products */}
    <section className='w-11/12 mx-auto'>
        <p className='text-xl font-medium py-5'>Similar Products</p>
        <SimilarProd/>
    </section>
    </>
  )
}

export default ProductPage