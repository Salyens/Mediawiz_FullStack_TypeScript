import UnderlinedTitle from "@components/UnderlinedTitle";
import { IProjects } from "@interfaces/smmPage";
import ProjectCarousel from "./ProjectCarousel";
import Image from "next/image";
import classNames from "classnames";
import styles from "./ProjectCarousel/projectscarousel.module.css"

const Projects = ({ myProjects }: { myProjects: IProjects }) => {
  return (
    <div className="relative">
      <div className= {classNames("w-full lg:w-2/3 h-[800px] absolute", styles.img_bg)}>
        <Image
          className="object-contain absolute"
          src="/smmPage/projectsBG.svg"
          alt="projectsBG"
          fill
        />
      </div>
      <div className="main_container p-3 sm:p-4 md:p-5 xl:p-6 mb-36">
        <UnderlinedTitle text={myProjects.header} />
        <ProjectCarousel list={myProjects.list} />
      </div>
    </div>
  );
};

export default Projects;
