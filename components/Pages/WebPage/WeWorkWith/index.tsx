import React from "react";
import { IWeWorkWith } from "@interfaces/webPage";
import UnderlinedTitle from "@components/Pages/MainPage/WeOffer/UnderlinedTitle";
import WeWorkWithList from "./WeWorkWithList";

const WeWorkWith = ({ data }: { data: IWeWorkWith }) => {
  return (
    <div className="main_container p-6">
      <UnderlinedTitle text={data.header} />
      <WeWorkWithList list={data.list} />
    </div>
  );
};

export default WeWorkWith;
