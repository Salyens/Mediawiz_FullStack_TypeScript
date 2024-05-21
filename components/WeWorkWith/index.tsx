import React from "react";
import UnderlinedTitle from "@components/UnderlinedTitle";
import WeWorkWithList from "./WeWorkWithList";
import AnimationWrapper from "@components/AnimationWrapper";
import { IItemList } from "@interfaces/common";

const WeWorkWith = ({ data }: { data: IItemList }) => {
  return (
    <div className="bg_item_left_blue">
      <AnimationWrapper
        initial={{ y: 600 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
        classes="main_container p-6"
      >
        <UnderlinedTitle text={data.header} />
        <WeWorkWithList list={data.list} />
      </AnimationWrapper>
    </div>
  );
};

export default WeWorkWith;
