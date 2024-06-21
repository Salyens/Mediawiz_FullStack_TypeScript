"use client";

import { useTranslations } from "next-intl";
import { Link } from "@navigation";
import classNames from "classnames";
import styles from "./findmore.module.css";

interface FindMoreLinkProp {
  href: string | undefined;
}

const FindMoreLink: React.FC<FindMoreLinkProp> = ({ href }) => {
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
        <Link prefetch={true} href={href} className={`flex text-3xl mt-2`}>
          {displayEl()}
        </Link>
      )}
    </>
  );
};

export default FindMoreLink;
