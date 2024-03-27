import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NavAuthDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
        className="w-20 inline-flex justify-center items-center gap-2 uppercase text-sm"
        onClick={toggleDropdown}
      >
        <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden">
          <img
            src="/assets/images/img-user.jpg"
            alt="User Image"
            className="w-full h-full object-cover"
          />
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className={`w-4 h-4 fill-black transition-all duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        </svg>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }} // Adjust the y value for smoother exit
          transition={{ duration: 0.2 }}
          className="w-64 text-left absolute z-20 origin-top-right right-0 bg-white text-sm rounded shadow-course mt-1 p-6"
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <ul className="space-y-4 text-xs">
              <li>
                <Link
                  to="/"
                  className="group uppercase hover:text-brand-main-elem transition-all duration-300"
                >
                  my courses
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="group uppercase hover:text-brand-main-elem transition-all duration-300"
                >
                  my profile
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="group uppercase hover:text-brand-main-elem transition-all duration-300"
                >
                  logout
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
}
