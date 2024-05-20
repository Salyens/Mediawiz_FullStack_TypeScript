"use client";

import { MotionDiv } from "@components/MotionDiv";
import { ImgURL } from "@interfaces/common";
import Image from "next/image";

const WelcomeImg = ({ imgURL }: { imgURL: ImgURL }) => {
  return (
    <div className="relative hidden sm:flex sm:w-1/2 sm:h-[300px] lg:h-[600px]">
      <MotionDiv
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{
          ease: "easeOut",
          duration: 1,
        }}
        style={{ position: "relative", width: "100%", height: "100%" }}
      >
        <Image
          src={imgURL}
          alt="Photo"
          fill={true}
          sizes="50vw"
          className="object-contain"
          priority={true}
        />
      </MotionDiv>
    </div>
  );
};

export default WelcomeImg;
