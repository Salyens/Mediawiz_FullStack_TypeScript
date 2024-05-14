import { IAdvantageItem } from "@interfaces/webPage";
import React from "react";
import OneAdvantage from "../OneAdvantage";

interface AdvantagesListProps {
  list: IAdvantageItem[];
}
const AdvantagesList: React.FC<AdvantagesListProps> = ({ list }) => {
  const renderAdvantages = () => {
    return list.map((item, index) => (
      <OneAdvantage key={item.title + index} data={item} />
    ));
  };

  return <div className="flex flex-wrap justify-between">{renderAdvantages()}</div>;
};

export default AdvantagesList;
