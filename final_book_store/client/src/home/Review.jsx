import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './review.css';
import { Pagination } from 'swiper/modules';


import ReviewDemo from './ReviewDemo';
const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl  font-bold text-center'>Our Customer</h2>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl rounded-lg border'><ReviewDemo/></SwiperSlide>
        <SwiperSlide className='shadow-2xl rounded-lg border'><ReviewDemo/></SwiperSlide>
        <SwiperSlide className='shadow-2xl rounded-lg border'><ReviewDemo/></SwiperSlide>
        <SwiperSlide className='shadow-2xl rounded-lg border'><ReviewDemo/></SwiperSlide>
        <SwiperSlide className='shadow-2xl rounded-lg border'><ReviewDemo/></SwiperSlide>

      </Swiper>
  </div>
  )
}

export default Review