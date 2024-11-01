import React from 'react'

const Banner = ({BannerImg}) => {
    const BannerIMG = {
     backgroundImage:`url(${BannerImg})`,
     backgroundSize:'cover',
     backgroundPosition:'center',
     backgroundRepeat:'no-repeat',
     height:'400px',
    
    }
  return (
    <div
    data-aos='zoom-in'
     style={BannerIMG}
    className=' h-[400px] w-full'>
      
    </div>
  )
}

export default Banner
