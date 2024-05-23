"use client";

import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";

interface BgEllipseProps {
  variant: 1 | 2;
  position: string;
  width: number;
  height: number;
}

const BgEllipse = ({ variant, position, width, height }: BgEllipseProps) => {
  const [showImg, setShowImg] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImg(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showImg && (
        <Image
          src={`/ellipses/ellipse-${variant}.svg`}
          width={width}
          height={height}
          alt="Header line"
          className={classNames(
            "absolute -z-10 object-cover transition-opacity duration-1000 ease-in-out opacity-0",
            showImg && "opacity-100",
            position
          )}
          priority
        />
      )}
    </>
  );
};

export default BgEllipse;
