import React from "react";
import { Input } from "../ui/input";
import { ArrowUpRight } from "lucide-react";

const ContactForm = () => {
  return (
    <form className="w-full flex flex-col gap-4 mt-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-textGray text-sm">
          <span className="text-textBlack font-semibold">Full Name</span>{" "}
          (Required)
        </label>
        <Input id="name" type="text" required placeholder="Your name" className="shadow-none rounded-none h-10 text-sm"/>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-textGray text-sm">
          <span className="text-textBlack font-semibold">Email Address</span> (Required)
        </label>
        <Input id="email" type="email" required placeholder="Your email" className="shadow-none rounded-none h-10 text-sm"/>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-textGray text-sm">
          <span className="text-textBlack font-semibold">Phone</span> (Optional)
        </label>
        <Input id="phone" type="text" placeholder="Your phone" className="shadow-none rounded-none h-10 text-sm"/>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-textBlack font-semibold text-sm">
          Subject
        </label>
        <div className="flex gap-4 flex-wrap">
          <label htmlFor="radio1" className="text-sm">
            <input type="radio" id="radio1" name="subject" /> Residential Solar{" "}
          </label>
          <label htmlFor="radio2" className="text-sm">
            <input type="radio" id="radio2" name="subject" /> Commercial Solar{" "}
          </label>
          <label htmlFor="radio3" className="text-sm">
            <input type="radio" id="radio3" name="subject" /> Other{" "}
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-textGray text-sm">
          <span className="text-textBlack font-semibold">Message</span> (Tell us how we can help)
        </label>
        <textarea placeholder="Write here..." className="w-full border text-sm p-4"></textarea>
      </div>

      <div className="relative ml-auto flex items-center justify-center w-max gap-4 py-2 px-2 rounded-full bg-dark-bg">
        <p className="text-sm pl-4 text-container">Request a Free Quote</p>
        <span
          className="p-2 rounded-full bg-container"
          aria-label="Get Free Consultation"
        >
          <ArrowUpRight className="text-dark-bg" />
        </span>
      </div>
    </form>
  );
};

export default ContactForm;
