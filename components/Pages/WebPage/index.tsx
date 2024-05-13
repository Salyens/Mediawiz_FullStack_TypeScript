import { IWebLanguageContent } from "@interfaces/webPage";
import WebHeader from "./WebHeader";

const WebPage = ({ data }: { data: IWebLanguageContent }) => {
  const { main } = data;

  return (
    <div className="w-full h-full overflow-hidden relative">
      <WebHeader main={main} />
    </div>
  );
};
export default WebPage;
