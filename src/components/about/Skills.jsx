import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { langues } from '../../data/Static';

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      name="skill"
      className="w-full  text-gray-300 "
    >
      <div className="max-w-screen-lg mx-auto pt-4 flex flex-col justify-center  h-full text-white">
        <div>
          <p className="text-4xl font-bold pt-10 pb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-700 dark:from-blue-200 dark:to-green-200">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center text-ternary-dark dark:text-ternary-light">
          {langues.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md transform hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              data-aos="fade-up" data-aos-duration={id+'00'} data-aos-easing="linear"
            >
              <img
                src={src}
                alt=""
                className="mx-auto"
                style={{ width: "4rem", height: "4rem" }}
              />
              <p className="mt-1">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;