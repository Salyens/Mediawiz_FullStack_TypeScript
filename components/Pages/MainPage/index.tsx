import Header from "./Header";
import WeOffer from "./WeOffer";
import { LanguageContent } from "../../../interfaces";
import Socials from "./Socials";
import QuotesList from "./QuotesList";
import FeedbackForm from "@components/FeedbackForm";
import Image from "next/image";
import TogetherBlock from "./TogetherBlock";
import styles from "./mainpage.module.css"

const MainPage = ({ data }: { data: LanguageContent }) => {
  const { main } = data;
  const { weOffer } = data;
  const { quotesList } = data.quotes;
  const { imgURL } = data.ourGoals.ourPhoto;
  const { goalsList } = data.ourGoals.goals;

  return (
    <div className={`w-full h-full min-h-screen overflow-hidden relative pt-12 sm:pt-16 lg:pt-20 xl:pt-24 `}>
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
