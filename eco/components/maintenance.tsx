"use client";

import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import maintenanceLottie from "@/public/maintenance.json";
import Image from "next/image";

type Props = {};

export default function MaintenanceLottie({}: Props) {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-3 p-16 fade_in">
      <div className="flex items-center gap-2">
        <Image src={"/logo.png"} width={36} height={36} alt="" />
        <h3 className="text-4xl font-bold text-center">자인그린바이오</h3>
      </div>
      <div>
        <p className="text-2xl text-center px-14">
          🛠︎현재 서버 점검중입니다.🛠︎
        </p>
      </div>
      <Lottie
        loop
        animationData={maintenanceLottie}
        play
        style={{
          width: windowSize.width * 0.7,
          height: windowSize.height * 0.7,
          display: "flex",
          justifyContent: "center",
        }}
      />
    </div>
  );
}
