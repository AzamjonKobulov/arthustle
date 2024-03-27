import { Link } from 'react-router-dom';

import { useNavbar } from '../../contexts/NavbarContext';
import NavLangDropdown from '../navbar/NavLangDropdown';

export default function MobileMenu() {
  const { isMobMenuOpen } = useNavbar();

  return (
    <div
      className={`w-96 min-h-screen fixed top-16 sm:top-20 left-0 z-50 bg-white text-brand-gray border-t border-brand-line transition-all duration-300 ${
        isMobMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Top */}
      <div className="flex items-center justify-between bg-brand-gray-1 py-5 px-10">
        {/* User */}
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden">
            <img
              src="/assets/images/img-user.jpg"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-brand-gray">Azamjon Kobulov</p>
        </div>
        {/* Lang Dropdown */}
        <NavLangDropdown />
      </div>
      {/* Bottom */}
      <div className="custom-height overflow-auto divide-y divide-brand-gray-4 pb-20 pt-5 px-10">
        {/* Top Links */}
        <ul className="space-y-4 text-lg pb-6 pt-3">
          <li>
            <Link
              to="/"
              className="border-b-[0.1875rem] border-b-transparent hover:border-b-brand-main-elem hover:text-brand-main-elem pb-2"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="border-b-[0.1875rem] border-b-transparent hover:border-b-brand-main-elem hover:text-brand-main-elem pb-2"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="border-b-[0.1875rem] border-b-transparent hover:border-b-brand-main-elem hover:text-brand-main-elem pb-2"
            >
              Become a teacher
            </Link>
          </li>
        </ul>
        {/* Middle Links */}
        <ul className="space-y-2 text-lg py-6">
          <li>
            <Link
              to="/"
              className="group inline-flex items-center gap-3 border-b-[0.1875rem] border-b-transparent hover:border-b-brand-main-elem hover:text-brand-main-elem pb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 group-hover:text-brand-main-elem"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
              My courses
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="group inline-flex items-center gap-3 border-b-[0.1875rem] border-b-transparent hover:border-b-brand-main-elem hover:text-brand-main-elem pb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 group-hover:text-brand-main-elem"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              My profile
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="group inline-flex items-center gap-3 border-b-[0.1875rem] border-b-transparent hover:border-b-brand-main-elem hover:text-brand-main-elem pb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 group-hover:text-brand-main-elem"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              Wishlist
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="group inline-flex items-center gap-3 border-b-[0.1875rem] border-b-transparent hover:border-b-brand-main-elem hover:text-brand-main-elem pb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 group-hover:text-brand-main-elem"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                />
              </svg>
              Change password
            </Link>
          </li>
        </ul>
        {/* Bottom Links */}
        <ul className="space-y-4 text-lg pb-6 pt-5">
          <li>
            <Link
              to="/"
              className="border-b-[0.1875rem] border-b-transparent hover:border-b-brand-main-elem hover:text-brand-main-elem pb-2"
            >
              Contacts
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="border-b-[0.1875rem] border-b-transparent hover:border-b-brand-main-elem hover:text-brand-main-elem pb-2"
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="border-b-[0.1875rem] border-b-transparent hover:border-b-brand-main-elem hover:text-brand-main-elem pb-2"
            >
              Logout
            </Link>
          </li>
        </ul>
        {/* Socials */}
        <div className="flex items-center justify-between pt-8">
          <p className="text-sm">We are in social networks:</p>
          <div className="flex items-center gap-2.5">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-5 h-5 fill-brand-main-elem"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="w-5 h-4 fill-brand-main-elem"
              >
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-brand-main-elem"
              >
                <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
