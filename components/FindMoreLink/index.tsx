"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import classNames from "classnames";
import styles from "./findmore.module.css";

interface FindMoreLinkProp {
  href: string;
}

const FindMoreLink = ({ href }: FindMoreLinkProp) => {
  const t = useTranslations("MainPage");

  const displayEl = () => {
    return (
      <div className={classNames(styles.link_container)}>
        <span className={classNames("text-2xl 2xl:text-3xl", styles.text)}>
          {t("findMore")}
        </span>
        <div className={classNames("w-12 h-9", styles.link)}></div>
      </div>
    );
  };

  return (
    <>
      {href && (
        <Link href={href} className={`flex ml-auto pt-5 text-3xl mt-2 lg:mt-8`}>
          {displayEl()}
        </Link>
      )}
    </>
  );
};

export default FindMoreLink;
