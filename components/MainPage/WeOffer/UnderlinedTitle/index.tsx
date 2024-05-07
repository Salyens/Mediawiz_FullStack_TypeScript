import { motion } from "framer-motion";
import styles from "../weoffer.module.css";
import { Text } from "@interfaces";

const UnderlinedTitle = ({ text }: { text: Text }) => {

  return (
    <div className="relative mb-10 pl-1 inline-block">
      <h3 className="text-base sm:text-base md:text-xl lg:text-2xl xl:text-4xl mb-1">
        {text}
      </h3>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        className={styles.underline_title}
      />
    </div>
  );
};

export default UnderlinedTitle;