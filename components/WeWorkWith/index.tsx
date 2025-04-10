import WeWorkWithList from "./WeWorkWithList";
import { IItemList } from "@interfaces/common";
import DynamicBgEllipse from "@components/BgEllipse/DynamicBgEllipse";
import UnderlinedTitle from "@components/UnderlinedTitle";
import AnimationWrapper from "@components/AnimationWrapper";

const WeWorkWith = ({ data }: { data: IItemList }) => {
  return (
    <AnimationWrapper
      initial={{ y: 600, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      classes="main_container p-3 sm:p-4 md:p-5 xl:p-6 relative mb-24"
    >
      <DynamicBgEllipse
        variant={1}
        position="-right-1/3 -top-1/4"
        width={2500}
        height={2500}
      />
      <UnderlinedTitle text={data.header} />
      <WeWorkWithList list={data.list} />
    </AnimationWrapper>
  );
};

export default WeWorkWith;
