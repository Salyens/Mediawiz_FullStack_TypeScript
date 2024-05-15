import OneCard from "./OneCard";
import Image from "next/image";
import { WeOfferSection } from "@interfaces";
import BGLines from "@components/BGLines";
import AnimationWrapper from "@components/AnimationWrapper";
import UnderlinedTitle from "./UnderlinedTitle";

const WeOffer = ({ weOffer }: { weOffer: WeOfferSection }) => {
  const { text } = weOffer.title;
  const offersList = weOffer.offers.offersList;

  const renderOfferList = () => {
    return offersList.map((item, index) => (
      <div
        key={item.header + index}
        className={`w-full lg:w-[calc(50%-0.5rem)]`}
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
    <div className="relative">
      <Image
        src="/mainPage/ellipse-4.svg"
        width={1200}
        height={1200}
        alt="ellipse-left"
        className="absolute -z-10 blur-3xl top-1/3 -left-1/4"
        style={{ top: "30%", left: "-10%" }}
      />

      <div className="main_container min-h-screen pl-2 pr-2 lg:pl-6 lg:pr-6">
        <BGLines />

        <AnimationWrapper
          initial={{ y: 600 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
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
