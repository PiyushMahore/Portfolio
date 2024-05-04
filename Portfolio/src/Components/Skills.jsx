import React, {useState, useEffect} from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'

function Skills() {
    const [showItem, setShowItem] = useState(true);

    useEffect(() => {
      const handleResize = () => {
          if (window.innerWidth <= 600) {
              setShowItem(false);
          } else {
              setShowItem(true);
          }
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, [Date.now()]);

  return (
    <div className={`border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200] ${showItem ? 'mx-40' : 'mx-auto'} grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center`}>
        
        <h2 className='text-gray-700 text-xl md:text-4xl font-bold m-4'>
            My <br /> Tech <br /> Stack
        </h2>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={html} alt='HTML' />
            <p className='mt-2'>HTML</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={css} alt='CSS' />
            <p className='mt-2'>CSS</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={javascript} alt='JAVASCRIPT' />
            <p className='mt-2'>JAVASCRIPT</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img className='spin' src={react} alt='REACT' />
            <p className='mt-2'>REACT</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={tailwind} alt='TAILWIND' />
            <p className='mt-2'>TAILWIND</p>
        </div>
    </div>
  )
}

export default Skills