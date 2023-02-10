import React from 'react';
import {Products} from '../../components/constant';

function SimilarProduct() {
  return (
    <>
    <section className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5 pb-10'>
            {Products.map((item,i) =>
                    <div key={i}>
                        <div className='relative'>
                          <img className='rounded-t-3xl' src={item.img} alt="product" />
                          <i class="absolute top-5 right-5 text-white fa-regular fa-heart"></i>
                        </div>
                        <div className='relative pt-3'>
                          <h3 className='font-medium text-lg'>{item.title}</h3>
                          <p className='text-sm'>{item.catg}</p>
                          <p className='flex gap-2 font-medium text-lg'>${item.price} <span className='flex items-center font-normal gap-2 text-sm'><p className='line-through'>${item.ogprice}</p><p className='text-green-400'>{item.off}% Off</p></span></p>
                          <i class="absolute bottom-0 right-0 text-4xl cursor-pointer fa-solid fa-circle-plus"></i>
                        </div>
                    </div>
                        )}
    </section>
    </>
  )
}

export default SimilarProduct