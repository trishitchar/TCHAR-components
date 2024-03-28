import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './BannerCard.css';

// import required modules
import { EffectCards } from 'swiper/modules';

import book5 from '../assets/banner-books/book1.png';
import book2 from '../assets/banner-books/book2.png';
import book3 from '../assets/banner-books/book3.png';
import book4 from '../assets/banner-books/book4.png';
import book1 from '../assets/banner-books/book5.png';

const BannerCard = () => {
    return (
        <>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide style={{ backgroundImage: `url(${book1})` }}></SwiperSlide>
            <SwiperSlide style={{ backgroundImage: `url(${book2})` }}></SwiperSlide>
            <SwiperSlide style={{ backgroundImage: `url(${book3})` }}></SwiperSlide>
            <SwiperSlide style={{ backgroundImage: `url(${book4})` }}></SwiperSlide>
            <SwiperSlide style={{ backgroundImage: `url(${book5})` }}></SwiperSlide>
          </Swiper>
        </>
      );
}

export default BannerCard