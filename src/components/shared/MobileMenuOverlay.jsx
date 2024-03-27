import { motion } from 'framer-motion';
import { useNavbar } from '../../contexts/NavbarContext';

export default function MobileMenuOverlay() {
  const { isMobMenuOpen, handleToggleMobMenu } = useNavbar();

  return (
    <>
      {isMobMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-black/50 z-40"
          onClick={handleToggleMobMenu}
        ></motion.div>
      )}
    </>
  );
}
