import { IItem } from "@interfaces/webPage";
import HowWeWorkItem from "../HowWeWorkItem";
import Image from "next/image";
import AnimationWrapper from "@components/AnimationWrapper";
import UnderlinedTitle from "@components/UnderlinedTitle";

interface HowWeWorkProps {
  list: IItem[];
  header: string;
}

const HowWeWorkList = ({ list, header }: HowWeWorkProps) => {
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
    <div className="flex flex-wrap gap-6 mb-8 md:mb-14 lg:mb-20 relative">
      <AnimationWrapper
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{
          ease: "easeOut",
          duration: 1,
          delay: 0.5,
        }}
        classes="w-full sm:w-2/3 lg:w-[45%]"
      >
        <UnderlinedTitle text={header} />
        <div className=" flex justify-between relative lg:static">
          <div className="flex flex-col gap-6 ">
            {renderHowWeWorkItem(firstHalf)}
          </div>
        </div>
      </AnimationWrapper>

      <AnimationWrapper
        initial={{ x: 2000 }}
        animate={{ x: 0 }}
        transition={{
          ease: "easeOut",
          duration: 1,
          delay: 0.5,
        }}
        classes="md:w-[45%]"
      >
        <AnimationWrapper
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear",
          }}
          classes="flex items-center justify-center absolute z-20 lg:static w-2/3 sm:w-1/2 lg:w-full right-0 -top-1/3"
        >
          <Image
            src="/common/circle_right.svg"
            width={500}
            height={500}
            alt="circle"
          />
        </AnimationWrapper>
      </AnimationWrapper>

      <AnimationWrapper
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{
          ease: "easeOut",
          duration: 1,
          delay: 0.5,
        }}
        classes="md:w-[45%]"
      >
        <AnimationWrapper
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear",
          }}
          classes="flex items-center justify-center absolute w-2/3 sm:w-1/2 lg:w-full lg:static left-0 -bottom-0"
        >
          <Image
            src="/common/circle_left.svg"
            width={500}
            height={500}
            alt="circle"
          />
        </AnimationWrapper>
      </AnimationWrapper>

      <AnimationWrapper
        initial={{ x: 2000 }}
        animate={{ x: 0 }}
        transition={{
          ease: "easeOut",
          duration: 1,
          delay: 0.5,
        }}
        classes="w-full sm:w-2/3 lg:w-[45%] flex flex-col gap-6 items-end mt-12"
      >
        <div className=" flex relative lg:static ">
          <div className="flex flex-col gap-6 ">
            {renderHowWeWorkItem(secondHalf, beginWith)}
          </div>
        </div>
      </AnimationWrapper>
    </div>
  );
};

export default HowWeWorkList;
