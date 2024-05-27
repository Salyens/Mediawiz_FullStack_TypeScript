"use client";

import Link from "next/link";
import styles from "./requestandsocila.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import MainModal from "@components/modals/MainModal";
import AnimationWrapper from "@components/AnimationWrapper";
import { useAppContext } from "@context";
import { useEffect, useRef } from "react";
import { socialLinks } from "@constants";
import classNames from "classnames";

const RequestAndSocial = () => {
  const t = useTranslations("MainForm");
  const s = useTranslations("MainPage");
  const { scrollToRef } = useAppContext();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollToRef) {
      scrollToRef.current = sectionRef.current;
    }
  }, [scrollToRef]);

  const renderSocialLinks = () => {
    return socialLinks.map((item) => (
      <Link
        className="w-20 h-20 lg:w-28 lg:h-28 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40 relative"
        href={item.href}
        key={item.name + item.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={`/social_icons/${item.name}.png`}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 10vw, (max-width: 1200px) 20vw, 15vw"
          className="object-contain"
        />
      </Link>
    ));
  };

  return (
    <div ref={sectionRef} className={styles.bg}>
      <div className="flex items-center justify-between flex-col lg:flex-row main_container p-3 sm:p-4 md:p-5 xl:p-6 pt-12 pb-12 lg:pt-16 lg:pb-16 xl:pt-24 xl:pb-24">
        <AnimationWrapper
          initial={{ x: -2000 }}
          animate={{ x: 0 }}
          transition={{
            ease: "easeOut",
            duration: 1,
            delay: 0.5,
          }}
          classes={classNames(
            "flex flex-col xl:text-3xl 2xl:text-4xl md:text:xl lg:text-2xl text-lg gap-3 w-full lg:w-1/2 sm:items-center lg:items-start leading-snug",
            styles.description
          )}
        >
          <p className="sm:min text-center lg:text-left">
            {t("description-1")}
          </p>
          <p className="sm:min text-center lg:text-left">
            {t("description-2")}
          </p>
          <Link className="flex w-fit m-auto lg:m-0" href="tel:+79033750261">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <Image
                src="/common/phone.png"
                width={50}
                height={50}
                alt="phone"
              />
              <span className="text-lg md:text-2xl mt-4 mb-4 font-normal">
                8-903-375-02-61
              </span>
            </div>
          </Link>
          <p className="text-center lg:text-left">{t("request")}</p>
          <div className="flex justify-center lg:justify-start">
            <MainModal />
          </div>
        </AnimationWrapper>

        <AnimationWrapper
          initial={{ x: 2000 }}
          animate={{ x: 0 }}
          transition={{
            ease: "easeOut",
            duration: 1,
            delay: 0.5,
          }}
          classes="mb-auto mt-6 lg:mt-0"
        >
          <p className="font-bold xl:text-3xl 2xl:text-4xl lg:text-2xl md:text-xl text-lg mb-4 md:mb-0 text-center">
            {s("weInSocial")}
          </p>
          <div className="flex justify-center items-center">
            {renderSocialLinks()}
          </div>
        </AnimationWrapper>
      </div>
    </div>
  );
};

export default RequestAndSocial;
