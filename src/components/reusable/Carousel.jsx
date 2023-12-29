import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = ({ items, autoSlideInterval = 7000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let interval;

    const startAutoSlide = () => {
      interval = setInterval(() => {
        goToNextSlide();
      }, autoSlideInterval);
    };

    const stopAutoSlide = () => {
      clearInterval(interval);
    };

    startAutoSlide();

    return () => {
      stopAutoSlide();
    };
  }, [currentIndex, autoSlideInterval]);

  return (
    <div
      className='relative mt-5 mb-10'
     
    >
      <div className='overflow-hidden sm:max-w-[800px] sm:max-h-[450px] mx-auto rounded-xl relative aspect-video'>
        <div
          className='flex transition-transform ease-in-out duration-300 transform'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className='w-full flex-shrink-0 mx-auto'>
              <img
                src={item.image}
                alt={item.alt}
                className='w-full h-full bg-contain rounded-xl'
              />
            </div>
          ))}
        </div>
      </div>

      <div className='flex mt-2 justify-center space-x-2'>
        {items.map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt={item.alt}
            className={`w-16 h-14 rounded-lg cursor-pointer ${
              index === currentIndex
                ? 'border-black border-2 dark:border-ternary-light'
                : ''
            }`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
      <button
        className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-ternary-dark dark:bg-ternary-light text-ternary-light dark:text-ternary-dark p-2 rounded-full'
        style={{ top: '45%' }}
        onClick={goToPrevSlide}
      >
        <FiChevronLeft />
      </button>
      <button
        className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-ternary-dark dark:bg-ternary-light text-ternary-light dark:text-ternary-dark p-2 rounded-full'
        style={{ top: '45%' }}
        onClick={goToNextSlide}
      >
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
