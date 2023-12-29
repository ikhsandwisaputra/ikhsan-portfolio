import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import AppFooter from './components/shared/AppFooter.jsx';
import AppHeader from './components/shared/AppHeader.jsx';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop.jsx';
// import ProjectDetails from './ProjectDetails';
import MobileNav from './components/shared/MobileNav.jsx';

const About = lazy(() => import('./pages/AboutMe.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));

const ProjectDetails = lazy(() => import('./pages/ProjectDetails.jsx'));

function App() {
  return (
    <AnimatePresence>
      <div className=' bg-secondary-light dark:bg-primary-dark transition duration-300 '>
        <Router basename="/ikhsan-portfolio">
          <ScrollToTop />
          {/* <AppHeader /> */}
          <AppHeader />
          <MobileNav />
          <Suspense fallback={''}>
            <Routes >
              <Route path='/' element={<Home />} />
              <Route path='projects' element={<Projects />} />
              <Route path='/projects/:projectId' element={<ProjectDetails />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
            </Routes>
          </Suspense>
          <AppFooter />
        </Router>
        <UseScrollToTop />
      </div>
    </AnimatePresence>
  );
}

export default App;
