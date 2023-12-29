import React from 'react';

const SongInfo = ({ title, artist, coverArtSrc }) => {
  return (
    <div className=" w-full flex flex-col justify-center items-center sm:mb-0  ">
      <div className='p-10 sm:p-0 sm:w-[200px] sm:h-[200px] sm:mb-4 '>
      <img
        className="drop-shadow-lg rounded-sm w-full"
        src={coverArtSrc}
        alt="Cover Art"
        />
        </div>
      <span className="text-2xl font-semibold text-ternary-dark dark:text-ternary-light drop-shadow-lg ">{title}</span>
      <span className="text-base font-medium drop-shadow-lg  text-ternary-dark dark:text-ternary-light">{artist}</span>
    </div>
  );
};

export default SongInfo;
