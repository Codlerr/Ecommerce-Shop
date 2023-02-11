import React from 'react';
import SimilarProd from '../../components/similar-Products';

let logo1 ='https://res.cloudinary.com/dfoqi8rjf/image/upload/v1675943315/Ecommerce-shop/visa_aenfeu.png';
let logo2 ='https://res.cloudinary.com/dfoqi8rjf/image/upload/v1675943315/Ecommerce-shop/master_rvb1kp.png';
let logo4 ='https://res.cloudinary.com/dfoqi8rjf/image/upload/v1675943315/Ecommerce-shop/gpay_ss5egt.png';
let Psm= 'https://res.cloudinary.com/dfoqi8rjf/image/upload/v1676008691/Ecommerce-shop/imgs_pm48ey.png';


function Cart() {
  return (
    <>
    <section className='xs:w-11/12 lg:w-10/12 mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-20 xs:py-5 md:py-20'>
          <div className='md:col-span-2 flex flex-row'>

              <div className='basis-1/4 flex flex-col justify-around text-4xl relative'>
                <span className='flex flex-col justify-center items-center'><i class="fa-solid fa-cart-shopping"></i><p className='text-sm'>CART</p></span>
                <span className='opacity-50 flex flex-col justify-center items-center'><i class="fa-solid fa-location-dot"></i><p className='text-sm'>ADDRESS</p></span>
                <span className='opacity-50 flex flex-col justify-center items-center'><i class="fa-solid fa-credit-card"></i><p className='text-sm'>PAYMENT</p></span>
              </div>

              <div className='basis-3/4 flex flex-col gap-5'>
                  <div className='flex xs:flex-col md:flex-row gap-y-2 justify-between'>
                    <p className='text-lg font-medium'>Check delivery time & services</p>
                    <button className='w-fit border-2 border-black bg-white hover:bg-black text-black hover:text-white transition-all duration-300 rounded-2xl px-2'>Change Address</button>
                  </div>
                  <div>
                    <span className='flex gap-20'><h3 className='text-lg font-medium'>Jane Doe</h3><a className='bg-gray-500 hover:bg-black text-sm grid place-items-center rounded-2xl px-4 text-white' href="/">Home</a></span>
                    <p>#123, Main Road, New City, New 678808</p>
                    <p className='pt-3'>Delivery in 2 Days, 20/12/2022</p>
                  </div>
                  <div className='flex xs:flex-col md:flex-row gap-y-3 justify-between'>
                    <p className='text-lg font-medium'><i class="fa-solid fa-circle-dot pr-2"></i>1/1 items selected</p>
                    <span className='flex  gap-5'><button><i class="fa-regular fa-trash-can pr-2"></i>Remove</button><span className='xs:hidden md:block'>|</span><button><i class="fa-regular fa-heart pr-2"></i>Move to wishlist</button></span>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-3 border-2 rounded-t-2xl p-1 relative'>
                          <button className='absolute top-0 right-1'><i class="text-2xl fa-regular fa-circle-xmark"></i></button>
                      <div>
                        <img src={Psm} alt="prImage" />
                      </div>
                      <div className='col-span-2 flex flex-col gap-2 '>
                          <h2 className='text-2xl font-medium'>Pullover Hoodie</h2>
                          <p>Men's solid gray pullover hoodie</p>
                          <p>Sold by: James & John lifestyle privet limited</p>
                          <span className='flex gap-10'>
                              <form className='border-2 rounded-2xl px-2'>
                              <label for="size">Size:</label>
                                <select className='outline-none'>
                                  <option value="S">S</option>
                                  <option value="M">M</option>
                                  <option value="XL">XL</option>
                                  <option value="XXl">XXL</option>
                                </select>
                              </form>

                              <form className='border-2 rounded-2xl px-2'>
                              <label for="size">Qty:</label>
                                <select className='outline-none'>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                </select>
                              </form>
                          </span>
                          <span className='flex items-center gap-2'><h2 className='text-2xl font-medium'>$150.00</h2> <p className='line-through'>$280.50</p> <p className='text-green-500'>20% Off</p></span>
                      </div>
                  </div>

                  <div className='border-2 p-3 flex xs:flex-col lg:flex-row gap-y-3 justify-between items-center'>
                    <i class="text-3xl fa-regular fa-circle-user"></i>
                    <p className='text-base font-medium'>Login to see items from your existing bag and wishlist</p>
                    <button className='text-xs border-2 rounded-2xl px-2 py-1 hover:bg-black hover:text-white'>Login Now</button>
                  </div>

              </div>
          </div>

          <div className='border-2 rounded-2xl flex flex-col  gap-3 p-3 relative overflow-hidden w-fit '>
              <p className='text-lg font-medium'>Coupon</p>
              <div className='flex justify-between'>
                <span className='flex gap-3 items-center'><i class="fa-solid fa-tag"></i><p className='font-medium text-lg'>Available offers</p></span>
                <button className='border-2 rounded-2xl px-5 border-black hover:bg-black hover:text-white text-xs'>APPLY</button>
              </div>
              <div className='text-sm px-5 flex  flex-col gap-1'>
                <p><span className='text-green-600 font-medium'>Login</span> to get $100 OFF on first order</p>
                <p><span className='font-medium'>Special Price</span> Get at flat $169 T&C</p>
                <p><span className='font-medium'>Bank Offer</span> 10% off on ICICI Bank Credit Cards</p>
                <p>up yo $300. On order of $ 1750 and above T&C</p>
              </div>

              <div className='pt-10'>
                <h3 className='text-lg font-medium'>Price Details</h3>
                <div className='flex flex-col pt-5 gap-y-2 w-full text-sm'>
                    <span className='flex justify-between'><p>Total MRP</p><p>$280</p></span>
                    <span className='flex justify-between'><p>Discount</p><p>-$130</p></span>
                    <span className='flex justify-between'><p>Coupon Discount</p><p className='text-green-600'>Apply Coupon</p></span>
                    <span className='flex justify-between'><p>delivery Charges <span className='text-green-600'>Know more</span></p><p>$5 <span className='text-green-600'>Free</span></p></span>
                    <span className='flex justify-between pt-5 text-xl font-medium'><h3 className=''>Total Amount</h3><h3 className=''>$180</h3></span>
                </div>
                <button className='bg-black w-full absolute bottom-0 right-0 text-white h-14'>Place Order</button>
              </div>
          </div>
        </div>
    </section>
    <hr className='w-10/12 mx-auto py-5 border-black'/>
    <section className='xs:w-11/12 lg:w-9/12 mx-auto'>
      <h1 className='text-lg font-medium pb-3'>You may also like:</h1>
      <SimilarProd/>
    </section>
    <hr className='w-10/12 mx-auto  border-black'/>
    <section className='xs:w-11/12 lg:w-10/12 mx-auto flex xs:flex-col lg:flex-row  justify-between py-8'>
      <div className='flex xs:flex-col xs:items-center md:items-start md:flex-row xs:gap-2 md:gap-10'>
          <img className='object-cover h-20 w-fit' src={logo1} alt="logo" />
          <img className='object-cover h-20 w-fit' src={logo2} alt="logo" />
          <img className='object-cover h-20 w-fit' src={logo4} alt="logo" />
          <img className='object-cover h-20 w-fit' src={logo1} alt="logo" />
          <img className='object-cover h-20 w-fit' src={logo2} alt="logo" />
          <img className='object-cover h-20 w-fit' src={logo4} alt="logo" />
      </div>
      <div className='grid place-items-center'>
        <a href="/"><p className='text-xl font-medium'>Need Help? Contact Us</p></a>
      </div>
    </section>
    </>
  )
}

export default Cart