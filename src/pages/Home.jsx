import React, { useState } from 'react'
import MainVideo from '../assets/video/main.mp4'
import Hero from '../components/Hero'
import Places from '../components/Places'
import Banner from '../components/Banner'
import BannerImg from '../assets/cover-women.jpg'
import BannerImg2 from '../assets/travel-cover2.jpg'

import BlogsComp from '../components/BlogsComp'
import Banner2 from '../components/Banner2'
import Testimonial from '../components/Testimonial'
import Popup from '../components/Popup'
const Home = () => {
  const [orderPopup,setOrderPopup] = useState(false)
  const handleOrderpopup = () => {
    setOrderPopup(!orderPopup)
  }

  return (
    <>
    <div>
      <div className=' relative h-[700px]'>
        <video 
        autoPlay
         loop 
         muted 
         className=' absolute right-0 top-0 h-[700px]
         w-full object-cover z-[-1]'>
            <source src={MainVideo} type='video/mp4'/>
        </video>
        <Hero/>
      </div>
      <Places handleOrderpopup={handleOrderpopup}/>
      <Banner BannerImg={BannerImg}/>
      <BlogsComp/>
      <Banner2/>
      <Banner BannerImg={BannerImg2}/>
      <Testimonial/>
      <Popup
      setOrderPopup={setOrderPopup}
      orderPopup={orderPopup}

      />
    </div>
      
    </>
  )
}

export default Home
