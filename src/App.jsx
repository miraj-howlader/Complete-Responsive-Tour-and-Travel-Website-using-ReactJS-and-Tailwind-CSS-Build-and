import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs'
import BlogsDetails from './pages/BlogsDetails'
import PlacesRoute from './pages/PlacesRoute'
import NoPage from './pages/NoPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Aos from 'aos'
import 'aos/dist/aos.css'

const App = () => {

  useEffect(()=>{
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    })
    Aos.refresh()
  })
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/blogs/:id' element={<BlogsDetails/>} />
        <Route path='/places' element={<PlacesRoute/>} />
        <Route path='*' element={<NoPage/>} />
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
