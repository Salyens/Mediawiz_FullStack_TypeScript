import Advantages from "@components/Advantages";
import FeedbackForm from "@components/FeedbackForm";
import HowWeWork from "@components/HowWeWork";
import RequestAndSocial from "@components/RequestAndSocial";
import Welcome from "@components/Welcome";
import { IWebAdLanguageContent } from "@interfaces/webAdPage";
import WeWorkWithSection from "@components/WeWorkWithSection";

const WebAdPage = ({ data }: { data: IWebAdLanguageContent }) => {
  const { main } = data;
  const { advantages } = data;
  const { howWeWork } = data;
  const { howAdWorks } = data;

  return (
    <div className="w-full h-full min-h-screen overflow-hidden relative">
      <div className="min-h-screen">
        <Welcome main={main} page="web" />
        <Advantages advantages={advantages} />
      </div>
      <RequestAndSocial />
      <WeWorkWithSection data={howAdWorks} />
      <HowWeWork data={howWeWork} />
      <FeedbackForm />
    </div>
  );
};
export default WebAdPage;
