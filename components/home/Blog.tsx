import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as motion from "framer-motion/client";

const Blog = () => {
  return (
    <div className="responsive-padding py-10 md:py-10">
      <motion.h2
        initial={{ opacity: 0, y: "2rem" }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
        viewport={{ once: true }}
        className="sub-title text-link-active text-center"
      >
        {"// BLOG"}
      </motion.h2>
      <motion.h1
        initial={{ opacity: 0, y: "2rem" }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 0.1 },
        }}
        viewport={{ once: true }}
        className="title text-textBlack text-center w-full md:w-2/3 lg:w-1/2 md:mx-auto"
      >
        Stay Informed With Expert Insights, Tips About Solar Energy
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-8">
        <motion.div
          initial={{ opacity: 0, y: "2rem" }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.2 },
          }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-70 lg:h-80">
            <Image
              src="/images/img1.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw 33vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-2 py-4">
            <p className="text-sm">
              <span className="text-hgreen font-semibold">
                Solar Policies & Incentives .
              </span>{" "}
              February 12, 2025
            </p>
            <Link href="" className="text-xl font-bold text-textBlack">
              Government Incentives & Rebates for Solar Energy
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: "2rem" }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.3 },
          }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-70 lg:h-80">
            <Image
              src="/images/img2.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw 33vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-2 py-4">
            <p className="text-sm">
              <span className="text-hgreen font-semibold">Cost Savings .</span>{" "}
              February 12, 2025
            </p>
            <Link href="" className="text-xl font-bold text-textBlack">
              How Solar Energy Can Save You Thousands
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: "2rem" }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.4 },
          }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-70 lg:h-80">
            <Image
              src="/images/img3.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw 33vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-2 py-4">
            <p className="text-sm">
              <span className="text-hgreen font-semibold">
                Solar Industry Trends .
              </span>{" "}
              January 12, 2025
            </p>
            <Link href="" className="text-xl font-bold text-textBlack">
              Top 5 Reasons To Invest in Solar Panels in 2025
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
