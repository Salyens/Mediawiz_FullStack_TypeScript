import styles from "./weworkitem.module.css";
import { useTranslations } from "next-intl";
import FindMoreLink from "@components/FindMoreLink";
import { IItem } from "@interfaces/common";
import classNames from "classnames";

const WeWorkItem = ({ data }: { data: IItem }) => {
  const t = useTranslations("MainPage");
  return (
    <div
      className={classNames(
        "w-full md:w-[45%] flex-grow lg:w-[30%] h-64 xl:h-96 flex flex-col justify-between m-2 lg:m-3",
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
        className={classNames("text-sm xl:text-2xl mt-2 xl:mt-5", styles.desc)}
      >
        {data.description}
      </p>

      <div className="mt-auto mb-4">
        <FindMoreLink />
      </div>
    </div>
  );
};

export default WeWorkItem;
