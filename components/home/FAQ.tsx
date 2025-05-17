import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import * as motion from "framer-motion/client";

const FAQ = () => {
  return (
    <div className="responsive-padding py-10 lg:py-20">
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
        {"// FAQ"}
      </motion.h2>
      <motion.h1
        initial={{ opacity: 0, y: "2rem" }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 0.1 },
        }}
        viewport={{ once: true }}
        className="title text-textBlack text-center"
      >
        Frequently Asked Questions
      </motion.h1>

      <div>
        <Accordion
          type="multiple"
          defaultValue={["faq-1", "faq-2", "faq-3", "faq-4"]}
          className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10"
        >
          <AccordionItem value="faq-1" className="border-t border-b-0">
            <AccordionTrigger className="text-hgreen font-semibold text-base lg:text-lg">
              What makes Solvix different from other solar providers?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-textGray text-sm md:text-base">
                At Solvix, we deliver efficient solar technology, expert
                installation, and reliable support - making clean energy
                affordable and available for all.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-2" className="border-t border-b-0">
            <AccordionTrigger className="text-hgreen font-semibold text-base lg:text-lg">
              What types of solar solutions does Solvix offer?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-textGray text-sm md:text-base">
                We provide residential, commercial, off-grid and battery storage
                solutions, as well as EV charging Stations.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-3" className="border-t border-b-0">
            <AccordionTrigger className="text-hgreen font-semibold text-base lg:text-lg">
              How does the consultation process work?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-textGray text-sm md:text-base">
                We start with a free consulation to understand your energy
                needs, property and budget goals.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-4" className="border-t border-b-0">
            <AccordionTrigger className="text-hgreen font-semibold text-base lg:text-lg">
              How much does a Solvix solar system cost?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-textGray text-sm md:text-base">
                Solar costs vary by system size, energy use and location - but
                at Solvix, we&apos;re committed to making solar accessible and
                affordable for all.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
