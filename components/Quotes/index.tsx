import React from "react";
import OneQuote from "./OneQuote";
import { QuoteItem } from "@interfaces/mainPage";
import { ISmmQuoteItem } from "@interfaces/smmPage";

interface QuotesListProps {
  quotesList: QuoteItem[] | ISmmQuoteItem[];
}

const Quotes: React.FC<QuotesListProps> = ({ quotesList }) => {

  const renderOnePerson = () => {
    return quotesList.map((item, index) => (
      <OneQuote
        key={index}
        item={item}
        index={index}
      />
    ));
  };

  return <div className="mb-24 sm:mb-28 md:mb-40 lg:mb-52">{renderOnePerson()}</div>;
};

export default Quotes;
