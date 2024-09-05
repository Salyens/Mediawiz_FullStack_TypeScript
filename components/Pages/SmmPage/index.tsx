import FeedbackForm from "@components/FeedbackForm";
import OurGoals from "@components/OurGoals";
import Quotes from "@components/Quotes";
import RequestAndSocial from "@components/RequestAndSocial";
import Welcome from "@components/Welcome";
import { ISmmLanguageContent } from "@interfaces/smmPage";
import Projects from "./Progects";
import WeWorkWithSection from "@components/WeWorkWithSection";

const SmmPage = ({ data }: { data: ISmmLanguageContent }) => {
  const { main } = data;
  const { weWorkWith } = data;
  const { list } = data.results;
  const { list: quotesList } = data.quotes;
  const { myProjects } = data;

  return (
    <div className="w-full h-full min-h-screen overflow-hidden relative">
      <div className="min-h-screen">
        <Welcome main={main} page="smm" />
        <WeWorkWithSection data={weWorkWith}/>
      </div>
      <RequestAndSocial />
      <OurGoals goalsList={list} page="smm" />
      <Projects myProjects={myProjects} />
      <Quotes quotesList={quotesList} />
      <FeedbackForm />
    </div>
  );
};
export default SmmPage;
