import { MainSection } from "@interfaces/mainPage";
import { IWebMainSection } from "@interfaces/common";
import { ISmmMainSection } from "@interfaces/smmPage";
import WelcomeDesc from "./WelcomeDesc";
import WelcomeImg from "./WelcomeImg";
import BackgroundVideo from "@components/BackgroundVideo";
import BgEllipse from "@components/BgEllipse";

interface WebHeaderProps {
  main: IWebMainSection | MainSection | ISmmMainSection;
  page: "home" | "web" | "smm";
}

const Welcome: React.FC<WebHeaderProps> = ({
  main,
  page,
}) => {
  const { imgURL } = main.img;
  return (
    <div className="relative lg:h-screen flex flex-col justify-center">
      {page === "home" ? (
        <BackgroundVideo />
      ) : (
        <BgEllipse
          variant={1}
          position="md:-left-1/4 md:-top-1/3"
          width={1300}
          height={1300}
        />
      )}

      <div className="flex justify-between w-full items-center main_container mb-8 p-3 sm:p-4 md:p-5 xl:p-6 pt-16 sm:pt-24 md:pt-32 ">
        <WelcomeDesc main={main} page={page} />
        <WelcomeImg imgURL={imgURL} />
      </div>
    </div>
  );
};

export default Welcome;
