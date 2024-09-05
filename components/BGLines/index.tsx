"use client"

import { MotionDiv } from "@components/MotionDiv";
import Image from "next/image";
import { useEffect, useState } from "react";

const BGLines = () => {
  const [showImg, setShowImg] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImg(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showImg && (
        <MotionDiv
          initial={{ y: 0 }}
          animate={{ y: 750 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute -z-20 w-full left-0 min-h-[1000px]"
        >
          <Image
            fill
            sizes="200vw"
            className="object-cover"
            src="/common/bg_line.svg"
            alt="bg"
            priority
          />
        </MotionDiv>
      )}
    </>
  );
};

export default BGLines;
