import React from "react";
import HomeDesc from "./HomeDesc";
import WebDesc from "./WebDesc";
import { MainSection } from "@interfaces/mainPage";
import { IWebMainSection } from "@interfaces/common";
import { ISmmMainSection } from "@interfaces/smmPage";
import SmmDesc from "./SmmDesc";
import dynamic from "next/dynamic";
import DynamicAnimationWrapper from "@components/AnimationWrapper/DynamicAnimationWrapper";
import Link from "next/link";

const DynamicMainModal = dynamic(() => import("@components/modals/MainModal"), {
  ssr: false,
});

interface WebHeaderProps {
  main: IWebMainSection | MainSection | ISmmMainSection;
  page: "home" | "web" | "smm";
}

const WelcomeDesc: React.FC<WebHeaderProps> = ({ main, page }) => {
  return (
    <DynamicAnimationWrapper
      initial={{ x: -1500 }}
      animate={{ x: 0 }}
      transition={{
        ease: "easeOut",
        duration: 0.7,
      }}
      classes="flex_column text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-full lg:w-3/4 xl:w-7/12 mt-4 sm:mt-0"
    >
      {page === "home" && <HomeDesc main={main as MainSection} />}
      {page === "web" && <WebDesc main={main as IWebMainSection} />}
      {page === "smm" && <SmmDesc main={main as ISmmMainSection} />}

      <DynamicMainModal />
    </DynamicAnimationWrapper>
  );
};

export default WelcomeDesc;
