import { createContext, useContext, useState } from 'react';

const lessonImages = [
  { img: '/assets/images/img-drawn-in-lesson-1.jpg' },
  { img: '/assets/images/img-drawn-in-lesson-2.jpg' },
  { img: '/assets/images/img-drawn-in-lesson-3.jpg' },
];

const similarCourses = [
  {
    id: 1,
    title: 'Master City Landscape with Watercolor. Charles Bridge in Prague',
    img: '/assets/images/img-course.jpeg',
    duration: '3h 30m',
    courseAuthor: 'Rabi Alieva',
    currCost: '€22',
    discount: '€29',
  },
  {
    id: 2,
    title: 'Master City Landscape with Watercolor. Charles Bridge in Prague',
    img: '/assets/images/img-course.jpeg',
    duration: '3h 30m',
    courseAuthor: 'Rabi Alieva',
    currCost: '€22',
    discount: '€29',
  },
  {
    id: 3,
    title: 'Master City Landscape with Watercolor. Charles Bridge in Prague',
    img: '/assets/images/img-course.jpeg',
    duration: '3h 30m',
    courseAuthor: 'Rabi Alieva',
    currCost: '€22',
    discount: '€29',
  },
  {
    id: 4,
    title: 'Master City Landscape with Watercolor. Charles Bridge in Prague',
    img: '/assets/images/img-course.jpeg',
    duration: '3h 30m',
    courseAuthor: 'Rabi Alieva',
    currCost: '€22',
    discount: '€29',
  },
];

const videos = [
  {
    id: 1,
    vidImg: ' /assets/images/img-course.jpeg',
    title: 'Materials',
    duration: '09:38',
  },
  {
    id: 2,
    vidImg: ' /assets/images/img-course.jpeg',
    title: 'Materials',
    duration: '09:38',
  },
  {
    id: 3,
    vidImg: ' /assets/images/img-course.jpeg',
    title: 'Materials',
    duration: '09:38',
  },
  {
    id: 4,
    vidImg: ' /assets/images/img-course.jpeg',
    title: 'Materials',
    duration: '09:38',
  },
  {
    id: 5,
    vidImg: ' /assets/images/img-course.jpeg',
    title: 'Materials',
    duration: '09:38',
  },
  {
    id: 6,
    vidImg: ' /assets/images/img-course.jpeg',
    title: 'Materials',
    duration: '09:38',
  },
  {
    id: 7,
    vidImg: ' /assets/images/img-course.jpeg',
    title: 'Materials',
    duration: '09:38',
  },
  {
    id: 8,
    vidImg: ' /assets/images/img-course.jpeg',
    title: 'Materials',
    duration: '09:38',
  },
];

const LessonContext = createContext();

export default function LessonContextProvider({ children }) {
  const [currVid, setCurVid] = useState(1);
  const [activeTab, setActiveTab] = useState(0);

  function handleTabClick(index) {
    setActiveTab(index);
  }

  function handleChangeVid(index) {
    setCurVid(index);
  }

  return (
    <LessonContext.Provider
      value={{
        lessonImages,
        similarCourses,
        videos,

        currVid,
        activeTab,

        handleChangeVid,
        handleTabClick,
      }}
    >
      {children}
    </LessonContext.Provider>
  );
}

export const useLesson = () => useContext(LessonContext);
