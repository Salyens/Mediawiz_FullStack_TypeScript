"use client";

import { IAdvantageItem } from "@interfaces/webPage";
import styles from "./oneaditem.module.css";
import Image from "next/image";
import { useState } from "react";
import classNames from "classnames";

interface OneAdItemProp {
  data: IAdvantageItem;
}

const OneAdItem = ({ data }: OneAdItemProp) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleTouchStart = () => setIsHovered(true);
  const handleTouchEnd = () => setIsHovered(false);

  return (
    <div
      className={classNames(
        "h-96 lg:h-[500px] xl:h-[550px] 2xl:h-[650px] lg:w-[32%] w-full",
        styles.bg,
        isHovered && styles.hovered
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
        style={{ objectFit: "cover" }}
        className={`rounded-2xl ${styles.image}`}
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
          style={{ objectFit: "contain" }}
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
