import Image, { StaticImageData } from "next/image";
import React from "react";
import { v4 as uuid } from "uuid";
import { cn } from "@/lib/utils";

type ContentImgPathType = "none" | "string";
type ContentNextImageType = React.ReactNode;

export type StyledArticleObjectType = {
  title: string | React.ReactNode;
  contentImg: ContentNextImageType;
  content: string | React.ReactNode;
};

/**
 * @typedef {Object} Props
 * @property {string | React.ReactNode} mainHeader - The main header of the component.
 * @property {StyledArticleObjectType} subHeader - The sub header information.
 * @property {StyledArticleObjectType[]} contents - An array of content objects.
 * @property {boolean} reversed - Whether the content should be reversed.
 */
type Props = {
  mainHeader: string | React.ReactNode;
  subHeader?: StyledArticleObjectType;
  contents?: StyledArticleObjectType[];
  reversed?: boolean;
};

/**
 * @description main header, sub header, content > content, figure 순서 reversed는 figure content 순서
 * @param {Props}
 * @returns {React.ReactNode}
 */
export default function StyledArticle({
  mainHeader,
  subHeader,
  contents,
  reversed,
}: Props) {
  return (
    <article className="p-6 animation-in md:p-10 lg:p-12">
      {/* 메인 타이틀 */}
      <h1 className="pb-10 text-4xl font-extrabold tracking-tight border-b scroll-m-20 lg:text-5xl">
        {mainHeader}
      </h1>
      {/* 서브 타이틀 */}
      {subHeader && (
        <>
          <div className="flex items-center gap-4 py-10">
            {subHeader.contentImg && (
              <figure className="relative w-20 h-20 rounded-full shadow-sm">
                {subHeader.contentImg}
              </figure>
            )}
            <h2 className="pb-2 text-3xl font-semibold tracking-tight transition-colors scroll-m-20 first:mt-0">
              {subHeader?.title}
            </h2>
          </div>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            {subHeader?.content}
          </p>
        </>
      )}
      {/* 컨텐트 */}
      {contents &&
        contents.map(({ title, contentImg, content }, index) => {
          return (
            <section className="pt-10" key={uuid()}>
              {/* 컨텐트 타이틀 */}
              {title && (
                <h3 className="inline-block py-5 my-10 text-2xl font-semibold tracking-tight border-b-2 scroll-m-20">
                  {title}
                </h3>
              )}
              {/* 컨텐트 내용 */}
              <section
                className={cn(
                  "flex flex-col gap-5 ",
                  contentImg && "lg:grid lg:grid-cols-2"
                  // (index + Number(reversed)) % 2 !== 0 && "lg:flex-row-reverse"
                )}
              >
                {content && (
                  <p
                    className={cn(
                      "leading-7 [&:not(:first-child)]:mt-6 lg:flex lg:items-center lg:px-8",
                      contentImg &&
                        ((index + Number(reversed)) % 2 !== 0
                          ? "lg:order-1"
                          : "lg:order-2")
                    )}
                  >
                    {content}
                  </p>
                )}
                {contentImg && (
                  <figure
                    className={cn(
                      "relative lg:block hidden w-full h-fit rounded-xl overflow-clip",
                      (index + Number(reversed)) % 2 !== 0
                        ? "lg:order-2"
                        : "lg:order-1"
                    )}
                  >
                    {contentImg}
                  </figure>
                )}
              </section>
            </section>
          );
        })}
    </article>
  );
}
