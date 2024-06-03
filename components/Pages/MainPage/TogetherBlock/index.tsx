import React from "react";
import OurPhoto from "./OurPhoto";
import { IOneGoal } from "@interfaces/webPage";
import OurGoals from "@components/OurGoals";
import DynamicBgEllipse from "@components/BgEllipse/DynamicBgEllipse";

interface TogetherBlockProps {
  goalsList: IOneGoal[];
  imgURL: string;
}

const TogetherBlock = ({ goalsList, imgURL }: TogetherBlockProps) => {
  return (
    <div className="relative">
      {/* <DynamicBgEllipse
        variant={2}
        position="top-1/3 -left-1/4"
        width={2000}
        height={2000}
      />
      <DynamicBgEllipse
        variant={2}
        position="top-1/2 -right-1/4 -bottom-1/3"
        width={2000}
        height={2000}
      /> */}
      <OurPhoto imgURL={imgURL} />
      <OurGoals goalsList={goalsList} page="home" />
    </div>
  );
};

export default TogetherBlock;
