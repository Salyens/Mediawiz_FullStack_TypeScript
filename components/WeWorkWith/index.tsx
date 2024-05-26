import React from "react";
import UnderlinedTitle from "@components/UnderlinedTitle";
import WeWorkWithList from "./WeWorkWithList";
import AnimationWrapper from "@components/AnimationWrapper";
import { IItemList } from "@interfaces/common";
import BgEllipse from "@components/BgEllipse";

const WeWorkWith = ({ data }: { data: IItemList }) => {
  return (
    <AnimationWrapper
      initial={{ y: 600 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
      classes="main_container p-3 sm:p-4 md:p-5 xl:p-6 relative mb-24"
    >
      <BgEllipse
        variant={1}
        position="-right-1/4"
        width={2000}
        height={2000}
        delay={2500}
      />
      <UnderlinedTitle text={data.header} />
      <WeWorkWithList list={data.list} />
    </AnimationWrapper>
  );
};

export default WeWorkWith;
