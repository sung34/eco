"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import img1 from "@/public/img/slides1.jpg";
import img2 from "@/public/img/slides2.jpg";
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

export function CarouselDemo() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, playOnInit: true, stopOnInteraction: true })
  );
  return (
    <Carousel
      opts={{
        duration: 50,
        loop: true,
      }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="relative w-full cursor-pointer"
    >
      <CarouselContent>
        <CarouselItem>
          <Card>
            <CardContent className="relative p-0">
              {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
              <article className="absolute z-10 p-10 transform -translate-x-1/2 -translate-y-1/2 rounded-md backdrop-blur-md top-1/2 left-1/2">
                <h3 className="text-xl font-semibold">
                  Lorem ipsum, dolor sit amet consectetur
                </h3>
                <p className="text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Saepe, tempora excepturi? Cupiditate vero hic in recusandae
                  consequuntur, earum fugiat ab, quibusdam labore consectetur
                  voluptatibus nostrum delectus ea, culpa obcaecati illum.
                </p>
              </article>
              <div className="relative w-full max-h-[500px] aspect-video">
                <Image fill src={img1} alt="" />
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card>
            <CardContent className="relative p-0">
              <article className="absolute z-10 p-10 transform -translate-x-1/2 -translate-y-1/2 rounded-md backdrop-blur-md top-1/2 left-1/2">
                <h3 className="text-xl font-semibold">
                  Lorem ipsum, dolor sit amet consectetur
                </h3>
                <p className="text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Saepe, tempora excepturi? Cupiditate vero hic in recusandae
                  consequuntur, earum fugiat ab, quibusdam labore consectetur
                  voluptatibus nostrum delectus ea, culpa obcaecati illum.
                </p>
              </article>
              <div className="relative w-full max-h-[500px] aspect-video">
                <Image fill src={img2} alt="" />
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious
        variant={"ghost"}
        className="scale-125 hover:bg-inherit"
      />
      <CarouselNext variant={"ghost"} className="scale-125 hover:bg-inherit" />
    </Carousel>
  );
}
