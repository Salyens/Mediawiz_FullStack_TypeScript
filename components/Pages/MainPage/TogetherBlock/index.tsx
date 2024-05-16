import React from "react";
import OurPhoto from "./OurPhoto";
import OurGoals from "./OurGoals";
import { IOneGoal } from "@interfaces/mainPage";

interface TogetherBlockProps {
  goalsList: IOneGoal[];
  imgURL: string;
}

const TogetherBlock = ({ goalsList, imgURL }: TogetherBlockProps) => {
  return (
    <div>
      <OurPhoto imgURL={imgURL} />
      <OurGoals goalsList={goalsList} />
    </div>
  );
};

export default TogetherBlock;
