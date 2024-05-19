import Advantages from "@components/Advantages";
import FeedbackForm from "@components/FeedbackForm";
import HowWeWork from "@components/HowWeWork";
import RequestAndSocial from "@components/RequestAndSocial";
import Welcome from "@components/Welcome";
import { IWebAdLanguageContent } from "@interfaces/webPage";
import HowAdWorks from "./HowAdWorks";

const WebAdPage = ({ data }: { data: IWebAdLanguageContent }) => {
  const { main } = data;
  const { advantages } = data;
  const { howWeWork } = data;
  const { howAdWorks } = data;

  return (
    <div className="w-full h-full overflow-hidden relative pt-12 sm:pt-16 lg:pt-20 xl:pt-24">
      <Welcome main={main} />
      <Advantages advantages={advantages} />
      <RequestAndSocial />
      <HowAdWorks data={howAdWorks} />
      <HowWeWork data={howWeWork} />
      <FeedbackForm />
    </div>
  );
};
export default WebAdPage;
