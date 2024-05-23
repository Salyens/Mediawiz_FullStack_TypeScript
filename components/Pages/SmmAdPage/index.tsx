import FeedbackForm from "@components/FeedbackForm";
import OurGoals from "@components/OurGoals";
import Quotes from "@components/Quotes";
import RequestAndSocial from "@components/RequestAndSocial";
import WeWorkWith from "@components/WeWorkWith";
import Welcome from "@components/Welcome";
import { ISmmAdLanguageContent } from "@interfaces/smmAd";

const SmmAdPage = ({ data }: { data: ISmmAdLanguageContent }) => {
  const { main } = data;
  const { weWorkWith } = data;
  const { list } = data.results;
  const { list: quotesList } = data.quotes;

  return (
    <div className="w-full h-full overflow-hidden relative pt-12 sm:pt-16 lg:pt-20 xl:pt-24">
      <Welcome main={main} page="smm" />
      <WeWorkWith data={weWorkWith} />
      <RequestAndSocial />
      <OurGoals goalsList={list} page="smm" />
      <Quotes quotesList={quotesList} />
      <FeedbackForm />
    </div>
  );
};
export default SmmAdPage;