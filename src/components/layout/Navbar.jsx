import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useNavbar } from '../../contexts/NavbarContext';

import NavLangDropdown from '../navbar/NavLangDropdown';
import NavAuthDropdown from '../navbar/NavAuthDropdown';
import MobileMenu from '../shared/MobileMenu';
import MobileMenuOverlay from '../shared/MobileMenuOverlay';
import SearchBar from '../navbar/SearchBar';
import LogoAndLinks from '../navbar/LogoAndLinks';
import CartPoppup from '../navbar/CartPoppup';

export default function Navbar() {
  const { handleToggleMobMenu, isSearchOpen, isMobMenuOpen } = useNavbar();

  return (
    <header className="h-auto sm:h-20 relative bg-white border-b border-brand-line py-3 px-4 sm:py-4 md:px-9">
      {/* Mobile Menu */}
      <MobileMenu />
      {/* Mobile Menu OverLay */}
      <MobileMenuOverlay />
      <nav className="h-10 sm:h-12 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={handleToggleMobMenu}>
          {isMobMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>

        {/* Logo & Links */}
        <LogoAndLinks />

        {/* Logo on Mobile */}
        {!isSearchOpen && (
          <motion.div
            initial={{ x: -10 }}
            animate={{ x: 0 }}
            exit={{ x: 10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden text-center md:text-start space-y-3 px-5 sm:px-8 md:px-0"
          >
            <Link to="/" className="uppercase text-xl">
              <span className="text-brand-main-elem">art</span>hustle
            </Link>
          </motion.div>
        )}

        {/* Search & Auth & Lang */}
        <div className="relative flex items-center gap-5">
          <SearchBar />
          <div className="hidden lg:flex items-center gap-5">
            <Link
              to="/"
              className="group uppercase hover:text-brand-main-elem text-xs mt-2"
            >
              Стать учителем
              <div className="w-0 mx-auto h-0.5 bg-brand-main-elem group-hover:w-full transition-all duration-300 mt-2"></div>
            </Link>
            {/* Auth Dropdown */}
            <NavAuthDropdown />
            {/* Lang Dropdown */}
            <NavLangDropdown />
            {/* Cart */}
            <CartPoppup />
          </div>
        </div>
      </nav>
    </header>
  );
}
