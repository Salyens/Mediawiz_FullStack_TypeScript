import UnderlinedTitle from "@components/UnderlinedTitle";
import { IAdvantages, IHowWeWork } from "@interfaces/webPage";
import React from "react";
import AdItemList from "./AdItemList";
import AnimationWrapper from "@components/AnimationWrapper";

interface HowWeWorkProp {
  data: IAdvantages;
}

const HowAdWorks = ({ data }: HowWeWorkProp) => {
  return (
    <AnimationWrapper
      initial={{ y: 600 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
      classes="main_container p-3 sm:p-4 md:p-5 xl:p-6"
    >
      <UnderlinedTitle text={data.header} />
      <AdItemList list={data.list} />
    </AnimationWrapper>
  );
};

export default HowAdWorks;
