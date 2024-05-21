import { IResultItem } from "@interfaces/smmPage";
import { IOneGoal } from "@interfaces/webPage";

interface OneGoalProps {
  item: IOneGoal | IResultItem;
  page: "home" | "smm";
}

const OneGoal: React.FC<OneGoalProps> = ({ item, page }) => {
  return (
    <div className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-base sm:text-center">
      <p className="stroke_text font-bold sm:font-normal flex">{item.partOne}</p>
      {page === "home" && 'and' in item && (
        <span className="stroke_text_2 font-normal flex">
          {item.and}&nbsp;{" "}
        </span>
      )}
      <p className="stroke_text_2 font-bold flex">{item.partTwo}</p>
    </div>
  );
};

export default OneGoal;
