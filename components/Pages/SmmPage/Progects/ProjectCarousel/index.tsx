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
    <Carousel className="lg:w-2/3 xl:w-1/2">
      <CarouselContent>
        {list.map((item, index) => (
          <CarouselItem key={item.title + index}>
            <div>
              <p className="text-base sm:text-lg xl:text-2xl md:mb-4">{item.title}</p>
              <Card className={styles.bg}>
                <CardContent
                  className={classNames(
                    "flex items-center justify-center relative bg-transparent",
                    styles.bg,styles.aspect,
                    
                  )}
                >
                  <div className="absolute inset-0">
                    <Image
                      src={item.imgURL}
                      alt={item.title}
                      fill
                      sizes="90vw"
                      className="object-contain"
                    />
                  </div>
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
