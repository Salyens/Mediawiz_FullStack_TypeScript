import { IOneGoal } from "@interfaces/mainPage";

const OneGoal: React.FC<IOneGoal> = ({ partOne, and, partTwo }) => {
  return (
    <div className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-base sm:text-center">
      <p className="stroke_text font-bold sm:font-normal">{partOne}</p>
      <span className="stroke_text_2 font-normal inline-block">
        {and}&nbsp;{" "}
      </span>
      <p className="stroke_text_2 font-bold inline-block">{partTwo}</p>
    </div>
  );
};

export default OneGoal;
