import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import * as motion from "framer-motion/client";

const SolutionsAccordion = () => {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-2"
      className="w-full responsive-padding"
    >
      <AccordionItem value="item-1">
        <motion.div
          initial={{ opacity: 0, y: "4rem" }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          className="p-0 m-0"
          viewport={{once:true}}
        >
          <AccordionTrigger>
            <div className="flex gap-3 flex-1">
              <h1 className="text-base lg:text-xl text-dark-bg font-semibold">
                01
              </h1>
              <h1 className="text-base lg:text-xl text-dark-bg font-semibold">
                Sustainable Living For A Community
              </h1>
            </div>
            <h1 className="hidden md:block text-sm lg:text-base text-textGray">
              Green Haven Residences - Los Angeles, CA
            </h1>
          </AccordionTrigger>
          <AccordionContent>
            <div className="relative w-full">
              <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
                <Image
                  src="/images/img10.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 relative md:absolute md:bottom-10 md:left-10">
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="bg-container py-2 px-4 w-max rounded-full flex items-center justify-center text-hgreen font-semibold">
                    Residential Solar
                  </div>
                  <div className="bg-container py-2 px-4 w-max rounded-full flex items-center justify-center text-hgreen font-semibold">
                    Solar Energy
                  </div>
                  <div className="bg-container py-2 px-4 w-max rounded-full flex items-center justify-center text-hgreen font-semibold">
                    Energy Saving
                  </div>
                </div>
                <p className="text-textGray md:text-textLight mt-4 text-sm md:text-base">
                  Switching to Solvix was one of the best decisions for my
                  family. Our electricity bills have dropped by nearly 70%, and
                  we feel great knowing we&apos;re contributing to a cleaner
                  planet. The team was incredibly professional, and the
                  installation process was seamless. Highily recommended!
                </p>
              </div>
            </div>
          </AccordionContent>
        </motion.div>
      </AccordionItem>

      <AccordionItem value="item-2">
        <motion.div
          initial={{ opacity: 0, y: "4rem" }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.2 },
          }}
          viewport={{once:true}}
          className="p-0 m-0"
        >
          <AccordionTrigger>
            <div className="flex gap-3 flex-1">
              <h1 className="text-base lg:text-xl text-dark-bg font-semibold">
                02
              </h1>
              <h1 className="text-base lg:text-xl text-dark-bg font-semibold">
                Solar - Powered Retail
              </h1>
            </div>
            <h1 className="hidden md:block text-sm lg:text-base text-textGray">
              BellaMart Superstore - Houston, TX
            </h1>
          </AccordionTrigger>
          <AccordionContent>
            <div className="relative w-full">
              <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
                <Image
                  src="/images/img3.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 relative md:absolute md:bottom-10 md:left-10">
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="bg-container py-2 px-4 w-max rounded-full flex items-center justify-center text-hgreen font-semibold">
                    Residential Solar
                  </div>
                  <div className="bg-container py-2 px-4 w-max rounded-full flex items-center justify-center text-hgreen font-semibold">
                    Solar Energy
                  </div>
                  <div className="bg-container py-2 px-4 w-max rounded-full flex items-center justify-center text-hgreen font-semibold">
                    Energy Saving
                  </div>
                </div>
                <p className="text-textGray md:text-textLight mt-4 text-sm md:text-base">
                  Switching to Solvix was one of the best decisions for my
                  family. Our electricity bills have dropped by nearly 70%, and
                  we feel great knowing we&apos;re contributing to a cleaner
                  planet. The team was incredibly professional, and the
                  installation process was seamless. Highily recommended!
                </p>
              </div>
            </div>
          </AccordionContent>
        </motion.div>
      </AccordionItem>

      <AccordionItem value="item-3">
        <motion.div
          initial={{ opacity: 0, y: "4rem" }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.3 },
          }}
          viewport={{once:true}}
          className="p-0 m-0"
        >
          <AccordionTrigger>
            <div className="flex gap-3 flex-1">
              <h1 className="text-base lg:text-xl text-dark-bg font-semibold">
                03
              </h1>
              <h1 className="text-base lg:text-xl text-dark-bg font-semibold">
                Off-Grid Solar Farm
              </h1>
            </div>
            <h1 className="hidden md:block text-sm lg:text-base text-textGray">
              Harmony Eco Lodge - Los Angeles, CA
            </h1>
          </AccordionTrigger>
          <AccordionContent>
            <div className="relative w-full">
              <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
                <Image
                  src="/images/img9.jpeg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 relative md:absolute md:bottom-10 md:left-10">
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="bg-container py-2 px-4 w-max rounded-full flex items-center justify-center text-hgreen font-semibold">
                    Residential Solar
                  </div>
                  <div className="bg-container py-2 px-4 w-max rounded-full flex items-center justify-center text-hgreen font-semibold">
                    Solar Energy
                  </div>
                  <div className="bg-container py-2 px-4 w-max rounded-full flex items-center justify-center text-hgreen font-semibold">
                    Energy Saving
                  </div>
                </div>
                <p className="text-textGray md:text-textLight mt-4 text-sm md:text-base">
                  Switching to Solvix was one of the best decisions for my
                  family. Our electricity bills have dropped by nearly 70%, and
                  we feel great knowing we&apos;re contributing to a cleaner
                  planet. The team was incredibly professional, and the
                  installation process was seamless. Highily recommended!
                </p>
              </div>
            </div>
          </AccordionContent>
        </motion.div>
      </AccordionItem>

      <AccordionItem value="item-4">
        <motion.div
          initial={{ opacity: 0, y: "4rem" }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.4 },
          }}
          viewport={{once:true}}
          className="p-0 m-0"
        >
          <AccordionTrigger>
            <div className="flex gap-3 flex-1">
              <h1 className="text-base lg:text-xl text-dark-bg font-semibold">
                04
              </h1>
              <h1 className="text-base lg:text-xl text-dark-bg font-semibold">
                Smart Solar For Urban Infrastructure
              </h1>
            </div>
            <h1 className="hidden md:block text-sm lg:text-base text-textGray">
              City Transit Hub - Los Angeles, CA
            </h1>
          </AccordionTrigger>
          <AccordionContent>
            <div className="relative w-full">
              <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
                <Image
                  src="/images/img3.jpeg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 relative md:absolute md:bottom-10 md:left-10">
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="bg-container py-2 px-4 w-max rounded-full flex items-center justify-center text-hgreen font-semibold">
                    Residential Solar
                  </div>
                  <div className="bg-container py-2 px-4 w-max rounded-full flex items-center justify-center text-hgreen font-semibold">
                    Solar Energy
                  </div>
                  <div className="bg-container py-2 px-4 w-max rounded-full flex items-center justify-center text-hgreen font-semibold">
                    Energy Saving
                  </div>
                </div>
                <p className="text-textGray md:text-textLight mt-4 text-sm md:text-base">
                  Switching to Solvix was one of the best decisions for my
                  family. Our electricity bills have dropped by nearly 70%, and
                  we feel great knowing we&apos;re contributing to a cleaner
                  planet. The team was incredibly professional, and the
                  installation process was seamless. Highily recommended!
                </p>
              </div>
            </div>
          </AccordionContent>
        </motion.div>
      </AccordionItem>
    </Accordion>
  );
};

export default SolutionsAccordion;
