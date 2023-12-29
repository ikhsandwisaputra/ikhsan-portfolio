// MobileNav.js
import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  AiFillBoxPlot,
  AiFillBuild,
  AiFillContainer,
  AiFillEnvironment,
  AiFillRocket,
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineMail,
  AiTwotoneHtml5,
} from 'react-icons/ai';
import { Link, NavLink, useLocation } from 'react-router-dom';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';

const MobileNav = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState('');
  const [activeTheme, setTheme] = useThemeSwitcher();

  useEffect(() => {
    // Logika untuk menentukan halaman yang sedang aktif berdasarkan URL
    const path = location.pathname;

    if (path === '/') {
      setActivePage('');
    } else if (path.startsWith('/projects')) {
      setActivePage('projects');
    } else if (path === '/about') {
      setActivePage('about');
    } else if (path === '/contact') {
      setActivePage('contact');
    }
  }, [location]);
  return (
    <>
      <motion.div
        className='fixed top-4 right-4 flex items-center z-[999999] sm:hidden '
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div
          onClick={() => setTheme(activeTheme)}
          aria-label='Theme Switcher'
          className='bg-primary-light border-[1px] dark:border-ternary-light border-ternary-dark  dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer'
        >
          {activeTheme === 'dark' ? (
            <FiMoon className='text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl' />
          ) : (
            <FiSun className='text-gray-200 hover:text-gray-50 text-xl' />
          )}
        </div>
      </motion.div>
      <motion.nav
        className='fixed sm:hidden bottom-0 left-0 right-0   backdrop-filter  bg-white pt-0 pb-5 z-[9999] w-full mx-auto dark:bg-ternary-dark'
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
      >
        {/* Konten Navigasi Mobile */}
        <ul className='flex justify-evenly items-center '>
        <li
            className={`px-4 ${
              activePage === '' ? 'border-t-2 border-ternary-dark dark:border-t-2 dark:border-ternary-light' : ''
            }`}
          >
            <Link
              to='/'
              className='
              flex flex-col justify-center items-center text-left text-md text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  border-b-2 border-transparent '
            >
              <AiOutlineHome className=' mt-3' />
              Home
            </Link>
          </li>
          <li
            className={`px-4 ${
              activePage === 'projects' ? 'border-t-2 border-ternary-dark dark:border-t-2 dark:border-ternary-light' : ''
            }`}
          >
            <Link
              to='/projects'
              className={` flex flex-col justify-center items-center text-left text-md text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  border-b-2 border-transparent`}
            >
              <AiFillContainer className=' mt-3' />
              Projects
            </Link>
          </li>
          <li
            className={`px-4 ${
              activePage === 'about' ? 'border-t-2 border-ternary-dark dark:border-t-2 dark:border-ternary-light' : ''
            }`}
          >
            <Link
              to='/about'
              className={` flex flex-col items-center text-left text-md text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light   border-b-2 border-transparent`}
            >
              <AiFillRocket className=' mt-3' />
              About Me
            </Link>
          </li>
          <li
            className={`px-4 ${
              activePage === 'contact' ? 'border-t-2 border-ternary-dark dark:border-t-2 dark:border-ternary-light' : ''
            }`}
          >
            <Link
              to='/contact'
              className={` flex flex-col items-center text-left text-md text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light border-b-2 border-transparent`}
            >
              <AiOutlineMail className=' mt-3' />
              Contact
            </Link>
          </li>
        </ul>
      </motion.nav>
    </>
  );
};

export default MobileNav;
