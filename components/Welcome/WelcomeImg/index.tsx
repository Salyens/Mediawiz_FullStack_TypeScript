import BlurImg from "@components/BlurImg";
import { MotionDiv } from "@components/MotionDiv";
import { ImgURL } from "@interfaces/common";

const WelcomeImg = ({ imgURL }: { imgURL: ImgURL }) => {
  return (
    <div className="relative hidden sm:flex sm:w-5/12 sm:h-[300px] lg:h-[600px]">
      <MotionDiv
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{
          ease: "easeOut",
          duration: 1,
        }}
        className="relative w-full h-full"
      >
        <BlurImg
          imgURL={imgURL}
          name="Welcome image"
          sizes="(max-width: 640px) 0px, (max-width: 1024px) 65vh, 50vh"
        />
      </MotionDiv>
    </div>
  );
};

export default WelcomeImg;
