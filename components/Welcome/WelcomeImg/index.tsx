import DynamicAnimationWrapper from "@components/AnimationWrapper/DynamicAnimationWrapper";
import DynamicBlurImg from "@components/BlurImg/DynamicBlurImg";
import { ImgURL } from "@interfaces/common";

const WelcomeImg = ({ imgURL }: { imgURL: ImgURL }) => {
  return (
    <div className="relative hidden sm:flex sm:w-5/12 sm:h-[300px] lg:h-[600px]">
      <DynamicAnimationWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeOut",
          delay: 1,
          duration: 0.7,
        }}
        classes="relative w-full h-full"
      >
        <DynamicBlurImg
          imgURL={imgURL}
          name="Welcome image"
          sizes="(max-width: 640px) 0px, (max-width: 1024px) 65vh, 50vh"
        />
      </DynamicAnimationWrapper>
    </div>
  );
};

export default WelcomeImg;
