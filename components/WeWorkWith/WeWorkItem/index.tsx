import styles from "./weworkitem.module.css";
import { useTranslations } from "next-intl";
import FindMoreLink from "@components/FindMoreLink";
import { IItem } from "@interfaces/common";

const WeWorkItem = ({ data }: { data: IItem }) => {
  const t = useTranslations("MainPage");
  return (
    <div
      className={`${styles.rectangle} w-full md:w-[45%] flex-grow lg:w-[30%] h-64 xl:h-96 flex flex-col justify-between m-2 lg:m-3`}
    >
      <h3 className={`${styles.title} text-base sm:text-lg xl:text-2xl p-3 mt-4 mb-2`}>
        {data.title}
      </h3>
      <p className={`${styles.desc} text-sm xl:text-2xl mt-2 xl:mt-5`}>
        {data.description}
      </p>

      <div className="mt-auto mb-4">
        <FindMoreLink />
      </div>
    </div>
  );
};

export default WeWorkItem;
