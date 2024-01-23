import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AccordionDemo } from "./accordionNav";
import { AlignJustifyIcon } from "lucide-react";
import logo from "@/public/img/logo.png";
import Image from "next/image";
export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <AlignJustifyIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full shadow-md">
              <Image src={logo} fill alt="" />
            </div>
            <div className="text-sm leading-tight">
              <h4>친환경 농업법인회사</h4>
              <h4><span>(주)</span>자인그린바이오</h4>
            </div>
          </SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when youre done.
          </SheetDescription> */}
        </SheetHeader>
        <AccordionDemo/>
      </SheetContent>
    </Sheet>
  );
}
