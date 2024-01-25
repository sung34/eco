import React from "react";
import logo from "@/public/img/logo.png";
import introSprite from "@/public/img/intro_sprite.png";
import StyledArticle, {
  StyledArticleObjectType,
} from "@/components/styledArticle";
import Image from "next/image";

type Props = {};

const subHeaderData: StyledArticleObjectType = {
  title: (
    <>
      농업법인회사
      <br />
      <span className="font-exrtrabold ">(주)</span>자인그린바이오
    </>
  ),
  content:
    "환경을 생각하는 마음으로 농업에 혁신을 불어넣는 자인그린바이오에 오신 것을 환영합니다. 우리는 천연 자원을 활용하여 농업 생산물의 질을 높이고, 토양을 보호하는 동시에 지속 가능한 방식으로 농업 활동을 지원하는 친환경 제품을 제공하는 기업입니다.",
  contentImg: (
    <Image src={logo} className="w-20 h-20 rounded-full shadow-md" alt="" />
  ),
};

const contentsData: StyledArticleObjectType[] = [
  {
    title: "환경과 함께하는 농업의 동반자",
    content: (
      <span>
        <span className="text-4xl font-extrabold">자연</span>에서 영감을 받아
        탄생한 제품, <b className="text-lg">생분해 펄프멀칭지</b>는 농작물이
        자라나는 모든 단계에서 생태계와 조화를 이루며, 농업의 지속 가능한 미래를
        위해 고안되었습니다. 이 제품은 농작물이 필요로 하는 보호와 영양을
        제공함으로써 농민들의 노동 부담을 줄이고, 수확의 질과 양을 모두
        향상시키는 것을 목표로 합니다.
      </span>
    ),
    contentImg: (
      <Image
        src={introSprite}
        className="scale-[200%] translate-x-1/2 translate-y-1/2 shadow-md overflow-clip"
        alt=""
      />
    ),
  },
  {
    title: "지구를 생각하는 기업 정신",
    content: (
      <span>
        자인그린바이오는 지구와 그 자원을 존중하며, 모든 활동을 통해{" "}
        <b className="text-lg">지속 가능한 미래</b>를 구현하려는 깊은 의지를
        가지고 있습니다. 우리는 제품의 생산부터 포장, 사용, 그리고 최종 분해에
        이르기까지 전 과정에서 환경 보호를 최우선으로 생각합니다.
      </span>
    ),
    contentImg: (
      <Image
        src={introSprite}
        className="scale-[200%] -translate-x-1/2 translate-y-1/2 shadow-md overflow-clip"
        alt=""
      />
    ),
  },
  {
    title: "청정 기술로 농업에 가치를 더하다",
    content: (
      <span>
        자인그린바이오는 기술의 혁신을 통해{" "}
        <b className="text-lg">농업의 새로운 가치</b>를 창출합니다. 농업 기술의
        현대화를 추구하며, 이를 통해 농업 분야에 새로운 표준을 설정하고
        있습니다. 우리의 기술은 환경에 대한 긍정적인 변화를 가져오는 데
        일조합니다.
      </span>
    ),
    contentImg: (
      <Image
        src={introSprite}
        className="scale-[200%] translate-x-1/2 -translate-y-1/2 shadow-md overflow-clip"
        alt=""
      />
    ),
  },
  {
    title: "우리 모두의 건강한 미래를 위하여",
    content: (
      <span>
        자인그린바이오는 <b className="text-lg">지속 가능한 농업</b>을 통해
        인류의 건강한 미래를 구축하고자 합니다. 우리는 이 땅에서 자라나는 모든
        생명이 풍요롭게 자랄 수 있는 환경을 만드는 것을 사명으로 삼고 있으며,
        이를 실현하기 위해 끊임없이 노력하고 있습니다.
      </span>
    ),
    contentImg: (
      <Image
        src={introSprite}
        className="scale-[200%] -translate-x-1/2 -translate-y-1/2 shadow-md overflow-clip"
        alt=""
      />
    ),
  },
];

export default function IntroductionPage({}: Props) {
  return (
    <>
      <StyledArticle 
        mainHeader="회사 소개"
        subHeader={subHeaderData}
        contents={contentsData}
        reversed
      />
    </>
  );
}
