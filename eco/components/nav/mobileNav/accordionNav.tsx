import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SheetClose } from "@/components/ui/sheet";
import Link from "next/link";

export function MobileNavAccordian() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-bold">자인그린바이오</AccordionTrigger>
        <AccordionContent className="text-lg">
          <SheetClose asChild>
            <Link
              className="w-full h-full hover:bg-emerald-200 hover:bg-clip-text"
              href={"/intro"}
            >
              회사 소개
            </Link>
          </SheetClose>
        </AccordionContent>
        <AccordionContent className="text-lg">
          <SheetClose asChild>
            <Link
              className="w-full h-full hover:bg-emerald-200 hover:bg-clip-text"
              href={"/intro/certification"}
            >
              특허
            </Link>
          </SheetClose>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg font-bold">생분해 멀칭지</AccordionTrigger>
        <AccordionContent>
          <SheetClose asChild>
            <Link
              className="w-full h-full text-lg hover:bg-emerald-200 hover:bg-clip-text"
              href={"/prod"}
            >
              생분해 멀칭지란?
            </Link>
          </SheetClose>
        </AccordionContent>
        <AccordionContent>
          <SheetClose asChild>
            <Link
              className="w-full h-full text-lg hover:bg-emerald-200 hover:bg-clip-text"
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
            className="text-lg flex w-full h-full flex-1 items-center justify-between py-4 font-bold transition-all hover:underline [&[data-state=open]>svg]:rotate-180"
            href={"/contact"}
          >
            문의
          </Link>
        </SheetClose>
      </AccordionItem>
    </Accordion>
  );
}
