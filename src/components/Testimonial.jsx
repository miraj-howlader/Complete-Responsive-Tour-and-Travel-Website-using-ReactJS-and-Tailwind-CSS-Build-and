import React from 'react'
import Slider from 'react-slick'

const TestimonialData = [
    {
        id:1,
        name:"Samuel",
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident sapiente dolorem atque aspernatur, hic inventore.",
        img:'https://picsum.photos/101/101'
    },
    {
        id:2,
        name:"Jack",
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident sapiente dolorem atque aspernatur, hic inventore.",
        img:'https://picsum.photos/102/102'
    },
    {
        id:3,
        name:"Samuel",
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident sapiente dolorem atque aspernatur, hic inventore.",
        img:'https://picsum.photos/103/103'
    },
    {
        id:4,
        name:"John Doe",
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident sapiente dolorem atque aspernatur, hic inventore.",
        img:'https://picsum.photos/104/104'
    },
    {
        id:5,
        name:"Samuel",
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident sapiente dolorem atque aspernatur, hic inventore.",
        img:'https://picsum.photos/105/105'
    },
    {
        id:6,
        name:"Jeuel",
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident sapiente dolorem atque aspernatur, hic inventore.",
        img:'https://picsum.photos/106/106'
    },
    {
        id:7,
        name:"Miraj",
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident sapiente dolorem atque aspernatur, hic inventore.",
        img:'https://picsum.photos/107/107'
    },
    {
        id:8,
        name:"Jack",
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident sapiente dolorem atque aspernatur, hic inventore.",
        img:'https://picsum.photos/108/108'
    },
]
const Testimonial = () => {
    var setting = {
        dots:true,
        arrow:false,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase:'linear',
        pauseOnHover:true,
        pauseOnFocus:true

    }

  return (
    <div className=' py-10 dark:bg-gray-900 dark:text-white'>
      <div className=' container'>
        {/* header section  */}
        <div
        data-aos='fade-up'
         className=' text-center mb-20 max-w-[400px] mx-auto'>
            <p className=' text-sm bg-clip-text text-transparent
             bg-gradient-to-r from-primary to-secondary'>Testimonial</p>
           <h1 className=' text-3xl font-bold'>Testimonial</h1>
           <p className=' text-sm text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis vero tempora dicta corrupti beatae recusandae praesentium suscipit.</p>
        </div>
        {/* testimonial section  */}
        <div className=' grid grid-cols-1 md:grid-cols-2'>
         <Slider {...setting}>
           
           {
                TestimonialData.map((item)=>(
                    <div key={item.id} className=' my-6 max-w-[550px]
                     '>
                     <div className=' flex flex-col justify-center
                      items-center  gap-4 text-center shadow-lg p-4
                       mx-8  rounded-xl bg-primary/10 relative'>
                        <img src={item.img} alt="" 
                        className=' rounded-full block mx-auto'/>
                        <h1 className=' text-xl font-bold'>{item.name}</h1>
                        <p className=' text-gray-500 text-sm'>{item.text}</p>
                        <p className='  text-9xl
                         font-serif text-white absolute top-0 right-0 p-4'>,,</p>
                     </div>
                    </div>
                ))
            }
           
         </Slider>
         </div>
      </div>
    </div>
  )
}

export default Testimonial
