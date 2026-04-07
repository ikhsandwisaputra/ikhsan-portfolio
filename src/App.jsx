import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
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

// Home punya sticky nav sendiri (di bawah hero), jadi global navbar
// di-hide khusus di route '/'. Route lain (mis. /projects/:id) tetep pakai.
function GlobalNav() {
  const location = useLocation();
  if (location.pathname === '/') return null;
  return (
    <>
      <AppHeader />
      <MobileNav />
    </>
  );
}

function App() {
  return (
    <AnimatePresence>
      <div className=' bg-secondary-light dark:bg-primary-dark transition duration-300 '>
        <Router basename="/ikhsan-portfolio">
          <ScrollToTop />
          <GlobalNav />
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
