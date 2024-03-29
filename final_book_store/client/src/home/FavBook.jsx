import React from 'react'
import FavBookpic from '../assets/favoritebook.jpg'
import { Link } from 'react-router-dom'

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={FavBookpic} alt="" srcset="" className='rounder md:w-10/12' />
        </div>
        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find your Favorite<span className='text-blue-700'>Book here</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat sapiente rem quaerat animi atque fugiat ut. Libero omnis similique, non veniam tempora debitis itaque ut iure quis in deleniti iusto.</p>

            {/* stats */}
            <div className='flex flex-col justify-between sm:flex sm:flex-row gap-6 md:w-3/4 my-=14'>
                <div>
                    <h3 className='text-3xl font-bold'>700+</h3>
                    <p className='text-base'>Book Listing</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>650+</h3>
                    <p className='text-base'>Register User</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>1200+</h3>
                    <p className='text-base'>Download</p>
                </div>
            </div>

            <Link to="/shop" className='mt-12 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore more</button></Link>
        </div>
    </div>
  )
}

export default FavBook