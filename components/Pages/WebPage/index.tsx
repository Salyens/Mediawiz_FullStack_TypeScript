import { IWebLanguageContent } from "@interfaces/webPage";
import RequestAndSocial from "@components/RequestAndSocial";

import FeedbackForm from "@components/FeedbackForm";
import Welcome from "@components/Welcome";
import Advantages from "@components/Advantages";
import HowWeWork from "@components/HowWeWork";
import WeWorkWith from "@components/WeWorkWith";
import WeWorkWithSection from "@components/WeWorkWithSection";

const WebPage = ({ data }: { data: IWebLanguageContent }) => {
  const { main } = data;
  const { advantages } = data;
  const { weWorkWith } = data;
  const { howWeWork } = data;

  return (
    <div className="w-full h-full min-h-screen overflow-hidden relative">
      <div className="min-h-screen">
        <Welcome main={main} page="web" />
        <Advantages advantages={advantages} />
      </div>
      <RequestAndSocial />
      <WeWorkWithSection data={weWorkWith} />
      {/* <WeWorkWith data={weWorkWith} /> */}
      <HowWeWork data={howWeWork} />
      <FeedbackForm />
    </div>
  );
};
export default WebPage;
