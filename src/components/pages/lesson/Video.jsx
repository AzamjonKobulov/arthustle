export default function Video({ video, index, currVid, onChangeVid }) {
  const { vidImg, title, duration } = video;

  const currentVideo = index === currVid;

  return (
    <button
      onClick={() => onChangeVid(index)}
      className={`h-[4.375rem] w-full flex items-center ${
        currentVideo ? 'bg-brand-whitish' : ''
      } pt-1.5 pb-2.5 pr-10`}
    >
      {/* <!-- Number || Play Icon --> */}
      <span className="w-10 h-full grid place-content-center text-brand-dark">
        {currentVideo ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 fill-brand-dark"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          index
        )}
      </span>
      {/* <!-- Video --> */}
      <div className="flex-1 h-full flex items-center gap-2.5">
        <div className="w-24 h-full rounded overflow-hidden">
          <img
            src={vidImg}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-full flex flex-col items-start justify-between">
          <p className="text-sm text-brand-gray">{title}</p>
          <p className="text-xs text-brand-gray-5">{duration}</p>
        </div>
      </div>
    </button>
  );
}
