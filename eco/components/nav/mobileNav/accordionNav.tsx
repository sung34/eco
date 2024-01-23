import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SheetClose, SheetContent } from "@/components/ui/sheet";
import { DialogCloseProps } from "@radix-ui/react-dialog";
import Link from "next/link";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>자인그린바이오</AccordionTrigger>
        <AccordionContent className="text-lg font-bold">
          <SheetClose asChild>
            <Link
              className="w-full h-full hover:bg-emerald-200 hover:bg-clip-text"
              href={"/intro"}
            >
              회사 소개
            </Link>
          </SheetClose>
        </AccordionContent>
        <AccordionContent className="text-lg font-bold">
          <SheetClose asChild>
            <Link
              className="w-full h-full hover:bg-emerald-200 hover:bg-clip-text"
              href={"/intro/vision"}
            >
              경영 비전
            </Link>
          </SheetClose>
        </AccordionContent>
        <AccordionContent className="text-lg font-bold">
          {" "}
          <SheetClose asChild>
            <Link
              className="w-full h-full hover:bg-emerald-200 hover:bg-clip-text"
              href={"/intro"}
            >
              특허
            </Link>
          </SheetClose>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>생분해 멀칭지</AccordionTrigger>
        <AccordionContent>
          <SheetClose asChild>
            <Link
              className="w-full h-full hover:bg-emerald-200 hover:bg-clip-text"
              href={"/prod"}
            >
              생분해 멀칭지란?
            </Link>
          </SheetClose>
        </AccordionContent>
        <AccordionContent>
          <SheetClose asChild>
            <Link
              className="w-full h-full hover:bg-emerald-200 hover:bg-clip-text"
              href={"/prod/inquiry"}
            >
              용도
            </Link>
          </SheetClose>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="w-full h-full item-3">
        <SheetClose asChild>
          <Link
            className="flex w-full h-full flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180"
            href={"/contact"}
          >
            문의
          </Link>
        </SheetClose>
      </AccordionItem>
    </Accordion>
  );
}
