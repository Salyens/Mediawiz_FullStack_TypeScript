import Image from "next/image";
import Header from "./Header";
import WeOffer from "./WeOffer";
import { MainPageData } from "../../interfaces";
import Socials from "./Socials";
import OnePerson from "./QuotesList/OnePerson";
import QuotesList from "./QuotesList";
import TogetherBlock from "./TogetherBlock/OurPhoto";
import OurGoals from "./TogetherBlock/OurGoals";
import FeedbackForm from "@components/FeedbackForm";

const MainPage = ({ data }: { data: MainPageData }) => {
  const { main } = data.languages.ru;
  const { weOffer } = data.languages.ru;
  const { quotesList } = data.languages.ru.quotes;
  const { imgURL } = data.languages.ru.ourGoals.ourPhoto;
  const { goalsList } = data.languages.ru.ourGoals.goals;

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
