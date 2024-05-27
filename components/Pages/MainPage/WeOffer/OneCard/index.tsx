import styles from "./onecard.module.css";
import { OffersList } from "@interfaces/mainPage";
import Link from "next/link";
import classNames from "classnames";

const OneCard = ({ header, description, href }: OffersList) => {
  return (
    <Link
      href={href}
      className={classNames(
        "p-8 sm:p-8 md:p-12 lg:p-14 xl:p-18 h-72 sm:h-96",
        styles.wrapper
      )}
    >
      <div className="flex_column w-full ">
        <h4
          className={`${styles.card_header} xl:text-4xl lg:text-3xl md:text-4xl sm:text-4xl text-2xl mb-4`}
        >
          {header}
        </h4>
        <p
          className={`${styles.card_description} xl:text-2xl lg:text-lg md:text-2xl sm:text-2xl text-lg`}
        >
          {description}
        </p>
      </div>
      <div
        className={classNames(
          "flex_center ml-auto h-20 w-20 sm:h-32 sm:w-32",
          styles.circle_wrapper
        )}
      >
        <div className={classNames("w-12 h-9", styles.arrow)}></div>
      </div>
    </Link>
  );
};

export default OneCard;
