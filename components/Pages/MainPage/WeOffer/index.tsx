import OneCard from "./OneCard";
import { WeOfferSection } from "@interfaces/mainPage";
import DynamicBgEllipse from "@components/BgEllipse/DynamicBgEllipse";
import DynamicAnimationWrapper from "@components/AnimationWrapper/DynamicAnimationWrapper";
import DynamicBGLines from "@components/BGLines/DinamicBGLines";
import DynamicUnderlinedTitle from "@components/UnderlinedTitle/DynamicUnderlinedTitle";

const WeOffer = ({ weOffer }: { weOffer: WeOfferSection }) => {
  const { text } = weOffer.title;
  const offersList = weOffer.offers.offersList;

  const renderOfferList = () => {
    return offersList.map((item, index) => (
      <div key={item.header + index} className="w-full lg:w-[calc(50%-0.5rem)]">
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
        <DynamicBGLines />
        <DynamicBgEllipse
          variant={1}
          position="-right-1/3 top-1/2"
          width={2000}
          height={2000}
        />
        <DynamicAnimationWrapper
          initial={{ y: 450, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1}}
        >
          <DynamicUnderlinedTitle text={text} />
          <div className="flex flex-wrap justify-between items-center gap-2">
            {renderOfferList()}
          </div>
        </DynamicAnimationWrapper>
      </div>
    </div>
  );
};

export default WeOffer;
