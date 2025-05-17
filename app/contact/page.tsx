import ContactForm from "@/components/contact/ContactForm";
import CTA from "@/components/home/cta";
import FAQ from "@/components/home/FAQ";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { LuFacebook, LuLinkedin } from "react-icons/lu";
import * as motion from "framer-motion/client";

export const metadata: Metadata = {
  title: "Solvix | Contact Us",
  description:
    "Explore how Solvix is transforming homes, businesses, and communities with cutting-edge solar energy solutions.",
};

export default function Contact() {
  return (
    <div>
      <div className="responsive-padding py-10 mt-8 lg:mt-15">
        <motion.h1
          initial={{ opacity: 0, y: "2rem" }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
          viewport={{ once: true }}
          className="font-bold text-textBlack text-3xl md:text-4xl lg:text-6xl text-center"
        >
          Get In <span className="text-hgreen">Touch</span> With{" "}
          <span className="text-hgreen">Solvix</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: "2rem" }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.2 },
          }}
          viewport={{ once: true }}
          className="text-textGray text-sm lg:text-[15px] text-center mt-3 w-[95%] md:w-[60%] mx-auto"
        >
          Interested in switching to solar? Have questions about our services?
          Our team is ready to help. Reach out to us today and take a first step
          towards energy independence.
        </motion.p>
      </div>

      <div className="responsive-padding py-10 lg:py-15 bg-dark-bg">
        <div className="block md:hidden">
          <motion.h1
            initial={{ opacity: 0, y: "2rem" }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1 },
            }}
            viewport={{ once: true }}
            className="text-container text-2xl font-semibold"
          >
            Have Questions Or Need Assistance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: "2rem" }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.2 },
            }}
            viewport={{ once: true }}
            className="my-4 text-sm text-textLight"
          >
            We&apos;re here to help! Whether you have inquiries about our
            services, need guidance on your next steps, or require support, our
            team is ready to assist you.
          </motion.p>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-x-8 gap-y-4">
          <div className="w-full md:w-1/2 lg:w-8/12">
            <div className="hidden md:block">
              <motion.h1
                initial={{ opacity: 0, y: "2rem" }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1 },
                }}
                viewport={{ once: true }}
                className="text-container text-2xl font-semibold"
              >
                Have Questions Or Need Assistance
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: "2rem" }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.2 },
                }}
                viewport={{ once: true }}
                className="my-4 text-sm text-textLight"
              >
                We&apos;re here to help! Whether you have inquiries about our
                services, need guidance on your next steps, or require support,
                our team is ready to assist you.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: "2rem" }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.1 },
              }}
              viewport={{ once: true }}
              className="w-full flex flex-col md:flex-row md:justify-between py-6 border-b-[1px] border-textGray gap-2"
            >
              <span className="text-textLight font-semibold text-[15px]">
                Message Us
              </span>
              <span className="text-textLight text-sm">support@solvix.com</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: "2rem" }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.2 },
              }}
              viewport={{ once: true }}
              className="w-full flex flex-col md:flex-row md:justify-between py-6 border-b-[1px] border-textGray gap-2"
            >
              <span className="text-textLight font-semibold text-[15px]">
                Call Us
              </span>
              <span className="text-textLight text-sm">+(123) 456-789</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: "2rem" }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.3 },
              }}
              viewport={{ once: true }}
              className="w-full flex flex-col md:flex-row md:justify-between py-6 border-b-[1px] border-textGray gap-2"
            >
              <span className="text-textLight font-semibold text-[15px]">
                Location
              </span>
              <span className="text-textLight text-sm md:text-right">
                4567 Elm Street, Suite 301, Green Field, TX, 78901
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: "2rem" }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.4 },
              }}
              viewport={{ once: true }}
              className="w-full flex flex-col md:flex-row md:justify-between py-6 border-b-[1px] border-textGray gap-2"
            >
              <span className="text-textLight font-semibold text-[15px]">
                Business Hours
              </span>
              <div className="flex flex-col text-left md:text-right gap-2">
                <span className="text-textLight text-sm">
                  Monday - Friday, 9:00 AM - 6:00 PM
                </span>
                <span className="text-textLight text-sm">
                  Saturday, 10:00 AM - 4:00 PM
                </span>
                <span className="text-textLight text-sm">Sunday, closed</span>
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
              className="w-full flex flex-col md:flex-row md:justify-between py-6 border-b-[1px] border-textGray gap-2"
            >
              <span className="text-textLight font-semibold text-[15px]">
                Social Media
              </span>
              <div className="flex flex-row items-center gap-4">
                <Link
                  href=""
                  className="w-8 h-8 bg-greenicon-bg grid place-items-center rounded-full transition-all hover:-translate-y-2"
                  aria-label="visit x.xom"
                >
                  <FaXTwitter size={16} className="text-greenicon" />
                </Link>
                <Link
                  href=""
                  className="w-8 h-8 bg-greenicon-bg grid place-items-center rounded-full transition-all hover:-translate-y-2"
                  aria-label="visit facebook"
                >
                  <LuFacebook size={18} className="text-greenicon" />
                </Link>
                <Link
                  href=""
                  className="w-8 h-8 bg-greenicon-bg grid place-items-center rounded-full transition-all hover:-translate-y-2"
                  aria-label="visit instagram"
                >
                  <IoLogoInstagram size={16} className="text-greenicon" />
                </Link>
                <Link
                  href=""
                  className="w-8 h-8 bg-greenicon-bg grid place-items-center rounded-full transition-all hover:-translate-y-2"
                  aria-label="visit linkedin"
                >
                  <LuLinkedin size={16} className="text-greenicon" />
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: "2rem" }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1 },
            }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 lg:w-4/12 bg-container px-6 py-6"
          >
            <div className="text-textBlack font-semibold text-base border-b-[1px] border-textLight pb-5">
              Fill out the form below, and our team will get back to you within
              24 hours.
            </div>
            <ContactForm />
          </motion.div>
        </div>
      </div>

      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108897.75643671816!2d-118.3483126850188!3d34.03934217839529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sug!4v1747398717790!5m2!1sen!2sug"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <FAQ />
      <CTA
        isBgImage={false}
        title="Ready To Go Solar? Let's Talk!"
        desc="Whether you are looking for residential, commercial or off-grid solar solutions. Solvix is here to guide you every step of the way."
        isHead={false}
      />
    </div>
  );
}
