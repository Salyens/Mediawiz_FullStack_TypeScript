import styles from "./oneaditem.module.css";
import Image from "next/image";
import classNames from "classnames";
import { IItem } from "@interfaces/common";
import DynamicBlurImg from "@components/BlurImg/DynamicBlurImg";

interface OneAdItemProp {
  data: IItem;
}

const OneItem = ({ data }: OneAdItemProp) => {
  return (
    <div
      className={classNames(
        "h-96 lg:h-[500px] xl:h-[550px] 2xl:h-[650px] lg:w-[32%] w-full flex-grow",
        styles.bg
      )}
    >
      <DynamicBlurImg
        imgURL={data.imgURL}
        name={data.title}
        classes={classNames("rounded-2xl object-cover", styles.image)}
        sizes="70vh"
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
