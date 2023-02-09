import React from 'react'

function footer() {
  return (
    <>
    <section className='bg-black text-white h-full py-10'>
      <div className='w-10/12 mx-auto grid grid-cols-1 gap-y-8 md:grid-cols-3 place-items-start '>
        <div className='grid place-items-center h-full w-full'>
          <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque itaque cupiditate voluptas eius reprehenderit est fugiat totam necessitatibus, recusandae impedit, provident voluptate. Sit, autem ratione eum reprehenderit explicabo asperiores libero.</p>
        </div>
        <div className='grid grid-cols-2 md:place-items-center place-content-start gap-y-10 h-full w-full'>
              <div className='flex flex-col gap-3'>
                <p className='text-xl'>Categories</p>
                <ul className='flex flex-col gap-3 font-light'>
                    <li><a href="/">Top wear</a></li>
                    <li><a href="/">Bottom wear</a></li>
                    <li><a href="/">Footwear</a></li>
                </ul>            
              </div>
              <div className='flex flex-col gap-3'>
                <p className='text-xl'>About</p>
                <ul className='flex flex-col gap-3 font-light'>
                    <li><a href="/">About us</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">My account</a></li>
                </ul>
              </div>
              <div className='w-full h-full grid col-span-2 md:place-content-center'>
                <div>
                  <p className='text-2xl font-normal'>100% ORIGINAL</p>
                  <p className='font-light'>guarantee for all products</p>
                </div>
                <div>
                  <p className='text-2xl font-normal'>Return within 30days</p>
                  <p className='font-light'>of receiving your order</p>
                </div>
              </div>
        </div>
        <div className='w-full h-full flex flex-col md:items-center'>
              <div className='flex flex-col gap-3'>
                <p className='text-xl'>Customer policies</p>
                <ul className='flex flex-col gap-3 font-light'>
                  <li><a href="/">Privacy policy</a></li>
                  <li><a href="/">Terms & Conditions</a></li>
                  <li><a href="/">FAQ</a></li>
                  <li><a href="/">Track Orders</a></li>
                  <li><a href="/">Cancellation</a></li>
                  <li><a href="/">Shipping</a></li>
                  <li><a href="/">Returns</a></li>
                  <li><a href="/">Contact us</a></li>
                </ul>
              </div>
        </div>
      </div>
      <div className='w-10/12 mx-auto flex xs:flex-col md:flex-row gap-y-5 justify-between pt-10'>
        <p>All Right Reserved</p>
        <div className='flex  xs:gap-5 md:gap-10 text-xl'>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
        <div>
          <p>Logos</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default footer