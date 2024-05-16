import Header from "./Header";
import WeOffer from "./WeOffer";
import { LanguageContent } from "../../../interfaces";
import Socials from "./Socials";
import QuotesList from "./QuotesList";
import FeedbackForm from "@components/FeedbackForm";
import Image from "next/image";
import TogetherBlock from "./TogetherBlock";

const MainPage = ({ data }: { data: LanguageContent }) => {
  const { main } = data;
  const { weOffer } = data;
  const { quotesList } = data.quotes;
  const { imgURL } = data.ourGoals.ourPhoto;
  const { goalsList } = data.ourGoals.goals;

  return (
    <div className="w-full h-full overflow-hidden relative pt-12 sm:pt-16 lg:pt-20 xl:pt-24">
      <Image
        src="/ellipses/ellipse-1.png"
        width={4500}
        height={3500}
        alt="ellipse-right"
        className="absolute blur-3xl -z-10 xl:-top-96 -top-20 -left-1/4"
      />

      <Header main={main} />
      <WeOffer weOffer={weOffer} />
      <Socials />
      <QuotesList quotesList={quotesList} />
      <TogetherBlock imgURL={imgURL} goalsList={goalsList} />
      <FeedbackForm />
    </div>
  );
};
export default MainPage;
