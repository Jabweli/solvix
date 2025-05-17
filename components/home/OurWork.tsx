import Image from "next/image";
import React from "react";
import * as motion from "framer-motion/client";

const OurWork = () => {
  return (
    <div className="responsive-padding bg-dark-bg py-8 md:py-15">
      <div className="block md:hidden mb-6">
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
          className="sub-title text-subheading text-center md:text-left"
        >
          {"// OUR WORK"}
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: "2rem" }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          viewport={{ once: true }}
          className="title text-center md:text-left text-container w-2/3 mx-auto"
        >
          Switching To Solar In 3 Easy Steps
        </motion.h1>
      </div>

      <div className="flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-6/12 lg:w-7/12">
          <div className="md:block hidden">
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
              className="sub-title text-subheading text-center md:text-left"
            >
              {"// OUR WORK"}
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: "2rem" }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}
              className="title text-center md:text-left text-container w-full md:w-2/3 lg:w-1/2"
            >
              Switching To Solar In 3 Easy Steps
            </motion.h1>
          </div>

          <div className="mt-8 flex flex-wrap gap-y-8 lg:gap-0 lg:flex-row lg:h-60 xl:h-80">
            <div className="pr-6 w-full lg:flex-1">
              <motion.h1
                initial={{ opacity: 0, y: "2rem" }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.1 },
                }}
                viewport={{ once: true }}
                className="text-subheading font-semibold text-lg"
              >
                01 Consulation
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: "2rem" }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.2 },
                }}
                viewport={{ once: true }}
                className="text-sm text-textGray mt-2 lg:mt-3"
              >
                Get a free energy audit and custom solar solution.
              </motion.p>
            </div>
            <div className="w-full lg:flex-1 flex flex-col justify-center lg:border-dashed lg:border-r-[1px] lg:border-l-[1px] lg:border-textGray lg:px-6">
              <motion.h1
                initial={{ opacity: 0, y: "2rem" }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.5 },
                }}
                viewport={{ once: true }}
                className="text-subheading font-semibold text-lg"
              >
                02 Installation
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: "2rem" }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.6 },
                }}
                viewport={{ once: true }}
                className="text-sm text-textGray mt-2 lg:mt-3"
              >
                Our expert team ensures a smooth and quick installation.
              </motion.p>
            </div>
            <div className="w-full lg:flex-1 flex flex-col justify-end lg:px-6">
              <motion.h1
                initial={{ opacity: 0, y: "2rem" }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.7 },
                }}
                viewport={{ once: true }}
                className="text-subheading font-semibold text-lg"
              >
                03 Savings Begin
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: "2rem" }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.8 },
                }}
                viewport={{ once: true }}
                className="text-sm text-textGray mt-2 lg:mt-3"
              >
                Enjoy reduced energy bills and sustainable living.
              </motion.p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-6/12 lg:w-5/12 grid grid-cols-2 gap-4 h-100 md:h-auto">
          <motion.div
            initial={{ opacity: 0, y: "2rem" }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.1 },
            }}
            viewport={{ once: true }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/img1.jpg"
              alt="user"
              fill
              sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw 33vw"
              className="object-cover"
            />
          </motion.div>
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: "-2rem" }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.1 },
              }}
              viewport={{ once: true }}
              className="relative w-full h-1/2"
            >
              <Image
                src="/images/img3.jpg"
                alt="user"
                fill
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw 33vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "2rem" }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.1 },
              }}
              viewport={{ once: true }}
              className="relative w-full h-1/2"
            >
              <Image
                src="/images/img6.jpg"
                alt="user"
                fill
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw 33vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
