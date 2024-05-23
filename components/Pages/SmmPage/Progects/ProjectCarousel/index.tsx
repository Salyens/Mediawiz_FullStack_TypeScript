import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IProjectItem } from "@interfaces/smmPage";
import Image from "next/image";
import styles from "./projectscarousel.module.css";
import classNames from "classnames";

const ProjectCarousel = ({ list }: { list: IProjectItem[] }) => {
  return (
    <Carousel className={classNames("w-full sm:w-2/3 md:w-2/3 lg:w-2/3 m-auto lg:m-0")}>
      <CarouselContent>
        {list.map((item, index) => (
          <CarouselItem key={item.title + index}>
            <div>
              <p className="text-base sm:text-lg xl:text-2xl mb-4">{item.title}</p>
              <Card className={styles.bg}>
                <CardContent
                  className={classNames(
                    "flex aspect-square items-center justify-center p-6 relative h-[300px] md:h-[400px] lg:w-[500px] xl:w-[700px]",
                    styles.bg
                  )}
                >
                  <Image
                    src={item.imgURL}
                    fill
                    className="object-contain"
                    alt={item.title}
                  />
                </CardContent>
              </Card>
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
