import React from "react";
import { IWeWorkWith } from "@interfaces/webPage";
import UnderlinedTitle from "@components/Pages/MainPage/WeOffer/UnderlinedTitle";
import WeWorkWithList from "./WeWorkWithList";
import AnimationWrapper from "@components/AnimationWrapper";

const WeWorkWith = ({ data }: { data: IWeWorkWith }) => {
  return (
    <AnimationWrapper
      initial={{ y: 600 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
      classes="main_container p-6"
    >
      <UnderlinedTitle text={data.header} />
      <WeWorkWithList list={data.list} />
    </AnimationWrapper>
  );
};

export default WeWorkWith;
