import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';
import { MdCode, MdRocket, MdPhoneAndroid } from 'react-icons/md';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import logoImg from '../../images/logo-ids-dev.jpeg';

const NAV_ITEMS = [
  { id: 'about', label: 'About', Icon: MdRocket },
  { id: 'projects', label: 'Projects', Icon: MdCode },
  { id: 'contact', label: 'Contact', Icon: MdPhoneAndroid },
];

const StickyNav = ({ activeSection, onSelectSection, onLogoClick }) => {
  const [activeTheme, setTheme] = useThemeSwitcher();
  const [isStuck, setIsStuck] = useState(false);
  const sentinelRef = useRef(null);

  // Sentinel duduk tepat di atas nav. Kalau sentinel keluar viewport,
  // berarti nav lagi "nempel" di top → kasih efek glass.
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: '0px' }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* === DESKTOP: sticky top nav (sm ke atas) === */}
      <div
        ref={sentinelRef}
        aria-hidden="true"
        className="hidden sm:block h-px w-full"
      />
      <motion.nav
        id="sticky-nav"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className={`hidden sm:block sticky top-0 left-0 right-0 z-[9999] w-full transition-all duration-300 ${
          isStuck
            ? 'bg-white/80 dark:bg-primary-dark/80 backdrop-blur-md shadow-lg border-b border-ternary-light dark:border-ternary-dark'
            : 'bg-white/40 dark:bg-primary-dark/40 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto flex items-center gap-2 px-4 py-3">
          {/* Spacer kiri (biar menu bener-bener di tengah, balance sama theme switcher) */}
          <div className="flex-1" aria-hidden="true" />

          {/* Desktop menu (centered) */}
          <ul className="flex items-center gap-1 md:gap-4">
            {NAV_ITEMS.map(({ id, label, Icon }) => {
              const isActive = activeSection === id;
              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => onSelectSection(id)}
                    className={`font-general-medium flex items-center gap-1.5 px-3 py-2 text-base text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light transition-colors border-b-2 ${
                      isActive
                        ? 'border-ternary-dark dark:border-ternary-light'
                        : 'border-transparent'
                    }`}
                    aria-label={label}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Theme switcher (desktop) — di kanan, di-balance sama spacer kiri */}
          <div className="flex-1 flex justify-end">
            <button
              type="button"
              onClick={() => setTheme(activeTheme)}
              aria-label="Theme Switcher"
              className="shrink-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
            >
              {activeTheme === 'dark' ? (
                <FiMoon className="text-ternary-dark dark:text-ternary-light text-xl" />
              ) : (
                <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* === MOBILE: floating theme switcher (top-right) === */}
      <motion.div
        className="fixed top-4 right-4 flex items-center z-[999999999] sm:hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button
          type="button"
          onClick={() => setTheme(activeTheme)}
          aria-label="Theme Switcher"
          className="bg-primary-light border-[1px] dark:border-ternary-light border-ternary-dark dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
        >
          {activeTheme === 'dark' ? (
            <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
          ) : (
            <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
          )}
        </button>
      </motion.div>

      {/* === MOBILE: fixed bottom nav (kayak originalnya) === */}
      <motion.nav
        className="fixed sm:hidden bottom-0 left-0 right-0 backdrop-filter bg-white pt-0 pb-5 z-[9999] w-full mx-auto dark:bg-ternary-dark"
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
      >
        <ul className="flex justify-evenly items-center">
          {NAV_ITEMS.map(({ id, label, Icon }) => {
            const isActive = activeSection === id;
            return (
              <li
                key={id}
                className={`px-4 ${
                  isActive
                    ? 'border-t-2 border-ternary-dark dark:border-ternary-light'
                    : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => onSelectSection(id)}
                  className="flex flex-col justify-center items-center text-left text-md text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light border-b-2 border-transparent"
                  aria-label={label}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className="mt-3" />
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      </motion.nav>
    </>
  );
};

export default StickyNav;
