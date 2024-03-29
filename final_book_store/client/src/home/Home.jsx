import React from 'react'
import Banner from '../components/Banner'
import BestSellerBook from './BestSellerBook'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBook from './OtherBook'
import Review from './Review'


const Home = () => {
  return (
    <div className=''>
      <Banner/>
      <BestSellerBook/>
      <FavBook/>
      <PromoBanner/>
      <OtherBook/>
      <Review/>
    </div>
  )
}

export default Home