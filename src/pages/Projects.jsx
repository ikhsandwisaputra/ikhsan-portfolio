// src/components/Projects.jsx
import { lazy, Suspense, useState } from 'react';
import Work2 from '../components/projects/Work2';

// Lazy-load detail biar bundle Projects gak kebanyakan
const ProjectDetail = lazy(() => import('./ProjectDetails'));

// Scroll ke posisi natural StickyNav (di mana dia mulai sticky di top).
// Pakai parentElement (content wrapper) bukan sticky-nav-nya langsung,
// karena element sticky punya BCR yang aneh saat lagi pinned.
// parentElement adalah div biasa → posisinya stabil & akurat.
const scrollToContent = () => {
  const stickyNav = document.getElementById('sticky-nav');
  const wrapper = stickyNav?.parentElement;
  if (!wrapper) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const offsetTop = wrapper.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: offsetTop, behavior: 'smooth' });
};

const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleSelectProject = (id) => {
    setSelectedProjectId(id);
    // Scroll lewat hero biar user langsung liat detail header + StickyNav di top
    scrollToContent();
  };

  const handleBack = () => {
    setSelectedProjectId(null);
    // Scroll juga pas balik biar user gak nyangkut di tengah grid
    scrollToContent();
  };

  // Mode detail → render inline ProjectDetail (StickyNav tetep keliatan)
  if (selectedProjectId !== null) {
    return (
      <Suspense fallback={<div className='min-h-[60vh]' />}>
        <ProjectDetail projectId={selectedProjectId} onBack={handleBack} />
      </Suspense>
    );
  }

  // Mode grid → list semua project, klik card → trigger handleSelectProject
  return <Work2 onSelectProject={handleSelectProject} />;
};

export default Projects;
