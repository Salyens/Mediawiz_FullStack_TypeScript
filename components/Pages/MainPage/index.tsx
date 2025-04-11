import { LanguageContent } from "../../../interfaces/mainPage";
import WeOffer from "./WeOffer";
import Welcome from "@components/Welcome";
import dynamic from "next/dynamic";

const DynamicSocials = dynamic(() => import("./Socials"));
const DynamicQuotes = dynamic(
  () => import("@components/Quotes")
);
const DynamicFeedbackForm = dynamic(
  () => import("@components/FeedbackForm")
);
const DynamicTogetherBlock = dynamic(
  () => import("./TogetherBlock")
);

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
      <DynamicSocials />
      <DynamicQuotes quotesList={quotesList} />
      <DynamicTogetherBlock
        imgURL={imgURL}
        goalsList={goalsList}
      />
      <DynamicFeedbackForm />
    </div>
  );
};

export default MainPage;
