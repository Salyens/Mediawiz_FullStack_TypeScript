import FeedbackForm from "@components/FeedbackForm";
import OurGoals from "@components/OurGoals";
import Quotes from "@components/Quotes";
import RequestAndSocial from "@components/RequestAndSocial";
import WeWorkWithSection from "@components/WeWorkWithSection";
import Welcome from "@components/Welcome";
import { ISmmAdLanguageContent } from "@interfaces/smmAd";

const SmmAdPage = ({ data }: { data: ISmmAdLanguageContent }) => {
  const { main } = data;
  const { weWorkWith } = data;
  const { list } = data.results;
  const { list: quotesList } = data.quotes;

  return (
    <div className="w-full h-full min-h-screen overflow-hidden relative">
      <div className="min-h-screen">
        <Welcome main={main} page="smm" />
        <WeWorkWithSection data={weWorkWith}/>
      </div>
      <RequestAndSocial />
      <OurGoals goalsList={list} page="smm" />
      <Quotes quotesList={quotesList} />
      <FeedbackForm />
    </div>
  );
};
export default SmmAdPage;
