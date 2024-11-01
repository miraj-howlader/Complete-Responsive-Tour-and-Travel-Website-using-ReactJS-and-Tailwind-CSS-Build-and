import React from 'react'
import Img1 from '../assets/places/boat.jpg'
import Img2 from '../assets/places/place4.jpg'
import Img3 from '../assets/places/place5.jpg'
import Img4 from '../assets/places/place6.jpg'
import Img5 from '../assets/places/tajmahal.jpg'
import Img6 from '../assets/places/water.jpg'
import PlacesCard from './PlacesCard'
const PlacesData = [
    {
        id:1,
        img:Img1,
        title:'Boat tour',
        location:'USA',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price:100,
        type:'Cultural Relax'
    },
    {
        id:2,
        img:Img2,
        title:'Bridge',
        location:'LONDON',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price:400,
        type:'Cultural Relax'
    },
    {
        id:3,
        img:Img3,
        title:'City',
        location:'USA',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price:180,
        type:'Cultural Relax'
    },
    {
        id:4,
        img:Img4,
        title:'Lost Angels',
        location:'USA',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price:1000,
        type:'Cultural Relax'
    },
    {
        id:5,
        img:Img5,
        title:'Tajmahal',
        location:'INDIA',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price:900,
        type:'Historical'
    },
    {
        id:6,
        img:Img6,
        title:'Water',
        location:'CANADA',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price:1200,
        type:'Cultural Relax'
    },
]
const Places = ({handleOrderpopup}) => {
  return (
    <div className=' bg-gray-50 py-10 dark:bg-gray-900
     dark:text-white'>
        <div className=' container'>
            <h1 className=' my-8 border-l-8
             border-primary/50 py-2 pl-2
              text-3xl font-bold'>Best Places to visit</h1>

              <div
              data-aos='fade-up'
              data-aos-delaty='100'
               className=' grid grid-cols-1 sm:grid-cols-2
               md:grid-cols-3 gap-4'>
                {
                    PlacesData.map((item)=>(
                        <PlacesCard
                        key={item.id}
                        item={item}
                        handleOrderpopup={handleOrderpopup}
                        />
                    ))
                }
              </div>

        </div>
      
    </div>
  )
}

export default Places
