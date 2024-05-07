import React from "react";
import Image from "next/image";
import styles from "./oneperson.module.css";
import Link from "next/link";

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
    <div className="main_container mb-36 mt-24 relative p-6">
      <div className="flex justify-center">
        <div
          className={`${styles.rectangle} md:w-2/3 w-11/12 h-auto mt-96 md:mt-0  ${
            isOdd
              ? "ml-auto"
              : "mr-auto"
          }`}
        >
          <Image
            src="/mainPage/q.png"
            alt="inverted commas"
            width={400}
            height={350}
            className={` ${
              isOdd
                ? "absolute md:-top-48  md:w-96 w-40 md:-right-32  -top-20 -right-6"
                : "absolute md:-top-48 md:-left-32 -top-20 -left-6 md:w-96 w-40"
            }`}
          />

          <div className="xl:p-24 p-8 ">
            <h5 className={`${styles.name} text-2xl mb-3 pt-5`}>{name}</h5>
            <div className={styles.left_line}>
              <p className={`${styles.desc} text-lg md:text-lg 2xl:text-2xl`}>
                {description}
              </p>
            </div>

            <Link
              className={`flex ml-auto relative z-30 text-3xl mt-2 lg:mt-8 -left-2`}
              href="#"
            >
              <span className={`text-2xl 2xl:text-3xl ${styles.link}`}>Узнать больше</span>
              <Image
                className="pl-3"
                src="/arrow.png"
                alt="arrow"
                width={48}
                height={48}
                style={{ objectFit: "contain" }}
              />
            </Link>
          </div>
        </div>

        <div
          className={`absolute -top-10 z-20 w-full h-[420px] md:-top-28 
          md:w-1/3 md:h-[500px] xl:h-[600px] ${isOdd ? "left-0" : "right-0"}`}
        >
          {imgURL && (
            <Image src={imgURL} alt={name} layout="fill" objectFit="contain" />
          )}
        </div>
      </div>
    </div>
  );
};

export default OnePerson;
