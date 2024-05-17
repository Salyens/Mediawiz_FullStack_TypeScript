import { IWebLanguageContent } from "@interfaces/webPage";
import WebHeader from "./WebHeader";
import Advantages from "./Advantages";
import RequestAndSocial from "@components/RequestAndSocial";
import WeWorkWith from "./WeWorkWith";
import HowWeWork from "./HowWeWork";
import FeedbackForm from "@components/FeedbackForm";
import Image from "next/image";

const WebPage = ({ data }: { data: IWebLanguageContent }) => {
  const { main } = data;
  const { advantages } = data;
  const { weWorkWith } = data;
  const { howWeWork } = data;

  return (
    <div className="w-full h-full overflow-hidden relative pt-12 sm:pt-16 lg:pt-20 xl:pt-24">
      <WebHeader main={main} />
      <Advantages advantages={advantages} />
      <RequestAndSocial />
      <WeWorkWith data={weWorkWith} />
      <HowWeWork data={howWeWork} />
      <FeedbackForm />
    </div>
  );
};
export default WebPage;
