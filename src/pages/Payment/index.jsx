import React from 'react'

let logo1 ='https://res.cloudinary.com/dfoqi8rjf/image/upload/v1675943315/Ecommerce-shop/visa_aenfeu.png';
let logo2 ='https://res.cloudinary.com/dfoqi8rjf/image/upload/v1675943315/Ecommerce-shop/master_rvb1kp.png';
let logo4 ='https://res.cloudinary.com/dfoqi8rjf/image/upload/v1675943315/Ecommerce-shop/gpay_ss5egt.png';
let Psm= 'https://res.cloudinary.com/dfoqi8rjf/image/upload/v1676008691/Ecommerce-shop/imgs_pm48ey.png';


function Payment() {
  return (
    <>
    <section className='xs:w-11/12 lg:w-10/12 mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-20 xs:py-5 md:py-20 '>
          <div className='md:col-span-2 flex flex-row'>

              <div className='basis-1/4 flex flex-col justify-between text-3xl relative'>
                <span className='flex flex-col justify-center items-center'><i class="fa-solid fa-cart-shopping"></i><p className='text-sm'>CART</p></span>
                <span className='flex flex-col justify-center items-center'><i class="fa-solid fa-location-dot"></i><p className='text-sm'>ADDRESS</p></span>
                <span className='flex flex-col justify-center items-center'><i class="fa-solid fa-credit-card"></i><p className='text-sm'>PAYMENT</p></span>
              </div>

              <div className='basis-3/4 flex flex-col gap-5'>
                <p className='text-lg font-medium'>Choose Payment Mode</p>
                <div className='grid grid-cols-1 md:grid-cols-2 '>
                    <div className='border-2 rounded-tl-xl p-3'>
                        <ul className='flex flex-col gap-5 pb-5'>
                            <li><i class="pr-2 fa-regular fa-star"></i>Saved Payment Options</li>
                            <li><i class="pr-2 fa-solid fa-money-bill-1"></i>Cash on Delivery (COD)</li>
                            <li><i class="pr-2 fa-regular fa-credit-card"></i>Credit/Debit Card</li>
                            <li><i class="pr-2 fa-brands fa-amazon-pay"></i>Phone pay/BHIM UPI</li>
                            <li><i class="pr-2 fa-solid fa-wallet"></i>Wallet</li>
                            <li><i class="pr-2 fa-solid fa-building-columns"></i>Net Banking</li>
                            <li><i class="pr-2 fa-solid fa-circle-dollar-to-slot"></i>EMI/Pay later</li>
                        </ul>
                    </div>
                    <div className='border-2 rounded-tr-xl p-3'>
                        <p className='text-base font-medium'>Choose Payment Mode</p>
                        <div className='flex justify-between'>
                            <span className='flex gap-2 items-center'><input name='same' className='' type="radio" /><p>janedeo@xxxx</p></span>
                            <img className='object-cover h-10 w-fit' src={logo4} alt="logo" />
                        </div>
                        <div className='flex justify-between'>
                            <span className='flex gap-2 items-center'><input name='same' className='' type="radio" /><p>1230 xxxx xxxx 2301</p></span>
                            <img className='object-cover h-10 w-fit' src={logo1} alt="logo" />
                        </div>
                        <button className='bg-black rounded-3xl text-white w-full h-10 mt-5 border-2 border-black hover:bg-white hover:text-black transition-all duration-300'>Pay Now</button>
                       
                    </div>
                </div>
                <div className='border-2 rounded-b-xl p-3 flex justify-between items-center'>
                   <span className='flex gap-1 items-center'>
                      <i class="fa-solid fa-gift"></i>
                      <p>Have a Gift Card?</p>
                   </span>
                   <button className='rounded-2xl border-2 text-xs px-2 py-1 hover:bg-black hover:text-white'>Apply Gift Card</button>
                </div>
                  
                  

              </div>
          </div>

          <div className='border-2 rounded-2xl flex flex-col  gap-3 p-3 relative overflow-hidden w-fit mx-auto'>
               
                <div className='flex gap-2'>
                    <div>
                        <img className='object-cover h-32 rounded-t-xl' src={Psm} alt="prImage" />
                      </div>
                      <div className='col-span-2 flex flex-col gap-2 '>
                          <h2 className='text-xl font-medium'>Pullover Hoodie</h2>
                          <p className='text-xs'>Men's solid gray pullover hoodie</p>
                          <p className='text-xs'>Delivery Estimates</p>
                          <p className='text-base font-medium'>20 DEC, 2022</p>
                      </div>
                </div>

              <div className='pt-5'>
                <h3 className='text-lg font-medium'>Price Details</h3>
                <div className='flex flex-col pt-5 gap-y-2 w-full text-sm'>
                    <span className='flex justify-between'><p>Total MRP</p><p>$280</p></span>
                    <span className='flex justify-between'><p>Discount</p><p>-$130</p></span>
                    <span className='flex justify-between'><p>Coupon Discount</p><p className='text-green-600'>Apply Coupon</p></span>
                    <span className='flex justify-between'><p>delivery Charges <span className='text-green-600'>Know more</span></p><p>$5 <span className='text-green-600'>Free</span></p></span>
                    <span className='flex justify-between pt-5 text-xl font-medium'><h3 className=''>Total Amount</h3><h3 className=''>$180</h3></span>
                </div>
              </div>
          </div>
        </div>
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

export default Payment