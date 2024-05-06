import { MainSection } from "@interfaces";
import styles from "./header.module.css";
import HeaderLogo from "./HeaderLogo";
import { MotionDiv } from "@components/MotionDiv";
// import FeedbackModal from "../../modals/FeedbackModal";
import { DialogDemo } from "@components/modals/DialogClient";

const Header = ({ main }: { main: MainSection }) => {
  const { imgURL } = main.media.logo;

  return (
    <div
      className=" sm:flex-row
        items-center sm:justify-between
        mt-8 md:mt-0 ml-auto mr-auto max-w-screen-2xl relative main_container pl-2 pr-2 lg:pl-6 lg:pr-6"
    >
      <div
        className={`${styles.header_wrapper} flex-col sm:flex-row md:h-screen`}
      >
        <div className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl ">
          <MotionDiv
            initial={{ x: -1500 }}
            animate={{ x: 0 }}
            transition={{
              ease: "easeOut",
              duration: 1,
              delay: 0.5,
            }}
          >
            <div className="flex_column">
              <p className={`${styles.header_text}`}>{main["header_1"].text}</p>
              <p className={`${styles.header_text} ${styles.header_text_2}`}>
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

              <DialogDemo />

              {/* <FeedbackModal /> */}
            </div>
          </MotionDiv>
        </div>
        <div className={`hidden sm:flex ${styles.header_logo}`}>
          <HeaderLogo imgURL={imgURL} />
        </div>
      </div>
    </div>
  );
};

export default Header;
