import React from 'react';
import {useLocation} from 'react-router-dom';

let icon1 ='https://res.cloudinary.com/dvbplh4z9/image/upload/v1675942451/Ecommers-shop/original_c0mcqb.png';
let icon2 ='https://res.cloudinary.com/dvbplh4z9/image/upload/v1675942450/Ecommers-shop/days_ipz7s6.png';
let logo1 ='https://res.cloudinary.com/dfoqi8rjf/image/upload/v1675943315/Ecommerce-shop/visa_aenfeu.png';
let logo2 ='https://res.cloudinary.com/dfoqi8rjf/image/upload/v1675943315/Ecommerce-shop/master_rvb1kp.png';
let logo4 ='https://res.cloudinary.com/dfoqi8rjf/image/upload/v1675943315/Ecommerce-shop/gpay_ss5egt.png';


function Footer() {

     // custom hide
     const { pathname } = useLocation();
     if (pathname === "/cart") return null;
     if (pathname === "/login") return null;
     if (pathname === "/order-address") return null;

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
              <div className='w-full h-full grid gap-y-5 col-span-2 md:place-content-center'>
                <div className='flex gap-5'>
                  <img className='xs:h-14 md:h-10 lg:h-16' src={icon1} alt="icon" />
                  <div>
                    <p className='md:text-base lg:text-2xl font-normal'>100% ORIGINAL</p>
                    <p className='font-light'>guarantee for all products</p>
                  </div>
                </div>
                <div className='flex gap-8'>
                <img className='xs:h-14 md:h-10 lg:h-16' src={icon2} alt="icon" />
                <div>
                  <p className='md:text-base lg:text-2xl font-normal'>Return within 30days</p>
                  <p className='font-light'>of receiving your order</p>
                </div>  
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
        <div className='flex gap-3'>
          <img className='object-cover h-10' src={logo1} alt="logo" />
          <img className='object-cover h-10' src={logo2} alt="logo" />
          <img className='object-cover h-10' src={logo4} alt="logo" />
        </div>
      </div>
    </section>
    </>
  )
}

export default Footer