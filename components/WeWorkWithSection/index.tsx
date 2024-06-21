import { IItemList } from "@interfaces/common";
import DynamicAnimationWrapper from "@components/AnimationWrapper/DynamicAnimationWrapper";
import DynamicUnderlinedTitle from "@components/UnderlinedTitle/DynamicUnderlinedTitle";
import dynamic from "next/dynamic";

const DynamicItemList = dynamic(() => import("./AdItemList"), { ssr: false });

interface WeWorkWithSectionProp {
  data: IItemList;
}

const WeWorkWithSection: React.FC<WeWorkWithSectionProp> = ({ data }) => {
  return (
    <DynamicAnimationWrapper
      initial={{ y: 600, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.7, delay: 0.7 }}
      classes="main_container p-3 sm:p-4 md:p-5 xl:p-6"
    >
      <DynamicUnderlinedTitle text={data.header} />
      <DynamicItemList list={data.list} />
    </DynamicAnimationWrapper>
  );
};

export default WeWorkWithSection;
