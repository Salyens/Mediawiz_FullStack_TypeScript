import React from "react";
import UnderlinedTitle from "@components/UnderlinedTitle";
import WeWorkWithList from "./WeWorkWithList";
import AnimationWrapper from "@components/AnimationWrapper";
import { IItemList } from "@interfaces/common";
import BgEllipse from "@components/BgEllipse";

const WeWorkWith = ({ data }: { data: IItemList }) => {
  return (
    <AnimationWrapper
      initial={{ y: 600, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.7, delay: 0.5 }}
      classes="main_container p-3 sm:p-4 md:p-5 xl:p-6 relative mb-24"
    >
      <BgEllipse
        variant={1}
        position="-right-1/3 -top-1/4"
        width={2500}
        height={2500}
        delay={1000}
      />
      <UnderlinedTitle text={data.header} />
      <WeWorkWithList list={data.list} />
    </AnimationWrapper>
  );
};

export default WeWorkWith;
