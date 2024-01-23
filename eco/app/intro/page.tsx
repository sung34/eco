import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

export default function IntroductionPage({}: Props) {
  return (
    <div>
      Introduction Page
      <div className="w-8 h-6 text-center">
        <a href="#" className="transition duration-300 group text-sky-600">
          Link
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sky-600"></span>
        </a>
      </div>
    </div>
  );
}
