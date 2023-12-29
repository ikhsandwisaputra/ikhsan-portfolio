import React, { useEffect, useRef } from 'react';
import pic from '../../images/mu-foto/about.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../css/sorot.css'; // Sesuaikan dengan nama file CSS Anda
import file from '../../pdf/Ikhsan-dwi-saputra-resume.pdf';

const About = () => {
  useEffect(() => {
    AOS.init();

    const container = document.querySelector('.highlight-container');
    const text = document.querySelector('.highlight-text');

    if (container && text) {
      const highlightAnimation = document.createElement('div');
      highlightAnimation.classList.add('highlight-animation');

      container.appendChild(highlightAnimation);

      const handleMouseEnter = () => {
        highlightAnimation.style.animationPlayState = 'running';
      };

      const handleAnimationIteration = () => {
        highlightAnimation.style.animationPlayState = 'paused';
      };

      text.addEventListener('mouseenter', handleMouseEnter);
      text.addEventListener('animationiteration', handleAnimationIteration);

      // Clean up event listeners when the component is unmounted
      return () => {
        text.removeEventListener('mouseenter', handleMouseEnter);
        text.removeEventListener(
          'animationiteration',
          handleAnimationIteration
        );
      };
    }
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  const handleDownload = () => {
    // Gantilah 'path/to/your-resume.pdf' dengan path sesuai lokasi file resume Anda
    const resumeFilePath = file;

    // Membuat elemen anchor untuk download
    const downloadLink = document.createElement('a');
    downloadLink.href = resumeFilePath;
    downloadLink.download = file; // Nama file yang akan diunduh

    // Simulasikan klik pada elemen anchor
    downloadLink.click();
  };

  return (
    <div name='about' className='w-full sm:pt-32 pt-0 '>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl text-center sm:mt-20 font-bold inline bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-200 dark:to-green-200 pb-12'>
            About Me
          </p>
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='flex justify-center items-center'>
            <img
              src={pic}
              alt='mahdi laith'
              className='rounded-full shadow-2xl outline-offset-8 outline-dashed outline-2 object-cover outline-ternary-dark dark:outline-ternary-light w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem]'
            />
          </div>

          <div className='flex flex-col justify-center'>
            <p className='text-xl font-bold pb-2 text-ternary-dark dark:text-ternary-light text-start'>
              Hi there! Nice to meet you.
            </p>
            <div className='text-lg leading-7 text-ternary-dark dark:text-ternary-light'>
              <span className='highlight-container opacity-0 hidden'>
                <span className='highlight-text'></span>
              </span>
              i'm a full stack developer with{''}{' '}
              <span className='highlight-container'>
                <span className='highlight-text'>3 years of experience</span>
              </span>
              and I am also a technology enthusiast. I love{' '}
              <span className='highlight-container'>
                <span className='highlight-text'>web development</span>
              </span>
              technology so much that it requires me to keep learning. If you
              are looking for reliable and innovative web development solutions,
              I am here to
              <span className='highlight-container w-fit'>
                <span className='highlight-text text-lg leading-7 text-ternary-dark dark:text-ternary-light'>
                  help and look
                </span>
              </span>
              forward to working with you on
              <span className='highlight-container w-fit'>
                <span className='highlight-text text-lg leading-7 text-ternary-dark dark:text-ternary-light'>
                  future projects.
                </span>
              </span>
            </div>

            <div className='mt-4 mx-auto'>
              <button
                onClick={handleDownload}
                className='text-ternary-dark dark:text-ternary-light group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#0044ff]  rounded-sm hover:text-ternary-light font-semibold '
              >
                Download resume{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
