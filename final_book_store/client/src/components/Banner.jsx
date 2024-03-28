import React from 'react';
import BannerCard from '../home/BannerCard';

const Banner = () => {
  console.log('BannerCard component rendered 33');
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-20 md:py-40'>
        {/* Left side div */}
        <div className='md:w-1/2'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4'>
            Buy and Sell Your Books{' '}
            <span className='text-blue-700'>for the Best Price</span>
          </h2>
          <p className='text-lg text-gray-700 mb-6'>
            Discover a vast collection of books and find the best deals for your reading journey. Join our community of book lovers today!
          </p>
          <div className='flex items-center mb-6'>
            <input
              type='text'
              name='search'
              id='search'
              placeholder='Search a book'
              className='py-2 px-4 rounded-md outline-none focus:ring-2 focus:ring-blue-500 flex-grow'
            />
            <button className='bg-blue-700 px-6 py-2 text-white font-medium rounded-md hover:bg-blue-800 transition-colors ease-in-out'>
              Search
            </button>
          </div>
        </div>
        {/* Right side div */}
        <div className='md:w-1/2'>
            <BannerCard/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
