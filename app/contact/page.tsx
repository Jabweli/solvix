import ContactForm from "@/components/contact/ContactForm";
import CTA from "@/components/home/cta";
import FAQ from "@/components/home/FAQ";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { LuFacebook, LuLinkedin } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Solvix | Contact Us",
  description: "Explore how Solvix is transforming homes, businesses, and communities with cutting-edge solar energy solutions.",
};


export default function Contact() {
  return (
    <div>
      <div className="responsive-padding py-10">
        <h1 className="font-bold text-textBlack text-3xl md:text-4xl lg:text-6xl text-center">
          Get In <span className="text-hgreen">Touch</span> With{" "}
          <span className="text-hgreen">Solvix</span>
        </h1>
        <p className="text-textGray text-sm lg:text-[15px] text-center mt-3 w-[95%] md:w-[60%] mx-auto">
          Interested in switching to solar? Have questions about our services?
          Our team is ready to help. Reach out to us today and take a first step
          towards energy independence.
        </p>
      </div>

      <div className="responsive-padding py-10 lg:py-15 bg-dark-bg">
        <div className="block md:hidden">
          <h1 className="text-container text-2xl font-semibold">
            Have Questions Or Need Assistance
          </h1>
          <p className="my-4 text-sm text-textLight">
            We&apos;re here to help! Whether you have inquiries about our
            services, need guidance on your next steps, or require support, our
            team is ready to assist you.
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-x-8 gap-y-4">
          <div className="w-full md:w-1/2 lg:w-8/12">
            <div className="hidden md:block">
              <h1 className="text-container text-2xl font-semibold">
                Have Questions Or Need Assistance
              </h1>
              <p className="my-4 text-sm text-textLight">
                We&apos;re here to help! Whether you have inquiries about our
                services, need guidance on your next steps, or require support,
                our team is ready to assist you.
              </p>
            </div>

            <div className="w-full flex flex-col md:flex-row md:justify-between py-6 border-b-[1px] border-textGray gap-2">
              <span className="text-textLight font-semibold text-[15px]">
                Message Us
              </span>
              <span className="text-textLight text-sm">support@solvix.com</span>
            </div>

            <div className="w-full flex flex-col md:flex-row md:justify-between py-6 border-b-[1px] border-textGray gap-2">
              <span className="text-textLight font-semibold text-[15px]">
                Call Us
              </span>
              <span className="text-textLight text-sm">+(123) 456-789</span>
            </div>

            <div className="w-full flex flex-col md:flex-row md:justify-between py-6 border-b-[1px] border-textGray gap-2">
              <span className="text-textLight font-semibold text-[15px]">
                Location
              </span>
              <span className="text-textLight text-sm md:text-right">
                4567 Elm Street, Suite 301, Green Field, TX, 78901
              </span>
            </div>
            <div className="w-full flex flex-col md:flex-row md:justify-between py-6 border-b-[1px] border-textGray gap-2">
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
            </div>

            <div className="w-full flex flex-col md:flex-row md:justify-between py-6 border-b-[1px] border-textGray gap-2">
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
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-4/12 bg-container px-6 py-6">
            <div className="text-textBlack font-semibold text-base border-b-[1px] border-textLight pb-5">
              Fill out the form below, and our team will get back to you within
              24 hours.
            </div>
            <ContactForm />
          </div>
        </div>
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
