export default function SimilarCourse({ course }) {
  const { img, title, duration, discount, currCost, courseAuthor } = course;

  return (
    <a
      href="#"
      className="bg-white md:bg-transparent border rounded-md hover:shadow-course"
    >
      {/* <!-- Top --> */}
      <div className="relative">
        {/* <!-- Like Button --> */}
        <button className="w-7 h-7 absolute top-2 right-2 bg-black/50 rounded-full grid place-content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
        {/* <!-- Image --> */}
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover rounded-t"
        />
        {/* <!-- Course Duration --> */}
        <div className="absolute left-3 bottom-3 bg-black/50 text-white text-sm rounded py-0.5 px-1">
          {duration}
        </div>
      </div>

      {/* <!-- Bottom --> */}
      <div className="h-full flex flex-col text-brand-gray-2 space-y-6 pt-3.5 pb-5 px-3.5">
        <div className="space-y-1.5">
          {/* <!-- Cost --> */}
          <p className="flex items-center  gap-1">
            <span className="text-black/70">{currCost}</span>
            <span className="line-through text-black/4 text-sm">
              {discount}
            </span>
          </p>
          <h5 className="text-lg text-black leading-6">{title}</h5>
        </div>
        {/* <!-- Author --> */}
        <p className="text-black/70">{courseAuthor}</p>
      </div>
    </a>
  );
}
