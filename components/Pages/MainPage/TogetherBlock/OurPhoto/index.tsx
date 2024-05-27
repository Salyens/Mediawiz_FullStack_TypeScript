import styles from "./togetherblock.module.css";
import AnimationWrapper from "@components/AnimationWrapper";
import BlurImg from "@components/BlurImg";
import classNames from "classnames";

interface TogetherBlockProps {
  imgURL: string;
}

const OurPhoto: React.FC<TogetherBlockProps> = ({ imgURL }) => {
  return (
    <div className="min-h-36 relative">
      <AnimationWrapper
        initial={{
          y: 700,
          opacity: 0,
        }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
        classes="main_container mb-20 md:mb-40 lg:mb-60 xl:mb-64"
      >
        <div
          className={classNames(
            "relative h-64  sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2x:h-[750px] p-3 sm:p-5 md:p-7 lg:p-10 xl:p-14",
            styles.bg_div
          )}
        >
          <div className={styles.img_wrapper}>
            <BlurImg imgURL={imgURL} name="Our photo" classes="object-cover" />
          </div>
        </div>
      </AnimationWrapper>
    </div>
  );
};

export default OurPhoto;
