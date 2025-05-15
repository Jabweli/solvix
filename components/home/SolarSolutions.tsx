import { BatteryCharging, Briefcase, House, Zap } from "lucide-react";
import React from "react";

const SolarSolutions = () => {
  return (
    <div className="responsive-padding py-10 md:py-20">
      <h2 className="sub-title text-link-active text-center">// SERVICES</h2>
      <h1 className="title text-textBlack text-center">Our Solar Solutions</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 lg:mt-16">
        <div className="flex flex-col gap-4">
          <House size={40} className="text-link-active"/>
          <div className="flex flex-col gap-2">
            <h1 className="text-textBlack font-semibold text-lg">Residential Solar</h1>
            <p className="text-textGray text-sm">Power your home with clean energy and save on utility costs.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Briefcase size={40} className="text-link-active"/>
          <div className="flex flex-col gap-2">
            <h1 className="text-textBlack font-semibold text-lg">Commercial Solar</h1>
            <p className="text-textGray text-sm">Optimise energy efficiency and reduce operational expenses.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <BatteryCharging size={40} className="text-link-active"/>
          <div className="flex flex-col gap-2">
            <h1 className="text-textBlack font-semibold text-lg">Solar Battery Storage</h1>
            <p className="text-textGray text-sm">Store energy for uninterrupted power supply.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Zap size={40} className="text-link-active"/>
          <div className="flex flex-col gap-2">
            <h1 className="text-textBlack font-semibold text-lg">EV Charging Stattions</h1>
            <p className="text-textGray text-sm">Smart solutions for electric vehicle owners.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarSolutions;
