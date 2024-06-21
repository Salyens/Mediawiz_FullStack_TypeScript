import styles from "./togetherblock.module.css";
import DynamicAnimationWrapper from "@components/AnimationWrapper/DynamicAnimationWrapper";
import DynamicBlurImg from "@components/BlurImg/DynamicBlurImg";
import { Img } from "@interfaces/common";
import classNames from "classnames";

const OurPhoto: React.FC<Img> = ({ imgURL }) => {
  return (
    <div className="min-h-36 relative">
      <DynamicAnimationWrapper
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
            <DynamicBlurImg imgURL={imgURL} name="Our photo" classes="object-cover" />
          </div>
        </div>
      </DynamicAnimationWrapper>
    </div>
  );
};

export default OurPhoto;
