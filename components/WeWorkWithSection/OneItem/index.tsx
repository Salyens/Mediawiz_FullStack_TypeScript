import styles from "./oneaditem.module.css";
import Image from "next/image";
import classNames from "classnames";
import { IItem } from "@interfaces/common";

interface Prop {
  data: IItem;
}

const OneItem = ({ data }: Prop) => {
  return (
    <div
      className={classNames(
        "h-96 lg:h-[500px] xl:h-[550px] 2xl:h-[650px] lg:w-[32%] w-full flex-grow",
        styles.bg
      )}
    >
      <Image
        src={data.imgURL}
        alt={data.title}
        fill
        sizes="70vh"
        className={classNames("rounded-2xl object-cover", styles.image)}
      />

      <p className={classNames("text-xl md:text-2xl", styles.title)}>
        {data.title}
      </p>
      <div className={classNames(styles.arrow_container)}>
        <Image
          src="/webAdPage/arrow.png"
          alt="arrow"
          width={48}
          height={48}
          className="object-contain"
        />
      </div>
      <p
        className={classNames(
          "text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold",
          styles.description
        )}
      >
        {data.description}
      </p>
    </div>
  );
};

export default OneItem;
