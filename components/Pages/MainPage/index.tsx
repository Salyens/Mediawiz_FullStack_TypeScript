import Preloader from "@components/Preloader";
import { LanguageContent } from "../../../interfaces/mainPage";
import dynamic from "next/dynamic";

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
