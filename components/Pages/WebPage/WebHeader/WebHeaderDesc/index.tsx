import { MotionDiv } from "@components/MotionDiv";
import MainModal from "@components/modals/MainModal";
import { IWebMainSection } from "@interfaces/webPage";
import React from "react";

interface WebHeaderProps {
  main: IWebMainSection;
}

const WebHeaderDesc: React.FC<WebHeaderProps> = ({ main }) => {
  return (
    <MotionDiv
      initial={{ x: -1500 }}
      animate={{ x: 0 }}
      transition={{
        ease: "easeOut",
        duration: 1,
      }}
    >
      <div className=" flex_column text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-full mt-4 sm:mt-0 sm:w-2/3">
        <p className="stroke_text font-bold">{main["header_1"].text}</p>
        <p className="stroke_text font-bold stroke_text_2">
          {main["header_2"].text}
        </p>

        <div className="text-base md:text-lg lg:text-2xl mt-2 header_description">
          <p>{main["description"].text}</p>
        </div>
        <MainModal />
      </div>
    </MotionDiv>
  );
};

export default WebHeaderDesc;
