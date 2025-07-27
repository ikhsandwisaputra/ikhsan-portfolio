import html from "../assets/langues/HTML.png";
import angular from "../assets/langues/angular.png";
import reactLangue from "../assets/langues/react.png";
import django from "../assets/langues/django.png";
import symfony from "../assets/langues/symfony.png";
import css from "../assets/langues/css.png";
import github from "../assets/langues/github.png";
import tailwind from "../assets/langues/tailwind.png";
import js from "../assets/langues/js.png";
import spring from "../assets/langues/spring.png";
import flutter from "../assets/langues/flutter.png";
import bootstrap from "../assets/langues/bootstrap.png";
import c from "../assets/langues/c.png";
import py from "../assets/langues/py.png";
import php from "../assets/langues/php.png";
import java from "../assets/langues/java.png";

// Import images
import WebImage1 from '../images/my-project/COFFEE-LANDING-PAGE.png';
import WebImage2 from '../images/my-project/Personal-web.png';
import WebImage3 from '../images/my-project/SIES.png';
import WebImage4 from '../images/my-project/sidoc.png';
import WebImage5 from '../images/my-project/sbi.png';
import WebImage6 from '../images/my-project/quran.png';
import WebImage7 from '../images/my-project/talenta.png';
import WebImage8 from '../images/my-project/bali.png';
import WebImage9 from '../images/my-project/lol.png';
import WebImage10 from '../images/my-project/shoes.png';
import WebImage11 from '../images/my-project/anime.png';
import WebImage12 from '../images/my-project/minum.png';
import WebImage13 from '../images/my-project/nasi.png';
// Array of work objects
export const works = [
  {
    id: 1,
    idProjects: 1,
    title: 'Landing Page Coffee',
    imgUrl: WebImage1,
    tech: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP 5", "FIGMA"],
    githubUrl: "https://github.com/ikhsandwisaputra/coffee-landing-page",
    webUrl: "https://ikhsandwisaputra.github.io/coffee-landing-page/",
    duration: "400",
    category: 'Web Application',
  },

  {
    id: 2,
    idProjects: 2,
    title: 'Personal Blog',
    imgUrl: WebImage2,
    tech: ["HTML", "CSS", "JAVASCRIPT", "FIGMA"],
    duration: "400",
    category: 'Design UI/UX',
  },
  {
    id: 3,
    idProjects: 3,
    title: 'Extracurricular Information System',
    imgUrl: WebImage3,
    tech: ["HTML", "CSS", "JAVASCRIPT", "PHP", "MYSQL", "JQUERY", "BOOTSTRAP 5", "AJAX REQUEST", "FIGMA"],
    webUrl: "https://pvteamesports.com/",
    duration: "400",
    category: 'Web Application',
  },
  {
    id: 4,
    idProjects: 4,
    title: 'Doctors Appointment Information System',
    imgUrl: WebImage4,
    tech: ["HTML", "CSS", "JAVASCRIPT", "PHP", "MYSQL", "JQUERY", "BOOTSTRAP 5", "AJAX REQUEST", "FIGMA"],
    duration: "400",
    category: 'Web Application',
  },
  {
    id: 5,
    idProjects: 5,
    title: 'SBI student monitoring information system',
    imgUrl: WebImage5,
    tech: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP 5", "FIGMA"],
    githubUrl: "https://github.com/ikhsandwisaputra/sbi-monitoring-system",
    webUrl: "https://sbi-akademik-v2.netlify.app/",
    duration: "400",
    category: 'Web Application',
  },
  {
    id: 6,
    idProjects: 6,
    title: 'Application of Quran Tajweed per Page',
    imgUrl: WebImage6,
    tech: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP 5", "PHP", "API CLOUD", "MYSQL", "DOCKER", "FIGMA"],
    duration: "400",
    category: 'Web Application',
  },
  {
    id: 7,
    idProjects: 7,
    title: 'Certificate Upload Information System',
    imgUrl: WebImage7,
    tech: ["HTML", "CSS", "JAVASCRIPT", "PHP", "MYSQL", "JQUERY", "BOOTSTRAP 5", "AJAX REQUEST", "FIGMA"],
    duration: "400",
    category: 'Web Application',
  },
  {
    id: 8,
    idProjects: 8,
    title: 'Bali Tourism Landing Page',
    imgUrl: WebImage8,
    tech: ["REACT", "TAILWIND CSS", "NODE JS", "VITE JS", "FIGMA"],
    githubUrl: "https://github.com/ikhsandwisaputra/landing-page-bali",
    webUrl: "https://ikhsandwisaputra.github.io/landing-page-bali/",
    duration: "400",
    category: 'Web Application',
  },
  {
    id: 9,
    idProjects: 9,
    title: 'League of Legend (Fanmade) Landing Page',
    imgUrl: WebImage9,
    tech: ["REACT", "TAILWIND CSS", "NODE JS", "VITE JS", "FIGMA"],
    githubUrl: "https://github.com/ikhsandwisaputra/lol-web",
    webUrl: "https://ikhsandwisaputra.github.io/lol-web/",
    duration: "400",
    category: 'Web Application',
  },
  {
    id: 10,
    idProjects: 10,
    title: 'Shoe Store Landing Page (Static Only)',
    imgUrl: WebImage10,
    tech: ["REACT", "TAILWIND CSS", "NODE JS", "VITE JS", "FIGMA"],
    githubUrl: "https://github.com/ikhsandwisaputra/shoes-landing-page",
    webUrl: "https://ikhsandwisaputra.github.io/shoes-landing-page/",
    duration: "400",
    category: 'Web Application',
  },
  {
    id: 11,
    idProjects: 11,
    title: 'Anime Gallery Jujutsu Kaisen (Fanmade)',
    imgUrl: WebImage11,
    tech: ["REACT", "TAILWIND CSS", "NODE JS", "VITE JS", "FIGMA"],
    githubUrl: "https://github.com/ikhsandwisaputra/anime-web",
    webUrl: "https://ikhsandwisaputra.github.io/anime-web/",
    duration: "400",
    category: 'Web Application',
  },
  {
    id: 12,
    idProjects: 12,
    title: 'Canada Dry Landing Page (Fanmade)',
    imgUrl: WebImage12,
    tech: ["FIGMA", "Photoshop"],
    duration: "400",
    category: 'Design UI/UX',
  },
  {
    id: 13,
    idProjects: 13,
    title: 'Yuk Makan Landing Page',
    imgUrl: WebImage13,
    tech: ["FIGMA", "Photoshop"],
    duration: "400",
    category: 'Design UI/UX',
  },
];

// Array of experience objects
export const experiences = [
  {
    date: "January 2023 - February 2023",
    company: "AfterCode",
    position: "Flutter Developer",
    description:
      "I successfully developed a mobile application for managing a healthcare facility, catering to both the administrative staff and patients. This involved conducting a thorough study, designing intuitive interfaces, and seamlessly integrating the Backend system.",
  },
  {
    date: "January 2022 - February 2022",
    company: "AfterCode",
    position: "Internship",
    description:
      "I have expertise in creating visually captivating and user-friendly websites for restaurants. Additionally, I possess skills in managing automated tests to ensure optimal functionality and performance.",
  },
  {
    date: "January 2020 - Present",
    company: "Self employed",
    position: "Freelancer",
    description:
      "I specialize in designing user interfaces for websites and mobile applications. I also create logos, posters, and mockups. My designs are visually appealing, intuitive, and tailored to engage target audiences. With a deep understanding of design principles and industry trends, I consistently deliver high-quality work that captivates users.",
  },
];


// Array of langue objects
export const langues = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: js,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: reactLangue,
    title: "React",
    style: "shadow-sky-500",
  },
  {
    id: 5,
    src: github,
    title: "GitHub",
    style: "shadow-gray-400",
  },
  {
    id: 6,
    src: tailwind,
    title: "Tailwind",
    style: "shadow-teal-600",
  },
  {
    id: 7,
    src: angular,
    title: "Angular",
    style: "shadow-rose-500",
  },
  {
    id: 8,
    src: django,
    title: "Django",
    style: "shadow-emerald-700",
  },
  {
    id: 9,
    src: symfony,
    title: "Symfony",
    style: "shadow-black",
  },
  {
    id: 10,
    src: spring,
    title: "Spring boot",
    style: "shadow-green-600",
  },
  {
    id: 11,
    src: bootstrap,
    title: "Bootstrap",
    style: "shadow-violet-500",
  },
  {
    id: 12,
    src: flutter,
    title: "Flutter",
    style: "shadow-cyan-400",
  },
  {
    id: 13,
    src: py,
    title: "Python",
    style: "shadow-yellow-400",
  },

  {
    id: 14,
    src: php,
    title: "Php",
    style: "shadow-violet-400",
  },
  {
    id: 15,
    src: c,
    title: "C",
    style: "shadow-blue-400",
  },
  {
    id: 16,
    src: java,
    title: "Java",
    style: "shadow-orange-500",
  },
];
