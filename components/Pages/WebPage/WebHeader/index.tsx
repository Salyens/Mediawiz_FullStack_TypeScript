import MainModal from "@components/modals/MainModal";
import { IWebMainSection } from "@interfaces/webPage";
import Image from "next/image";

interface WebHeaderProps {
  main: IWebMainSection;
}

const WebHeader: React.FC<WebHeaderProps> = ({ main }) => {
  const { imgURL } = main.media.photo;
  return (
    <div className="flex p-6 w-full md:h-screen items-center">
      <div className="main_container flex justify-between items-center">
        <div className=" flex_column text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-full mt-4 sm:mt-0 sm:w-1/2 ">
          <p className="stroke_text font-bold">{main["header_1"].text}</p>
          <p className="stroke_text font-bold stroke_text_2">
            {main["header_2"].text}
          </p>

          <div className="text-base md:text-lg lg:text-2xl mt-2 header_description">
            <p>{main["description"].text}</p>
          </div>
          <MainModal />
        </div>
        <div className="relative hidden sm:flex w-1/2 h-[600px]">
          <Image
            src={imgURL}
            alt="Photo"
            fill={true}
            sizes="50vw"
            style={{ objectFit: "contain" }}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default WebHeader;
