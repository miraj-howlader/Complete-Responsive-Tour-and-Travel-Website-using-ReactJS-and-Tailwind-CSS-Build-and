import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const MobileNavData = [
    {
        id: 1,
        name: "Home",
        link: '/'
    },
    {
        id: 2,
        name: "About",
        link: '/about'
    },
    {
        id: 3,
        name: "Blogs",
        link: '/blogs'
    },
    {
        id: 4,
        name: "Best Places",
        link: '/best-places'
    },
]

const MobileNav = ({ showMenu }) => {
    return (
        <div className={`${showMenu ? " left-0" : "-left-[100%]"} fixed
     bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between
      bg-white dark:bg-gray-900 dark:text-white px-8 pb-6
       pt-16 text-black transition-all duration-200 md:hidden
        rounded-r-xl shadow-md`}>
            <div>
                {/* topbar section  */}
                <div className=''>
                    <div className=' flex items-center justify-start
                     gap-4'>
                    <FaUserCircle size={50}/>
                    <div className=' text-gray-500'>
                    <h1>Hello User</h1>
                    <span className=' text-sm text-slate-500'>Premium Users</span>
                    </div>
                    </div>
                </div>
                {/* navlink section  */}
                <div className=' py-14'>
                    <ul className=' flex flex-col items-center justify-center
                     py-8 gap-6'>
                        {
                            MobileNavData.map((item) => (
                                <li key={item.id}>
                                    <a
                                    className=' hover:text-primary
                                     transition-all duration-500'
                                     href={item.link}>{item.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default MobileNav
