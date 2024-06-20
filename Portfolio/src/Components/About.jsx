import React from 'react'
import AboutImg from '../assets/About.jpg'

function About() {
  return (
    <div name='about' className='text-white max-w-[1200px] mx-auto my-12'>

      <div className='md:grid md:grid-cols-2 sm:py-16'>
        <div className='mt-4 md:mt-0 text-left flex'>
          <div className='my-auto mx-6'>
            <h2 className='text-4xl font-bold mb-4 primary-color'>
              About Me
            </h2>
            <p className='text-base lg:text-lg'>
            Hello there! I'm Piyush , a frontend developer with a passion for crafting beautiful and intuitive digital experiences. With a blend of creativity and technical prowess, I specialize in turning ideas into engaging user interfaces that leave a lasting impression.
            </p>
          </div>
        </div>
        <img className='mx-auto rounded-3xl py-8 md:py-0' src={AboutImg} width={400} height={400} />
      </div>
    </div>
  )
}

export default About
