import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectSingle = ({ title, category, image, idProjects }) => {
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  const handleImageLoad = () => {
    // Set imageLoaded to true when the image is fully loaded
    setImageLoaded(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        delay: 0.15,
      }}
    >
      {loading ? (
        // Render a loading state while elements are being rendered
        <div>Loading...</div>
      ) : (
        <Link to={`/projects/${idProjects}`} aria-label={`Detail ${title}`}>
          <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
            <div>
              <h1>id Project {idProjects}</h1>
              <img
                src={image}
                className="rounded-t-xl border-none"
                alt="Single Project"
                onLoad={handleImageLoad}
              />
            </div>
            <div className={`text-center px-4 py-6 ${imageLoaded ? 'visible' : 'invisible'}`}>
              <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
                {title}
              </p>
              <span className="text-lg text-ternary-dark dark:text-ternary-light">
                {category}
              </span>
            </div>
          </div>
        </Link>
      )}
    </motion.div>
  );
};

export default ProjectSingle;
