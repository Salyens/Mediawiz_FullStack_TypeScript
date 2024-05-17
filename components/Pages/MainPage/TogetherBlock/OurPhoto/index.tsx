import Image from "next/image";
import styles from "./togetherblock.module.css";
import AnimationWrapper from "@components/AnimationWrapper";

interface TogetherBlockProps {
  imgURL: string;
}

const OurPhoto: React.FC<TogetherBlockProps> = ({ imgURL }) => {
  return (
    <div className="min-h-36 relative">
      <AnimationWrapper
        initial={{
          y: 700,
          opacity: 0,
        }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
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
                sizes="100vh"
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

export default OurPhoto;
