import { IOneGoal } from "@interfaces/webPage";
import OneGoal from "./OneGoal";
import { IResultItem } from "@interfaces/smmPage";
import DynamicBgEllipse from "@components/BgEllipse/DynamicBgEllipse";
import DynamicAnimationWrapper from "@components/AnimationWrapper/DynamicAnimationWrapper";
import DivCorners from "./DivCorners";

export interface OurGoalsProps {
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
        <OneGoal item={item} page={page} />
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
        <DivCorners />
        <DynamicAnimationWrapper
          initial={{
            opacity: 0,
            y: 400,
          }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
        >
          <div className="flex flex-col gap-3">{renderGoals()}</div>
        </DynamicAnimationWrapper>
      </div>
    </div>
  );
};

export default OurGoals;
