import { useLesson } from '../../../contexts/LessonContext';

export default function TabContentDrawnImages() {
  const { lessonImages } = useLesson();

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
      {/* Images */}
      <div className="max-w-3xl flex flex-col gap-5">
        {lessonImages.map((img, index) => (
          <img key={index} src={img.img} alt="Image" />
        ))}
      </div>
      {/* Download */}
      <div className="lg:w-96 flex items-center pb-10 text-brand-gray lg:border-b border-brand-line lg:mt-10 pl-10">
        <button className="w-full group flex items-center gap-2 text-lg hover:text-brand-main-elem">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-10 group-hover:stroke-brand-main-elem"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>
          Stencil
        </button>
      </div>
    </div>
  );
}
