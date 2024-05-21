import React from "react";
import OurPhoto from "./OurPhoto";

import { IOneGoal } from "@interfaces/webPage";
import OurGoals from "@components/OurGoals";



interface TogetherBlockProps {
  goalsList: IOneGoal[];
  imgURL: string;
}

const TogetherBlock = ({ goalsList, imgURL }: TogetherBlockProps) => {
  return (
    <div className="bg_item_left_blue">
      <OurPhoto imgURL={imgURL} />
      <OurGoals goalsList={goalsList} page="home" />
    </div>
  );
};

export default TogetherBlock;
