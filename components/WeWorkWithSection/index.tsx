import UnderlinedTitle from "@components/UnderlinedTitle";
import AnimationWrapper from "@components/AnimationWrapper";
import { IItemList } from "@interfaces/common";
import ItemList from "./AdItemList";

interface WeWorkWithSectionProp {
  data: IItemList;
}

const WeWorkWithSection = ({ data }: WeWorkWithSectionProp) => {
  return (
    <AnimationWrapper
      initial={{ y: 600, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.7, delay: 0.7 }}
      classes="main_container p-3 sm:p-4 md:p-5 xl:p-6"
    >
      <UnderlinedTitle text={data.header} />
      <ItemList list={data.list} />
    </AnimationWrapper>
  );
};

export default WeWorkWithSection;
