import { useLesson } from '../../../contexts/LessonContext';

function TabButton({ index, tabName }) {
  const { handleTabClick, activeTab } = useLesson();

  return (
    <button
      onClick={() => handleTabClick(index)}
      className={`group hover:text-brand-main-elem ${
        activeTab === index ? 'text-brand-main-elem' : 'text-brand-gray'
      }`}
    >
      {tabName}
      {activeTab === index ? (
        <div className="w-full h-0.5 bg-brand-main-elem mt-2"></div>
      ) : (
        <div className="w-0 mx-auto h-0.5 bg-brand-main-elem group-hover:w-full transition-all duration-300 mt-2"></div>
      )}
    </button>
  );
}

export default TabButton;
