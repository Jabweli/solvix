import { BatteryCharging, Briefcase, House, Zap } from "lucide-react";
import React from "react";
import * as motion from "framer-motion/client";

const SolarSolutions = () => {
  return (
    <div className="responsive-padding py-10 md:py-20">
      <motion.h2
        initial={{ opacity: 0, y: "2rem" }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 0.2 },
        }}
        viewport={{ once: true }}
        className="sub-title text-link-active text-center"
      >
        {"// SERVICES"}
      </motion.h2>
      <motion.h1
        initial={{ opacity: 0, y: "2rem" }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 0.4 },
        }}
        viewport={{ once: true }}
        className="title text-textBlack text-center"
      >
        Our Solar Solutions
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 lg:mt-16">
        <motion.div
          initial={{ opacity: 0, y: "2rem" }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.1 },
          }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <House size={40} className="text-link-active" />
          <div className="flex flex-col gap-2">
            <h1 className="text-textBlack font-semibold text-lg">
              Residential Solar
            </h1>
            <p className="text-textGray text-sm">
              Power your home with clean energy and save on utility costs.
            </p>
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
          className="flex flex-col gap-4"
        >
          <Briefcase size={40} className="text-link-active" />
          <div className="flex flex-col gap-2">
            <h1 className="text-textBlack font-semibold text-lg">
              Commercial Solar
            </h1>
            <p className="text-textGray text-sm">
              Optimise energy efficiency and reduce operational expenses.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: "2rem" }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.5 },
          }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <BatteryCharging size={40} className="text-link-active" />
          <div className="flex flex-col gap-2">
            <h1 className="text-textBlack font-semibold text-lg">
              Solar Battery Storage
            </h1>
            <p className="text-textGray text-sm">
              Store energy for uninterrupted power supply.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: "2rem" }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.7 },
          }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <Zap size={40} className="text-link-active" />
          <div className="flex flex-col gap-2">
            <h1 className="text-textBlack font-semibold text-lg">
              EV Charging Stattions
            </h1>
            <p className="text-textGray text-sm">
              Smart solutions for electric vehicle owners.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SolarSolutions;
