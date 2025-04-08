import WeOffer from "./WeOffer";
import { LanguageContent } from "../../../interfaces/mainPage";
import Socials from "./Socials";
import FeedbackForm from "@components/FeedbackForm";
import TogetherBlock from "./TogetherBlock";
import Welcome from "@components/Welcome";
import Quotes from "@components/Quotes";
import dynamic from "next/dynamic";

const DynamicWeOffer = dynamic(() => import("./WeOffer"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const DynamicSocials = dynamic(() => import("./Socials"), {
  ssr: false,
});

const DynamicQuotes = dynamic(
  () => import("@components/Quotes"),
  {
    ssr: false,
  }
);

const DynamicTogetherBlock = dynamic(
  () => import("./TogetherBlock"),
  {
    ssr: false,
  }
);

const DynamicFeedbackForm = dynamic(
  () => import("@components/FeedbackForm"),
  {
    ssr: false,
  }
);

const DynamicWelcome = dynamic(() => import("@components/Welcome"), {
  ssr: false,
});

const MainPage = ({ data }: { data: LanguageContent }) => {
  const { main } = data;
  const { weOffer } = data;
  const { quotesList } = data.quotes;
  const { imgURL } = data.ourGoals.ourPhoto;
  const { goalsList } = data.ourGoals.goals;

  return (
    <div className="w-full h-full min-h-screen overflow-hidden relative">
      <DynamicWelcome main={main} page="home" />
      <DynamicWeOffer weOffer={weOffer} />
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
