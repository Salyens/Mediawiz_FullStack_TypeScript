import { IWebLanguageContent } from "@interfaces/webPage";
import RequestAndSocial from "@components/RequestAndSocial";

import FeedbackForm from "@components/FeedbackForm";
import Welcome from "@components/Welcome";
import Advantages from "@components/Advantages";
import HowWeWork from "@components/HowWeWork";
import WeWorkWith from "@components/WeWorkWith";

const WebPage = ({ data }: { data: IWebLanguageContent }) => {
  const { main } = data;
  const { advantages } = data;
  const { weWorkWith } = data;
  const { howWeWork } = data;

  return (
    <div className="w-full h-full overflow-hidden relative pt-12 sm:pt-16 lg:pt-20 xl:pt-24">
      <Welcome main={main} page="web"/>
      <Advantages advantages={advantages} />
      <RequestAndSocial />
      <WeWorkWith data={weWorkWith} />
      <HowWeWork data={howWeWork} />
      <FeedbackForm />
    </div>
  );
};
export default WebPage;
