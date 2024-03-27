import AboutDescription from './AboutDescription';
import AboutAuthor from './AboutAuthor';

function TabContentAbout() {
  return (
    <div className="flex flex-col md:flex-row gap-8 lg:gap-5">
      <AboutDescription />
      <AboutAuthor />
    </div>
  );
}

export default TabContentAbout;
