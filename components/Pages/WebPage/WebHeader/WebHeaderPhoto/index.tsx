"use client";

import { MotionDiv } from "@components/MotionDiv";
import { ImgURL } from "@interfaces";
import Image from "next/image";

const WebHeaderPhoto = ({ imgURL }: { imgURL: ImgURL }) => {
  return (
    <div className="relative hidden sm:flex w-1/3 sm:w-1/2 h-[600px]">
      <MotionDiv
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{
          ease: "easeOut",
          duration: 1,
          delay: 0.5,
        }}
        style={{ position: "relative", width: "100%", height: "100%" }}
      >
        <Image
          src={imgURL}
          alt="Photo"
          fill={true}
          sizes="50vw"
          style={{ objectFit: "contain" }}
          priority={true}
        />
      </MotionDiv>
    </div>
  );
};

export default WebHeaderPhoto;
