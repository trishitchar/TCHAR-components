import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
  const {_id,title,imageUrl} = useLoaderData();
  return (
    <div className=' mt-28 px-4 lg:px-24'>
      <h2>{title}</h2>
      <p>{_id}</p>
      <img src={imageUrl} alt="" className='h-96'/>
    </div>
  )
}

export default SingleBook