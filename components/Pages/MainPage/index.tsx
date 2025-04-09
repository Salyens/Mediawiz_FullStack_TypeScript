import { LanguageContent } from "../../../interfaces/mainPage";
import TogetherBlock from "./TogetherBlock";
import FeedbackForm from "@components/FeedbackForm";
import WeOffer from "./WeOffer";
import Welcome from "@components/Welcome";
import Socials from "./Socials";
import Quotes from "@components/Quotes";

const MainPage = ({ data }: { data: LanguageContent }) => {
  const { main } = data;
  const { weOffer } = data;
  const { quotesList } = data.quotes;
  const { imgURL } = data.ourGoals.ourPhoto;
  const { goalsList } = data.ourGoals.goals;

  return (
    <div className="w-full h-full min-h-screen overflow-hidden relative">
      <Welcome main={main} page="home" />
      <WeOffer weOffer={weOffer} />
      <Socials />
      <Quotes quotesList={quotesList} />
      <TogetherBlock
        imgURL={imgURL}
        goalsList={goalsList}
      />
      <FeedbackForm />
    </div>
  );
};

export default MainPage;
