import Header from "./Header";
import WeOffer from "./WeOffer";
import { LanguageContent } from "../../interfaces";
import Socials from "./Socials";
import QuotesList from "./QuotesList";
import TogetherBlock from "./TogetherBlock/OurPhoto";
import OurGoals from "./TogetherBlock/OurGoals";
import FeedbackForm from "@components/FeedbackForm";
import { useTranslations } from "next-intl";

const MainPage = ({ data }: { data: LanguageContent }) => {
  const { main } = data;
  const { weOffer } = data;
  const { quotesList } = data.quotes;
  const { imgURL } = data.ourGoals.ourPhoto;
  const { goalsList } = data.ourGoals.goals;

  return (
    <div className="w-full h-full overflow-hidden relative">
      <Header main={main} />
      <WeOffer weOffer={weOffer} />
      <Socials />
      <QuotesList quotesList={quotesList} />
      <TogetherBlock imgURL={imgURL} />
      <OurGoals goalsList={goalsList} />
      <FeedbackForm />
    </div>
  );
};
export default MainPage;
