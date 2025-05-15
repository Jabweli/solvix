import CTA from "@/components/home/cta";
import StatCounter from "@/components/StatCounter";
import { Award } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Solvix | About",
  description:
    "Solvix is your trusted source for solar and green energy solutions. Discover expert insights, products, and tips on harnessing solar power to create a cleaner, more sustainable future.",
};

export default function About() {
  return (
    <>
      {/* hero */}
      <div className="responsive-padding py-10">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl text-center">
          <span className="text-hgreen">Powering</span> A Brighter{" "}
          <span className="text-hgreen">Future</span>
        </h1>
        <p className="text-textGray text-sm lg:text-[15px] text-center mt-3">
          Join us in building a sustainable, cost effective future powered by
          the sun.
        </p>

        <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-[80vh] mt-6 lg:mt-8">
          <Image
            src="/images/img3.jpg"
            alt="wind turbine"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 lg:mt-20 gap-10">
          <div className="flex flex-col items-center justify-center text-center">
            <Award size={60} className="text-hgreen" />
            <h1 className="text-hgreen font-semibold text-base lg:text-xl mt-3">
              Best Solar Energy Provider 2024
            </h1>
            <p className="text-textGray text-sm lg:text-[15px] mt-2">
              Recognized for excellence in solar solutions and customer service
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <Award size={60} className="text-hgreen" />
            <h1 className="text-hgreen font-semibold text-base lg:text-xl mt-3">
              Top 10 Green Tech Leaders
            </h1>
            <p className="text-textGray text-sm lg:text-[15px] mt-2">
              Recognized for excellence in solar solutions and customer service
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <Award size={60} className="text-hgreen" />
            <h1 className="text-hgreen font-semibold text-base lg:text-xl mt-3">
              Sustainability Leadership Award
            </h1>
            <p className="text-textGray text-sm lg:text-[15px] mt-2">
              Recognized for excellence in solar solutions and customer service
            </p>
          </div>
        </div>
      </div>

      {/* about description */}
      <div className="responsive-padding py-10 lg:py-17">
        <div className="block lg:hidden mb-4">
          <h2 className="sub-title text-link-active text-center">
            {"// ABOUT US"}
          </h2>
          <h1 className="title text-dark-bg text-center w-full md:w-2/3 lg:w-1/2 md:mx-auto">
            Innovating Solar Solutions For A Sustainable Tomorrow
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 gap-y-4">
          <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-auto">
            <Image
              src="/images/img4.jpeg"
              alt="wind turbine"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-between gap-y-8">
            <div className="hidden lg:block">
              <h2 className="sub-title text-link-active">{'// ABOUT US'}</h2>
              <h1 className="title text-dark-bg w-full">
                Innovating Solar Solutions For A Sustainable Tomorrow
              </h1>
            </div>
            <p className="text-textGray text-sm lg:text-base">
              Solvix is a leading provider of solar energy solutions, helping
              home owners, bussinesses, and communities transition to clean,
              renewable power. Our cutting-edge technology and expert team
              ensure maximum energy efficiency, long-term savings, and
              environmental impact reduction.
            </p>

            <StatCounter />
          </div>
        </div>
      </div>

      {/* our value */}
      <div className="responsive-padding py-10 lg:py-17">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-2">
          <div>
            <h2 className="sub-title text-link-active text-center md:text-left">
              {'// OUR VALUES'}
            </h2>
            <h1 className="title text-dark-bg text-center md:text-left w-full md:w-2/3">
              Our Values At Solvix Solar Panel Solutions
            </h1>
          </div>
          <p className="text-textGray text-sm lg:text-base text-center md:text-left">
            At Solvix, our values are the driving force behind everything.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-4 mt-6 lg:mt-10">
          <div className="flex flex-col bg-container p-6 rounded-sm">
            <Award size={60} className="text-hgreen" />
            <h1 className="text-hgreen font-semibold text-base lg:text-2xl mt-6">
              Innovation
            </h1>
            <p className="text-textGray text-sm lg:text-[15px] mt-2">
              Constantly evolving with advanced solar technology and smart
              energy solutions.
            </p>
          </div>

          <div className="flex flex-col bg-container p-6 rounded-sm">
            <Award size={60} className="text-hgreen" />
            <h1 className="text-hgreen font-semibold text-base lg:text-2xl mt-6">
              Sustainability
            </h1>
            <p className="text-textGray text-sm lg:text-[15px] mt-2">
              Dedicated to reducing carbon footprints and promoting renewable
              energy.
            </p>
          </div>

          <div className="flex flex-col bg-container p-6 rounded-sm">
            <Award size={60} className="text-hgreen" />
            <h1 className="text-hgreen font-semibold text-base lg:text-2xl mt-6">
              Customer Commitment
            </h1>
            <p className="text-textGray text-sm lg:text-[15px] mt-2">
              Prioritizing seamless installation, personalized support, and
              long-term satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* gallery */}
      <div className="responsive-padding py-10 lg:py-17 bg-dark-bg">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-2">
          <div className="w-full lg:w-1/2">
            <h2 className="sub-title text-link-active text-center lg:text-left">
              {'// GALLERY'}
            </h2>
            <h1 className="title text-container text-center lg:text-left w-2/3 mx-auto lg:mx-0">
              See The Power Of Solar In Action
            </h1>
          </div>
          <p className="text-textLight text-sm lg:text-base text-center lg:text-left w-[90%] md:w-[70%] lg:w-1/2">
            Explore our latest solar installations, innovative projects, and
            sustainable solutions making a difference in communities worldwide.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-[auto_auto] md:grid-cols-[10rem_10rem_10rem_auto] lg:grid-cols-[15rem_15rem_15rem_auto] xl:grid-cols-[18rem_18rem_18rem_auto] h-max lg:h-[100vh] gap-4">
          <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-auto">
            <Image
              src="/images/img3.jpeg"
              alt="wind turbine"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-auto">
            <Image
              src="/images/img4.jpeg"
              alt="wind turbine"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-[55vh] md:h-auto order-last col-span-2 md:order-none md:row-span-2">
            <Image
              src="/images/img6.jpg"
              alt="wind turbine"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-auto">
            <Image
              src="/images/img2.jpg"
              alt="wind turbine"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-auto">
            <Image
              src="/images/img3.jpg"
              alt="wind turbine"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* team */}
      <div className="responsive-padding py-10 lg:py-20">
        <h2 className="sub-title text-link-active text-center">{'// OUR TEAM'}</h2>
        <h1 className="title text-dark-bg text-center">Meet Our Best Team</h1>
        <p className="text-textGray text-sm lg:text-base text-center mt-2">
          Passionate experts driving the future of solar energy
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="flex flex-col gap-4">
            <div className="relative w-full h-70 lg:h-95">
              <Image
                src="/images/worker-2.jpeg"
                alt=""
                fill
                sizes="(mex-width:768px) 100vw, (max-width:1200px) 50vw,33vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-dark-bg font-semibold text-base lg:text-lg">Micheal Reynolds</h1>
              <span className="text-sm text-textGray">CEO & Founder</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative w-full h-70 lg:h-95">
              <Image
                src="/images/worker-1.jpg"
                alt=""
                fill
                sizes="(mex-width:768px) 100vw, (max-width:1200px) 50vw,33vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-dark-bg font-semibold text-base lg:text-lg">Leroy O&apos;Kon</h1>
              <span className="text-sm text-textGray">Chief Technology Officer</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative w-full h-70 lg:h-95">
              <Image
                src="/images/worker-4.jpeg"
                alt=""
                fill
                sizes="(mex-width:768px) 100vw, (max-width:1200px) 50vw,33vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-dark-bg font-semibold text-base lg:text-lg">David Harrison</h1>
              <span className="text-sm text-textGray">Lead Solar Engineer</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative w-full h-70 lg:h-95">
              <Image
                src="/images/worker-5.jpg"
                alt=""
                fill
                sizes="(mex-width:768px) 100vw, (max-width:1200px) 50vw,33vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-dark-bg font-semibold text-base lg:text-lg">Emily Thompson</h1>
              <span className="text-sm text-textGray">Customer Support Director</span>
            </div>
          </div>
        </div>
      </div>
      <CTA type="about"/>
    </>
  );
}
