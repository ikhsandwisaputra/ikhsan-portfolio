import { useEffect, useMemo, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { works } from '../../data/Static2';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import Loader from '../shared/Loader';

// eslint-disable-next-line react/prop-types
const Work2 = ({ onSelectProject }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTech, setSelectedTech] = useState('');
  const [techSearch, setTechSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init();
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const uniqueCategories = useMemo(
    () => [...new Set(works.map((work) => work.category))],
    []
  );
  const uniqueTechs = useMemo(
    () => [...new Set(works.flatMap((work) => work.tech))],
    []
  );
  const filteredUniqueTechs = uniqueTechs.filter((tech) =>
    tech.toLowerCase().includes(techSearch.toLowerCase())
  );

  const filteredWorks = useMemo(
    () =>
      works
        .filter(
          (work) =>
            work.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedCategory === '' || work.category === selectedCategory) &&
            (selectedTech === '' || work.tech.includes(selectedTech))
        )
        .slice()
        .sort((a, b) => b.id - a.id),
    [searchTerm, selectedCategory, selectedTech]
  );

  const handleCardClick = (idProjects) => {
    if (onSelectProject) onSelectProject(idProjects);
  };

  const handleCardKeyDown = (e, idProjects) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick(idProjects);
    }
  };

  return (
    <div name="work" className="w-full sm:py-32 py-10">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full dark:text-white text-ternary-dark text-center">
        <div>
          <h1 className="text-4xl text-center font-bold inline mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600 sm:mt-20 pb-12 dark:from-blue-200 dark:to-green-200">
            Work Gallery
          </h1>
          <h3 className="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3">
            Explore projects based on titles or refine your search by category.
          </h3>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <>
            {/* ---------- Filter bar ---------- */}
            <div className="flex justify-between items-center flex-wrap sm:flex-row flex-col my-10 gap-2">
              <div className="flex justify-between gap-2 items-center">
                <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="font-general-medium pl-3 pr-1 sm:px-4 py-2 border border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div>
                  <select
                    className="font-general-medium px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    {uniqueCategories.map((category) => (
                      <option key={category} value={category} className="text-sm">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="relative w-full min-w-[200px] text-center">
                  <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="font-general-medium w-full px-4 py-2 border rounded-lg text-left bg-secondary-light dark:bg-ternary-dark flex justify-between items-center"
                  >
                    <span>{selectedTech || 'Pilih Teknologi'}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="absolute z-20 mt-2 w-full bg-secondary-light dark:bg-ternary-dark border rounded-lg shadow-lg">
                      <div className="p-2">
                        <input
                          type="text"
                          placeholder="Cari teknologi..."
                          value={techSearch}
                          onChange={(e) => setTechSearch(e.target.value)}
                          className="w-full px-3 py-2 border rounded-md text-sm text-primary-dark dark:text-ternary-dark"
                        />
                      </div>
                      <ul className="max-h-60 overflow-y-auto">
                        <li
                          onClick={() => {
                            setSelectedTech('');
                            setIsOpen(false);
                            setTechSearch('');
                          }}
                          className="px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer font-medium"
                        >
                          Semua Tech
                        </li>
                        {filteredUniqueTechs.map((tech) => (
                          <li
                            key={tech}
                            onClick={() => {
                              setSelectedTech(tech);
                              setIsOpen(false);
                              setTechSearch('');
                            }}
                            className="px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
                          >
                            {tech}
                          </li>
                        ))}
                        {filteredUniqueTechs.length === 0 && (
                          <li className="px-4 py-2 text-sm text-gray-500">
                            Tidak ditemukan.
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ---------- Project grid (classic card layout) ---------- */}
            {filteredWorks.length === 0 ? (
              <p className="py-20 text-ternary-dark dark:text-ternary-light">
                Tidak ada project yang cocok.
              </p>
            ) : (
              <div className="max-w-[1000px] w-full grid sm:grid-cols-3 sm:gap-8 gap-1 sm:px-4 px-3 mt-7">
                {filteredWorks.map((work) => (
                  <div
                    key={work.title}
                    role="button"
                    tabIndex={0}
                    aria-label={`Detail ${work.title}`}
                    onClick={() => handleCardClick(work.idProjects)}
                    onKeyDown={(e) => handleCardKeyDown(e, work.idProjects)}
                    className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-ternary-light dark:bg-ternary-dark overflow-hidden border-2 dark:border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    data-aos="fade-up"
                    data-aos-duration={work.duration}
                    data-aos-easing="linear"
                  >
                    {/* Work image */}
                    <img
                      src={work.imgUrl}
                      alt={work.title}
                      className="w-full h-36 md:h-48 object-cover"
                    />
                    {/* Work details */}
                    <div className="w-full p-5 text-ternary-dark dark:text-ternary-light text-left">
                      <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                        {work.title}
                      </h3>
                      {/* Technologies */}
                      <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm mb-3">
                        {work.tech.map((item) => (
                          <span
                            key={item}
                            className="inline-block px-2 py-1 bg-slate-300 dark:bg-slate-800 rounded-md"
                          >
                            {item}
                          </span>
                        ))}
                      </p>
                      <div className="flex gap-2">
                        {work.githubUrl && (
                          <a
                            href={work.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-lg w-10 h-10 rounded-full bg-slate-300 dark:bg-slate-800 inline-flex justify-center items-center text-ternary-dark dark:text-ternary-light hover:text-designColor duration-300"
                            aria-label={`${work.title} GitHub`}
                          >
                            <BsGithub />
                          </a>
                        )}
                        {work.webUrl && (
                          <a
                            href={work.webUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-lg w-10 h-10 rounded-full bg-slate-300 dark:bg-slate-800 inline-flex justify-center items-center text-ternary-dark dark:text-ternary-light hover:text-designColor duration-300"
                            aria-label={`${work.title} website`}
                          >
                            <FaGlobe />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Work2;
