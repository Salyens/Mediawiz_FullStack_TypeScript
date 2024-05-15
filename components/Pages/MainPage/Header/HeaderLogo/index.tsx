"use client";

import { MotionDiv } from "@components/MotionDiv";
import { ImgURL } from "@interfaces";
import Image from "next/image";

const HeaderLogo = ({ imgURL }: { imgURL: ImgURL }) => {
  return (
    <MotionDiv
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{
        ease: "easeOut",
        duration: 1,
        delay: 0.5,
      }}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <Image
        src={imgURL}
        alt="logo"
        fill={true}
        sizes="50vw"
        style={{ objectFit: "contain" }}
        priority={true}
      />
    </MotionDiv>
  );
};

export default HeaderLogo;
