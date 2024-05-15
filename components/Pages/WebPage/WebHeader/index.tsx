import { IWebMainSection } from "@interfaces/webPage";
import WebHeaderPhoto from "./WebHeaderPhoto";
import WebHeaderDesc from "./WebHeaderDesc";
import Image from "next/image";

interface WebHeaderProps {
  main: IWebMainSection;
}

const WebHeader: React.FC<WebHeaderProps> = ({ main }) => {
  const { imgURL } = main.media.photo;
  return (
    <div className="flex p-6 w-full md:h-screen items-center relative">
      {/* <Image
        src="/webPage/ellipse-1.png"
        width={1500}
        height={1500}
        alt="ellipse-right"
        className="absolute -left-1/4 -top-1/4 w-full h-full"
      /> */}
      <div className="main_container flex justify-between items-center">
        <WebHeaderDesc main={main} />
        <WebHeaderPhoto imgURL={imgURL} />
      </div>
    </div>
  );
};

export default WebHeader;
