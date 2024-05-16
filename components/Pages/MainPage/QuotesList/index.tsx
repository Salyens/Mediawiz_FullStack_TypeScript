import React from "react";
import OnePerson from "./OnePerson";

interface QuoteProps {
  name: string;
  imgURL?: string;
  description: string;
}

interface QuotesListProps {
  quotesList: QuoteProps[];
}

const QuotesList: React.FC<QuotesListProps> = ({ quotesList }) => {
  const renderOnePerson = () => {
    return quotesList.map((person, index) => (
      <OnePerson
        key={index}
        name={person.name}
        imgURL={person.imgURL}
        description={person.description}
        index={index}
      />
    ));
  };

  return <div className="mb-28 sm:mb-36 md:mb-40 lg:mb-60">{renderOnePerson()}</div>;
};

export default QuotesList;
