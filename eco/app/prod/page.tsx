import StyledArticle, {
  StyledArticleObjectType,
} from "@/components/styledArticle";
import Image from "next/image";
import React from "react";

import figrue1 from "@/public/img/figure1.png";
import figrue2 from "@/public/img/figure2.png";
import { DotIcon } from "lucide-react";

type Props = {};

const contents1: StyledArticleObjectType[] = [
  {
    title: "",
    content:
      "친환경 미생물 생분해 펄프멀칭지는 순수 펄프를 이용한 멀칭지로 농작물을 경작하는 밭이나 논 또는 하우스 토양의 표면을 덮어 농작물을 재배하면서 잡초억제, 생장촉진, 제균과 제충, 토양침식 방지, 토양수분 유지, 지온조절, 미량 또는 다량 원소 비료의 시비 등의 목적을 달성하고, 친환경으로 생분해되어 유기질 비료로 활용되도록 만든 친환경 제품입니다. ",
    contentImg: "",
  },
];
const contents2: StyledArticleObjectType[] = [
  {
    title: "",
    content: (
      <ul>
        <li className="flex">
          <DotIcon />
          <span>
            농촌고령화로 비닐 멀칭 제거 작업이 어렵고, 수거 비용과다로 로타리 및
            소각등으로 토양, 대기 등 환경오염의 주범
          </span>
        </li>
        <li className="flex">
          <DotIcon />
          <span>
            수거된 폐비닐에서 발생된 환경호르몬 다이옥신, 미세플라스틱 등이
            인체의 면역 체계를 교란시켜 질병을 유발함
          </span>
        </li>
        <li className="flex">
          <DotIcon />
          <span>
            작물재배 후 수거작업을 하지않고, 토양오염을 일으키지 않으며
            후속재배시 작물의 생육에 유익한 미생물 생분해 펄프 멀칭지 개발
          </span>
        </li>
      </ul>
    ),
    contentImg: "",
  },
];

export default function ProductPage({}: Props) {
  return (
    <>
      <StyledArticle
        mainHeader="친환경 미생물 생분해 펄프 멀칭지란"
        contents={contents1}
      />
      <figure className="relative w-full px-4">
        <Image src={figrue1} alt="" />
      </figure>
      <figure className="relative w-full">
        <Image src={figrue2} alt="" />
      </figure>
      <ul className="px-10 py-10">
        <li className="flex">
          <DotIcon />
          <span>
            농촌고령화로 비닐 멀칭 제거 작업이 어렵고, 수거 비용과다로 로타리 및
            소각등으로 토양, 대기 등 환경오염의 주범
          </span>
        </li>
        <li className="flex">
          <DotIcon />
          <span>
            수거된 폐비닐에서 발생된 환경호르몬 다이옥신, 미세플라스틱 등이
            인체의 면역 체계를 교란시켜 질병을 유발함
          </span>
        </li>
        <li className="flex">
          <DotIcon />
          <span>
            작물재배 후 수거작업을 하지않고, 토양오염을 일으키지 않으며
            후속재배시 작물의 생육에 유익한 미생물 생분해 펄프 멀칭지 개발
          </span>
        </li>
      </ul>
    </>
  );
}
