import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="relative bg-footer bg-no-repeat bg-cover after:absolute after:inset-0 after:bg-black/70 pt-0 pb-10 md:pt-20">
      <div className="relative z-10  text-white/70 ">
        {/* Top */}
        <div className="max-w-base mx-auto flex flex-col md:flex-row lg:gap-40 items-start md:items-stretch lg:items-start justify-between pb-8 md:pb-16 px-4 lg:px-8">
          {/* Logo & Links */}
          <div className="w-full md:w-1/2 mx-auto lg:w-[25rem] flex flex-col lg:flex-row items-center justify-center sm:justify-between md:items-start border-b md:border-none border-brand-line/50 gap-8 md:gap-20 md:pb-11 lg:pb-0 py-10 md:py-0 lg:pt-0">
            {/* Logo */}
            <Link
              to="/"
              className="text-center md:text-start space-y-3 px-5 sm:px-8 md:px-0"
            >
              <p className="uppercase font-light text-2xl">
                <span className="text-brand-main-elem">art</span>hustle
              </p>
              <p className="text-sm">Online learning platform for artists</p>
            </Link>
            {/* Buttons on mobie and tablets */}
            <div className="md:hidden flex flex-col gap-3 items-center px-5 sm:px-8 md:px-0">
              {/* Write us */}
              <button className="flex items-center gap-3 text-brand-main-elem uppercase text-sm border border-brand-main-elem rounded-full hover:text-white hover:bg-brand-main-elem transition-all duration-300 py-3 px-6">
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                write us
              </button>
              {/* Subscribe */}
              <button className="flex items-center gap-3 text-brand-main-elem uppercase text-sm border border-brand-main-elem rounded-full hover:text-white hover:bg-brand-main-elem transition-all duration-300 py-3 px-6">
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                subscribe
              </button>
            </div>
            {/* Links */}
            <ul className="hidden md:block space-y-4 text-sm mt-2.5 px-5 sm:px-8 md:px-0">
              <li>
                <Link
                  to="/courses"
                  className="hover:text-brand-main-elem transition-all divide-neutral-500"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-brand-main-elem transition-all divide-neutral-500"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Links & Buttons */}
          <div className="w-full md:flex-1 flex flex-col-reverse lg:flex-row lg:items-center justify-between gap-8 md:gap-20 border-b md:border-none border-brand-line/50 py-10 md:py-0 lg:py-0 px-5 sm:px-8 md:px-0">
            {/* Links */}
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  to="/become-teacher"
                  className="hover:text-brand-main-elem transition-all divide-neutral-500"
                >
                  Become a teacher
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-brand-main-elem transition-all divide-neutral-500"
                >
                  Contact us
                </Link>
              </li>{' '}
              <li>
                <Link
                  to="/careers"
                  className="hover:text-brand-main-elem transition-all divide-neutral-500"
                >
                  Careers
                </Link>
              </li>
            </ul>

            {/* Links */}
            <ul className="md:hidden space-y-4 text-sm mt-2.5">
              <li>
                <Link
                  to="/courses"
                  className="hover:text-brand-main-elem transition-all divide-neutral-500"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-brand-main-elem transition-all divide-neutral-500"
                >
                  Blog
                </Link>
              </li>
            </ul>

            {/* Buttons */}
            <div className="hidden md:flex flex-col gap-3 items-center">
              {/* Write us */}
              <button className="flex items-center gap-3 text-brand-main-elem uppercase text-sm border border-brand-main-elem rounded-full hover:text-white hover:bg-brand-main-elem transition-all duration-300 py-3 px-6">
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                write us
              </button>
              {/* Subscribe */}
              <button className="flex items-center gap-3 text-brand-main-elem uppercase text-sm border border-brand-main-elem rounded-full hover:text-white hover:bg-brand-main-elem transition-all duration-300 py-3 px-6">
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="h-px hidden lg:block bg-white/10"></div>
        {/* Bottom */}
        <div className="max-w-base mx-auto flex flex-col md:flex-row items-center justify-between gap-8 lg:pt-8 px-4 lg:px-8">
          {/* Links */}
          <ul className="sm:w-4/5 mx-auto lg:w-auto lg:mx-0 flex items-center justify-between md:justify-start gap-8 text-sm mt-2.5 px-5 sm:px-8 md:px-0">
            <li>
              <Link
                to="/courses"
                className="hover:text-brand-main-elem transition-all divide-neutral-500"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-brand-main-elem transition-all divide-neutral-500"
              >
                Terms of use
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-brand-main-elem transition-all divide-neutral-500"
              >
                Impressum
              </Link>
            </li>
          </ul>

          {/* Socials */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Social Icons */}
            <div className="flex items-center gap-8">
              {/* Instagram */}
              <a to="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-9 h-9 sm:w-5 sm:h-5 fill-white/50 hover:fill-brand-main-elem transition-all duration-500"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              {/* Facebook */}
              <a to="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-9 h-9 sm:w-5 sm:h-5 fill-white/50 hover:fill-brand-main-elem transition-all duration-500"
                >
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </a>
              {/* Twitter */}
              <a to="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-9 h-9 sm:w-5 sm:h-5 fill-white/50 hover:fill-brand-main-elem transition-all duration-500"
                >
                  <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                </svg>
              </a>
            </div>
            <p className="text-sm whitespace-nowrap">© 2020 ArtHustle</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
