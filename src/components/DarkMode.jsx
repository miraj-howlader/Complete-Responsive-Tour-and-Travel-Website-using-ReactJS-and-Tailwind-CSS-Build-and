import React, { useEffect, useState } from 'react'
import { GoMoon,GoSun } from "react-icons/go";
const DarkMode = () => {
    const [theme,setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    )
 
    useEffect(()=>{
      if(theme === 'dark'){
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme','dark')
      }else{
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme','light')
      }
    }, [theme])
  return (
    <div>
      {
        theme === 'dark' ? <GoSun className=' text-2xl cursor-pointer' onClick={() => setTheme('light')}/>:
        <GoMoon className=' text-2xl cursor-pointer' onClick={() => setTheme('dark')}/>
      }
    </div>
  )
}

export default DarkMode
