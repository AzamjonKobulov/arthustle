import { motion } from 'framer-motion';
import CourseInCart from './CourseInCart';

export default function ItemsInCart({ setIsCartOpen }) {
  return (
    <motion.div
      className="w-[27.5rem] absolute top-20 right-0 bg-white border border-brand-gray-6 rounded shadow-course-date-drop px-5"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      {/* <!-- Triangular --> */}
      <div className="w-4 h-4 absolute right-3 -top-2 z-10 bg-white border-t border-l border-brand-gray-6 rotate-45"></div>

      <div className="divide-y divide-brand-gray-2">
        <CourseInCart />
        <CourseInCart />
        <CourseInCart />
      </div>
    </motion.div>
  );
}
