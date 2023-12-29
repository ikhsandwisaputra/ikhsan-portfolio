import React, { useState } from "react";
// import Title from "../layouts/Title";
import Education from "./Education";
// import Skills from "./Skills";
import Skills from "../about/Skills";
import Achievement from "./Achievement";
import Experience from "./Experience";
import MyProfileAccordion from "../reusable/MyProfileAccordion";

const Resume = () => {
  const [educationData, setEducationData] = useState(false);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(true);
  return (
    <section id="resume" className="w-full py-0 sm:py-20">
      <div className="flex justify-center items-center text-center">
        {/* <Title title="MY ACADEMIC AND WORK EXPERIENCE" des="My Resume" />{" "} */}
      </div>

      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg dark:bg-ternary-dark">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              educationData
                ? "border-ternary-light rounded-lg text-white"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              skillData
              ? "border-ternary-light rounded-lg text-white"
              : "border-transparent"
            } resumeLi`}
          >
            Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
            className={`${
              experienceData
              ? "border-ternary-light rounded-lg text-white"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
              ? "border-ternary-light rounded-lg text-white"
                : "border-transparent"
            } resumeLi`}
          >
            Fun Fact 
          </li>
         
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {achievementData && <MyProfileAccordion />}
      {experienceData && <Experience />}
    </section>
  );
};

export default Resume;
