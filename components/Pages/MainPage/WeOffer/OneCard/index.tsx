import Image from "next/image";
import styles from "./onecard.module.css";
import { OffersList } from "@interfaces";
import Link from "next/link";

const OneCard = ({ header, description, href }: OffersList) => {
  return (
    <Link
      href={href}
      className={`${styles.wrapper} p-8 sm:p-8 md:p-12 lg:p-14 xl:p-18 h-72 sm:h-96`}
    >
      <div className="flex_column w-full ">
        <h4
          className={`${styles.card_header} xl:text-4xl lg:text-3xl md:text-4xl sm:text-4xl text-2xl`}
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
        className={`${styles.circle_wrapper}  flex_center ml-auto h-20 w-20 sm:h-32 sm:w-32`}
      >
        <Image
          priority={false}
          width={49}
          height={39}
          src="/arrow.png"
          alt="arrow"
        />
      </div>
    </Link>
  );
};

export default OneCard;
