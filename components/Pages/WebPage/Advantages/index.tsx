import UnderlinedTitle from "@components/Pages/MainPage/WeOffer/UnderlinedTitle";
import { IAdvantages } from "@interfaces/webPage";
import React from "react";
import AdvantagesList from "./AdvantagesList";

interface AdvantagesProps {
  advantages: IAdvantages;
}

const Advantages: React.FC<AdvantagesProps> = ({ advantages }) => {
  return (
    <div className="main_container p-6">
      <UnderlinedTitle text={advantages.header} />
      <AdvantagesList list={advantages.list} />
    </div>
  );
};

export default Advantages;
