"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const CustomBtn = ({
  text,
  textColor,
  bgColor,
  iconBg,
  iconColor,
  otherStyles,
  href,
}: {
  text: string;
  bgColor: string;
  textColor: string;
  iconBg: string;
  iconColor: string;
  otherStyles?: string;
  href: string;
}) => {
  return (
    <motion.div
      initial={{ x: "-2rem", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 1,
        type: "ease-in",
        delay: 1.6,
      }}
      className={cn(
        "relative py-2 px-2 rounded-full",
        bgColor,
        otherStyles
      )}
    >
      <Link href={href} className="flex items-center justify-center w-max gap-4">
        <p className={cn("text-sm pl-4", textColor)}>{text}</p>
        <span
          className={cn("p-2 rounded-full", iconBg)}
          aria-label="Get Free Consultation"
        >
          <ArrowUpRight className={cn(iconColor)} />
        </span>
      </Link>
    </motion.div>
  );
};

export default CustomBtn;
