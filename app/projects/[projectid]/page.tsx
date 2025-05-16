import CTA from "@/components/home/cta";
import { projects } from "@/constants/projects";
import { Briefcase, Calendar, Hotel, MapPin } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";


export const metadata: Metadata = {
  title: "Solvix | Project",
  description: "Solvix solar panel installation project"
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ projectid: string }>;
}) {

  const slug =(await params).projectid;

  const project = projects.filter(project => project.slug === slug)[0];
  console.log(project)
  return (
    <div>
      <div className="responsive-padding py-10 mt-8 lg:mt-15">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl text-center">
          <span className="text-hgreen">Sustainable</span> Living{" "}
        </h1>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl text-center">
          For <span className="text-hgreen">Community</span>
        </h1>

        <div className="relative w-full h-80 md:h-90 lg:h-113 mt-6 lg:mt-8 rounded-sm overflow-hidden">
          <Image
            src={project.image}
            alt="wind turbine"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="responsive-padding flex flex-col-reverse md:flex-row-reversedd xl:flex-row gap-6 mb-20">
        <div className="w-full xl:w-8/12">
          <h2 className="text-xl font-semibold text-dark-bg">Overview</h2>
          <p className="text-textGray text-sm lg:text-base mt-4">
            {project.overview}
          </p>

          <h2 className="text-xl font-semibold text-dark-bg mt-8">Execution</h2>
          <p className="text-textGray text-sm lg:text-base mt-4">
            To ensure maximum efficiency and savings, Solvix implemented the
            following steps:
          </p>
          <ul className="mt-4 list-disc pl-4 lg:pl-8 flex flex-col gap-4 text-sm lg:text-base">
            <li className="text-textGray">
              <span className="font-semibold text-textBlack">
                Custom Energy Assessment
              </span>{" "}
              - Evaluated each home&apos;s energy needs and solar potential.
            </li>
            <li className="text-textGray">
              <span className="font-semibold text-textBlack">
                High-Efficiency Solar Panel Installation
              </span>{" "}
              - Installed premium monocrystalline solar panels for optimal
              energy generation.
            </li>
            <li className="text-textGray">
              <span className="font-semibold text-textBlack">
                Smart Solar Monitoring System
              </span>{" "}
              - Integrated real-time energy tracking for homeowners.
            </li>
            <li className="text-textGray">
              <span className="font-semibold text-textBlack">
                Net Metering Integration
              </span>{" "}
              - Enabled excess energy to be sent back into the grid for
              additional savings.
            </li>
            <li className="text-textGray">
              <span className="font-semibold text-textBlack">
                Battery Storage Options
              </span>{" "}
              - Provided residents with an optional solar battery system for
              energy backup.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-dark-bg mt-8">Result</h2>
          <ul className="mt-4 list-disc pl-4 lg:pl-8 flex flex-col gap-4 text-sm lg:text-base">
            <li className="text-textGray">
              60% Reduction in monthly electricity bills for residents.
            </li>
            <li className="text-textGray">
              Over 500 tons of C0z emissions prevented annually
            </li>
            <li className="text-textGray">
              Smart Solar Monitoring System - Integrated real-time energy
              tracking for homeowners.
            </li>
            <li className="text-textGray">
              Sustainable Living Enhanced - Contributing to an eco-friendly
              community.
            </li>
            <li className="text-textGray">
              Higher Property Value - Homes equipped with solar panels saw an
              increase in resale value
            </li>
          </ul>

          <div className="mt-6 bg-container rounded-sm p-8">
            <div className="text-sm lg:text-[17px] italic text-textGray pb-5 border-b-[1px] border-textLight/80">
              Solvix has transformed our community into a model for sustainable
              living. Our residents are thrilled with the significant cost
              savings and the positive environmental impact. The team was
              professional, and the installation was seamless. We couldn&apos;t
              be happier with the results!
            </div>
            <p className="text-dark-bg text-lg font-semibold mt-5">
              Emma Laurence
            </p>
            <span className="text-textGray">Green Haven Residence HOA</span>
          </div>

          <h2 className="text-xl font-semibold text-dark-bg mt-8">
            Project Gallery
          </h2>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-4 gap-4">
            <div className="relative w-full h-60 rounded-sm overflow-hidden">
              <Image
                src="/images/img3.jpeg"
                alt="wind turbine"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-60 rounded-sm overflow-hidden">
              <Image
                src="/images/img1.jpg"
                alt="wind turbine"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-60 rounded-sm overflow-hidden">
              <Image
                src="/images/img2.jpg"
                alt="wind turbine"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-60 rounded-sm overflow-hidden">
              <Image
                src="/images/img3.jpg"
                alt="wind turbine"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full xl:w-4/12 border p-4 lg:p-6 rounded-sm h-max">
          <h1 className="text-xl font-semibold text-dark-bg mb-4">
            About Project
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-container grid place-items-center">
                <Hotel size={30} className="text-greenicon" />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <h2 className="text-lg font-semibold">Service</h2>
                <span className="text-[15px] text-textGray">
                  {project.title}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-container grid place-items-center">
                <Briefcase size={30} className="text-greenicon" />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <h2 className="text-lg font-semibold">Client</h2>
                <span className="text-[15px] text-textGray">
                  {project.client}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-container grid place-items-center">
                <Calendar size={30} className="text-greenicon" />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <h2 className="text-lg font-semibold">Date</h2>
                <span className="text-[15px] text-textGray">{project.date}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-container grid place-items-center">
                <MapPin size={30} className="text-greenicon" />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <h2 className="text-lg font-semibold">Location</h2>
                <span className="text-[15px] text-textGray">
                  {project.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTA
        isBgImage={true}
        title="Ready To Bring Solar To Your Community?"
        desc="Join the movement towards sustainable and cost-effective living with Solvix."
        isHead={false}
      />
    </div>
  );
}
