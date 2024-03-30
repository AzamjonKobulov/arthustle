import { motion } from 'framer-motion';
import CourseInCartPoppup from './CourseInCartPoppup';

export default function ItemsInCartPoppup({ setIsCartOpen }) {
  return (
    <motion.div
      className="w-[27.5rem] absolute top-20 right-0 z-20 bg-white border border-brand-gray-6 rounded shadow-course-date-drop px-5 pb-5"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      {/* <!-- Triangular --> */}
      <div className="w-4 h-4 absolute right-3 -top-2 z-10 bg-white border-t border-l border-brand-gray-6 rotate-45"></div>

      <div className="divide-y divide-brand-gray-2">
        <CourseInCartPoppup />
        <CourseInCartPoppup />
        <CourseInCartPoppup />
      </div>
      {/* Total Cost */}
      <div className="flex items-center justify-between border-t border-brand-gray-2 pt-6">
        <button className="h-10 bg-brand-main-elem text-white text-xs uppercase rounded-full hover:bg-brand-main-elem-darker transition-all duration-300 px-4">
          Перейти в корзину
        </button>
        {/* Cost */}
        <div className="flex items-center text-brand-gray gap-2.5">
          <p className="text-brand-main-elem font-medium">0,99$</p>
          <p className="font-light line-through">
            <span className="">14.99 $</span> <span>(-40%)</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
