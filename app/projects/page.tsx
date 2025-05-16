import CustomBtn from "@/components/CustomBtn";
import CustomPagination from "@/components/CustomPagination";
import CTA from "@/components/home/cta";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/constants/projects";
import { Hotel } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Solvix | Projects",
  description: "Explore how Solvix is transforming homes, businesses, and communities with cutting-edge solar energy solutions.",
};


export default function Projects() {
  return (
    <div>
      <div className="responsive-padding py-10 mt-8 lg:mt-15">
        <h1 className="font-bold text-textBlack text-3xl md:text-4xl lg:text-6xl text-center">
          Our <span className="text-hgreen">Solar</span> Success{" "}
          <span className="text-hgreen">Stories</span>
        </h1>
        <p className="text-textGray text-sm lg:text-[15px] text-center mt-3 w-[95%] md:w-[60%] md:mx-auto">
          Explore how Solvix is transforming homes, businesses, and communities
          with cutting-edge solar energy solutions.
        </p>
      </div>

      {/* recent project */}
      <div className="responsive-padding grid grid-cols-1 md:grid-cols-2">
        <div className="bg-dark-bg p-6 order-last md:order-none flex flex-col justify-between gap-6">
          <div>
            <h2 className="sub-title text-subheading">{"// RECENT PROJECT"}</h2>
            <h1 className="title text-container w-full md:w-9/12">
              Solar-Powered Health Facility
            </h1>
            <p className="text-sm lg:text-[15px] mt-6 text-textLight">
              Installed high-efficiency solar panels across an eco-friendly
              residential complex, helping homeowners save on electricity while
              promoting living.
            </p>

            <Separator className="bg-textGray/50 my-6" />

            <p className="font-semibold text-subheading text-[17px]">
              Commercial Solar System
            </p>
          </div>

          <div className="float-end">
            <p className="text-textLight">Los Angeles, CA - March 2024</p>
          </div>
        </div>
        <div className="relative w-full h-80 md:h-auto lg:h-113">
          <Image
            src="/images/img1.jpg"
            alt="user"
            fill
            sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw 33vw"
            className="object-cover !rounded-none"
          />
          <div className="flex items-center gap-2 py-3 px-4 w-max bg-container absolute bottom-5 right-5 shadow-md text-sm text-dark-bg">
            <Hotel className="text-dark-bg" />
            Green Haven Residences
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="responsive-padding py-10">
        <div className="w-full flex flex-col lg:flex-row gap-6 lg:items-end">
          <div className="w-full lg:w-7/12 xl:w-2/3 text-center lg:text-left">
            <h2 className="sub-title text-hgreen">{"// PROJECTS"}</h2>
            <h1 className="title text-textBlack w-full md:w-2/3 mx-auto lg:w-10/12 lg:mx-0">
              Explore All Our Solar Panel Installations And Success Stories
            </h1>
          </div>

          <div className="w-full lg:w-5/12 xl:w-1/3 flex gap-3 overflow-x-auto xl:overflow-x-visible sm:justify-center lg:justify-start">
            <Button
              variant="outline"
              className="rounded-full h-10 px-5 cursor-pointer bg-dark-bg text-container"
            >
              All categories
            </Button>
            <Button
              variant="outline"
              className="rounded-full h-10 px-5 cursor-pointer"
            >
              Educational
            </Button>
            <Button
              variant="outline"
              className="rounded-full h-10 px-5 cursor-pointer"
            >
              Health Facility
            </Button>
          </div>
        </div>

        <Separator className="mt-10 mb-6 py-[1px]" />

        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <div key={project.title} className="flex flex-col-reverse md:flex-row gap-4 border-b border-bg-border py-6">
              <div className="w-full flex flex-col gap-4 md:w-1/2 xl:w-2/3">
                <span className="text-hgreen text-[15px] font-medium">
                  {project.category}
                </span>
                <div className="flex flex-col lg:flex-row gap-4 flex-grow">
                  <h1 className="text-textBlack font-semibold text-2xl flex-1">
                    {project.title}
                  </h1>
                  <p className="text-[15px] lg:text-base text-textGray flex-1">
                    {project.description}
                  </p>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="text-textGray font-semibold text-sm lg:text-base lg:flex-1">
                    {project.location} • {project.date}
                  </div>
                  <div className="flex-1 flex justify-end lg:justify-start">
                    <CustomBtn
                      text="View More Detail"
                      textColor="text-container"
                      bgColor="bg-dark-bg"
                      iconBg="bg-container"
                      iconColor="text-dark-bg"
                      href={`/projects/${project.slug}`}
                    />
                  </div>
                </div>
              </div>

              <div className="relative w-full md:w-1/2 xl:w-1/3 h-80 lg:h-96">
                <Image
                  src={project.image}
                  alt="user"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw 33vw"
                  className="object-cover !rounded-none"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7">
          <CustomPagination />
        </div>
      </div>

      <CTA
        title="Inspired By Our Projects? Let's Bring Solar To Your Space!"
        isHead={false}
      />
    </div>
  );
}
