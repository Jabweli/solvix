import React from "react";
import { CloudLightning, DollarSign, House, Zap } from "lucide-react";
import Image from "next/image";
import * as motion from "framer-motion/client";

const Benefits = () => {
  return (
    <div className="flex flex-col md:flex-row gap-x-16 gap-y-6 bg-dark-bg responsive-padding py-16">
      <div className="flex-1 flex flex-col md:justify-between">
        <div className="text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
              },
            }}
            viewport={{ once: true }}
            className="sub-title text-subheading"
          >
            {"// BENEFITS"}
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: "2rem" }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className="title text-container"
          >
            The Benefits Of Going Solar With Solvix
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0, y: "2rem" }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          viewport={{ once: true }}
          className="text-textLight text-[15px] text-center md:text-left mt-4"
        >
          Unlock the power of solar energy and enjoy long-term advantages.
        </motion.p>
      </div>

      <div className="flex-2 flex flex-col lg:flex-row gap-8">
        <motion.div
          initial={{ opacity: 0, y: "2rem" }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }}
          viewport={{ once: true }}
          className="w-full lg:flex-1 relative h-96 md:h-110"
        >
          <Image
            src="/images/img4.jpeg"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </motion.div>

        <div className="w-full lg:flex-1 flex flex-col justify-between gap-y-8">
          <motion.div
            initial={{ opacity: 0, x: "4rem" }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <div className="w-12 h-12 rounded-full grid place-items-center bg-greenicon-bg">
              <DollarSign className="text-greenicon" />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <h1 className="text-lg font-semibold text-container">
                Significant Savings
              </h1>
              <p className="text-textLight text-sm">
                Reduce your electricity bills by up to 70% with solar power.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "4rem" }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: 0.5 },
            }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <div className="w-12 h-12 rounded-full grid place-items-center bg-greenicon-bg">
              <Zap className="text-greenicon" />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <h1 className="text-lg font-semibold text-container">
                Energy Independance
              </h1>
              <p className="text-textLight text-sm">
                Break free from unpredictable utility rates and power outages.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "4rem" }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: 0.7 },
            }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <div className="w-12 h-12 rounded-full grid place-items-center bg-greenicon-bg">
              <CloudLightning className="text-greenicon" />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <h1 className="text-lg font-semibold text-container">
                Eco-Friendly Solution
              </h1>
              <p className="text-textLight text-sm">
                Lower carbon emissions and promote a cleaner planet.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "4rem" }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: 0.9 },
            }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <div className="w-12 h-12 rounded-full grid place-items-center bg-greenicon-bg">
              <House className="text-greenicon" />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <h1 className="text-lg font-semibold text-container">
                Increased Proerty Value
              </h1>
              <p className="text-textLight text-sm">
                Homes with solar sell faster and at higher prices.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
