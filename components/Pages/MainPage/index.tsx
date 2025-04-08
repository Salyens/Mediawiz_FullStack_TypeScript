import Preloader from "@components/Preloader";
import { LanguageContent } from "../../../interfaces/mainPage";
import dynamic from "next/dynamic";
import WeOffer from "./WeOffer";
import Quotes from "@components/Quotes";
import Socials from "./Socials";
import Welcome from "@components/Welcome";
import TogetherBlock from "./TogetherBlock";
import FeedbackForm from "@components/FeedbackForm";

const DynamicWeOffer = dynamic(() => import("./WeOffer"), {
  loading: () => <Preloader />,
});

const DynamicSocials = dynamic(() => import("./Socials"), {
  loading: () => <Preloader />,
});

const DynamicQuotes = dynamic(
  () => import("@components/Quotes"),
  {
    loading: () => <Preloader />,
  }
);

const DynamicTogetherBlock = dynamic(
  () => import("./TogetherBlock"),
  {
    loading: () => <Preloader />,
    ssr: false,
  }
);

const DynamicFeedbackForm = dynamic(
  () => import("@components/FeedbackForm"),
  {
    loading: () => <Preloader />,
  }
);

const DynamicWelcome = dynamic(
  () => import("@components/Welcome"),
  {
    loading: () => <Preloader />,
  }
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
