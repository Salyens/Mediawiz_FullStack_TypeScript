import DynamicAnimationWrapper from "@components/AnimationWrapper/DynamicAnimationWrapper";
import classNames from "classnames";
import styles from "../ourgoals.module.css";

const DivCorners = () => {
  return (
    <DynamicAnimationWrapper
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.3, delay: 1.5 }}
    >
      <div
        className={classNames(
          "absolute top-0 left-4 w-8 h-8 sm:w-14 sm:h-14 lg:w-20 lg:h-20 xl:w-24 xl:h-24",
          styles.corner_top_left
        )}
      ></div>
      <div
        className={classNames(
          "absolute bottom-0 right-4 w-8 h-8 sm:w-14 sm:h-14 lg:w-20 lg:h-20 xl:w-24 xl:h-24",
          styles.corner_bottom_right
        )}
      ></div>
    </DynamicAnimationWrapper>
  );
};

export default DivCorners;
