import { useState, useEffect } from 'react';

import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { MdInfo, MdCode, MdRocket, MdPhoneAndroid } from 'react-icons/md';
import { Link, NavLink, useLocation } from 'react-router-dom';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import HireMeModal from '../HireMeModal';
import logoLight from '../../images/logo-ids-dev.jpeg';
import logoDark from '../../images/logo-ids-dev.jpeg';
// import
import { motion } from 'framer-motion';
import Button from '../reusable/Button';

const AppHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTheme, setTheme] = useThemeSwitcher();

  const [scrollY, setScrollY] = useState(0);
  const [isGlassEffect, setIsGlassEffect] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsGlassEffect(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }
  const location = useLocation();
  const [activePage, setActivePage] = useState('');

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

  function showHireMeModal() {
    if (!showModal) {
      document
        .getElementsByTagName('html')[0]
        .classList.add('overflow-y-hidden');
      setShowModal(true);
    } else {
      document
        .getElementsByTagName('html')[0]
        .classList.remove('overflow-y-hidden');
      setShowModal(false);
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id='nav'
      className={`sm:container sm:mx-auto fixed top-0 left-0 right-0 z-[9999] bg-opacity-70 backdrop-filter backdrop-blur-md bg-white-5 sm:rounded-full py-0 hidden sm:block   ${
        isGlassEffect ? 'bg-glass' : ''
      }`}
    >
      <div className='z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-1'>
        {/* Header menu links and small screen hamburger menu */}
        <div className='flex justify-between items-center px-4 sm:px-0 '>
          <div className=' sm:w-[85px] sm:h-[85px] w-[80px] h-[80px] rounded-full p-2'>
            <Link to='/'>
              {activeTheme === 'dark' ? (
                <img
                  src={logoDark}
                  className='w-full rounded-full'
                  alt='Dark Logo'
                />
              ) : (
                <img
                  src={logoLight}
                  className='w-full rounded-full'
                  alt='Dark Logo'
                />
              )}
            </Link>
          </div>

          {/* Theme switcher small screen */}
          <div className='flex items-center justify-between sm:hidden'>
            {/* Theme Switcher */}
            <div
              onClick={() => setTheme(activeTheme)}
              aria-label='Theme Switcher'
              className='bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer'
            >
              {activeTheme === 'dark' ? (
                <FiMoon className='text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl' />
              ) : (
                <FiSun className='text-gray-200 hover:text-gray-50 text-xl' />
              )}
            </div>

            {/* Hamburger Menu */}
            <button
              onClick={toggleMenu}
              type='button'
              className='focus:outline-none relative -translate-y-1'
              aria-label='Hamburger Menu'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light'
              >
                {showMenu ? (
                  <FiX className='text-3xl' />
                ) : (
                  <FiMenu className='text-3xl' />
                )}
              </svg>
            </button>
          </div>
        </div>

       

        {/* Header links large screen */}
        <div className='font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'>
          <Link
            to='/projects'
            className={`${
              activePage === 'projects' ? 'border-t-2 border-ternary-dark dark:border-t-2 dark:border-ternary-light' : ''
            } flex items-center text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2`}
            aria-label='Projects'
          >
            <MdCode className='mr-1 sm:mr-1 h-5 w-5 sm:w-6 sm:h-6 duration-100'></MdCode>
            Projects
          </Link>
          <Link
            to='/about'
            className={`${
              activePage === 'about' ? 'border-t-2 border-ternary-dark dark:border-t-2 dark:border-ternary-light' : ''
            } flex items-center text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2`}
            aria-label='Projects'
          >
            <MdRocket className='mr-1 sm:mr-1 h-5 w-5 sm:w-6 sm:h-6 duration-100'></MdRocket>
            About
          </Link>
          <Link
            to='/contact'
            className={` ${
              activePage === 'contact' ? 'border-t-2 border-ternary-dark dark:border-t-2 dark:border-ternary-light' : ''
            } flex items-center text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2`}
            aria-label='Projects'
          >
            <MdPhoneAndroid className='mr-1 sm:mr-1 h-5 w-5 sm:w-6 sm:h-6 duration-100'></MdPhoneAndroid>
            Contact
          </Link>
        </div>

        {/* Header right section buttons */}
        <div className='hidden sm:flex justify-between items-center flex-col md:flex-row'>
         

          {/* Theme switcher large screen */}
          <div
            onClick={() => setTheme(activeTheme)}
            aria-label='Theme Switcher'
            className='ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer'
          >
            {activeTheme === 'dark' ? (
              <FiMoon className='text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl' />
            ) : (
              <FiSun className='text-gray-200 hover:text-gray-50 text-xl' />
            )}
          </div>
        </div>
      </div>
      {/* Hire me modal */}
      <div>
        {showModal ? (
          <HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} />
        ) : null}
        {showModal ? showHireMeModal : null}
      </div>
    </motion.nav>
  );
};

export default AppHeader;
