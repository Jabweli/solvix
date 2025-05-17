"use client";
import React from "react";
import { cn } from "@/lib/utils";
import CustomBtn from "../CustomBtn";
import {motion} from "framer-motion"

const CTA = ({
  isHead = true,
  title,
  desc,
  isBgImage = false,
}: {
  isHead?: boolean;
  title: string;
  desc?: string;
  isBgImage?: boolean;
}) => {
  return (
    <div
      className={cn(
        "responsive-padding w-full flex items-center justify-center flex-col py-10 h-[60vh] lg:h-[75vh] gap-7 lg:gap-5 relative",
        isBgImage
          ? "bg-[url(/images/img3.jpg)] bg-center bg-cover bg-no-repeat"
          : "bg-container"
      )}
    >
      {isBgImage && (
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-hgreen/20" />
      )}

      {isHead && (
        <motion.div initial={{ opacity: 0, y: "-2rem" }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
        viewport={{ once: true }} className="w-max py-2 px-7 rounded-full bg-white text-center">
          <span className="text-dark-bg font-semibold text-sm">
            New Energy For Our System
          </span>
        </motion.div>
      )}

      <motion.h1
        initial={{ opacity: 0, y: "2rem" }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay:0.1 },
        }}
        viewport={{ once: true }}
        className={cn(
          "font-bold text-2xl lg:text-3xl xl:text-5xl text-center w-full lg:w-1/2 relative",
          isBgImage ? "text-white" : "text-hgreen"
        )}
      >
        {title}
      </motion.h1>

      {desc && (
        <motion.p
        initial={{ opacity: 0, y: "2rem" }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 0.2 },
        }}
        viewport={{ once: true }}
          className={cn(
            "w-[95%] md:w-2/3 lg:w-1/2 text-center text-sm lg:text-base relative",
            isBgImage ? "text-container" : "text-textGray"
          )}
        >
          {desc}
        </motion.p>
      )}

      <CustomBtn
        text="Request a Free Quote"
        href="/"
        iconBg={isBgImage ? "bg-dark-bg" : "bg-container"}
        iconColor={isBgImage ? "text-textLight" : "text-dark-bg"}
        textColor={isBgImage ? "text-dark-bg" : "text-container"}
        bgColor={isBgImage ? "bg-container" : "bg-dark-bg"}
        otherStyles="mt-0 md:mt-6"
      />
    </div>
  );
};

export default CTA;
