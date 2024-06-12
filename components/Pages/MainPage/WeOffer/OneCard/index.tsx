import styles from "./onecard.module.css";
import { OffersList } from "@interfaces/mainPage";
import { Link } from "@navigation";
import classNames from "classnames";
import { roboto } from "@app/[locale]/layout";

const OneCard = ({ header, description, href }: OffersList) => {
  return (
    <Link
      href={href}
      prefetch={true}
      className={classNames(
        "p-8 sm:p-8 md:p-12 lg:p-14 xl:p-18 h-72 sm:h-96",
        styles.wrapper
      )}
    >
      <div className="flex_column w-full ">
        <h4
          className={classNames(
            "xl:text-4xl lg:text-2xl md:text-4xl sm:text-4xl text-2xl mb-4",
            styles.card_header
          )}
        >
          {header}
        </h4>
        <p
          className={classNames(
            "xl:text-2xl lg:text-lg md:text-2xl sm:text-2xl text-lg",
            styles.card_description,
            roboto.className
          )}
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
