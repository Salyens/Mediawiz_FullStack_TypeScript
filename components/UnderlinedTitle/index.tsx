import { Text } from "@interfaces/common";
import { MotionDiv } from "@components/MotionDiv";
import styles from "./uderlinedtitle.module.css";

const UnderlinedTitle = ({ text }: { text: Text }) => {
  return (
    <div className="relative mb-6 sm:mb-8 lg:mb-12 pl-1 inline-block">
      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl mb-1">
        {text}
      </h3>
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className={styles.underline_title}
      />
    </div>
  );
};

export default UnderlinedTitle;
