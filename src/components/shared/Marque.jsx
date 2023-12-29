import React from 'react';
import Marquee from 'react-fast-marquee';
import palestinFlag from '../../images/palestin.png';
import indoFlag from '../../images/indo.png';

function App() {
  return (
    <div className='flex items-center justify-center h-[55px] dark:bg-ternary-dark bg-gray-200  p-5 mt-5 rounded-md'>
        <Marquee direction='left' speed={100} >
          <div className='w-full h-[55px] flex items-center justify-center   '>
            <div className='w-[30px] h-[50px] mt-7 mr-4'>
              <img src={palestinFlag} alt='' />
            </div>
            <div className='w-[30px] h-[50px] mt-7 mr-4'>
              <img src={indoFlag} alt='' />
            </div>
            <p className='text-ternary-dark dark:text-ternary-light font-semibold text-md marquee-text mr-20'>Free Palestine </p>
            <div className='w-[30px] h-[50px] mt-7 mr-4'>
              <img src={palestinFlag} alt='' />
            </div>
            <div className='w-[30px] h-[50px] mt-7 mr-4'>
              <img src={indoFlag} alt='' />
            </div>
            <p className='text-ternary-dark dark:text-ternary-light font-semibold text-md marquee-text mr-20'>Free Palestine </p>
            <div className='w-[30px] h-[50px] mt-7 mr-4'>
              <img src={palestinFlag} alt='' />
            </div>
            <div className='w-[30px] h-[50px] mt-7 mr-4'>
              <img src={indoFlag} alt='' />
            </div>
            <p className='text-ternary-dark dark:text-ternary-light font-semibold text-md marquee-text mr-20'>Free Palestine </p>
            <div className='w-[30px] h-[50px] mt-7 mr-4'>
              <img src={palestinFlag} alt='' />
            </div>
            <div className='w-[30px] h-[50px] mt-7 mr-4'>
              <img src={indoFlag} alt='' />
            </div>
            <p className='text-ternary-dark dark:text-ternary-light font-semibold text-md marquee-text mr-20'>Free Palestine </p>
            <div className='w-[30px] h-[50px] mt-7 mr-4'>
              <img src={palestinFlag} alt='' />
            </div>
            <div className='w-[30px] h-[50px] mt-7 mr-4'>
              <img src={indoFlag} alt='' />
            </div>
            <p className='text-ternary-dark dark:text-ternary-light font-semibold text-md marquee-text mr-20'>Free Palestine </p>
          </div>
        </Marquee>
      </div>
  );
}

export default App;
