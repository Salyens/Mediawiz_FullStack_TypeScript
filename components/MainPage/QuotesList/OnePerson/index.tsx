"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./oneperson.module.css";
import Link from "next/link";
import { useInView } from "framer-motion";
import { MotionDiv } from "@components/MotionDiv";

interface QuoteProps {
  name: string;
  imgURL?: string;
  description: string;
  index: number;
}

const OnePerson: React.FC<QuoteProps> = ({
  name,
  imgURL,
  description,
  index,
}) => {
  const isOdd = index / 2 !== 0;
  const [isAnimate, setIsAnimate] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) setIsAnimate(true);
  }, [isInView]);

  return (
    <div className="relative min-h-80 overflow-x-hidden">
      <span className="absolute sm:top-1/2" ref={ref}></span>
      {isAnimate && (
        <MotionDiv
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{
            ease: "easeOut",
            duration: 1.5,
            delay: 0.5
          }}
        >
          <div className="main_container mb-10 md:mb-36 mt-28 relative p-6">
            <div className="flex justify-center">
              <div
                className={`${
                  styles.rectangle
                }  md:w-2/3 w-11/12 h-auto mt-72 md:mt-0  ${
                  isOdd ? "ml-auto" : "mr-auto"
                }`}
              >
                <Image
                  src="/mainPage/q.png"
                  alt="inverted commas"
                  width={400}
                  height={350}
                  className={`absolute md:-top-24 md:w-48 w-40 -top-20 lg:w-96 lg:-top-48 ${
                    isOdd ? "md:-right-5 -right-6" : " md:-left-5 -left-6 "
                  }`}
                />

                <div className="xl:p-24 p-8 ">
                  <h5 className={`${styles.name} text-2xl mb-3 pt-5`}>
                    {name}
                  </h5>
                  <div className={styles.left_line}>
                    <p
                      className={`${styles.desc} text-lg md:text-lg 2xl:text-2xl`}
                    >
                      {description}
                    </p>
                  </div>

                  <Link
                    className={`flex ml-auto relative z-30 text-3xl mt-2 lg:mt-8 -left-2`}
                    href="#"
                  >
                    <span className={`text-2xl 2xl:text-3xl ${styles.link}`}>
                      Узнать больше
                    </span>
                    <Image
                      className="pl-3"
                      src="/arrow.png"
                      alt="arrow"
                      width={49}
                      height={39}
                      style={{ objectFit: "contain" }}
                    />
                  </Link>
                </div>
              </div>

              <div
                className={`absolute -top-28 z-20 w-full h-[420px] md:-top-28 
          md:w-1/3 md:h-[500px] xl:h-[600px] ${isOdd ? "left-0" : "right-0"}`}
              >
                {imgURL && (
                  <Image
                    src={imgURL}
                    alt={name}
                    fill={true}
                    sizes="(max-width: 768px) 70vw, (max-width: 1200px) 80vw, 65vw"
                    style={{ objectFit: "contain" }}
                  />
                )}
              </div>
            </div>
          </div>
        </MotionDiv>
      )}
    </div>
  );
};

export default OnePerson;
