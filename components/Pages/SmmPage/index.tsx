import FeedbackForm from "@components/FeedbackForm";
import OurGoals from "@components/OurGoals";
import RequestAndSocial from "@components/RequestAndSocial";
import WeWorkWith from "@components/WeWorkWith";
import Welcome from "@components/Welcome";
import { ISmmLanguageContent } from "@interfaces/smmPage";

const SmmPage = ({ data }: { data: ISmmLanguageContent }) => {
  const { main } = data;
  const { weWorkWith } = data;
  const { list } = data.results;


  return (
    <div className="w-full h-full overflow-hidden relative pt-12 sm:pt-16 lg:pt-20 xl:pt-24">
      <Welcome main={main} page="smm" />
      <WeWorkWith data={weWorkWith} />
      <RequestAndSocial />
      <OurGoals goalsList={list} page="smm"/>
      <FeedbackForm />
    </div>
  );
};
export default SmmPage;
