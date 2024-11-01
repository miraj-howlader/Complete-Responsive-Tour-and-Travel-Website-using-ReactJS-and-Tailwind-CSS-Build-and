import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'

const PlacesCard = ({item,handleOrderpopup}) => {
  return (
    <div className=' shadow-lg transition-all duration-500
     hover:shadow-xl cursor-pointer'
     onClick={handleOrderpopup}
     >
      <div className=' overflow-hidden'>
        <img src={item.img} alt="" 
        className=' mx-auto h-[220px] w-full object-cover
         transition duration-700 hover:skew-x-2 hover:scale-110'
        />
      </div>
      <div className=' space-y-3 p-3'>
        <h1 className=' line-clamp-1 font-bold text-xl'>{item.title}</h1>
        <div className=' flex items-center gap-2 opacity-70'>
            <IoLocationSharp/>
            <span>{item.location}</span>
        </div>
        <p className=' line-clamp-2'>{item.desc}</p>
        <div className=' flex items-center justify-between border-t-2
         y-3 !mt-3'>
         <div className=' opacity-70'>
           <p>{item.type}</p>
         </div>
         <div>
            <p className=' text-2xl font-bold'>${item.price}</p>
         </div>
        </div>
      </div>
      
    </div>
  )
}

export default PlacesCard
