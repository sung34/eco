import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/img/logo.png";
import { MobileNav } from "./mobileNav";
import { TopNav } from "./topNav";
type Props = {};

export default function Navigation({}: Props) {
  return (
    <div className="sticky top-0 z-40 flex items-center justify-between w-full h-12 px-5 py-10 bg-white md:justify-around box">
      <Link href="/" className="flex items-center gap-3 cursor-pointer group">
        <div className="w-8 h-8 relative group-hover:animate-[pulse_1s_ease-in-out_forwards]">
          <Image src={logo} fill alt="" />
        </div>
        <span className="md:text-md lg:text-lg font-semibold text-nowrap group-hover:animate-[pulse_1s_ease-in-out_forwards]">
          자인그린바이오
        </span>
      </Link>

      <TopNav />

      <nav className="block md:hidden">
        <MobileNav />
      </nav>
    </div>
  );
}
