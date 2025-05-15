"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Testimonials = () => {
  return (
    <div className="responsive-padding py-10 md:py-20">
      <h2 className="sub-title text-link-active text-center">
        // TESTIMONIALS
      </h2>
      <h1 className="title text-textBlack text-center">Success Stories</h1>

      <div className="mt-8 relative">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-[40%] relative h-75 md:h-100">
            <Image
              src="/images/img6.jpg"
              alt="user"
              fill
              sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw 33vw"
              className="object-cover"
            />
          </div>

          <div className="w-full md:w-[60%] p-6 bg-container flex flex-col justify-between gap-5">
            <div>
              <h1 className="text-dark-bg font-bold text-xl md:text-2xl">
                A Game Changer For My Home!
              </h1>
              <p className="text-textGray mt-4 text-sm md:text-base">
                Switching to Solvix was one of the best decisions for my family.
                Our electricity bills have dropped by nearly 70%, and we feel
                great knowing we&apos;re contributing to a cleaner planet. The
                team was incredibly professional, and the installation process
                was seamless. Highily recommended!
              </p>
            </div>

            <div className="mb-15 md:mb-0">
              <span className="text-dark-bg font-bold">John Darell</span> - Los
              Angeles, CA
            </div>
          </div>
        </div>

        <div className="w-full md:w-30 flex justify-between px-6 md:px-0 absolute bottom-5 right-0 md:right-4 md:justify-center gap-6 mt-4">
          <Button className="w-10 h-10 rounded-full bg-transparent border-[1px] border-dark-bg group hover:bg-dark-bg cursor-pointer">
            <ArrowLeft size={24} className="text-dark-bg group-hover:text-container"/>
          </Button>
          <Button className="w-10 h-10 rounded-full border-[1px] bg-dark-bg cursor-pointer">
            <ArrowRight size={30} className="text-container"/>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
