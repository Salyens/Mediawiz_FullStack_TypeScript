import Image from "next/image";
import styles from "./oneperson.module.css";
import FindMoreLink from "@components/FindMoreLink";
import AnimationWrapper from "@components/AnimationWrapper";

interface QuoteProps {
  name: string;
  imgURL?: string;
  description: string;
  index: number;
}

const OnePerson: React.FC<QuoteProps> = ({
  name,
  imgURL,
  description,
  index,
}) => {
  const isOdd = index / 2 !== 0;

  return (
    <div className="relative min-h-80">
      <Image
        src="/mainPage/ellipse-4.svg"
        width={1000}
        height={1000}
        alt="ellipse-left"
        className={`absolute -z-10 blur-3xl ${
          isOdd ? "left-0 top-0" : "right-0 top-0"
        }`}
      />
      <span className="absolute sm:top-1/2"></span>

      <AnimationWrapper
        initial={{ x: isOdd ? -2000 : 2000 }}
        animate={{ x: 0 }}
        transition={{
          ease: "easeOut",
          duration: 1,
          delay: 0.5,
        }}
        classes="main_container mb-10 md:mb-36 mt-36 relative p-6"
      >
        <div className="flex justify-center">
          <div
            className={`${
              styles.rectangle
            }  md:w-2/3 w-11/12 h-auto mt-72 md:mt-0  ${
              isOdd ? "ml-auto" : "mr-auto"
            }`}
          >
            <Image
              src="/mainPage/q.png"
              alt="inverted commas"
              width={400}
              height={350}
              className={` absolute md:-top-24 md:w-48 w-40 -top-20 lg:w-96 lg:-top-48 ${
                isOdd ? "md:-right-5 -right-6" : " md:-left-5 -left-6 "
              }`}
            />

            <div className="xl:p-24 p-8 ">
              <h5 className="second_title text-2xl mb-3 pt-5">{name}</h5>
              <div className={styles.left_line}>
                <p className="second_desc text-lg md:text-lg 2xl:text-2xl">
                  {description}
                </p>
              </div>

              <FindMoreLink />
            </div>
          </div>

          <div
            className={`absolute -top-28 z-20 w-full h-[420px] md:-top-28 
          md:w-1/3 md:h-[500px] xl:h-[600px] ${isOdd ? "left-0" : "right-0"}`}
          >
            {imgURL && (
              <Image
                src={imgURL}
                alt={name}
                fill={true}
                sizes="(max-width: 768px) 70vw, (max-width: 1200px) 80vw, 65vw"
                style={{ objectFit: "contain" }}
              />
            )}
          </div>
        </div>
      </AnimationWrapper>
    </div>
  );
};

export default OnePerson;
