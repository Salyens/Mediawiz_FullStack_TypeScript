import { MotionDiv } from "@components/MotionDiv";
import MainModal from "@components/modals/MainModal";
import { IWebMainSection } from "@interfaces/webPage";
import React from "react";
import HomeDesc from "./HomeDesc";
import WebDesc from "./WebDesc";
import { MainSection } from "@interfaces/mainPage";

interface WebHeaderProps {
  main: IWebMainSection | MainSection;
  page: "home" | "web";
}

const WelcomeDesc: React.FC<WebHeaderProps> = ({ main, page }) => {
  return (
    <MotionDiv
      initial={{ x: -1500 }}
      animate={{ x: 0 }}
      transition={{
        ease: "easeOut",
        duration: 1,
      }}
    >
      <div className=" flex_column text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-full mt-4 sm:mt-0">
        {page === "home" && <HomeDesc main={main as MainSection} />}
        {page === "web" && <WebDesc main={main as IWebMainSection} />}
        <MainModal />
      </div>
    </MotionDiv>
  );
};

export default WelcomeDesc;
