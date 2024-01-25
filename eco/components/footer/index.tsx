import Image from "next/image";
import React from "react";
import logo from "@/public/img/logo.png";
import Link from "next/link";
import Separator from "../ui/separator";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="inner-x pt-20 text-muted-foregorund pb-6 bg-gradient-to-t from-emerald-200 via-emerald-100  to-white from-80% via-81% ">
      <nav className="grid flex-col items-center grid-cols-2 font-semibold gap-7 lg:grid-cols-5">
        <section className="flex items-center justify-between flex-grow w-full col-span-2 gap-3">
          <figure className="relative w-20 h-20 ">
            <Image fill className="object-contain" src={logo} alt="" />
          </figure>
          <article className="flex items-center flex-grow gap-5 leading-tight">
            <h1 className="text-nowrap">
              농업법인회사
              <br />
              <span className="font-exrtrabold ">(주)</span>자인그린바이오
            </h1>
            <p className="flex flex-col gap-2">
              <span>사업자번호:</span>
              <span>설립:</span>
              <span>주소:</span>
            </p>
          </article>
          <Separator className="hidden lg:block" axis="vertical" />
        </section>

        <ul className="flex flex-col self-start gap-2 select-none">
          <li>
            <Link
              className="transition-all after:bg-white hover:text-white hover-underline-animation"
              href={"/"}
            >
              홈으로
            </Link>
          </li>
          <li>
            <Link
              className="transition-all after:bg-white hover:text-white hover-underline-animation"
              href={"/intro"}
            >
              회사 소개
            </Link>
          </li>
          <li>
            <Link
              className="transition-all after:bg-white hover:text-white hover-underline-animation"
              href={"/intro/certification"}
            >
              특허
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col self-start gap-2 select-none">
          <li>
            <Link
              className="transition-all after:bg-white hover:text-white hover-underline-animation"
              href={"/prod"}
            >
              생분해 멀칭지란?
            </Link>
          </li>
          <li>
            <Link
              className="transition-all after:bg-white hover:text-white hover-underline-animation"
              href={"/prod/info"}
            >
              제품 정보
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col self-start gap-2 select-none">
          <li>
            <Link
              className="transition-all after:bg-white hover:text-white hover-underline-animation"
              href={"/contact"}
            >
              문의
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
