
import { MainSection } from "@interfaces/mainPage";
import WelcomeImg from "./WelcomeImg";
import WelcomeDesc from "./WelcomeDesc";
import HeaderBgLine from "./HeaderBgLine";
import { IWebMainSection } from "@interfaces/common";
import { ISmmMainSection } from "@interfaces/smmPage";

interface WebHeaderProps {
  main: IWebMainSection | MainSection | ISmmMainSection;
  page: "home" | "web" | "smm";
}

const Welcome: React.FC<WebHeaderProps> = ({ main, page }) => {
  const { imgURL } = main.img;
  return (
    <div className="relative lg:h-screen bg_item_left">
      {page === "home" && <HeaderBgLine />}
      <div className=" flex justify-between items-center main_container p-3 sm:p-4 md:p-5 xl:p-6">
        <WelcomeDesc main={main} page={page} />
        <WelcomeImg imgURL={imgURL} />
      </div>
    </div>
  );
};

export default Welcome;
