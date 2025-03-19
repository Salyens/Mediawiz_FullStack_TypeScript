import Image from "next/image";
import styles from "./onequote.module.css";
import { ISmmQuoteItem } from "@interfaces/smmPage";
import { QuoteItem } from "@interfaces/mainPage";
import classNames from "classnames";
import { roboto } from "@app/[locale]/layout";
import DynamicBgEllipse from "@components/BgEllipse/DynamicBgEllipse";
import FindMoreLink from "@components/FindMoreLink";
import { MotionDiv } from "@components/MotionDiv";

interface QuoteProps {
  item: ISmmQuoteItem | QuoteItem;
  index: number;
}

const OneQuote: React.FC<QuoteProps> = ({
  item,
  index,
}) => {
  const isOdd = index % 2 !== 0;
  const withImg = "imgURL" in item;

  return (
    <div
      className={classNames(
        "relative",
        withImg && " mt-36"
      )}
    >
      {isOdd ? (
        <DynamicBgEllipse
          variant={2}
          position="md:-left-1/4 md:-top-1/3"
          width={1300}
          height={1300}
        />
      ) : (
        <DynamicBgEllipse
          variant={2}
          position="md:-right-1/4 md:-top-1/3"
          width={1300}
          height={1300}
        />
      )}

      <MotionDiv
        initial={isOdd ? { x: -300 } : { x: 300 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeOut",
          duration: 0.6,
        }}
        className="main_container relative"
      >
        <div className="flex justify-center p-3 sm:p-4 md:p-5 xl:p-6">
          <div
            className={classNames(
              "md:w-2/3 w-full h-auto md:mt-0",
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
                isOdd
                  ? "md:-right-5 -right-6"
                  : "md:-left-5 -left-6"
              }`}
            />

            <div className="xl:p-24 p-8">
              {"name" in item && (
                <h5 className="second_title text-2xl mb-3 pt-5">
                  {item.name}
                </h5>
              )}
              <div className={styles.left_line}>
                <p
                  className={classNames(
                    "second_desc text-lg md:text-lg 2xl:text-2xl",
                    roboto.className
                  )}
                >
                  {item.description}
                </p>
              </div>

              <div className="flex justify-end  pt-5 mt-2 lg:mt-8 ">
                {"href" in item && item.href !== "/*" && (
                  <div className="flex md:mt-4 xl:mt-6 2xl:mt-7 pb-4">
                    <FindMoreLink href={item.href} />
                  </div>
                )}
              </div>
            </div>
          </div>
          {"imgURL" in item && item.imgURL && (
            <div
              className={classNames(
                "absolute -top-32  w-full h-[420px] md:-top-28 md:w-1/3 md:h-[500px] xl:h-[600px]",
                isOdd ? "left-0" : "right-0"
              )}
            >
              <Image
                src={item.imgURL}
                alt={item.name}
                fill
                sizes="100vw"
                className="object-contain select-none pointer-events-none touch-none"
              />
            </div>
          )}
        </div>
      </MotionDiv>
    </div>
  );
};

export default OneQuote;
