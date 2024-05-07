"use client";
import React, { useEffect, useState } from "react";
import OneCard from "./OneCard";
import { useInView } from "react-intersection-observer";
import { MotionDiv } from "@components/MotionDiv";
import styles from "./weoffer.module.css";
import UnderlinedTitle from "./UnderlinedTitle";
import Image from "next/image";
import { WeOfferSection } from "@interfaces";


const WeOffer = ({ weOffer }: { weOffer: WeOfferSection }) => {
  const { text } = weOffer.title;
  const { ref, inView } = useInView();
  const offersList = weOffer.offers.offersList;

  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    if (inView) setIsAnimate(true);
  }, [inView]);

  const renderOfferList = () => {
    return offersList.map((item, index) => (
      <div
        key={item.header + index}
        className={`w-full lg:w-[calc(50%-0.5rem)]`}
      >
        <OneCard header={item.header} description={item.description} href={item.href} />
      </div>
    ));
  };

  return (
    <div className="relative">
      <div className="main_container pl-2 pr-2 lg:pl-6 lg:pr-6" ref={ref}>
        <MotionDiv
          initial={{ y: 0 }}
          animate={{ y: 400 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={styles.header}
        >
          <Image
            fill={true}
            sizes="100vw"
            style={{ objectFit: "cover" }}
            src="/lines-2.png"
            alt="bg"
          />
        </MotionDiv>

        {isAnimate && (
          <div>
            <MotionDiv
              initial={{ y: 600 }}
              animate={{ y: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <UnderlinedTitle text={text} />

              <div className="flex flex-wrap justify-between items-center gap-2">
                {renderOfferList()}
              </div>
            </MotionDiv>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeOffer;
