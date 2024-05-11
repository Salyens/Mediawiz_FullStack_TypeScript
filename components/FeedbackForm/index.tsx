"use client";

import Link from "next/link";
import styles from "./feedbackform.module.css";
import Image from "next/image";
import CustomForm from "./CustomForm";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { MotionDiv } from "@components/MotionDiv";
import { useTranslations } from "next-intl";

const FeedbackForm = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const t = useTranslations("MainForm");

  useEffect(() => {
    if (isInView) setIsAnimate(true);
  }, [isInView]);

  return (
    <div className={styles.form_wrapper}>
      <div className="main_container p-6 items-center pt-24 pb-24">
        <div
          ref={ref}
          className="flex items-center justify-between flex-col lg:flex-row m-auto"
        >
          {isAnimate && (
            <>
              <MotionDiv
                initial={{ x: -2000 }}
                animate={{ x: 0 }}
                transition={{
                  ease: "easeOut",
                  duration: 1,
                  delay: 0.5,
                }}
                className={`flex flex-col xl:text-2xl 2xl:text-4xl md:text:xl text-lg gap-3 w-full lg:w-2/5 xl:w-2/5 sm:items-center lg:items-start ${styles.description}`}
              >
                <p>{t("description")}</p>
                <Link href="tel:+79033750261">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/phone.png"
                      width={50}
                      height={50}
                      alt="phone"
                    />
                    <span>8-903-375-02-61</span>
                  </div>
                </Link>
                <p>{t("request")}</p>
              </MotionDiv>
              <MotionDiv
                initial={{ x: 2000 }}
                animate={{ x: 0 }}
                transition={{
                  ease: "easeOut",
                  duration: 1,
                  delay: 0.5,
                }}
                className="w-full md:w-2/3 lg:w-1/2 xl:w-2/5 mt-24 lg:mt-0"
              >
                <CustomForm />
              </MotionDiv>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
