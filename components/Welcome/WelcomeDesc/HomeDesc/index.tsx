import { MainSection } from "@interfaces/mainPage";

interface HomeDescProps {
  main: MainSection;
}

const HomeDesc: React.FC<HomeDescProps> = ({ main }) => {
  return (
    <>
      <p className="stroke_text font-bold">{main["header_1"].text}</p>
      <p className="stroke_text font-bold stroke_text_2">
        {main["header_2"].text}
      </p>

      <div className="text-base md:text-lg lg:w-2/3 lg:text-2xl mt-2 header_description">
        <p>{main["description_1"].text}</p>
        <p>{main["description_2"].text}</p>
      </div>
    </>
  );
};

export default HomeDesc;
