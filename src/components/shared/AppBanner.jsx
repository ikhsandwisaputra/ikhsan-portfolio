import { useState, useEffect } from 'react';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { FiArrowDownCircle, FiMessageSquare } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { MdMail } from 'react-icons/md';
// import foto from '../../images/2.png';
import foto from '../../images/mu-foto/ikhsan-pp/11.png';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import Marque from './Marque';
import '../../css/hi.css';
const AppBanner = () => {
  const [activeTheme] = useThemeSwitcher();
  const [showEmoji, setShowEmoji] = useState(false);

  useEffect(() => {
    // Setelah komponen dimuat, atur showEmoji menjadi true setelah beberapa detik
    const timeout = setTimeout(() => {
      setShowEmoji(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
      className='flex flex-col sm:justify-between items-center sm:flex-col pt-10 md:pt-32  relative overflow-hidden '
    >
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
        className='mx-auto w-[230px] h-[230px] sm:w-[300px] sm:h-[300px] sm:mt-0   rounded-full flex justify-center  items-center z-20 relative'
      >
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-full'></div>
        <img
          src={foto}
          alt='Developer'
          className='w-full h-full object-cover rounded-full z-20'
          style={{ objectFit: 'cover' }}
        />
      </motion.div>

      <p className='text-3xl'>
        <span className='waving-hand' role='img' aria-label='Waving Hand'>
          👋
        </span>
        <span className='wave-text font-general-semibold text-2xl lg:text-3xl xl:text-2xl pr-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-200 dark:to-green-200'>
          Hi, My Name is
        </span>
      </p>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.9,
          delay: 0.1,
        }}
        className='font-general-semibold text-2xl lg:text-3xl xl:text-4xl   bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500    dark:from-blue-200 dark:to-green-200 z-20 relative'
      >
        Ikhsan Dwi Saputra
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.9,
          delay: 0.2,
        }}
        className='font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center  leading-normal text-gray-500 dark:text-gray-200 flex justify-center items-center'
      >
        <span className='mr-2'>I am</span>
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('Full Stack Web Developer')
              .pauseFor(1000)
              .deleteAll()
              .typeString('Enthusiast Tech')
              .pauseFor(1000)
              .deleteAll()
              .typeString('Students.')
              .pauseFor(1000)
              .deleteAll()
              .start();
          }}
        />
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.9,
          delay: 0.3,
        }}
        className='w-full flex justify-center gap-2'
      >
        <a
          href='https://github.com/ikhsandwisaputra'
          className='font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-2 shadow-lg rounded-lg bg-ternary-light focus:ring-1 focus:ring-indigo-900 hover:bg-ternary-dark text-gray-500 hover:text-white duration-500'
          // aria-label='Download Resume'
          target='_blank'
        >
          <FiGithub className='mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100'></FiGithub>
          <span className='text-sm sm:text-lg font-general-medium duration-100'>
            Github
          </span>
        </a>
        <a
          href='https://www.linkedin.com/in/ikhsan-dwi-saputra-339482297/'
          target='_blank'
          className='font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-2 shadow-lg rounded-lg bg-ternary-light focus:ring-1 focus:ring-green-900 hover:bg-ternary-dark text-gray-500 hover:text-white duration-500'
          aria-label='Download Resume'
        >
          <FiLinkedin className='mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100'></FiLinkedin>
          <span className='text-sm sm:text-lg font-general-medium duration-100'>
            LinkedIn
          </span>
        </a>
        <a
          href='mailto:ikhsandwisaputraaaa@gmail.com'
          className='font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-2 shadow-lg rounded-lg bg-ternary-light focus:ring-1 focus:ring-indigo-900 hover:bg-ternary-dark text-gray-500 hover:text-white duration-500'
          aria-label='Download Resume'
        >
          <MdMail className='mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100'></MdMail>
          <span className='text-sm sm:text-lg font-general-medium duration-100'>
            Email
          </span>
        </a>
      </motion.div>
      <Marque />
    </motion.section>
  );
};

export default AppBanner;
