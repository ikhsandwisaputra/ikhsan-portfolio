
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
             images={["/ikhsan-portfolio/experience/image-1.png"]}
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
            images={[
              "/ikhsan-portfolio/experience/ss-1.jpeg",
              "/ikhsan-portfolio/experience/ss-2.jpeg",
              "/ikhsan-portfolio/experience/ss-3.jpeg",
              "/ikhsan-portfolio/experience/ss-4.jpeg",
            ]}
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
            images={["/ikhsan-portfolio/experience/research-team-alquran.jpeg"]}
          />

          <ResumeCard
  title="Front End Developer (Internship)"
  subTitle={
    <a
      href="#"
      target="_blank"
      rel="noreferrer"
    >
      SMKN 2 Pekanbaru (2020/06 - 2020/12)
    </a>
  }
  result="Pekanbaru / Indonesia"
  des="Developed a web-based information system for extracurricular activities during a 6-month internship."
  images={[
    "/ikhsan-portfolio/experience/smkn2.jpeg",
    "/ikhsan-portfolio/experience/smkn-2.jpeg",
    
  ]}
/>

<ResumeCard
  title="Front End Developer (KKN Project)"
  subTitle={
    <a
      href="#"
      target="_blank"
      rel="noreferrer"
    >
      Desa Mulya Subur (2021/07 - 2021/08)
    </a>
  }
  result="Kampar / Indonesia"
  des="Designed and developed the official website for Desa Mulya Subur as part of a community service program (KKN)."
  images={[
   "/ikhsan-portfolio/experience/kkn.jpeg",
   
  ]}
/>
<ResumeCard
  title="AI Chatbot Research Team Member"
  subTitle={
    <a
      href="#"
      target="_blank"
      rel="noreferrer"
    >
      Research Project (Grant Funded) - AI Chatbot with RAG for Legal Data (2024)
    </a>
  }
  result="University Research Team"
  des="Participated as a research team member in a grant-funded project to develop an AI-powered chatbot using Retrieval-Augmented Generation (RAG) focused on legal documents. My role involved data preprocessing, integrating legal regulations into the knowledge base, and collaborating on the design of the chatbot's conversational flow. This project enhanced my understanding of AI application in the legal domain and improved my ability to work within interdisciplinary teams, including legal experts and developers."
  images={[
      // "/ikhsan-portfolio/experience/expert-team.jpeg",
  ]}
/>

<ResumeCard
  title="Expert Team Member"
  subTitle={
    <a
      href="#"
      target="_blank"
      rel="noreferrer"
    >
      Webs Apps Community (2021/03 - Present)
    </a>
  }
  result="Remote / Indonesia"
  des="Served as an expert team member, delivering sessions on web development topics and coordinating community members."
  images={[
   "/ikhsan-portfolio/experience/expert-team.jpeg",
   "/ikhsan-portfolio/experience/weap.jpeg",
   
  ]}
/>
</div>

<div className="flex flex-col gap-4">        
          <h2 className="text-2xl md:text-3xl font-bold text-ternary-dark dark:text-ternary-light pt-5">Organizational Experience</h2>
        </div>
        <div className="mt-14 w-4/5 h-fit border-l-[6px] border-l-blue-900 border-opacity-70 dark:border-l-ternary-dark dark:border-opacity-100   flex flex-col gap-10">
{/* Pengalaman Organisasi */}
<ResumeCard
  title="Member"
  subTitle={
    <a
      href="#"
      target="_blank"
      rel="noreferrer"
    >
      Dewan Eksekutif Mahasiswa (DEMA)
    </a>
  }
  result="2020 - 2021"
  des="Actively participated as a member of the student executive body, contributing to organizational programs and events."
  images={[
      "/ikhsan-portfolio/experience/dema.jpeg",
  ]}
/>

<ResumeCard
  title="Committee Member"
  subTitle="Panitia Pemilu KPPS"
  result="2020"
  des="Served as a KPPS committee member for local elections, helping ensure smooth election processes."
  images={[
    "/ikhsan-portfolio/experience/kpps.jpeg",
  ]}
/>

<ResumeCard
  title="Volunteer"
  subTitle="Community Charity Program"
  result="2020 - Present"
  des="Participated in weekly charity initiatives, distributing donations to underprivileged communities every Friday."
  images={[
    "/ikhsan-portfolio/experience/bagi-2.jpeg",
  ]}
/>
        </div>
      </div>
      
      
    </motion.div>
  );
};

export default Experience;
