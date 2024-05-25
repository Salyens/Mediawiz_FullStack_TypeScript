import UnderlinedTitle from "@components/UnderlinedTitle";
import { IProjects } from "@interfaces/smmPage";
import ProjectCarousel from "./ProjectCarousel";
import Image from "next/image";
import classNames from "classnames";
import styles from "./ProjectCarousel/projectscarousel.module.css";
import AnimationWrapper from "@components/AnimationWrapper";

const Projects = ({ myProjects }: { myProjects: IProjects }) => {
  return (
    <div
      className={classNames(
        "relative mt-12 mb-10 pb-20 sm:pb-28 md:pb-36 lg:pb-44 pt-8 xl:mb-28 xl:pb-44 xl:pt-24",
        styles.container
      )}
    >
      <AnimationWrapper
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{
          ease: "easeOut",
          duration: 1,
          delay: 0.5,
        }}
        classes={classNames("w-full lg:w-1/2 h-full absolute", styles.img_bg)}
      >
        <Image
          className="object-contain absolute"
          src="/smmPage/projectsBG.svg"
          alt="projectsBG"
          fill
          sizes="100vh"
        />
      </AnimationWrapper>

      <AnimationWrapper
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{
          ease: "easeOut",
          duration: 1,
          delay: 0.5,
        }}
        classes="main_container p-3 sm:p-4 md:p-5 xl:p-6"
      >
        <UnderlinedTitle text={myProjects.header} />
        <ProjectCarousel list={myProjects.list} />
      </AnimationWrapper>
    </div>
  );
};

export default Projects;
