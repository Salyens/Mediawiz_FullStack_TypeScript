import OneQuote from "./OneQuote";
import { QuoteItem } from "@interfaces/mainPage";
import { ISmmQuoteItem } from "@interfaces/smmPage";

interface Props {
  quotesList: QuoteItem[] | ISmmQuoteItem[];
}

const Quotes: React.FC<Props> = ({ quotesList }) => {
  return (
    <div className="mb-24 sm:mb-28 md:mb-40 lg:mb-52 flex flex-col gap-10">
      {quotesList.map((item, index) => (
        <OneQuote key={index} item={item} index={index} />
      ))}
    </div>
  );
};

export default Quotes;
