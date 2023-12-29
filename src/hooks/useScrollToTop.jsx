// NOTE: This scroll to top is the actual working scroll to to when user clicks on the circle arrow that appears when use scrolls down.
// The other `ScrollToTop` component in components folder is for the default react scroll to top behavior on route visit.

import { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi';

const useScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', scrollToTop);
    return function cleanup() {
      window.removeEventListener('scroll', scrollToTop);
    };
  });

  const scrollToTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', scrollToTop);

  return (
    <>
      <FiChevronUp
        onClick={backToTop}
        className={`scrollToTop w-[47px] h-[47px] sm:h-[45px] sm:w-[45px] rounded-[50%] sm:right-[50px] right-[15px]  bottom-[100px] sm:bottom-[50px]  p-[5px] fixed bg-ternary-dark bg-opacity-60  ${
          showScroll ? 'flex' : 'hidden'
        }`}
      />
      {/* <FiChevronUp
        className='scrollToTop '
        onClick={backToTop}
        style={{
          height: '45px',
          width: '45px',
          borderRadius: '50%',
          right: '50px',
          bottom: '50px',
          display: showScroll ? 'flex' : 'none',
          padding: '5px',
        }}
      /> */}
    </>
  );
};

export default useScrollToTop;
