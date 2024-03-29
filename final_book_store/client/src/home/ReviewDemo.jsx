import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { FaStar } from 'react-icons/fa6';
import { Avatar } from "flowbite-react";
import img from '../assets/profile.jpg'

const ReviewDemo = () => {
  return (
            <div className='space-y-6 bg-white'>
                <div className=' text-amber-500 flex gap-2 m-3 '>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7 '>
                    <p className='mb-5  text-black text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit unde deleniti a pariatur totam. Laudantium, error ipsum delectus aspernatur commodi possimus, nulla quis sint mollitia quia veniam voluptatibus odit.</p>
                    <Avatar img={img} alt="avatar of tchar" rounded className='w-10 mb-4'/>
                </div>
            </div>
  )
}

export default ReviewDemo