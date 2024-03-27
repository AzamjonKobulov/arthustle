import CurrentVideo from '../components/pages/lesson/CurrentVideo';
import Tabs from '../components/pages/lesson/Tabs';
import TabsContents from '../components/pages/lesson/TabsContents';
import VideosList from '../components/pages/lesson/VideosList';
import SimilarCoursesList from '../components/pages/lesson/SimilarCoursesList';

const Lesson = () => {
  return (
    <>
      {/* Videos */}
      <section id="video" className="pt-12">
        <div className="max-w-base mx-auto px-4 lg:px-8">
          <h1 className="text-2xl sm:text-4xl font-light">
            Cozy Winter Watercolor Illustration.
          </h1>

          <div className="flex flex-col lg:flex-row gap-5 pt-30">
            <CurrentVideo />
            <VideosList />
          </div>
        </div>
      </section>
      {/* About */}
      <section id="about" className="py-8">
        <div className="max-w-base mx-auto space-y-6 lg:space-y-10 px-5 lg:px-8">
          {/* Tabs */}
          <Tabs />
          <TabsContents />
        </div>
      </section>
      {/* Similar Courses */}
      <section
        id="similar-courses"
        className="bg-brand-gray-7 md:bg-white py-12"
      >
        <div className="max-w-base mx-auto px-5 lg:px-8">
          {/* <!-- Texts --> */}
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-light">Similar courses</h3>
            <button className="hidden md:block uppercase text-brand-main-elem">
              Show more
            </button>
          </div>
          <SimilarCoursesList />
          <button className="md:hidden relative left-1/2 -translate-x-1/2 mt-7 uppercase text-brand-main-elem">
            Show more
          </button>
        </div>
      </section>
    </>
  );
};

export default Lesson;
