import UnderlinedTitle from "@components/UnderlinedTitle";
import AdvantagesList from "./AdvantagesList";
import BGLines from "@components/BGLines";
import AnimationWrapper from "@components/AnimationWrapper";
import { IItemAndImgList } from "@interfaces/common";

interface AdvantagesProps {
  advantages: IItemAndImgList;
}

const Advantages: React.FC<AdvantagesProps> = ({ advantages }) => {
  return (
    <div className="bg_item_right">
      <BGLines />
      <div className="main_container p-3 sm:p-4 md:p-5 xl:p-6 relative min-h-96">
        <AnimationWrapper
          initial={{ y: 600 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
        >
          <UnderlinedTitle text={advantages.header} />
          <AdvantagesList list={advantages.list} />
        </AnimationWrapper>
      </div>
    </div>
  );
};

export default Advantages;
