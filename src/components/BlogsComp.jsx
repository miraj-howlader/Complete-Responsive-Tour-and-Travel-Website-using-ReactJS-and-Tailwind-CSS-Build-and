import React from 'react'
import BlogCard from './BlogCard'

import Img1 from '../assets/places/tajmahal.jpg'
import Img2 from '../assets/places/water.jpg'
import Img3 from '../assets/places/boat.jpg'
const BlogsData = [
    {
        id:1,
        image:Img1,
        title:'The best places to visit in India',
        desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi laboriosam at sunt assumenda ipsa illum nemo, nobis necessitatibus itaque placeat, tempora magni eum ullam blanditiis, debitis vel nostrum tenetur rem ipsum hic perspiciatis magnam consequuntur vitae cupiditate. Eos saepe animi debitis tempore voluptates vero magni repellat aspernatur. Velit molestiae laboriosam tempora, quibusdam vel hic voluptates blanditiis culpa minus maxime ullam consequatur distinctio pariatur vitae optio omnis possimus aliquam praesentium fugit aut eaque beatae? Magni corrupti, officiis repudiandae voluptas beatae ea soluta nostrum dolores quam, eum incidunt tempore? Consequatur repellat sed voluptatum. Explicabo minus quis quae, porro sit delectus praesentium ipsa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi laboriosam at sunt assumenda ipsa illum nemo, nobis necessitatibus itaque placeat, tempora magni eum ullam blanditiis, debitis vel nostrum tenetur rem ipsum hic perspiciatis magnam consequuntur vitae cupiditate. Eos saepe animi debitis tempore voluptates vero magni repellat aspernatur. Velit molestiae laboriosam tempora, quibusdam vel hic voluptates blanditiis culpa minus maxime ullam consequatur distinctio pariatur vitae optio omnis possimus aliquam praesentium fugit aut eaque beatae? Magni corrupti, officiis repudiandae voluptas beatae ea soluta nostrum dolores quam, eum incidunt tempore? Consequatur repellat sed voluptatum. Explicabo minus quis quae, porro sit delectus praesentium ipsa.',
        author:'John Doe',
        date:'April 2024'
    },
    {
        id:2,
        image:Img2,
        title:'The best places to visit in India',
        desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi laboriosam at sunt assumenda ipsa illum nemo, nobis necessitatibus itaque placeat, tempora magni eum ullam blanditiis, debitis vel nostrum tenetur rem ipsum hic perspiciatis magnam consequuntur vitae cupiditate. Eos saepe animi debitis tempore voluptates vero magni repellat aspernatur. Velit molestiae laboriosam tempora, quibusdam vel hic voluptates blanditiis culpa minus maxime ullam consequatur distinctio pariatur vitae optio omnis possimus aliquam praesentium fugit aut eaque beatae? Magni corrupti, officiis repudiandae voluptas beatae ea soluta nostrum dolores quam, eum incidunt tempore? Consequatur repellat sed voluptatum. Explicabo minus quis quae, porro sit delectus praesentium ipsa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi laboriosam at sunt assumenda ipsa illum nemo, nobis necessitatibus itaque placeat, tempora magni eum ullam blanditiis, debitis vel nostrum tenetur rem ipsum hic perspiciatis magnam consequuntur vitae cupiditate. Eos saepe animi debitis tempore voluptates vero magni repellat aspernatur. Velit molestiae laboriosam tempora, quibusdam vel hic voluptates blanditiis culpa minus maxime ullam consequatur distinctio pariatur vitae optio omnis possimus aliquam praesentium fugit aut eaque beatae? Magni corrupti, officiis repudiandae voluptas beatae ea soluta nostrum dolores quam, eum incidunt tempore? Consequatur repellat sed voluptatum. Explicabo minus quis quae, porro sit delectus praesentium ipsa.',
        author:'Smith',
        date:'April 2025'
    },
    {
        id:3,
        image:Img3,
        title:'The best places to visit in India',
        desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi laboriosam at sunt assumenda ipsa illum nemo, nobis necessitatibus itaque placeat, tempora magni eum ullam blanditiis, debitis vel nostrum tenetur rem ipsum hic perspiciatis magnam consequuntur vitae cupiditate. Eos saepe animi debitis tempore voluptates vero magni repellat aspernatur. Velit molestiae laboriosam tempora, quibusdam vel hic voluptates blanditiis culpa minus maxime ullam consequatur distinctio pariatur vitae optio omnis possimus aliquam praesentium fugit aut eaque beatae? Magni corrupti, officiis repudiandae voluptas beatae ea soluta nostrum dolores quam, eum incidunt tempore? Consequatur repellat sed voluptatum. Explicabo minus quis quae, porro sit delectus praesentium ipsa.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi laboriosam at sunt assumenda ipsa illum nemo, nobis necessitatibus itaque placeat, tempora magni eum ullam blanditiis, debitis vel nostrum tenetur rem ipsum hic perspiciatis magnam consequuntur vitae cupiditate. Eos saepe animi debitis tempore voluptates vero magni repellat aspernatur. Velit molestiae laboriosam tempora, quibusdam vel hic voluptates blanditiis culpa minus maxime ullam consequatur distinctio pariatur vitae optio omnis possimus aliquam praesentium fugit aut eaque beatae? Magni corrupti, officiis repudiandae voluptas beatae ea soluta nostrum dolores quam, eum incidunt tempore? Consequatur repellat sed voluptatum. Explicabo minus quis quae, porro sit delectus praesentium ipsa.',
        author:'Mike',
        date:'March 2024'
    },
]
const BlogsComp = () => {
  return (
    <div className=' dark:bg-gray-900 dark:text-white'>
        <div className=' container' data-aos='fade-up'>
            <h1 className=' my-8 border-l-8 border-primary/50
             py-2 pl-2 text-3xl font-bold'>Our latest Blogs</h1>
        </div>
        <div className=' grid grid-cols-1 gap-4 sm:grid-cols-2
         md:grid-cols-3'>
            {
                BlogsData.map((item)=>(
                    <BlogCard
                    key={item.id}
                    item={item}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default BlogsComp
