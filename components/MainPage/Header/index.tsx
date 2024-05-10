import { MainSection } from "@interfaces";
import styles from "./header.module.css";
import HeaderLogo from "./HeaderLogo";
import { MotionDiv } from "@components/MotionDiv";
import MainModal from "@components/modals/MainModal";
import Image from "next/image";

const Header = ({ main }: { main: MainSection }) => {
  const { imgURL } = main.media.logo;

  return (
    <>
      <div
        className="sm:flex-row
        items-center sm:justify-between
        mt-8 md:mt-0 relative w-screen pl-2 pr-2 lg:pl-6 lg:pr-6"
      >
        <Image
          src="/mainPage/ellipse-4.svg"
          width={1500}
          height={1500}
          alt="ellipse-right"
          className="absolute -z-10 blur-3xl top-1/2 -right-1/3"
        />

        <Image
          src={`/mainPage/Group.svg?v=${new Date().getTime()}`}
          fill
          style={{ objectFit: "contain" }}
          alt="Header line"
          className="absolute -z-10 top-1/2 -right-1/3"
        />

        <div
          className={`${styles.header_wrapper} main_container flex-col sm:flex-row md:h-screen`}
        >
          <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl ">
            <MotionDiv
              initial={{ x: -1500 }}
              animate={{ x: 0 }}
              transition={{
                ease: "easeOut",
                duration: 1,
                delay: 0.5,
              }}
            >
              <div className=" flex_column">
                <p className="stroke_text font-bold">{main["header_1"].text}</p>
                <p className="stroke_text font-bold stroke_text_2">
                  {main["header_2"].text}
                </p>

                <div className="text-base md:text-lg lg:text-2xl mt-2">
                  <p className={styles.description}>
                    {main["description_1"].text}
                  </p>
                  <p className={styles.description}>
                    {main["description_2"].text}
                  </p>
                </div>
                <MainModal />
              </div>
            </MotionDiv>
          </div>
          <div className={`hidden sm:flex ${styles.header_logo}`}>
            <HeaderLogo imgURL={imgURL} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
