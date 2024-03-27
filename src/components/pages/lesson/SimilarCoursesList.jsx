import { useLesson } from '../../../contexts/LessonContext';
import SimilarCourse from './SimilarCourse';

export default function SimilarCoursesList() {
  const { similarCourses } = useLesson();

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-7 mt-9">
      {similarCourses.map((course) => (
        <SimilarCourse key={course.id} course={course} />
      ))}
    </div>
  );
}
