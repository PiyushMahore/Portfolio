import React from 'react'
import Project01 from '../assets/Project1.png'
import Project02 from '../assets/Project2.png'
import Project03 from '../assets/Project3.png'

function Projects() {
  return (
    <div name='projects' className='max-w-[1200px] mx-auto p-5'>
        <div className='pb-8'>
            <p className='text-4xl mb-3 font-bold primary-color'>
                Projects
            </p>
            <p className='text-gray-400'>
                Check Out Some Of My Projects
            </p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[200px] bg-cover relative'>
                <img src={Project01} alt=''/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wide'></span>
                    <div className='pt-8 text-center'>
                        <a href='https://exclusive-bookstore.netlify.app'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Book Store</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[200px] bg-cover relative'>
                <img src={Project02} alt=''/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wide'></span>
                    <div className='pt-8 text-center'>
                        <a href='https://exclusive-shopzee-ecommerce.netlify.app'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>E-Commerce</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[200px] bg-cover relative'>
                <img src={Project03} alt=''/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wide'></span>
                    <div className='pt-8 text-center'>
                        <a href='https://expens-tracke.netlify.app'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Expense Tracker</button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Projects