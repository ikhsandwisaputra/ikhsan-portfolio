import { lazy, Suspense, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import AppBanner from '../components/shared/AppBanner';
import StickyNav from '../components/shared/StickyNav';

const Projects = lazy(() => import('./Projects'));
const About = lazy(() => import('./AboutMe'));
const Contact = lazy(() => import('./Contact'));

const Home = () => {
  const [activeSection, setActiveSection] = useState('about');
  const contentRef = useRef(null);

  const handleSelectSection = (section) => {
    setActiveSection(section);

    // Snap ke top konten kalau user udah scroll lewat hero
    requestAnimationFrame(() => {
      const content = contentRef.current;
      if (!content) return;
      const contentTop = content.offsetTop;
      if (window.scrollY > contentTop) {
        window.scrollTo({ top: contentTop, behavior: 'auto' });
      }
    });
  };

  // Klik logo → balik ke paling atas (lihat hero lagi)
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      case 'about':
      default:
        return <About />;
    }
  };

  return (
    <div className="mx-auto w-full">
      {/* === HERO === */}
      <AppBanner />

      {/* === CONTENT WRAPPER === */}
      <div ref={contentRef} className="relative">
        <StickyNav
          activeSection={activeSection}
          onSelectSection={handleSelectSection}
          onLogoClick={handleLogoClick}
        />

        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <motion.main
            key={activeSection}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="min-h-[60vh]"
          >
            {renderSection()}
          </motion.main>
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
