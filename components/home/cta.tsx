"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CTA = ({ type }: { type: "home" | "about" }) => {
  return (
    <div
      className={cn(
        "responsive-padding w-full flex items-center justify-center flex-col py-10 h-[60vh] lg:h-[80vh] gap-7 lg:gap-5 relative",
        type === "about"
          ? "bg-[url(/images/img3.jpg)] bg-center bg-cover bg-no-repeat"
          : "bg-container"
      )}
    >
      {type === "about" && (
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-hgreen/20" />
      )}

      {type === "home" && (
        <div className="w-max py-2 px-7 rounded-full bg-white text-center">
          <span className="text-dark-bg font-semibold text-sm">
            New Energy For Our System
          </span>
        </div>
      )}

      <h1
        className={cn(
          "font-bold text-2xl lg:text-3xl xl:text-5xl text-center w-full lg:w-1/2 relative",
          type === "home" ? "text-hgreen" : "text-white"
        )}
      >
        {type === "home"
          ? "Get A Free Quote Today!"
          : "Ready To Make The Switch To Solar?"}
      </h1>
      <p
        className={cn(
          "w-[95%] md:w-2/3 lg:w-1/2 text-center text-sm lg:text-base relative",
          type === "home" ? "text-textGray" : "text-container"
        )}
      >
        {type === "home"
          ? "Interested in switching to solar? Let&apos;s work together to find the perfect solution for your home or bussiness."
          : type === "about"
          ? "Join thousands of home owners and businesses embracing clean, renewable energy"
          : ""}
      </p>

      <motion.div
        initial={{ x: "-2rem", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          type: "ease-in",
          delay: 1.6,
        }}
        className={cn(
          "relative flex items-center justify-center w-max gap-4 py-2 px-2 rounded-full mt-0 md:mt-6",
          type === "home" && "bg-dark-bg",
          type === "about" && "bg-container"
        )}
      >
        <p
          className={cn(
            "text-sm pl-4",
            type === "home" ? "text-container" : "text-dark-bg"
          )}
        >
          Request a Free Quote
        </p>
        <Link
          href=""
          className={cn(
            "p-2 rounded-full",
            type === "home" ? "bg-container" : "bg-dark-bg"
          )}
          aria-label="Get Free Consultation"
        >
          <ArrowUpRight
            className={cn(type === "home" ? "text-dark-bg" : "text-textLight")}
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default CTA;
