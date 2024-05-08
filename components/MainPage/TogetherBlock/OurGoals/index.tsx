"use client";

import { IOneGoal } from "@interfaces/mainPage";
import OneGoal from "./OneGoal";
import styles from "./ourgoals.module.css";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { MotionDiv } from "@components/MotionDiv";

interface OurGoalsProps {
  goalsList: IOneGoal[];
}

const OurGoals: React.FC<OurGoalsProps> = ({ goalsList }) => {
  const [isAnimate, setIsAnimate] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) setIsAnimate(true);
  }, [isInView]);

  const renderGoals = () => {
    return goalsList.map((item, index) => (
      <div
        key={item.partOne + index}
        className="flex items-center justify-center mt-2 lg:mt-8"
      >
        <OneGoal partOne={item.partOne} and={item.and} partTwo={item.partTwo} />
      </div>
    ));
  };
  return (
    <div
      ref={ref}
      className="w-fit m-auto p-10 sm:pl-20 sm:pr-20 xl:pl-36 xl:pr-36  mt-24 md:mt-28 mb-12 lg:mt-40 relative main_container"
    >
      {isAnimate && (
        <>
          <MotionDiv
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1, delay: 2 }}
          >
            <div
              className={`absolute top-0 left-4 w-8 h-8 sm:w-14 sm:h-14 lg:w-20 lg:h-20 xl:w-24 xl:h-24 ${styles.corner_top_left}`}
            ></div>
            <div
              className={`absolute bottom-0 right-4 w-8 h-8 sm:w-14 sm:h-14 lg:w-20 lg:h-20 xl:w-24 xl:h-24 ${styles.corner_bottom_right}`}
            ></div>
          </MotionDiv>
          <MotionDiv
            initial={{
              opacity: 0,
              y: 400,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
          >
            <div className="flex flex-col gap-3">{renderGoals()}</div>
          </MotionDiv>
        </>
      )}
    </div>
  );
};

export default OurGoals;
