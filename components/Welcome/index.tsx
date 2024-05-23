import { MainSection } from "@interfaces/mainPage";
import WelcomeImg from "./WelcomeImg";
import WelcomeDesc from "./WelcomeDesc";
import HeaderBgLine from "./HeaderBgLine";
import { IWebMainSection } from "@interfaces/common";
import { ISmmMainSection } from "@interfaces/smmPage";
import BgEllipse from "@components/BgEllipse";

interface WebHeaderProps {
  main: IWebMainSection | MainSection | ISmmMainSection;
  page: "home" | "web" | "smm";
}

const Welcome: React.FC<WebHeaderProps> = ({ main, page }) => {
  const { imgURL } = main.img;
  return (
    <div className="relative lg:h-screen 2xl:pt-16">
      <BgEllipse variant={1} position="-left-1/3 -top-1/4" width={2000} height={2000} />
      {page === "home" && <HeaderBgLine />}
      <div className=" flex justify-between items-center main_container mb-8 p-3 sm:p-4 md:p-5 xl:p-6">
        <WelcomeDesc main={main} page={page} />
        <WelcomeImg imgURL={imgURL} />
      </div>
    </div>
  );
};

export default Welcome;
