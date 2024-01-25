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
import img3 from "@/public/img/slides3.jpg";
import img4 from "@/public/img/slides4.jpg";
import Image from "next/image";
import { v4 as uuid } from "uuid";

import Autoplay from "embla-carousel-autoplay";
import { Button } from "../../ui/button";
import Link from "next/link";

const srcImgs = [img1, img2, img3, img4];
type Props = {}

export default function ProductCarousel({}: Props) {
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
      className="relative w-full cursor-pointer select-none"
    >
      <CarouselContent>
       
        {srcImgs.map((src, index) => (
          <CarouselItem key={uuid()}>
            <Card>
              <CardContent className="relative p-0 ">
                {/* <span className="text-4xl font-semibold">{index + 1}</span> */}

                <article className="absolute z-10 flex flex-col items-center justify-center w-full h-full transition-opacity duration-700 opacity-0 focus:opacity-100 gap-7 hover:opacity-100 backdrop-brightness-50">
                  <p className="w-1/2 text-lg lg:w-1/4 text-muted">
                    <span className="text-3xl font-bold lg:text-4xl">
                      생분해 펄프 멀칭지
                    </span>
                    가 자연과의 조화 속에서 잡초를 억제하고 수분을 보존하여
                    토양의 영양을 지키며 작물의 건강한 성장을 돕습니다.
                  </p>
                  <Button className="">
                    <Link href={'/prod'}>더 알아보기</Link>
                  </Button>
                </article>
                <figure className="relative w-full max-h-[500px] aspect-video">
                  <Image fill src={src} alt="" />
                </figure>
              </CardContent>
            </Card>
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