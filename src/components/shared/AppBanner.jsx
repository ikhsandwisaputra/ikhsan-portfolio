import { useState, useEffect } from 'react';
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { MdMail } from 'react-icons/md';
// import foto from '../../images/2.png';
import foto from '../../images/mu-foto/ikhsan-pp/11.png';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import '../../css/hi.css';
import AnimatedBlock from '../AnimatedBlock';
import CircleAnimate from '../CircleAnimate';
import Macbook from '../Macbook';
import Palestine from '../Palestine';
const AppBanner = () => {
  const [ setShowEmoji] = useState(false);
  useEffect(() => {
    // Setelah komponen dimuat, atur showEmoji menjadi true setelah beberapa detik
    const timeout = setTimeout(() => {
      setShowEmoji(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [setShowEmoji]);
  return (
    <>      
 <motion.section
       initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
      
    >
      <div className='pt-10 md:pt-32 container mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-2 border-b-ternary-light dark:border-b-ternary-dark border-b-2  pb-10 lg:pb-[50px]'>
        
        {/* === KOLOM KIRI === */}
        {/* Berisi Teks Sapaan, Nama, dan Deskripsi Typewriter */}
        <div className='flex flex-col text-center lg:text-left  space-y-4 pt-0 lg:pt-16  w-full  order-2 lg:order-1'>
         
          {/* Sapaan dan Nama */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.1 }}
          >
            {/* <Macbook /> */}
            <p className='text-3xl mb-2'>
              <span className='waving-hand' role='img' aria-label='Waving Hand'>
                👋
              </span>
              <span className='wave-text font-general-semibold text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-200 dark:to-green-200'>
                Hi, My Name is
              </span>
            </p>
            <h1 className='font-general-semibold text-3xl lg:text-4xl xl:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500 dark:from-blue-200 dark:to-green-200'>
              Ikhsan Dwi Saputra
            </h1>
          </motion.div>

          {/* Deskripsi dengan Typewriter */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
            className='font-general-medium mt-4 text-lg md:text-xl lg:text-2xl leading-normal text-gray-500 dark:text-gray-200 flex justify-center lg:justify-start items-center min-h-[60px] md:min-h-0'
          >
            <span className='mr-2'>I am a</span>
            <Typewriter
              options={{
                strings: [
                  'Front-End Developer.',
                  'Back-End Developer.',
                  'Full-Stack Developer.',
                  'Programmer.',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.p>

           <div className='flex justify-center w-full pt-10'>
           <div className='relative lg:translate-x-[100px] lg:translate-y-[100px] translate-y-[100px] translate-x-[220px]'>
           <AnimatedBlock />           
           </div>
          <div className='relative lg:-translate-x-[200px] '>

          <Macbook />
          </div>
          </div>
        </div>

        {/* === KOLOM TENGAH === */}
        {/* Berisi Elemen Visual seperti Macbook */}
        {/* <div className='hidden lg:flex justify-center items-center lg:w-1/5'>
          <div className='w-full h-full scale-125'>
             <Macbook />
          </div>
        </div> */}

        {/* === KOLOM KANAN === */}
        {/* Berisi Foto Profil dan Tombol Sosial Media */}
        <div className='flex flex-col items-center space-y-6 lg:w-[45%] order-1 lg:order-2'>
          {/* Foto Profil */}
          <motion.div
            initial={{ opacity: 0, y: -180 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
            className='w-[230px] h-[230px] sm:w-[300px] sm:h-[300px] rounded-full flex justify-center items-center z-20 relative'
          >
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-full'></div>
            <img
              src={foto}
              alt='Developer'
              className='w-full h-full object-cover rounded-full z-20'
            />
            <CircleAnimate />
          </motion.div>

          {/* Tombol Sosial Media */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.3 }}
            className='w-full flex justify-center gap-2'
          >
            <a href='https://github.com/ikhsandwisaputra'
              className='font-general-medium flex justify-center items-center px-2 sm:px-4 sm:w-48 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-2 shadow-lg rounded-lg bg-ternary-light focus:ring-1 focus:ring-indigo-900 hover:bg-ternary-dark text-gray-500 hover:text-white duration-500'
              target='_blank' rel="noreferrer"
            >
              <FiGithub className='mr-2 sm:mr-3 h-5 w-5'></FiGithub>
              <span className='text-sm sm:text-lg'>Github</span>
            </a>
            <a
              href='https://www.linkedin.com/in/ikhsan-dwi-saputra-339482297/'
              target='_blank' rel="noreferrer"
              className='font-general-medium flex justify-center items-center px-2 sm:px-4 sm:w-48 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-2 shadow-lg rounded-lg bg-ternary-light focus:ring-1 focus:ring-green-900 hover:bg-ternary-dark text-gray-500 hover:text-white duration-500'
            >
              <FiLinkedin className='mr-2 sm:mr-3 h-5 w-5'></FiLinkedin>
              <span className='text-sm sm:text-lg'>LinkedIn</span>
            </a>
            <a
              href='mailto:ikhsandwisaputraaaa@gmail.com'
              className='font-general-medium flex justify-center items-center px-2 sm:px-4 sm:w-48 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-2 shadow-lg rounded-lg bg-ternary-light focus:ring-1 focus:ring-indigo-900 hover:bg-ternary-dark text-gray-500 hover:text-white duration-500'
            >
              <MdMail className='mr-2 sm:mr-3 h-5 w-5'></MdMail>
              <span className='text-sm sm:text-lg'>Email</span>
            </a>
          </motion.div>
          <Palestine/>
        </div>

      </div>
    </motion.section>
    </>
  );
};

export default AppBanner;
