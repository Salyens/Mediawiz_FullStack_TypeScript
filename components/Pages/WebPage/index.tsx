import { IWebLanguageContent } from "@interfaces/webPage";
import WebHeader from "./WebHeader";
import Advantages from "./Advantages";
import RequestAndSocial from "@components/RequestAndSocial";
import WeWorkWith from "./WeWorkWith";
import HowWeWork from "./HowWeWork";

const WebPage = ({ data }: { data: IWebLanguageContent }) => {
  const { main } = data;
  const { advantages } = data;
  const { weWorkWith } = data;
  const { howWeWork } = data;

  return (
    <div className="w-full h-full overflow-hidden relative">
      {/* <WebHeader main={main} />
      <Advantages advantages={advantages} />
      <RequestAndSocial />
      <WeWorkWith data={weWorkWith} /> */}
      <HowWeWork data={howWeWork} />
    </div>
  );
};
export default WebPage;
