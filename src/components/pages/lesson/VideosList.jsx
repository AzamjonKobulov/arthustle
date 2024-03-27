import Video from './Video';
import LangDropDown from './LangDropDown';
import { useLesson } from '../../../contexts/LessonContext';

export default function VideosList() {
  const { videos, currVid, handleChangeVid } = useLesson();

  // Calculate total duration
  const totalDuration = videos.reduce((acc, video) => {
    const [minutes, seconds] = video.duration.split(':');
    return acc + parseInt(minutes) * 60 + parseInt(seconds);
  }, 0);

  // Format total duration
  const formattedTotalDuration = `${Math.floor(totalDuration / 60)}h : ${
    totalDuration % 60
  }min`;

  return (
    <div className="lg:w-388 space-y-2.5">
      {/* <!-- Lesson Info --> */}
      <div className="flex items-center justify-between text-brand-dark">
        <p>
          {videos.length} lessons <span>({formattedTotalDuration})</span>
        </p>

        <div className="flex items-center gap-2">
          Audio language
          <LangDropDown />
        </div>
      </div>
      {/* <!-- Videos List --> */}
      <div className="h-[27rem] border border-brand-gray-6 rounded-md py-4">
        <div className="video-list h-full overflow-auto divide-y divide-brand-gray-6">
          {videos.map((video, index) => (
            <Video
              key={video.id}
              video={video}
              index={index + 1}
              currVid={currVid}
              onChangeVid={handleChangeVid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
