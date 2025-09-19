// import React from "react";
import '../../css/loader.css';
const Loader = () => {
  return (
      <>
      <div className="loader relative w-32 h-32 rounded-full rotate-45 text-lime-400 mx-auto"></div>
    <h3 className='animate-pulse text-center text-xl dark:text-white'>Loading...</h3>
    </>
  );
};

export default Loader;
