"use client";
import StatCounter from "@/components/StatCounter";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa6";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <header className="h-auto md:h-screen w-full responsive-padding py-5 flex flex-col md:flex-row gap-8">
      <div className="w-full flex flex-col justify-between md:w-1/2">
        <div className="flex items-center justify-between flex-col md:items-start md:justify-start gap-5">
          <div className="w-max py-3 px-7 rounded-full bg-container text-center">
            <span className="text-dark-bg font-semibold text-sm">
              New Energy For Our System
            </span>
          </div>
          <div className="flex flex-col">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                type: "ease-in",
              }}
              className="font-bold text-3xl md:text-4xl lg:text-6xl"
            >
              <span className="text-hgreen">Clean</span> Renewable
            </motion.h1>
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                type: "ease-in",
                delay: 1,
              }}
              className="font-bold text-3xl md:text-4xl lg:text-6xl"
            >
              Limitless <span className="text-hgreen">Energy</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: "ease-in",
              delay: 1.5,
            }}
            className="text-sm text-textGray text-center md:text-left"
          >
            Switch to solar with Solvix and experience cost savings, energy
            independence, and a greener future—powered by clean, renewable
            energy that benefits both your wallet and the planet.
          </motion.p>

          <motion.div
            initial={{ x: "-2rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: "ease-in",
              delay: 1.6,
            }}
            className="flex items-center justify-center w-max gap-4 bg-dark-bg py-2 px-2 rounded-full mt-0 md:mt-6"
          >
            <p className="text-container text-sm pl-4">Get Free Consulation</p>
            <Link
              href=""
              className="p-2 bg-container rounded-full"
              aria-label="Get Free Consultation"
            >
              <ArrowUpRight className="text-dark-bg" />
            </Link>
          </motion.div>
        </div>

        <StatCounter className="mt-6" />
      </div>

      <motion.div
        initial={{ x: "4rem", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          type: "ease-in",
        }}
        className="w-full md:w-1/2 relative h-70 md:h-auto"
      >
        <Image
          src="/images/img3.jpeg"
          alt="wind turbine"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-xl object-cover"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            type: "ease-in",
            delay: 0.5,
          }}
          className="hidden md:block absolute bottom-10 right-6 w-50 bg-container p-1 rounded-md"
        >
          <div className="relative w-full h-35">
            <Image
              src="/images/img3.jpg"
              alt=""
              fill
              priority
              sizes="(max-width:768px 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-md object-cover"
            />
            <Button
              aria-label="play"
              className="w-9 h-9 bg-container rounded-full grid place-items-center absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2"
            >
              <FaPlay className="text-dark-bg" />
            </Button>
          </div>
          <p className="text-textGray text-xs px-3 py-2">
            Unlock the power of solar energy and enjoy long-term
          </p>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Hero;
