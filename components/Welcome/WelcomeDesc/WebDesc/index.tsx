import { IWebMainSection } from "@interfaces/common";

interface WebHeaderProps {
    main: IWebMainSection;
  }

const WebDesc: React.FC<WebHeaderProps> = ({ main }) => {
  return (
    <>
      <p className="stroke_text font-bold">{main["header_1"].text}</p>
      <p className="stroke_text font-bold stroke_text_2">
        {main["header_2"].text}
      </p>

      <div className="text-base md:text-lg w-full sm:w-2/3 lg:text-2xl mt-2 header_description">
        <p>{main["description"].text}</p>
      </div>
    </>
  );
};

export default WebDesc;
