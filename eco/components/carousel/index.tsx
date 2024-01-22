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
import img1 from "@/public/ecoimg1.webp";
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

export function CarouselDemo() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, playOnInit: true, stopOnInteraction: true })
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
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="py-2">
              <Card>
                <CardContent className="relative flex items-center justify-center w-full overflow-hidden rounded-sm h-80 md:h-[600px]">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}

                  <Image
                    className="transition-opacity duration-300 opacity-75 hover:opacity-100"
                    fill
                    src={img1}
                    alt=""
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        variant={"ghost"}
        className="scale-125 hover:bg-inherit"
      />
      <CarouselNext variant={"ghost"} className="scale-125 hover:bg-inherit" />
    </Carousel>
  );
}
