import React from 'react'
import moonsurface from '../assets/moon.png'

const Hero = () => {
  return (
    <div className='h-full  text-white  relative z-50'>
      <div className='h-full flex  justify-center items-center p-4'>
        <div className='container grid grid-col-1  sm:grid-cols-3 gap-4'>
            <div className='space-y-5 lg:pr-20'>
                <h1 className='text-5xl font-bold'>Orbit The Earth</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, dolorum ducimus! Natus quos facilis est temporibus iste repudiandae porro debitis eius? Explicabo incidunt, possimus accusamus voluptate facilis excepturi eligendi dolor?</p>
                <button className='Primary-button'>Learn More</button>
            </div>

            <div>

            </div>

        </div>
      </div>
      {/*<img src={moonsurface} alt="" className='absolute bottom-0  w-full brightness-50   '/>*/}
      <div className='absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px]'></div>
    </div>
  )
}

export default Hero

