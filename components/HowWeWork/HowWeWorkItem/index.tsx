
import { IItem } from "@interfaces/common";
import styles from "./howweworkitem.module.css";

interface HowWeWorkProps {
  data: IItem;
  index: number;
}

const HowWeWorkItem = ({ data, index }: HowWeWorkProps) => {
  return (
    <div className="flex items-center">
      <p className={`${styles.num} min-w-10 min-h-14 text-6xl mr-3`}>{index}</p>
      <div>
        <h3 className="second_title text-base sm:text:lg xl:text-2xl">
          {data.title}
        </h3>
        <p className="second_desc text-sm xl:text-2xl mt-2">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default HowWeWorkItem;
