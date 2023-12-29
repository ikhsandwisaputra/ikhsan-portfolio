import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import ResumeCardCertif from "./ResumeCardCertif";
import certif from '../../images/sertif.jpeg';
const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-blue-900 dark:text-blue-100 tracking-[4px]">2020 - 2024 (Expected)</p>
          <h2 className="text-2xl md:text-3xl font-bold text-ternary-dark dark:text-ternary-light">
            Educational Qualification
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-blue-900 border-opacity-70 dark:border-l-ternary-dark flex flex-col gap-10">
          <ResumeCard
            title={
              <a
                href="https://www.uin-suska.ac.id/"
                target="_blank"
                rel="noreferrer"
              >
                Informatics Engineering Bachelor
              </a>
            }
            subTitle="Sultan Syarif Kasim State Islamic University of Riau (2020 - 2024)"
            result="Riau, Indonesia"
            des="Faculty of Science and Technology"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm dark:text-blue-100  tracking-[4px]">2020 - 2023</p>
          <h2 className="text-2xl md:text-3xl font-bold text-ternary-dark dark:text-ternary-light">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-blue-900 dark:border-l-ternary-dark border-opacity-70 flex flex-col gap-10">
          <ResumeCardCertif
            title={
              <a
                href="https://academy.oracle.com/en/oa-web-overview.html"
                target="_blank"
                rel="noreferrer"
              >
                PL/SQL Oracle Academy Course
              </a>
            }
            subTitle="Oracle Academy - (01/5/2022 - 01/11/2021)"
            result="Oracle Academy"
            des="During semester 5, I successfully obtained my PL/SQL certificate from Oracle Academy, demonstrating my dedication and understanding of developing database applications using the PL/SQL programming language. This certificate is not only a testament to my personal achievement, but also reinforces technical skills that will support my career journey and professional development in the field of Oracle database management."
            url={certif}
          />


      
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
