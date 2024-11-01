import React from 'react'
import { useLocation } from 'react-router-dom'

const BlogsDetails = () => {
  const location = useLocation();
  const {item} = location.state;
  return (
    <div className=' min-h-[550px] pt-20'>
      <div className=' h-[300px] overflow-hidden'>
        <img src={item.image} alt=""
        className=' mx-auto h-[300px] w-full object-cover
         transition-all duration-700 hover:scale-110' />
      </div>
      <div className=' container'>

      </div>
    </div>
  )
}

export default BlogsDetails
