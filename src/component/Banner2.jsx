import React from 'react'
import satelite2 from '../assets/satelitejpg3.jpg'

const   Banner2 = () => {
  return (
    <div className='bg-black text-white pb-12 flex justify-center'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center ">
                <div>
                    <img src={satelite2} alt="" />
                </div>
                <div className='space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800'>
                   <p className='text-blue-500'>Our Misssion </p>
                   <h1 className='uppercase text-5xl'>Rapidcast</h1>
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, dolorum ducimus! Natus quos facilis est temporibus iste repudiandae porro debitis eius? Explicabo incidunt, possimus accusamus voluptate facilis excepturi eligendi dolor</p>
                   <button className='Primary-button'>Learn More</button>
                </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default  Banner2
