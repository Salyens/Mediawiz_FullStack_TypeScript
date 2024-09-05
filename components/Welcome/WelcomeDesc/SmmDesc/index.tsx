import { ISmmMainSection } from "@interfaces/smmPage";

interface WebHeaderProps {
    main: ISmmMainSection;
  }

const SmmDesc: React.FC<WebHeaderProps> = ({ main }) => {
  return (
    <>
      <p className="stroke_text font-bold">{main["header"].text}</p>
      <div className="text-base md:text-lg w-full sm:w-2/3 lg:text-2xl mt-2 header_description">
        <p>{main["description"].text}</p>
      </div>
    </>
  );
};

export default SmmDesc;
