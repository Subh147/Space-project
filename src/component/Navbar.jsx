import React from 'react'
import Logo from '../assets/LOGO.png'

const Navbar = () => {
  return (
    <div className='fixed top-0 right-0 w-full z-50 bg-black/10 py-4 sm:py-4 backdrop-blur-sm'>
      <div className='container '>
        <div className='flex justify-between items-center px-6 '>
            <div className='flex text-white items-center gap-4 font-bold text-2xl'>
                <img src={Logo} alt="" className='w-9'/>
                <span>TOC-SPACE</span>
            </div>
            
            <div className='text-white'>
                <ul className='flex items-center text-xl gap-7 py-3'>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Technology</a>
                    </li>
                    <li>
                        <a href="#">Galaxy</a>
                    </li>
                    <li>
                        <a href="#">Satelite</a>
                    </li>
                </ul>
            </div>
            
            <div>
                <button className='text-white border-2 border-white px-3 py-1 rounded-xl'>
                    Login
                </button>
            </div>

        </div>

      </div>
    </div>
  )
}

export default Navbar
