"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const BgEllipse = () => {
  const [showImg, setShowImg] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
        setShowImg(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showImg && (
        <Image
          src="/ellipses/ellipse-1.svg"
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

export default BgEllipse;
