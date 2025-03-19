import React from "react";
import OneCard from "../OneCard";
import { OffersList } from "@interfaces/mainPage";

interface Props {
  offersList: OffersList[];
}

const WeOfferCards = ({ offersList }: Props) => {
  return (
    <>
      {offersList.map((item, index) => (
        <div
          key={item.header + index}
          className="w-full lg:w-[calc(50%-0.5rem)]"
        >
          <OneCard
            header={item.header}
            description={item.description}
            href={item.href}
          />
        </div>
      ))}
    </>
  );
};

export default WeOfferCards;
