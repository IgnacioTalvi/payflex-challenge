import React from 'react'
import {Images} from '../assets/assets'

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6'>
        <img src={Images.payflexLogo} alt="PayFlex Logo" className="h-20 md:h-22 cursor-pointer" /> 
        <div className='flex flex-row'>
        <ul className='hidden md:flex justify-center items-center space-x-8'>
            <a href="#Header" className='cursor-pointer'>Benefits</a>
            <a href="#Header" className='cursor-pointer'>Testimonials</a>
            <a href="#Header" className='cursor-pointer'>FAQ</a>
            
            <button className='hidden md:block bg-blue-600 px-4 py-2 rounded-full cursor-pointer'>
                <a href="#Header" className='text-white'>Get in touch</a>
            </button>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
