import { IAdvantageItem, IItem } from "@interfaces/webPage";
import React from "react";
import OneAdItem from "../OneAdItem";

interface AdItemListProps {
  list: IAdvantageItem[];
}
const AdItemList: React.FC<AdItemListProps> = ({ list }) => {
  const renderAdItems = () => {
    return list.map((item, index) => (
      <OneAdItem key={item.title + index} data={item} />
    ));
  };

  return (
    <div className="flex flex-wrap justify-between gap-9 lg:gap-3 xl:gap-5">{renderAdItems()}</div>
  );
};

export default AdItemList;
