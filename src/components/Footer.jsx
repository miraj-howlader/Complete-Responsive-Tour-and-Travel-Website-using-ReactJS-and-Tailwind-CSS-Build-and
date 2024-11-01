import React from 'react'
import FooterLogo from '../assets/logo.png'
import FooterVideo from '../assets/video/footer.mp4'
import { FaFacebook, FaInstagram, FaLocationArrow, FaMobileAlt, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const FooterLink = [
  {
    title:'Home',
    link:'/'
  },
  {
    title:'About',
    link:'/about'
  },
  {
    title:'Best Places',
    link:'/places'
  },
  {
    title:'Blogs',
    link:'/blogs'
  },
]

const Footer = () => {
  return (
    <div
    
     className=' py-10 relative overflow-hidden dark:bg-gray-900
     dark:text-white'>
      <video 
      autoPlay
      loop
      muted
      className=' absolute right-0 top-0 h-full overflow-hidden
       w-full object-cover z-[-1]'
      >
        <source src={FooterVideo} type='video/mp4'/>
      </video>
      <div data-aos='zoom-in' className=' container'>
        <div className=' grid md:grid-cols-2 py-5 bg-white/80
         backdrop-blur-sm rounded-t-xl'>
          <div className=' px-4 py-8'>
            <h1 className=' flex items-center gap-3 text-xl sm:text-3xl
             font-bold text-justify sm:text-left'>
              <img src={FooterLogo} alt="" />
            </h1>
            <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat unde, similique soluta vel facilis architecto porro voluptates totam esse id?</p>
          <br />
          <div className=' flex items-center gap-3'>
            <FaMobileAlt/>
            <p>+4344 3044 434</p>
          </div>
          <div className=' flex items-center gap-3'>
            <FaLocationArrow/>
            <p>Dhaka Bangladesh</p>
          </div>
          <div className=' flex gap-4 mt-3 text-2xl
           '>
            <FaFacebook className=' hover:text-primary transition-all duration-500'/>
            <FaInstagram className=' hover:text-primary transition-all duration-500'/>
            <FaYoutube className=' hover:text-primary transition-all duration-500'/>
          </div>

          </div>

        
          <div className=' grid grid-cols-2 md:grid-cols-3  md:pl-10'>
          <div className=' py-8 px-4'>
            <h1 className=' text-xl font-bold text-justify
             sm:text-left mb-3'>Important Links</h1>
             <ul className=' flex flex-col gap-4'>
              {
                FooterLink.map((item)=>(
                  <li className=' cursor-pointer hover:translate-x-1
                   duration-500 hover:text-primary space-x-1
                    text-gray-500  '>
                    <Link
                    to={item.link}
                    onClick={()=>window.scrollTo(0,0)}
                   
                    >
                    <span>&#11162;</span>
                    <span>{item.title}</span>
                    </Link>
                  </li>
                ))
              }
             </ul>
          </div>
          <div className=' py-8 px-4'>
            <h1 className=' text-xl font-bold text-justify
             sm:text-left mb-3'>Important Links</h1>
             <ul className=' flex flex-col gap-4'>
              {
                FooterLink.map((item)=>(
                  <li className=' cursor-pointer hover:translate-x-1
                   duration-500 hover:text-primary space-x-1
                    text-gray-500  '>
                    <Link
                    to={item.link}
                    onClick={()=>window.scrollTo(0,0)}
                   
                    >
                    <span>&#11162;</span>
                    <span>{item.title}</span>
                    </Link>
                  </li>
                ))
              }
             </ul>
          </div>
          <div className=' py-8 px-4'>
            <h1 className=' text-xl font-bold text-justify
             sm:text-left mb-3'>Important Links</h1>
             <ul className=' flex flex-col gap-4'>
              {
                FooterLink.map((item)=>(
                  <li className=' cursor-pointer hover:translate-x-1
                   duration-500 hover:text-primary space-x-1
                    text-gray-500  '>
                    <Link
                    to={item.link}
                    onClick={()=>window.scrollTo(0,0)}
                   
                    >
                    <span>&#11162;</span>
                    <span>{item.title}</span>
                    </Link>
                  </li>
                ))
              }
             </ul>
          </div>
        </div>

       
        </div>
        <div className=' bg-primary py-4 px-3 w-full h-full'>
          <div className=' text-center text-white'>&copy; 2024 All right reserved || Made with ❤💗💔 by Miraj Howlader</div>
        </div>
      </div>

      <div >
         
        </div>
    </div>
  )
}

export default Footer
