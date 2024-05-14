import Image from "next/image";
import Link from "next/link";
import styles from "./findmore.module.css";
import { useTranslations } from "next-intl";

const FindMoreLink = () => {
  const t = useTranslations("MainPage");
  return (
    <Link
      className={`flex ml-auto text-3xl mt-2 lg:mt-8`}
      href="#"
    >
      <span className={`text-2xl 2xl:text-3xl ${styles.link}`}>
        {t("findMore")}
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
  );
};

export default FindMoreLink;
