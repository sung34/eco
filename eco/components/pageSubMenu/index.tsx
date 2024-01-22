"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Link from "next/link";

type Props = {
  title: string;
  subMenus: {
    href: string;
    title: string;
  }[];
};

export default function PageSubMenu({ title, subMenus }: Props) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-bold">{title}</h2>
      </CardHeader>
      <CardContent>
        <ul>
          {subMenus.map(({ title, href }, index) => (
            <li key={index}>
              <Link href={href}>
                <h3 className="text-base font-semibold">{title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
