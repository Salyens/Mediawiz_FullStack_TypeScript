"use client";

import styles from "./oneaditem.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import classNames from "classnames";
import { IItemAndImg } from "@interfaces/common";

interface OneAdItemProp {
  data: IItemAndImg;
}

const OneAdItem = ({ data }: OneAdItemProp) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000); 
    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleTouchStart = () => setIsHovered(true);
  const handleTouchEnd = () => setIsHovered(false);

  return (
    <div
      className={classNames(
        "h-96 lg:h-[500px] xl:h-[550px] 2xl:h-[650px] lg:w-[32%] w-full relative",
        styles.bg,
        isHovered && styles.hovered,
        isLoaded && styles.loaded 
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Image
        src={data.imgURL}
        alt="Item image"
        fill
        sizes="70vh"
        className={classNames("rounded-2xl object-cover", styles.image)}
      />
      <p
        className={classNames(
          "text-xl md:text-2xl",
          styles.title,
          isHovered ? styles.hidden : styles.visible
        )}
      >
        {data.title}
      </p>
      <div
        className={classNames(
          styles.arrow_container,
          isHovered ? styles.hidden : styles.visible
        )}
      >
        <Image
          src="/webAdPage/arrow.png"
          alt="arrow"
          width={48}
          height={48}
          className="object-contain"
        />
      </div>
      <p
        className={classNames(
          "text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold",
          styles.description,
          isHovered ? styles.visible : styles.hidden
        )}
      >
        {data.description}
      </p>
    </div>
  );
};

export default OneAdItem;
