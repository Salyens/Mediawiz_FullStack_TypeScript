import dynamic from 'next/dynamic';
import { MainSection } from "@interfaces/mainPage";
import WelcomeImg from "./WelcomeImg";
import WelcomeDesc from "./WelcomeDesc";
import { IWebMainSection } from "@interfaces/common";
import { ISmmMainSection } from "@interfaces/smmPage";

const DynamicBackgroundVideo = dynamic(() => import("@components/BackgroundVideo"), { ssr: false });
const DynamicBgEllipse = dynamic(() => import("@components/BgEllipse"), { ssr: false });
const DynamicWelcomeImg = dynamic(() => import("./WelcomeImg"), { ssr: false });

interface WebHeaderProps {
  main: IWebMainSection | MainSection | ISmmMainSection;
  page: "home" | "web" | "smm";
}

const Welcome: React.FC<WebHeaderProps> = ({ main, page }) => {
  const { imgURL } = main.img;
  return (
    <div className="relative lg:h-screen flex flex-col justify-center">
      {page === "home" ? (
        <DynamicBackgroundVideo />
      ) : (
        <DynamicBgEllipse
          variant={1}
          position="-left-1/3 -top-1/4"
          width={2000}
          height={2000}
        />
      )}

      <div className="flex justify-between w-full items-center main_container mb-8 p-3 sm:p-4 md:p-5 xl:p-6 pt-16 sm:pt-24 md:pt-32 ">
        <WelcomeDesc main={main} page={page} />
        <DynamicWelcomeImg imgURL={imgURL} />
      </div>
    </div>
  );
};

export default Welcome;
