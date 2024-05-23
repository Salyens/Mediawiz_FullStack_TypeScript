import Image from "next/image";
import styles from "./onequote.module.css";
import FindMoreLink from "@components/FindMoreLink";
import AnimationWrapper from "@components/AnimationWrapper";
import { ISmmQuoteItem } from "@interfaces/smmPage";
import { QuoteItem } from "@interfaces/mainPage";
import classNames from "classnames";
import BgEllipse from "@components/BgEllipse";

interface QuoteProps {
  item: ISmmQuoteItem | QuoteItem;
  index: number;
}

const OneQuote: React.FC<QuoteProps> = ({ item, index }) => {
  const isOdd = index % 2 !== 0;
  const withImg = "imgURL" in item;

  return (
    <div className={classNames("relative", withImg && " mt-36")}>
      {isOdd ? (
        <BgEllipse variant={2} position="md:-left-1/4 md:-top-1/3" width={1300} height={1300} />
      ) : (
        <BgEllipse variant={2} position="md:-right-1/4 md:-top-1/3" width={1300} height={1300} />
      )}

      <AnimationWrapper
        initial={{ x: isOdd ? -2000 : 2000 }}
        animate={{ x: 0 }}
        transition={{
          ease: "easeOut",
          duration: 1,
        }}
        classes="main_container relative p-3 sm:p-4 md:p-5 xl:p-6"
      >
        <div className="flex justify-center">
          <div
            className={classNames(
              "md:w-2/3 w-full h-auto  md:mt-0",
              styles.rectangle,
              isOdd ? "ml-auto" : "mr-auto",
              withImg && " mt-72"
            )}
          >
            <Image
              src="/mainPage/q.png"
              alt="inverted commas"
              width={400}
              height={350}
              sizes="25vw"
              className={`absolute md:-top-24 md:w-48 w-40 -top-20 lg:w-96 lg:-top-48 ${
                isOdd ? "md:-right-5 -right-6" : "md:-left-5 -left-6"
              }`}
            />

            <div className="xl:p-24 p-8">
              {"name" in item && (
                <h5 className="second_title text-2xl mb-3 pt-5">{item.name}</h5>
              )}
              <div className={styles.left_line}>
                <p className="second_desc text-lg md:text-lg 2xl:text-2xl">
                  {item.description}
                </p>
              </div>

              <FindMoreLink href={"href" in item ? item.href : undefined} />
            </div>
          </div>
          {"imgURL" in item && item.imgURL && (
            <div
              className={`absolute -top-32  w-full h-[420px] md:-top-28 
          md:w-1/3 md:h-[500px] xl:h-[600px] ${isOdd ? "left-0" : "right-0"}`}
            >
              <Image
                src={item.imgURL}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 70vw, (max-width: 1200px) 80vw, 65vw"
                className="object-contain z-10"
                priority
              />
            </div>
          )}
        </div>
      </AnimationWrapper>
    </div>
  );
};

export default OneQuote;
