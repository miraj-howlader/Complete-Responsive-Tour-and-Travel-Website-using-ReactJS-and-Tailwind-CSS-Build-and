import React from 'react'
import TravelImg from '../assets/travelbox.png'
import { MdFlight, MdHotel } from 'react-icons/md'
import { IoIosWifi } from 'react-icons/io'
import { IoFastFood } from 'react-icons/io5'
const Banner2 = () => {
  return (
    <div className='min-h-[550px] bg-gray-100'>
        <div className='min-h-[550px] flex justify-center items-center
         backdrop-blur-xl py-12 sm:py-0'>
            <div className=' container'>
                <div className=' grid grid-cols-1 sm:grid-cols-2
                 gap-6 items-center'>
                  {/* image section  */}
               <div>
                    <img data-aos='fade-up' src={TravelImg} alt=""
                    className=' max-w-[450px] h-[350px] w-full mx-auto
                     drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)]
                      object-cover'
                     />
               </div>
               {/* text section  */}
               <div>
                <h1
                data-aos='fade-up'
                 className=' text-3xl font-bold sm:text-4xl'>Explore all corners of the world with us</h1>
               <p
               data-aos='fade-right'
                className=' mt-6 text-sm text-gray-500 tracking-wide
                leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur facere recusandae quae illo, cupiditate cum sed magnam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur facere recusandae quae illo, cupiditate cum sed magnam!</p>
               <div>
                <div
                data-aos='zoom-in'
                 className=' space-y-6 grid sm:grid-cols-1
                 md:grid-cols-2'>
                    <div className=' flex items-center gap-4'>
                    <MdFlight
                    className=' text-4xl h-12 w-12 shadow-sm p-4
                     rounded-full bg-violet-100 dark:bg-violet-400'
                    />
                    <p>Flight</p>
                    </div>
                    <div className=' flex items-center gap-4'>
                    <MdHotel
                    className=' text-4xl h-12 w-12 shadow-sm p-4
                     rounded-full bg-violet-300 dark:bg-violet-400'
                    />
                    <p>Hotel</p>
                    </div>
                    <div className=' flex items-center gap-4'>
                    <IoIosWifi
                    className=' text-4xl h-12 w-12 shadow-sm p-4
                     rounded-full bg-orange-200 dark:bg-violet-400'
                    />
                    <p>Wi-fi</p>
                    </div>
                    <div className=' flex items-center gap-4'>
                    <IoFastFood
                    className=' text-4xl h-12 w-12 shadow-sm p-4
                     rounded-full bg-green-300 dark:bg-violet-400'
                    />
                    <p>Foods</p>
                    </div>
                </div>
               </div>
               </div>
                </div>
             
            </div>

        </div>
      
    </div>
  )
}

export default Banner2
