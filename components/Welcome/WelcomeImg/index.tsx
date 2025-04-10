import { MotionDiv } from "@components/MotionDiv";
import { ImgURL } from "@interfaces/common";
import Image from "next/image";

const WelcomeImg = ({ imgURL }: { imgURL: ImgURL }) => {
  return (
    <div className="relative hidden sm:flex sm:w-5/12 sm:h-[300px] lg:h-[600px]">
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeOut",
          duration: 0.7,
        }}
        className="relative w-full h-full"
      >
        <Image
          src={imgURL}
          alt="MediaWiz platform welcome image - main promotional banner"
          priority
          fill
          sizes="(max-width: 640px) 0px, (max-width: 1024px) 65vh, 50vh"
          className="object-contain select-none pointer-events-none touch-none"
        />
      </MotionDiv>
    </div>
  );
};

export default WelcomeImg;
