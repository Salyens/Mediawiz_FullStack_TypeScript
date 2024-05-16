import { MainSection } from "@interfaces";
import styles from "./header.module.css";
import { MotionDiv } from "@components/MotionDiv";
import MainModal from "@components/modals/MainModal";
import HeaderBgLine from "./HeaderBgLine";
import HeaderLogo from "./HeaderLogo";

const Header = ({ main }: { main: MainSection }) => {
  const { imgURL } = main.media.logo;

  return (
    <div
      className="sm:flex-row
        items-center sm:justify-between
        mt-8 md:mt-0 relative w-screen pl-2 pr-2 lg:pl-6 lg:pr-6"
    >
      <HeaderBgLine />

      <div
        className={`${styles.header_wrapper} main_container flex-col sm:flex-row md:h-screen`}
      >
        <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          <MotionDiv
            initial={{ x: -1500 }}
            animate={{ x: 0 }}
            transition={{
              ease: "easeOut",
              duration: 1,
            }}
          >
            <div className="flex_column mb-12">
              <p className="stroke_text font-bold">{main["header_1"].text}</p>
              <p className="stroke_text font-bold stroke_text_2">
                {main["header_2"].text}
              </p>

              <div className="text-base md:text-lg lg:text-2xl mt-2 header_description">
                <p>{main["description_1"].text}</p>
                <p>{main["description_2"].text}</p>
              </div>
              <MainModal />
            </div>
          </MotionDiv>
        </div>
        <div className="hidden sm:flex header_logo">
          <HeaderLogo imgURL={imgURL} />
        </div>
      </div>
    </div>
  );
};

export default Header;
