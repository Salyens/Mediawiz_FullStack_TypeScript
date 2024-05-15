import UnderlinedTitle from "@components/Pages/MainPage/WeOffer/UnderlinedTitle";
import { IAdvantages } from "@interfaces/webPage";
import AdvantagesList from "./AdvantagesList";
import BGLines from "@components/BGLines";
import AnimationWrapper from "@components/AnimationWrapper";

interface AdvantagesProps {
  advantages: IAdvantages;
}

const Advantages: React.FC<AdvantagesProps> = ({ advantages }) => {
  return (
    <>
      <BGLines />
      <div className="main_container p-6 relative min-h-96">
        <AnimationWrapper
          initial={{ y: 600 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
        >
          <UnderlinedTitle text={advantages.header} />
          <AdvantagesList list={advantages.list} />
        </AnimationWrapper>
      </div>
    </>
  );
};

export default Advantages;
