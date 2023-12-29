import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { works } from '../../data/Static';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Work = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(''); // New state for selected category

  // Extract unique categories from works
  const uniqueCategories = [...new Set(works.map((work) => work.category))];

  // Filter projects based on the search term and selected category
  const filteredWorks = works.filter(
    (work) =>
      work.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || work.category === selectedCategory)
  );

  return (
    <div name='work' className='w-full py-5 sm:py-15 md:py-25'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center  h-full dark:text-white text-ternary-dark text-center'>
        <div>
          <h1 className='text-4xl text-center font-bold inline mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 dark:from-blue-200 dark:to-green-200'>
            Work Gallery
          </h1>
        </div>
        <div className='flex justify-between items-center flex-wrap my-10 sm:flex-row flex-col gap-2'>
          {/* Search input */}
          <div className='flex justify-between gap-2 items-center'>
            <FiSearch className='text-ternary-dark dark:text-ternary-light w-5 h-5'></FiSearch>
            <input
              type='text'
              placeholder='Search projects...'
              className='font-general-medium 
            pl-3
            pr-1
            sm:px-4
            py-2
            border 
        border-gray-200
            dark:border-secondary-dark
            rounded-lg
            text-sm
            sm:text-md
            bg-secondary-light
            dark:bg-ternary-dark
            text-primary-dark
            dark:text-ternary-light'
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {/* Category selection */}
          <select
            className='font-general-medium 
            px-4
            sm:px-6
            py-2
            border
            dark:border-secondary-dark
            rounded-lg
            text-sm
            sm:text-md
            dark:font-medium
            bg-secondary-light
            dark:bg-ternary-dark
            text-primary-dark
            dark:text-ternary-light'
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value=''>All Categories</option>
            {uniqueCategories.map((category) => (
              <option key={category} value={category} className='text-sm '>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className='max-w-[1000px] w-full grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-3 gap-1 sm:gap-8 px-1 sm:px-4'>
          {/* Map over the filtered projects */}
          {filteredWorks.map((work) => (
            <Link
              to={`/projects/${work.idProjects}`}
              aria-label={`Detail ${work.title}`}
              key={work.title}
              className='relative'
            >
              <div
                rel='noreferrer'
                className='rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-ternary-light dark:bg-ternary-dark overflow-hidden border-2 dark:border-none'
                data-aos='fade-up'
                data-aos-duration={work.duration}
                data-aos-easing='linear'
              >
                {/* Work image */}
                <img
                  src={work.imgUrl}
                  alt='work'
                  className='w-full h-36 md:h-48 object-cover'
                />
                {/* Work details */}
                <div className='w-full p-5 text-ternary-dark dark:text-ternary-light'>
                  <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>
                    {work.title}
                  </h3>
                  {/* Technologies */}
                  <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm mb-3'>
                    {work.tech.map((item) => (
                      <span
                        key={item}
                        className='inline-block px-2 py-1 bg-slate-300 dark:bg-slate-800 rounded-md'
                      >
                        {item}
                      </span>
                    ))}
                  </p>
                  <div className='flex gap-2 relative z-[999999999]'>
                    {work.githubUrl && (
                      <span
                        className='text-lg w-10 h-10 rounded-full bg-slate-300 dark:bg-slate-800 inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer
                      '
                        onClick={(e) => {
                          e.stopPropagation(); // Stop the event from propagating
                        }}
                      >
                        <a
                          href={work.githubUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-ternary-dark dark:text-ternary-light'
                        >
                          <BsGithub />
                        </a>
                      </span>
                    )}
                    {work.webUrl && (
                      <span
                        className='text-lg w-10 h-10 rounded-full bg-slate-300 dark:bg-slate-800 inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer'
                        onClick={(e) => {
                          e.stopPropagation(); // Stop the event from propagating
                        }}
                      >
                        <a
                          href={work.webUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-ternary-dark dark:text-ternary-light'
                        >
                          <FaGlobe />
                        </a>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
