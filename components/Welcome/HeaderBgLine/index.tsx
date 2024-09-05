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
          src={`/mainPage/header_line.svg?v=${new Date().getTime()}`}
          fill
          sizes="100vh"
          alt="Header line"
          className="absolute -z-10 top-1/2 -right-1/3 object-contain"
          priority
        />
      )}
    </>
  );
};

export default HeaderBgLine;
