import React from 'react'

let logo1 ='https://res.cloudinary.com/dfoqi8rjf/image/upload/v1675943315/Ecommerce-shop/visa_aenfeu.png';
let logo2 ='https://res.cloudinary.com/dfoqi8rjf/image/upload/v1675943315/Ecommerce-shop/master_rvb1kp.png';
let logo4 ='https://res.cloudinary.com/dfoqi8rjf/image/upload/v1675943315/Ecommerce-shop/gpay_ss5egt.png';
let Psm= 'https://res.cloudinary.com/dfoqi8rjf/image/upload/v1676008691/Ecommerce-shop/imgs_pm48ey.png';


function OrderAddress() {
  return (
    <>
    <section className='xs:w-11/12 lg:w-10/12 mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-20 xs:py-5 md:py-20 '>
          <div className='md:col-span-2 flex flex-row'>

              <div className='basis-1/4 flex flex-col justify-between text-4xl relative'>
                <span className='flex flex-col justify-center items-center'><i class="fa-solid fa-cart-shopping"></i><p className='text-sm'>CART</p></span>
                <span className='flex flex-col justify-center items-center'><i class="fa-solid fa-location-dot"></i><p className='text-sm'>ADDRESS</p></span>
                <span className='opacity-50 flex flex-col justify-center items-center'><i class="fa-solid fa-credit-card"></i><p className='text-sm'>PAYMENT</p></span>
              </div>

              <div className='basis-3/4 flex flex-col gap-5'>
                  <div className='flex xs:flex-col md:flex-row gap-y-2 justify-between'>
                    <p className='text-lg font-medium'>Select Delivery Address</p>
                    <button className='w-fit border-2 border-black bg-white hover:bg-black text-black hover:text-white transition-all duration-300 rounded-2xl px-2 text-sm'>Add New Address</button>
                  </div>
                  <div className='border-2 rounded-t-xl p-3 flex flex-col gap-2'>
                    <span className='flex items-center'><i class="fa-solid fa-circle-dot pr-2"></i><h3 className='text-lg font-medium pr-16'>Jane Doe</h3><a className='bg-gray-500 hover:bg-black text-sm grid place-items-center rounded-2xl px-4 text-white' href="/">Home</a></span>
                    <p>#123, Main Road,</p>
                    <p>New City, New 678808</p>
                    <p className='pt-3'>Mobile Number: <span className='font-medium'>1234567890</span></p>
                  </div>
                  <div className='border-2 border-gray-400 border-dotted rounded-b-xl py-4 flex justify-center items-center'>
                    <button className=''><i class="fa-solid fa-plus pr-2"></i>Add New Address</button>
                  </div>

              </div>
          </div>

          <div className='border-2 rounded-2xl flex flex-col  gap-3 p-3 relative overflow-hidden w-fit '>
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
                    <span className='flex justify-between pt-3 pb-16 text-xl font-medium'><h3 className=''>Total Amount</h3><h3 className=''>$180</h3></span>
                </div>
                <button className='bg-black w-full absolute bottom-0 right-0 text-white h-14'>Place Order</button>
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

export default OrderAddress