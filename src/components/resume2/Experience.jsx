import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-blue-800 dark:text-ternary-light tracking-[4px]">2023 - 2018</p>
          <h2 className="text-2xl md:text-3xl font-bold text-ternary-dark dark:text-ternary-light">Experience</h2>
        </div>
        <div className="mt-14 w-4/5 h-fit border-l-[6px] border-l-blue-900 border-opacity-70 dark:border-l-ternary-dark dark:border-opacity-100   flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Web Developer"
            subTitle={
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
               IDS DEV ID (2021/01 - Present)
              </a>
            }
            result="Pekanbaru / Indonesia"
            des="IDS DEV ID is a start-up that sells digital products and also provides web development services and web-based applications and I am also the co founder of IDS DEV ID."
          />
          
        
          <ResumeCard
            title="Freelance Web Developer"
            subTitle={
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                freelance service provider website (2021/01 - Present)
              </a>
            }
            result="Online / Remote Work"
            des="As a freelancer web developer, I have accumulated valuable experience in designing and developing various websites. I have successfully collaborated with clients from various industries, understood their unique needs, and produced web solutions that meet high quality standards. In addition, this experience has also involved self-management of projects, including time planning and completion of projects according to set deadlines. I continue to deepen my technical skills, maintain website sustainability and security, and communicate effectively with clients to ensure full satisfaction with the work I produce."
          />
          <ResumeCard
            title="Full Stack Web Developer"
            subTitle={
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
               Internship in Faculty Lab (2023/01/01 - 2023/06/01)
              </a>
            }
            result="Sultan Syarif Kasim State Islamic University of Riau"
            des="During my internship in the lab I worked on a project to develop a page-by-page tajweed Quran application, which integrates api and mysql."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
