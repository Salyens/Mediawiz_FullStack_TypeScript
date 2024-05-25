import OneCard from "./OneCard";
import { WeOfferSection } from "@interfaces/mainPage";
import BGLines from "@components/BGLines";
import AnimationWrapper from "@components/AnimationWrapper";
import UnderlinedTitle from "@components/UnderlinedTitle";
import BgEllipse from "@components/BgEllipse";

const WeOffer = ({ weOffer }: { weOffer: WeOfferSection }) => {
  const { text } = weOffer.title;
  const offersList = weOffer.offers.offersList;

  const renderOfferList = () => {
    return offersList.map((item, index) => (
      <div
        key={item.header + index}
        className={`w-full lg:w-[calc(50%-0.5rem)] `}
      >
        <OneCard
          header={item.header}
          description={item.description}
          href={item.href}
        />
      </div>
    ));
  };

  return (
    <div className="relative mt-6">
      <div className="main_container min-h-screen pl-2 pr-2 lg:pl-6 lg:pr-6 ">
        <BGLines />
        <BgEllipse variant={1} position="-right-1/3 top-1/2" width={2000} height={2000} delay={2500} />
        <AnimationWrapper
          initial={{ y: 450 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
        >
          <UnderlinedTitle text={text} />
          <div className="flex flex-wrap justify-between items-center gap-2">
            {renderOfferList()}
          </div>
        </AnimationWrapper>
      </div>
    </div>
  );
};

export default WeOffer;
