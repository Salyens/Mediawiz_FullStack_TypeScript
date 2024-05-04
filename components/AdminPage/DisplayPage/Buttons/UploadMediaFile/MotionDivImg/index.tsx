import { motion, AnimatePresence } from "framer-motion";

interface MotionDivImgProps {
    isVisible: boolean;
    children: React.ReactNode;
  }

  const MotionDivImg: React.FC<MotionDivImgProps> = ({ isVisible, children }) => {
  const variants = {
    initial: { x: -500, opacity: 0 },
    enter: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { x: -500, opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={variants}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MotionDivImg;
