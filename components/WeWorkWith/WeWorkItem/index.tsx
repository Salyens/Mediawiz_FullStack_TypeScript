import styles from "./weworkitem.module.css";
import { IItem } from "@interfaces/common";
import classNames from "classnames";
import { roboto } from "@app/[locale]/layout";

const WeWorkItem = ({ data }: { data: IItem }) => {
  return (
    <div
      className={classNames(
        "w-full sm:w-[45%] flex-grow lg:w-[30%] h-64 sm:h-72 lg:h-80 xl:h-96 flex flex-col lg:m-3 p-5 lg:p-5 xl:p-8",
        styles.rectangle
      )}
    >
      <h3
        className={classNames(
          "text-base sm:text-lg xl:text-2xl p-3 mt-4 mb-2",
          styles.title
        )}
      >
        {data.title}
      </h3>
      <p
        className={classNames(
          "text-base md:text-lg xl:text-xl mt-2 xl:mt-5",
          styles.desc,
          roboto.className
        )}
      >
        {data.description}
      </p>
    </div>
  );
};

export default WeWorkItem;
