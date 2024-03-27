import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

import { useNavbar } from '../../contexts/NavbarContext';

export default function SearchBar() {
  const { setIsSearchOpen, isSearchOpen, handleOpenSearch } = useNavbar();

  const searchRef = useRef(null);

  useEffect(
    function () {
      function hanldleClickOutSide(event) {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
          setIsSearchOpen(false);
        }
      }

      document.addEventListener('mousedown', hanldleClickOutSide);
      return () =>
        document.removeEventListener('mousedown', hanldleClickOutSide);
    },
    [searchRef]
  );

  return (
    <div className="w-full lg:w-auto flex items-center gap-3" ref={searchRef}>
      {isSearchOpen && (
        <motion.div
          initial={{ x: 10 }}
          animate={{ x: 0 }}
          exit={{ x: -10 }}
          transition={{ duration: 0.3 }}
          className="flex-1 sm:min-w-72 h-10 sm:h-12 relative border border-brand-line rounded-full flex items-center pl-9"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 absolute left-4 top-3 sm:top-4 stroke-brand-gray"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="outline-none lg:text-lg rounded-full pl-3"
          />
        </motion.div>
      )}
      <button onClick={handleOpenSearch}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-4 h-4 stroke-brand-gray ${
            isSearchOpen ? 'hidden' : 'block'
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </div>
  );
}
