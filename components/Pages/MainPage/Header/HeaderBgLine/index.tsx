"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const HeaderBgLine = () => {
  const [showSvg, setShowSvg] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSvg(true);
    }, 2300);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showSvg && (
        <Image
          src={`/mainPage/Group.svg?v=${new Date().getTime()}`}
          fill
          style={{ objectFit: "contain" }}
          alt="Header line"
          className="absolute -z-10 top-1/2 -right-1/3"
          priority
        />
      )}
    </>
  );
};

export default HeaderBgLine;
