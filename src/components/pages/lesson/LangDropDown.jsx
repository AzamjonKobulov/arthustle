import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('En');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className="w-10 inline-flex justify-center items-center gap-0.5 text-sm text-brand-dark"
        onClick={toggleDropdown}
      >
        <span>{selectedLanguage}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-3.5 h-3.5 fill-brand-dark rotate-90"
        >
          <path
            fillRule="evenodd"
            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }} // Adjust the y value for smoother exit
          transition={{ duration: 0.2 }}
          className="w-16 text-left absolute origin-top-right right-0 bg-white text-sm rounded shadow mt-1"
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              onClick={() => selectLanguage('En')}
              className="block w-full text-left hover:bg-gray-100 pl-4 py-2"
              role="menuitem"
            >
              En
            </button>
            <button
              onClick={() => selectLanguage('Ru')}
              className="block w-full text-left hover:bg-gray-100 pl-4 py-2"
              role="menuitem"
            >
              Ru
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
