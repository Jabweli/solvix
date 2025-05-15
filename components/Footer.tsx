import { HandPlatter, Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FaXTwitter } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io5";
import { LuLinkedin } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-dark-bg px-4 md:px-6 lg:px-8 xl:px-16">
      <div className="flex flex-col lg:flex-row py-8 gap-8">
        <div className="w-full lg:flex-1 flex flex-col gap-4">
          <Link
            href="/"
            className="flex items-center gap-1 text-container font-bold text-3xl"
          >
            <HandPlatter size={30} /> Solvix
          </Link>
          <p className="text-textLight text-[15px]">
            What began as a simple idea grew into a mission — harness
            nature&apos;s most abundant resources, wind and sunlight, to power a
            brighter tomorrow.
          </p>
          <p className="text-textLight text-[15px]">
            123 SolarDrive, Suite 200 Los Angeles, CA, 90001
          </p>

          <div className="mt-5">
            <h1 className="text-container font-semibold mb-5">Follow Us</h1>
            <div className="flex flex-row items-center gap-4">
              <Link href="" className="w-10 h-10 bg-greenicon-bg grid place-items-center rounded-full transition-all hover:-translate-y-2" aria-label="visit x.xom">
                <FaXTwitter size={20} className="text-greenicon"/>
              </Link>
              <Link href="" className="w-10 h-10 bg-greenicon-bg grid place-items-center rounded-full transition-all hover:-translate-y-2" aria-label="visit facebook">
                <LuFacebook size={22} className="text-greenicon"/>
              </Link>
              <Link href="" className="w-10 h-10 bg-greenicon-bg grid place-items-center rounded-full transition-all hover:-translate-y-2" aria-label="visit instagram">
                <IoLogoInstagram size={20} className="text-greenicon" />
              </Link>
              <Link href="" className="w-10 h-10 bg-greenicon-bg grid place-items-center rounded-full transition-all hover:-translate-y-2" aria-label="visit linkedin">
                <LuLinkedin size={20} className="text-greenicon"/>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full lg:flex-2 flex flex-wrap justify-between gap-6 gap-y-10">
          <div className="w-1/2dd md:flex-1">
            <h1 className="text-container font-semibold mb-4 text-base">
              Quick Links
            </h1>
            <div className="flex flex-col gap-5 text-textLight text-sm">
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/projects">Projects</Link>
            </div>
          </div>

          <div className="md:flex-1">
            <h1 className="text-container font-semibold mb-4 text-base">
              Contact Us
            </h1>
            <div className="flex flex-col gap-5 text-textLight text-sm">
              <div className="flex items-center gap-3">
                <Mail size={20} /> info@solvix.com
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} /> +1(123) 456-7890
              </div>
            </div>
          </div>

          <div className="md:w-full lg:flex-2">
            <h1 className="text-container font-semibold mb-4 text-base">
              Subscribe for updates
            </h1>
            <div className="flex flex-col gap-5">
              <p className="text-sm text-textLight">
                Subscribe to our newsletter for the latest solar energy trends,
                exclusive offers and expert insights.
              </p>
              <div className="px-2 py-2 bg-container rounded-full flex items-center justify-between">
                <Input
                  placeholder="Enter your email"
                  className="bg-transparent outline-0 border-0 shadow-none text-sm text-textBlack focus-visible:!ring-0"
                />
                <Button className="rounded-full bg-hgreen text-container hover:bg-dark-bg cursor-pointer">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom footer */}
      <div className="flex flex-col md:flex-row items-center justify-between py-6 text-textLight border-t-[2px] border-[#4E6257] text-sm">
        <p>
          &copy; {new Date().getFullYear()} Solvix Solar Energy - All rights
          reserved
        </p>
        <p>
          <span className="hover:text-hgreen cursor-pointer font-semibold">
            Privacy Policy
          </span>{" "}
          &{" "}
          <span className="hover:text-hgreen cursor-pointer font-semibold">
            Terms of Use
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
