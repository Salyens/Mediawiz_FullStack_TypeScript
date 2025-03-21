import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IProjectItem } from "@interfaces/smmPage";
import styles from "./projectscarousel.module.css";
import classNames from "classnames";
import Image from "next/image";

const ProjectCarousel = ({
  list,
}: {
  list: IProjectItem[];
}) => {
  return (
    <Carousel className="lg:w-2/3 xl:w-1/2">
      <CarouselContent>
        {list.map((item, index) => (
          <CarouselItem key={item.title + index}>
            <div>
              <p className="text-base sm:text-lg xl:text-2xl md:mb-4">
                {item.title}
              </p>
              <div className={styles.bg}>
                <div
                  className={classNames(
                    "flex items-center justify-center bg-transparent select-none pointer-events-none touch-none relative",
                    styles.aspect
                  )}
                >
                  <Image
                    src={item.imgURL}
                    alt={item.title}
                    fill
                    sizes="100vw"
                    className="object-fit"
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectCarousel;
