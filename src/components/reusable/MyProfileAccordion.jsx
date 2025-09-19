// MyProfileAccordion.jsx

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import AudioPlayer from '../music/components/audioplayer';

// ...

const MyProfileAccordion = () => {
  const [activeTab, setActiveTab] = useState(2); // Mengubah nilai awal menjadi 2
  const controls = useAnimation();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
  }, [activeTab, controls]);

  const handleTabClick = (tabIndex) => {
    if (tabIndex === 2) {
      // Jika mengklik tab "Favorite Music", toggle musik
      toggleMusic();
    }

    // Tetap set nilai activeTab
    setActiveTab(tabIndex);
  };

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className='flex gap-10 mx-auto mt-8 sm:flex-row flex-col'
    >
      {/* Menu Kiri */}
      <div className='w-[200px] h-fit bg-ternary-light p-5 rounded-lg border-2 dark:bg-ternary-dark dark:border-none'>
        <h2 className='text-2xl font-semibold mb-4 text-ternary-dark dark:text-ternary-light'>
          Menu
        </h2>
        <ul className='space-y-2'>
          <motion.li
            className={`cursor-pointer ${
              activeTab === 1
                ? 'text-blue-500 font-bold'
                : 'text-ternary-dark dark:text-ternary-light'
            }`}
            onClick={() => handleTabClick(1)}
          >
            Hobies
          </motion.li>
          <motion.li
            className={`cursor-pointer ${
              activeTab === 2
                ? 'text-blue-500 font-bold'
                : 'text-ternary-dark dark:text-ternary-light'
            }`}
            onClick={() => handleTabClick(2)}
          >
            Favorite Music
          </motion.li>
        </ul>
      </div>

      {/* Konten Kanan */}
      <div className='w-full border-2 dark:border-none'>
        {activeTab === 1 && (
          <motion.div
            className='bg-ternary-light dark:bg-ternary-dark p-5 rounded-md shadow-md border-2 dark:border-none'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3 className='text-xl font-medium mb-2 text-ternary-dark dark:text-ternary-light'>
              {' '}
              Personal Hobbies:
            </h3>
            <p className='text-ternary-dark dark:text-ternary-light'>
              🖥️ Coding / 🎹 Music / 📖 Learning / 📚 Reading / 🎨 Designing /
              🏢 Tech / and more
            </p>
          </motion.div>
        )}
        {activeTab === 2 && (
          <motion.div
            className='bg-ternary-light dark:bg-ternary-dark p-5 rounded-md shadow-md'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3 className='text-xl text-center font-medium mb-2 text-ternary-dark dark:text-ternary-light'>
              Favorite Music
            </h3>
            <AudioPlayer isPlaying={isPlaying} />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default MyProfileAccordion;
