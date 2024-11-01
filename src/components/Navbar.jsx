import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import Logo from '../assets/logo.png'
import DarkMode from './DarkMode'
import { FaCaretDown } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import MobileNav from './MobileNav'
const DropDownLink = [
  {
    id:1,
    name:'Our Services',
    link:'/#services'
  },
  {
    id:2,
    name:'To Brands',
    link:'/#mobile_brands'
  },
  {
    id:3,
    name:'Location',
    link:'/#location'
  },
]
const Navbar = () => {
  const [orderPopup,setOrderPopup] = useState(false)
  const handleOrderpopup = () => {
    setOrderPopup(!orderPopup)
  }
  const [showMenu,setShowMenu] = useState(false)
  const toggleMenuIcons = () => {
    setShowMenu(!showMenu)
  }
  return (
    <>
    <div className=' fixed top-0 z-[99999] right-0 w-full bg-white text-black
     shadow-md dark:bg-gray-900 py-2 dark:text-white'>
      <div className='bg-gradient-to-r from-primary
       to-secondary text-white'>
      <div className="container py-[2px] sm:block hidden">
         <div className="flex  justify-between ">
          <p>20% off on next booking</p>
          <p>Mobile No. +65 765445 6564</p>
         </div>
         </div>
      </div>
      {/* navbar sectioon  */}
      <div className=' container py3 sm:py-0'>
        <div className=' flex justify-between items-center gap-4'>
          {/* Logo section  */}
          <div>
          <Link to='/'>
          <img src={Logo} alt=""  className=' w-16'
           onClick={() => window.scrollTo(0,0)}/>
          </Link>
          </div>
          {/* Navlink section  */}
          <div className=' hidden sm:block'>
            <ul className=' flex items-center  gap-6'>
              <li className=' py-4'>
                <NavLink to='/' activeClassName='active' onClick={() => window.scrollTo(0,0)}>Home</NavLink>
              </li>
              <li className=' py-4'>
                <NavLink to='/blogs' activeClassName='active' onClick={() => window.scrollTo(0,0)}>Blogs</NavLink>
              </li>
              <li className=' py-4'>
                <NavLink to='/places' activeClassName='active' onClick={() => window.scrollTo(0,0)}>Best Places</NavLink>
              </li>
              <li className=' py-4'>
                <NavLink to='/about' activeClassName='active' onClick={() => window.scrollTo(0,0)}>About</NavLink>
              </li>
              {/* Dropdown section  */}
              <li className=' py-4 relative group cursor-pointer'>
                <div className='dropdown  flex items-center'>
                  <span>Quick Links</span>
                  <span>
                    <FaCaretDown className=' transition-all duration-200
                     group-hover:rotate-180'/>
                  </span>
                </div>
                <div className=' absolute -left-9 z-[9999]
                 hidden group-hover:block shadow-md text-black
                  w-[150px] bg-white p-2'>
                  <ul>
                    {DropDownLink.map((item)=>(
                      <li key={item.id}>
                        <a 
                        className=' inline-block w-full rounded-md
                         p-2 hover:bg-primary/20'
                        href={item.link}>{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className=' flex items-center justify-center '>
            <button
            className=' bg-gradient-to-r from-primary to-secondary
             hover:bg-gradient-to-r hover:from-primary
              hover:bg-primary transition-all duration-500 text-white
               px-3 py-1 rounded-full'
               onClick={handleOrderpopup}
            >Book Now</button>
          </div>
         
          {/* darkmode  */}
          <DarkMode/>
          {/* Hambarger Menu  */}
          <div className=' lg:hidden  flex items-center'>
            {
              showMenu ? <RxCross2 className=' text-2xl cursor-pointer'
               onClick={toggleMenuIcons}/>:
              <MdMenu className=' text-2xl cursor-pointer'
               onClick={toggleMenuIcons}/>
            }
          </div>
        </div>
      </div>
      <MobileNav showMenu={showMenu}/>
    </div>
    
    </>
  )
}

export default Navbar
