import WeWorkWithList from "./WeWorkWithList";
import { IItemList } from "@interfaces/common";
import DynamicBgEllipse from "@components/BgEllipse/DynamicBgEllipse";
import DynamicAnimationWrapper from "@components/AnimationWrapper/DynamicAnimationWrapper";
import DynamicUnderlinedTitle from "@components/UnderlinedTitle/DynamicUnderlinedTitle";

const WeWorkWith = ({ data }: { data: IItemList }) => {
  return (
    <DynamicAnimationWrapper
      initial={{ y: 600, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.7, delay: 0.5 }}
      classes="main_container p-3 sm:p-4 md:p-5 xl:p-6 relative mb-24"
    >
      {/* <DynamicBgEllipse
        variant={1}
        position="-right-1/3 -top-1/4"
        width={2500}
        height={2500}
        delay={2000}
      /> */}
      <DynamicUnderlinedTitle text={data.header} />
      <WeWorkWithList list={data.list} />
    </DynamicAnimationWrapper>
  );
};

export default WeWorkWith;
