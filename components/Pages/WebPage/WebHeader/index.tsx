import MainModal from "@components/modals/MainModal";
import { IWebMainSection } from "@interfaces/webPage";

interface WebHeaderProps {
  main: IWebMainSection;
}

const WebHeader: React.FC<WebHeaderProps> = ({ main }) => {

  return (
    <div className="main_container p-6">
      <div className=" flex_column text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        <p className="stroke_text font-bold">{main["header_1"].text}</p>
        <p className="stroke_text font-bold stroke_text_2">
          {main["header_2"].text}
        </p>

        <div className="text-base md:text-lg lg:text-2xl mt-2 header_description">
          <p>{main["description"].text}</p>
        </div>
        <MainModal />
      </div>
    </div>
  );
};

export default WebHeader;
