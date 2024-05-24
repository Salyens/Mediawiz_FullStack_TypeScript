import UnderlinedTitle from "@components/UnderlinedTitle";
import { IProjects } from "@interfaces/smmPage";
import ProjectCarousel from "./ProjectCarousel";
import Image from "next/image";
import classNames from "classnames";
import styles from "./ProjectCarousel/projectscarousel.module.css"

const Projects = ({ myProjects }: { myProjects: IProjects }) => {
  return (
    <div className={classNames("relative mb-28 pb-44 pt-44", styles.container)}>
      <div className= {classNames("w-full lg:w-2/3 h-full absolute", styles.img_bg)}>
        <Image
          className="object-contain absolute"
          src="/smmPage/projectsBG.svg"
          alt="projectsBG"
          fill
        />
      </div>
      <div className="main_container p-3 sm:p-4 md:p-5 xl:p-6">
        <UnderlinedTitle text={myProjects.header} />
        <ProjectCarousel list={myProjects.list} />
      </div>
    </div>
  );
};

export default Projects;
