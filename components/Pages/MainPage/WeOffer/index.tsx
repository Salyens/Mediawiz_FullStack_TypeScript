import { WeOfferSection } from "@interfaces/mainPage";
import { MotionDiv } from "@components/MotionDiv";
import WeOfferCards from "./WeOfferCards";
import UnderlinedTitle from "@components/UnderlinedTitle";
import DynamicBgEllipse from "@components/BgEllipse/DynamicBgEllipse";
import DynamicBGLines from "@components/BGLines/DinamicBGLines";

const WeOffer = ({
  weOffer,
}: {
  weOffer: WeOfferSection;
}) => {
  const { text } = weOffer.title;
  const offersList = weOffer.offers.offersList;

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
        <MotionDiv
          initial={{ paddingTop: 300, opacity: 0 }}
          transition={{
            ease: "easeOut",
            duration: 1,
            delay: 0.2,
          }}
          whileInView={{ paddingTop: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <UnderlinedTitle text={text} />
          <div className="flex flex-wrap justify-between items-center gap-2">
            <WeOfferCards offersList={offersList} />
          </div>
        </MotionDiv>
      </div>
    </div>
  );
};

export default WeOffer;
