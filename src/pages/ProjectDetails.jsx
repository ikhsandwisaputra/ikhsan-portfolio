import React from 'react';
import { useParams } from 'react-router-dom';
import projectDetails from '../data/projectDetails';
import { motion } from 'framer-motion';
import { FiClock, FiTag } from 'react-icons/fi';
import Carousel from '../components/reusable/Carousel';
import { BsGithub } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectDetails[projectId];

  if (!project) {
    return <div>Project not found</div>;
  }

  const {
    id,
    title,
    description,
    publishDate,
    tags,
    img,
    ProjectInfo: {
      ClientHeading,
      CompanyInfo,
      ProjectDetailsHeading,
      ProjectDetails,
      Images,
      Images: [{ img1, img2, img3, img4 }],
      Technologies: [{ title: TechnologiesTitle, techs: techUse }],
      Demo: [
        {
          title: DemoTitle,
          githubUrl: githubUrl,
          webUrl: webUrl,
          youtubeUrl: youtubeUrl,
        },
      ],
      RelatedProject: {
        title: RelatedProjectTitle,
        Projects: RelatedProjectsList,
      },
    },
  } = project;

  const slides = Images.map((imageObj, index) => {
    // Dapatkan semua kunci gambar (img1, img2, img3, img4)
    const imageKeys = Object.keys(imageObj);
    // Filter hanya kunci yang memiliki nilai (gambar)
    const validImageKeys = imageKeys.filter(key => imageObj[key]);
    // Buat array objek dengan properti image dan alt
    const imageArray = validImageKeys.map(key => ({ image: imageObj[key], alt: `Image ${index + 1}` }));
    return imageArray;
  }).flat();

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.6,
          delay: 0.15,
        }}
        className='container mx-auto  pt-16 sm:pt-10'
      >
        {/* PROJECT HEADER */}
        <p className='font-general-medium text-center text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600  sm:mt-20 pb-12 dark:from-blue-200 dark:to-green-200'>
          {title}
        </p>
        {/* <h1>{title}</h1> */}
        <p>{description}</p>
        {/* Tampilkan informasi detail proyek lainnya */}
        <div className='flex'>
          <div className='flex items-center mr-10'>
            <FiClock className='text-lg text-ternary-dark dark:text-ternary-light' />
            <span className='font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light'>
              {publishDate}
            </span>
          </div>
          <div className='flex items-center'>
            <FiTag className='text-lg text-ternary-dark dark:text-ternary-light' />
            <span className='font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light'>
              {tags}
            </span>
          </div>
        </div>
        {/* PROJECT GALLERY */}
        <Carousel items={slides} />

        <div className='flex sm:flex-row flex-col gap-10'>
          <div>
            {/* Single project technologies */}
            <div className='mb-7'>
              <p className='font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2'>
                {TechnologiesTitle}
              </p>
              <p className='font-general-regular pr-5 text-primary-dark dark:text-ternary-light'>
                {techUse.join(', ')}
              </p>
            </div>

            {/* Single project technologies */}
            <div >
              <p className='font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2'>
                {DemoTitle}
              </p>
              <div className='flex gap-2'>
                {githubUrl && (
                  <span
                    className='text-lg w-10 h-10 rounded-full bg-slate-300 dark:bg-slate-800 inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer'
                    title='GitHub'
                  >
                    <a
                      href={githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-ternary-dark dark:text-ternary-light'
                    >
                      <BsGithub />
                    </a>
                  </span>
                )}
                {webUrl && (
                  <span
                    className='text-lg w-10 h-10 rounded-full bg-slate-300 dark:bg-slate-800 inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer'
                    title='Website'
                  >
                    <a
                      href={webUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-ternary-dark dark:text-ternary-light'
                    >
                      <FaGlobe />
                    </a>
                  </span>
                )}
                {youtubeUrl && (
                  <span
                    className='text-lg w-10 h-10 rounded-full bg-slate-300 dark:bg-slate-800 inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer'
                    title='YouTube'
                  >
                    <a
                      href={youtubeUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-ternary-dark dark:text-ternary-light'
                    >
                      <BsYoutube />
                    </a>
                  </span>
                )}
              </div>
            </div>
          </div>

          {/*  Single project right section */}

          <div className='w-full sm:w-2/3 text-left sm:mt-0'>
            <p className='font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7'>
              {ProjectDetailsHeading}
            </p>
            {ProjectDetails.map((details) => {
              return (
                <p
                  key={details.id}
                  className='font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light'
                >
                  {details.details}
                </p>
              );
            })}
          </div>
        </div>

        {/* <div className='mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark'>
          <p className='font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left'>
            {RelatedProjectTitle}
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-4 gap-10'>
            {RelatedProjectsList.map((project) => {
              return (
                <img
                  src={project.img}
                  className='rounded-xl cursor-pointer'
                  alt={project.title}
                  key={project.id}
                />
              );
            })}
          </div>
        </div> */}
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
