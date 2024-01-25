"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  title: string;
  className?: string;
  href?: string;
  children?: React.ReactNode;
};

const ListItem = ({ title, href = "/", className, children }: Props) => {
  return (
    <li className={cn(className)}>
      <Link
        href={href}
        className={
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        }
      >
        <h2 className="font-bold md:text-md lg:text-lg">{title}</h2>
        <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  );
};
ListItem.displayName = "ListItem";

export default ListItem;
