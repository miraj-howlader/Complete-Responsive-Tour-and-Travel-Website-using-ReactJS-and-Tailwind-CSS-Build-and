import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({item}) => {
  return (
    <Link
    to={`/blogs/${item.title}`}
    onClick={()=>window.scrollTo(0,0)}
    item={item}
    >
      <div className=' p-4 shadow-lg transition-all duration-500
       hover:shadow-lg'>
       <div className=' overflow-hidden'>
       <img src={item.image} alt="" 
        className=' mx-auto h-[250px] w-full object-cover
         transition-all  duration-700 hover:skew-x-1 hover:scale-110'/>
       </div>
       <div className=' flex justify-between pt-2 text-slate-700'>
       <p>{item.date}</p>
        <p>by {item.author}</p>
      </div>
      
      <div className=' space-y-2 py-3'>
            <h1 className=' line-clamp-1 font-bold'>{item.title}</h1>
            <p className=' line-clamp-2'>{item.desc}</p>
        </div>
      </div>
     
    </Link>
  )
}

export default BlogCard
