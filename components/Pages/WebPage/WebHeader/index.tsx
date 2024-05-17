import { IWebMainSection } from "@interfaces/webPage";
import WebHeaderPhoto from "./WebHeaderPhoto";
import WebHeaderDesc from "./WebHeaderDesc";
import Image from "next/image";

interface WebHeaderProps {
  main: IWebMainSection;
}

const WebHeader: React.FC<WebHeaderProps> = ({ main }) => {
  const { imgURL } = main.photo;
  return (
    <div className="p-6 main_container relative md:h-screen bg_item_left">
      <div className=" flex justify-between items-center">
        <WebHeaderDesc main={main} />
        <WebHeaderPhoto imgURL={imgURL} />
      </div>
    </div>
  );
};

export default WebHeader;
