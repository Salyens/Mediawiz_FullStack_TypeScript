import styles from "./togetherblock.module.css";
import { MotionDiv } from "@components/MotionDiv";
import Image from "next/image";
import classNames from "classnames";

interface TogetherBlockProps {
  imgURL: string;
}

const OurPhoto: React.FC<TogetherBlockProps> = ({
  imgURL,
}) => {
  return (
    <div className="min-h-36 relative">
      <MotionDiv
        initial={{
          paddingTop: 200,
          opacity: 0,
        }}
        whileInView={{ paddingTop: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="main_container mb-20 md:mb-40 lg:mb-60 xl:mb-64"
      >
        <div
          className={classNames(
            "relative h-64  sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2x:h-[750px] p-3 sm:p-5 md:p-7 lg:p-10 xl:p-14",
            styles.bg_div
          )}
        >
          <div className={styles.img_wrapper}>
            <Image
              src={imgURL}
              alt="Our photo"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </MotionDiv>
    </div>
  );
};

export default OurPhoto;
