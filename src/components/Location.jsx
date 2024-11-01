import React from 'react'

const Location = () => {
  return (
    <div className=' dark:bg-gray-900 dark:text-white'>
      <div>
        <div className=' container'>
            <h1 className=' inline-block border-l-8 border-primary/50
             py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl'>Location to visit</h1>
           <div className=' rounded-lg'>
        
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117788.21087907626!2d90.27052221491297!3d22.695451486891038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37553407fbece487%3A0x5d069b9599d4414a!2sBarishal!5e0!3m2!1sen!2sbd!4v1730475504600!5m2!1sen!2sbd"
             width="100%" 
             height="350" 
             style={{ borderRadius:'20px'}} 
             allowfullscreen="" 
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade">
            </iframe>
           </div>
        </div>
      </div>
      
    </div>
  )
}

export default Location
