import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";

function NavBar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>
      <h1 className='text-3xl font-bold primary-color ml-4 cursor-pointer'>PIYUSH</h1>
      <ul className='hidden md:flex md:flex-row md:nav-text'>
        <li className='p-5'><Link className='cursor-pointer hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-600  hover:scale-125 duration-300 hover:px-3 hover:py-1 rounded-lg' to='home' smooth duration={500}>Home</Link></li>
        <li className='p-5'><Link className='cursor-pointer hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-600  hover:scale-125 duration-300 hover:px-3 hover:py-1 rounded-lg' to='about' smooth duration={600}>About</Link></li>
        <li className='p-5'><Link className='cursor-pointer hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-600  hover:scale-125 duration-300 hover:px-3 hover:py-1 rounded-lg' to='projects' smooth duration={700}>Projects</Link></li>
      </ul>

      <div onClick={handleNav} className='block md:hidden mr-6'>
        {nav ? <AiOutlineCloseCircle className='cursor-pointer fixed top-[40px] right-6' size={20} /> : <AiOutlineMenu className='cursor-pointer' size={20} />}
      </div>

      <div className={nav ? `z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500` : `fixed left-[-100%] ease-in-out duration-500 min-h-[1700px]`}>
        <h1 className='text-3xl primary-color m-4'>PIYUSH</h1>
        <ul className='p-8 text-2xl'>
          <li className='p-2'><Link className='cursor-pointer' to='home' smooth duration={500}>Home</Link></li>
          <li className='p-2'><Link className='cursor-pointer' to='about' smooth duration={500}>About</Link></li>
          <li className='p-2'><Link className='cursor-pointer' to='projects' smooth duration={500}>Projects</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
