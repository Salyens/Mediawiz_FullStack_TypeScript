import { IItemAndImgList } from "@interfaces/common";
import DynamicAnimationWrapper from "@components/AnimationWrapper/DynamicAnimationWrapper";
import DynamicUnderlinedTitle from "@components/UnderlinedTitle/DynamicUnderlinedTitle";
import DynamicBGLines from "@components/BGLines/DinamicBGLines";
import AdvantagesList from "./AdvantagesList";

interface AdvantagesProps {
  advantages: IItemAndImgList;
}

const Advantages: React.FC<AdvantagesProps> = ({ advantages }) => {
  return (
    <>
      <DynamicBGLines />
      <div className="main_container p-3 sm:p-4 md:p-5 xl:p-6 relative min-h-96">
        <DynamicAnimationWrapper
          initial={{ y: 500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <DynamicUnderlinedTitle text={advantages.header} />
          <AdvantagesList list={advantages.list} />
        </DynamicAnimationWrapper>
      </div>
    </>
  );
};

export default Advantages;
