"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "@/public/img/logo.png";
import prod from "@/public/img/prod.png";

export function TopNav() {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>자인그린바이오</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="hidden row-span-3 lg:block lg:shadow-md">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex flex-col justify-end w-full h-full p-3 no-underline transition-colors rounded-md outline-none select-none lg:hover:bg-inherit lg:p-6 lg:bg-gradient-to-b lg:from-green-100/50 lg:to-transparent lg:focus:shadow-md"
                    href="/intro"
                  >
                    <div className="relative flex justify-center w-full h-full overflow-clip ">
                      <Image
                        height={128}
                        className="hidden lg:block"
                        src={logo}
                        alt=""
                      />
                    </div>
                    <div className="text-lg font-medium leading-tight text-center lg:mt-4 lg:mb-2">
                      <h3>농업회사법인</h3>
                      <h3>
                        <span className="text-base font-semibold leading-tight">
                          (주)
                        </span>
                        자인그린바이오
                      </h3>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/intro" title="회사 소개">
                지속 가능한 농업을 위한 혁신적인 솔루션을 제공하는 친환경
                기업입니다. 토양 보호 기술을 통해 농업 생산성을 향상시키고,
                지구의 건강을 생각하는 농업 방법으로 더 나은 미래를 위해
                노력합니다.
              </ListItem>
              <ListItem href="/intro/certification" title="특허"></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>생분해 멀칭지</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="hidden row-span-3 lg:block lg:shadow-md">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex flex-col justify-end w-full h-full p-3 no-underline transition-colors rounded-md outline-none select-none hover:bg-accent hover:text-accent-foreground lg:hover:bg-inherit lg:p-6 lg:bg-gradient-to-b lg:from-green-100/50 lg:to-transparent lg:focus:shadow-md"
                    href="/prod"
                  >
                    <div className="relative flex justify-center w-full h-full">
                      <Image
                        height={128}
                        className="hidden rounded-full lg:block drop-shadow-md"
                        src={prod}
                        alt=""
                      />
                    </div>
                    <div className="text-lg font-medium leading-tight text-center lg:mt-4 lg:mb-2">
                      <h3>친환경 미생물</h3>
                      <h3>생분해 펄프 멀칭지</h3>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/prod" title="생분해 멀칭지란?">
                친환경 미생불 생분해 펄프멀칭지는 순수 펄프로 만든 멀칭지로,
                작물 재배시 잡초억제, 생장촉진, 병충해 방지, 토양 보존 등의
                이점을 제공합니다. 이 제품은 생분해되어 친환경적으로 유기질
                비료로 활용됩니다.
              </ListItem>
              <ListItem href="/prod/inquiry" title="용도"></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <h3 className="font-semibold md:text-base lg:text-lg">문의</h3>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, href = "/", title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors from-green-100/50 to-transparent bg-transparent hover:bg-gradient-to-b",
            className
          )}
        >
          <div className="text-base font-semibold leading-none">{title}</div>
          <p className="text-base leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
