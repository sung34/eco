import React from "react";
import { cn } from "@/lib/utils";

type AxisType = "horizontal" | "vertical";
type Props = {
  axis?: AxisType;
  className?: string;
};

export default function Separator({
  axis = "horizontal",
  className = "",
}: Props) {
  return (
    <div
      className={cn(
        "shrink-0  bg-muted-foreground " +
          (axis === "horizontal" ? "my-10 h-[1px] w-full " : "mx-10 w-[1px] h-full ") +
          className
      )}
    ></div>
  );
}
