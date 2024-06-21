import { IProjects } from "@interfaces/smmPage";
import Image from "next/image";
import classNames from "classnames";
import styles from "./ProjectCarousel/projectscarousel.module.css";
import DynamicAnimationWrapper from "@components/AnimationWrapper/DynamicAnimationWrapper";
import DynamicUnderlinedTitle from "@components/UnderlinedTitle/DynamicUnderlinedTitle";
import dynamic from "next/dynamic";

const DynamicProjectCarousel = dynamic(() => import("./ProjectCarousel"), {
  ssr: false,
});

interface ProjectsProp {
  myProjects: IProjects;
}

const Projects: React.FC<ProjectsProp> = ({ myProjects }) => {
  return (
    <div
      className={classNames(
        "relative mt-12 mb-10 pb-20 sm:pb-28 md:pb-36 lg:pb-44 pt-8 xl:mb-28 xl:pb-44 xl:pt-24",
        styles.container
      )}
    >
      <DynamicAnimationWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeOut",
          duration: 1,
          delay: 1,
        }}
      >
        <div className="absolute w-full lg:w-1/2 h-screen hidden lg:flex -right-36">
          <Image
            className="object-contain"
            src="/smmPage/projectsBG.svg"
            alt="projectsBG"
            fill
            sizes="100vh"
          />
        </div>
      </DynamicAnimationWrapper>

      <DynamicAnimationWrapper
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{
          ease: "easeOut",
          duration: 1,
          delay: 0.5,
        }}
        classes="main_container p-3 sm:p-4 md:p-5 xl:p-6"
      >
        <DynamicUnderlinedTitle text={myProjects.header} />
        <DynamicProjectCarousel list={myProjects.list} />
      </DynamicAnimationWrapper>
    </div>
  );
};

export default Projects;
