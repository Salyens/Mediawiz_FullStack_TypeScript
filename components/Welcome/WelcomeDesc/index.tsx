import { MotionDiv } from "@components/MotionDiv";
import MainModal from "@components/modals/MainModal";
import React from "react";
import HomeDesc from "./HomeDesc";
import WebDesc from "./WebDesc";
import { MainSection } from "@interfaces/mainPage";
import { IWebMainSection } from "@interfaces/common";
import { ISmmMainSection } from "@interfaces/smmPage";
import SmmDesc from "./SmmDesc";

interface WebHeaderProps {
  main: IWebMainSection | MainSection | ISmmMainSection;
  page: "home" | "web" | "smm";
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
        {page === "smm" && <SmmDesc main={main as ISmmMainSection} />}
        <MainModal />
      </div>
    </MotionDiv>
  );
};

export default WelcomeDesc;
