import React from 'react'
import { Link } from 'react-scroll'
import {TypeAnimation} from 'react-type-animation'
import img from '../assets/img.jpg'

function Home() {

  return (
    <div name="home" className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>

        <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
            <img src={img} className='rounded-3xl' />
        </div>

        <div className='col-span-2 px-5 my-auto'>
            <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                <span className='primary-color'>
                I`m a 
                </span>
                <br /> 
                <TypeAnimation
                sequence={[
                    'Frontend Developer',1000
                ]}
                repeat={Infinity}
                speed={50} 
                wrapper='span'
                />
            </h1>
            <p className='text-white sm:text-lg my-6 lg:text-xl'>
                My name is Piyush Mahore and I am passionate about coding
            </p>
            <div className='my-8'>
                <a href='https://drive.google.com/file/d/1rbjwMMgc8Y0qk2rALQbarYVUBiwc8ZVS/view' className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white'>Download CV</a>
                <Link smooth duration={800} to='contact' className='cursor-pointer px-6 py-3 w-full rounded-xl border border-gray-400 bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Home
