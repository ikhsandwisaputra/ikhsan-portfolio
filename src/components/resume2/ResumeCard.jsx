import { useState } from "react";

const ResumeCard = ({ title, subTitle, result, des, images = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const openImage = (index) => {
    setCurrent(index);
    setIsOpen(true);
  };

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="w-full h-auto group flex flex-col md:flex-row">
      {/* Timeline Bullet (desktop only) */}
      <div className="w-10 h-[6px] bg-blue-900 bg-opacity-80 mt-16 relative dark:bg-ternary-dark hidden md:block">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center dark:bg-ternary-dark bg-blue-900 bg-opacity-80 ">
          <span className="w-3 h-3 rounded-full bg-blue-900 bg-opacity-80 inline-flex group-hover:bg-green-500 duration-300"></span>
        </span>
      </div>

      {/* Card Content */}
      <div className="w-full dark:bg-ternary-dark rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 border-2 dark:border-none">

        {/* Grid Gambar */}
        {images.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className="w-full bg-gray-100 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => openImage(idx)}
              >
                <img 
                  src={img} 
                  alt={`screenshot-${idx}`} 
                  className="w-full h-40 object-contain rounded-lg hover:opacity-80 transition"
                />
              </div>
            ))}
          </div>
        )}

        {/* Header */}
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-ternary-light dark:opacity-70 dark:group-hover:opacity-100 duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-800 dark:text-gray-400 dark:group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-4 py-2 dark:text-green-400 dark:opacity-100 dark:group-hover:text-green-500 text-white border-1 bg-blue-950 opacity-80 rounded-lg flex justify-center items-center text-sm font-medium">
              {result}
            </p>
          </div>
        </div>

        {/* Deskripsi */}
        <p className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-400 dark:group-hover:text-gray-300 duration-300">
          {des}
        </p>
      </div>

      {/* Modal Fullscreen */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-[9999999999]">
          <button 
            className="absolute top-5 right-5 text-white bg-red-500 rounded-full px-4 text-3xl"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
          <img 
            src={images[current]} 
            alt="fullscreen" 
            className="max-w-full max-h-full object-contain"
          />
          {images.length > 1 && (
            <div className="absolute bottom-5 flex gap-5">
              <button onClick={prevImage} className="bg-white text-black px-3 py-1 rounded">Prev</button>
              <button onClick={nextImage} className="bg-white text-black px-3 py-1 rounded">Next</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResumeCard;
