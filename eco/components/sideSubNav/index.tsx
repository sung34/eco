import Link from "next/link";
import React from "react";
import { v4 as uuid } from "uuid";
import { cn } from "@/lib/utils";

type Props = {
  subNavs: {
    title: string;
    href: string;
  }[];
  className?: string;
};

export default function SideSubNav({ subNavs, className }: Props) {
  return (
    <aside className="relative hidden border-r lg:block border-muted">
      <section className="sticky left-0 top-20 lg:col-span-1">
      <ul
        className={cn(
          "w-full flex flex-col gap-1 justify-center" + className
        )}
      >
        {subNavs.map((subNav, _) => (
          <li key={uuid()}>
            <Link className="block py-6" href={subNav.href}>
              {/* Todo: text-clip effect with green-100/150 */}

              <h3 className="inline-block font-semibold lg:text-xl hover-underline-animation">
                {subNav.title}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
    </aside>
  );
}
