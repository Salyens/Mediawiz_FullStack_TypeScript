import { IItem } from "@interfaces/common";
import styles from "./howweworkitem.module.css";
import classNames from "classnames";
import { roboto } from "@app/[locale]/layout";

interface HowWeWorkProps {
  data: IItem;
  index: number;
}

const HowWeWorkItem = ({ data, index }: HowWeWorkProps) => {
  return (
    <div className="flex items-center">
      <p className={classNames("min-w-10 min-h-14 text-6xl mr-3", styles.num)}>
        {index}
      </p>
      <div>
        <h3 className="second_title text-base sm:text:lg xl:text-2xl">
          {data.title}
        </h3>
        <p
          className={classNames(
            "second_desc text-sm xl:text-2xl mt-2",
            roboto.className
          )}
        >
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default HowWeWorkItem;
