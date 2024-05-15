import Image from "next/image";
import styles from "./togetherblock.module.css";
import AnimationWrapper from "@components/AnimationWrapper";

interface TogetherBlockProps {
  imgURL: string;
}

const TogetherBlock: React.FC<TogetherBlockProps> = ({ imgURL }) => {
  return (
    <div className="min-h-36 relative">
      <Image
        src="/mainPage/ellipse-4.svg"
        width={1500}
        height={1500}
        alt="ellipse-left"
        className="absolute -z-10 blur-3xl -left-1/3 top-0"
      />
      <Image
        src="/mainPage/ellipse-4.svg"
        width={1500}
        height={1500}
        alt="ellipse-left"
        className="absolute -z-10 blur-3xl -right-1/3 bottom-0"
      />

      <AnimationWrapper
        initial={{
          y: 700,
          opacity: 0,
        }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
        classes="main_container"
      >
        <div
          className={`${styles.bg_div} h-64 sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2x:h-[750px] p-3 sm:p-5 md:p-7 lg:p-10 xl:p-14`}
        >
          <div className="relative w-full h-full">
            <div className={`${styles.img_wrapper}`}>
              <Image
                src={imgURL}
                fill
                style={{ objectFit: "cover" }}
                alt="Together photo"
              />
            </div>
          </div>
        </div>
      </AnimationWrapper>
    </div>
  );
};

export default TogetherBlock;
