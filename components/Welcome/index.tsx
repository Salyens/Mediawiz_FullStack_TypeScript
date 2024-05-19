import { IWebMainSection } from "@interfaces/webPage";
import WebHeaderPhoto from "./WebHeaderPhoto";
import WebHeaderDesc from "./WebHeaderDesc";

interface WebHeaderProps {
  main: IWebMainSection;
}

const Welcome: React.FC<WebHeaderProps> = ({ main }) => {
  const { imgURL } = main.photo;
  return (
    <div className="p-3 sm:p-4 md:p-5 xl:p-6 main_container relative lg:h-screen bg_item_left">
      <div className=" flex justify-between items-center">
        <WebHeaderDesc main={main} />
        <WebHeaderPhoto imgURL={imgURL} />
      </div>
    </div>
  );
};

export default Welcome;
