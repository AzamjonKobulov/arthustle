import { motion, AnimatePresence } from 'framer-motion';
import TabContentAbout from './TabContentAbout';
import TabContentDrawnImages from './TabContentDrawnImages';
import { useLesson } from '../../../contexts/LessonContext';

const tabComponents = [TabContentAbout, TabContentDrawnImages];

const TabsContents = ({}) => {
  const { activeTab } = useLesson();

  const ActiveTabComponent = tabComponents[activeTab];

  return (
    <AnimatePresence>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {ActiveTabComponent && <ActiveTabComponent />}
      </motion.div>
    </AnimatePresence>
  );
};

export default TabsContents;
