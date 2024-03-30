import { Link } from 'react-router-dom';

export default function LogoAndLinks() {
  return (
    <div className="hidden lg:flex items-center gap-7">
      {/* Logo */}
      <div className="text-center md:text-start space-y-3 px-5 sm:px-8 md:px-0">
        <Link to="/" className="uppercase font-light text-2xl">
          <span className="text-brand-main-elem">art</span>hustle
        </Link>
      </div>
      {/* Links */}
      <ul className="flex items-center gap-7 text-xs pt-3">
        <li>
          <Link to="/" className="group uppercase hover:text-brand-main-elem">
            Видеокурсы
            <div className="w-0 mx-auto h-0.5 bg-brand-main-elem group-hover:w-full transition-all duration-300 mt-2"></div>
          </Link>
        </li>
        <li>
          <Link to="/" className="group uppercase hover:text-brand-main-elem">
            Блог
            <div className="w-0 mx-auto h-0.5 bg-brand-main-elem group-hover:w-full transition-all duration-300 mt-2"></div>
          </Link>
        </li>
        <li>
          <Link to="/" className="group uppercase hover:text-brand-main-elem">
            Мероприятия
            <div className="w-0 mx-auto h-0.5 bg-brand-main-elem group-hover:w-full transition-all duration-300 mt-2"></div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
