import { IOneGoal } from "@interfaces/webPage";
import OneGoal from "./OneGoal";
import styles from "./ourgoals.module.css";
import AnimationWrapper from "@components/AnimationWrapper";
import { IResultItem } from "@interfaces/smmPage";

interface OurGoalsProps {
  goalsList: IOneGoal[] | IResultItem[];
  page: "home" | "smm";
}

const OurGoals: React.FC<OurGoalsProps> = ({ goalsList, page }) => {
  const renderGoals = () => {
    return goalsList.map((item, index) => (
      <div
        key={item.partOne + index}
        className="flex items-center mt-2 lg:mt-8"
      >
        {page === "home" ? (
          <OneGoal item={item} page={page} />
        ) : (
          <OneGoal item={item} page={page} />
        )}
      </div>
    ));
  };
  return (
    <div className="relative">
      <div className="w-fit m-auto p-10 sm:pl-20 sm:pr-20 xl:pl-44 xl:pr-44 mt-12 md:mt-24 md:mb-24 mb-12 lg:mt-36 lg:mb-36 relative main_container">
        <AnimationWrapper
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.3, delay: 1.5 }}
        >
          <div
            className={`absolute top-0 left-4 w-8 h-8 sm:w-14 sm:h-14 lg:w-20 lg:h-20 xl:w-24 xl:h-24 ${styles.corner_top_left}`}
          ></div>
          <div
            className={`absolute bottom-0 right-4 w-8 h-8 sm:w-14 sm:h-14 lg:w-20 lg:h-20 xl:w-24 xl:h-24 ${styles.corner_bottom_right}`}
          ></div>
        </AnimationWrapper>
        <AnimationWrapper
          initial={{
            opacity: 0,
            y: 400,
          }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
        >
          <div className="flex flex-col gap-3">{renderGoals()}</div>
        </AnimationWrapper>
      </div>
    </div>
  );
};

export default OurGoals;
