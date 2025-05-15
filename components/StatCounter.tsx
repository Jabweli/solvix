"use client";
import { cn } from "@/lib/utils";
import React from "react";
import CountUp from "react-countup";

const StatCounter = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4 bg-container p-4 px-5 w-full",
        className
      )}
    >
      <div>
        <h1 className="text-hgreen font-semibold text-2xl lg:text-4xl">
          <CountUp start={0} end={10} duration={4} />
          k+
        </h1>
        <span className="text-sm text-textGray">Solar installation</span>
      </div>
      <div>
        <h1 className="text-hgreen font-semibold text-2xl lg:text-4xl">
          <CountUp start={10} end={100} duration={4} />k
        </h1>
        <span className="text-sm text-textGray">Tons of CO2 Reduced</span>
      </div>
      <div>
        <h1 className="text-hgreen font-semibold text-2xl lg:text-4xl">
          <CountUp start={10} end={70} duration={4} />%
        </h1>
        <span className="text-sm text-textGray">Up to Savings</span>
      </div>
    </div>
  );
};

export default StatCounter;
