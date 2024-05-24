import BlurImg from "@components/BlurImg";
import { MotionDiv } from "@components/MotionDiv";
import { ImgURL } from "@interfaces/common";
import Image from "next/image";

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
        <BlurImg imgURL={imgURL}/>
        {/* <Image
          src={imgURL}
          alt="Photo"
          fill={true}
          sizes="50vw"
          className="object-contain"
          priority={true}
        /> */}
      </MotionDiv>
    </div>
  );
};

export default WelcomeImg;
