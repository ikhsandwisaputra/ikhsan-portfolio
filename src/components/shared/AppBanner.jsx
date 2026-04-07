import { useState, useEffect } from 'react';
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { MdMail } from 'react-icons/md';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import '../../css/hi.css';
import HeroBackground from '../HeroBackground';

const AppBanner = () => {
  const [, setShowEmoji] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowEmoji(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [setShowEmoji]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
      className='relative w-full overflow-hidden border-b-ternary-light dark:border-b-ternary-dark border-b-2'
    >
      {/* === BACKGROUND THREE.JS === */}
      <HeroBackground />

      {/* Overlay gradient biar teks lebih kebaca */}
      <div className='absolute inset-0 bg-gradient-to-r from-[#061422]/80 via-[#061422]/40 to-transparent pointer-events-none' />

      {/* === KONTEN HERO === */}
      <div className='relative z-10 container mx-auto flex flex-col items-center lg:items-start justify-center min-h-[80vh] lg:min-h-[85vh] py-16 lg:py-24'>
        <div className='flex flex-col text-center lg:text-left space-y-4 w-full lg:max-w-3xl'>
          {/* Sapaan dan Nama */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.1 }}
          >
            <p className='text-3xl mb-2'>
              <span className='waving-hand' role='img' aria-label='Waving Hand'>
                👋
              </span>
              <span className='wave-text font-general-semibold text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-green-200'>
                Hi, My Name is
              </span>
            </p>
            <h1 className='font-general-semibold text-4xl lg:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-green-200'>
              Ikhsan Dwi Saputra
            </h1>
          </motion.div>

          {/* Deskripsi dengan Typewriter */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
            className='font-general-medium mt-4 text-lg md:text-xl lg:text-2xl leading-normal text-gray-200 flex justify-center lg:justify-start items-center min-h-[60px] md:min-h-0'
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

          {/* Tombol Sosial Media */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.3 }}
            className='w-full flex flex-wrap justify-center lg:justify-start gap-2 pt-6'
          >
            <a
              href='https://github.com/ikhsandwisaputra'
              className='font-general-medium flex justify-center items-center px-2 sm:px-4 sm:w-48 text-lg border border-white/20 backdrop-blur-sm bg-white/5 py-2.5 sm:py-2 shadow-lg rounded-lg focus:ring-1 focus:ring-indigo-900 hover:bg-white/10 text-gray-200 hover:text-white duration-500'
              target='_blank'
              rel='noreferrer'
            >
              <FiGithub className='mr-2 sm:mr-3 h-5 w-5'></FiGithub>
              <span className='text-sm sm:text-lg'>Github</span>
            </a>
            <a
              href='https://www.linkedin.com/in/ikhsan-dwi-saputra-339482297/'
              target='_blank'
              rel='noreferrer'
              className='font-general-medium flex justify-center items-center px-2 sm:px-4 sm:w-48 text-lg border border-white/20 backdrop-blur-sm bg-white/5 py-2.5 sm:py-2 shadow-lg rounded-lg focus:ring-1 focus:ring-green-900 hover:bg-white/10 text-gray-200 hover:text-white duration-500'
            >
              <FiLinkedin className='mr-2 sm:mr-3 h-5 w-5'></FiLinkedin>
              <span className='text-sm sm:text-lg'>LinkedIn</span>
            </a>
            <a
              href='mailto:ikhsandwisaputraaaa@gmail.com'
              className='font-general-medium flex justify-center items-center px-2 sm:px-4 sm:w-48 text-lg border border-white/20 backdrop-blur-sm bg-white/5 py-2.5 sm:py-2 shadow-lg rounded-lg focus:ring-1 focus:ring-indigo-900 hover:bg-white/10 text-gray-200 hover:text-white duration-500'
            >
              <MdMail className='mr-2 sm:mr-3 h-5 w-5'></MdMail>
              <span className='text-sm sm:text-lg'>Email</span>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AppBanner;
