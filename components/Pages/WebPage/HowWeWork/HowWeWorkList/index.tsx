import { IItem } from "@interfaces/webPage";
import HowWeWorkItem from "../HowWeWorkItem";
import Image from "next/image";

const HowWeWorkList = ({ list }: { list: IItem[] }) => {
  const middleIndex = Math.ceil(list.length / 2);
  const firstHalf = list.slice(0, middleIndex);
  const secondHalf = list.slice(middleIndex);
  const beginWith = firstHalf.length;

  const renderHowWeWorkItem = (
    items: IItem[],
    beginWith?: number | undefined
  ) => {
    return items.map((item, index) => {
      if (beginWith) beginWith++;
      return (
        <HowWeWorkItem
          key={item.description + index}
          data={item}
          index={beginWith ? beginWith : index + 1}
        />
      );
    });
  };

  return (
    <div className="flex flex-wrap gap-6">
      <div className=" flex justify-between relative md:static ">
        <div className="w-full sm:w-2/3 md:w-[45%] flex flex-col gap-6">
          {renderHowWeWorkItem(firstHalf)}
        </div>

        <div className="w-[45%] h-[500px] flex items-center justify-center absolute md:static right-0 ">
          <Image
            src="/webPage/circle_right.png"
            width={500}
            height={500}
            alt="circle"
          />
        </div>
      </div>
      <div className=" flex justify-between mt-20">
        <div className="w-[45%] h-[500px] flex items-center justify-center ">
          <Image
            src="/webPage/circle_left.png"
            width={500}
            height={500}
            alt="circle"
          />
        </div>
        <div className="w-[45%] flex flex-col gap-6">
          {renderHowWeWorkItem(secondHalf, beginWith)}
        </div>
      </div>
    </div>
  );
};

export default HowWeWorkList;
