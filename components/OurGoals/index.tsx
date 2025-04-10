import { IOneGoal } from "@interfaces/webPage";
import OneGoal from "./OneGoal";
import styles from "./ourgoals.module.css";
import { IResultItem } from "@interfaces/smmPage";
import classNames from "classnames";
import { MotionDiv } from "@components/MotionDiv";
import DynamicBgEllipse from "@components/BgEllipse/DynamicBgEllipse";

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
      <DynamicBgEllipse
        variant={2}
        position="-top-1/2 -left-1/4"
        width={2000}
        height={2000}
      />
      <DynamicBgEllipse
        variant={2}
        position="-right-1/4 -bottom-1/3"
        width={2000}
        height={2000}
      />
      <div className="w-fit m-auto p-10 sm:pl-20 sm:pr-20 xl:pl-44 xl:pr-44 mt-12 md:mt-24 md:mb-24 mb-12 lg:mt-36 lg:mb-36 relative main_container">
        <MotionDiv
          initial={{
            opacity: 0,
          }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
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
        </MotionDiv>
        <MotionDiv
          initial={{
            opacity: 0,
            paddingTop: 400,
          }}
          whileInView={{ paddingTop: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
        >
          <div className="flex flex-col gap-3">{renderGoals()}</div>
        </MotionDiv>
      </div>
    </div>
  );
};

export default OurGoals;
