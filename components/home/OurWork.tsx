import Image from "next/image";
import React from "react";

const OurWork = () => {
  return (
    <div className="responsive-padding bg-dark-bg py-8 md:py-15">
      <div className="block md:hidden mb-6">
        <h2 className="sub-title !text-subheading text-center md:text-left">
          {'// OUR WORK'}
        </h2>
        <h1 className="title text-center md:text-left text-container w-2/3 mx-auto">
          Switching To Solar In 3 Easy Steps
        </h1>
      </div>

      <div className="flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-6/12 lg:w-7/12">
          <div className="md:block hidden">
            <h2 className="sub-title text-link-active text-center md:text-left">
              {'// OUR WORK'}
            </h2>
            <h1 className="title text-center md:text-left text-container w-full md:w-2/3 lg:w-1/2">
              Switching To Solar In 3 Easy Steps
            </h1>
          </div>

          <div className="mt-8 flex flex-wrap gap-y-8 lg:gap-0 lg:flex-row lg:h-60 xl:h-80">
            <div className="pr-6 w-full lg:flex-1">
              <h1 className="text-subheading font-semibold text-lg">
                01 Consulation
              </h1>
              <p className="text-sm text-textGray mt-2 lg:mt-3">
                Get a free energy audit and custom solar solution.
              </p>
            </div>
            <div className="w-full lg:flex-1 flex flex-col justify-center lg:border-dashed lg:border-r-[1px] lg:border-l-[1px] lg:border-textGray lg:px-6">
              <h1 className="text-subheading font-semibold text-lg">
                02 Installation
              </h1>
              <p className="text-sm text-textGray mt-2 lg:mt-3">
                Our expert team ensures a smooth and quick installation.
              </p>
            </div>
            <div className="w-full lg:flex-1 flex flex-col justify-end lg:px-6">
              <h1 className="text-subheading font-semibold text-lg">
                03 Savings Begin
              </h1>
              <p className="text-sm text-textGray mt-2 lg:mt-3">
                Enjoy reduced energy bills and sustainable living.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-6/12 lg:w-5/12 grid grid-cols-2 gap-4 h-100 md:h-auto">
          <div className="relative w-full h-full">
            <Image
              src="/images/img1.jpg"
              alt="user"
              fill
              sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw 33vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative w-full h-1/2">
              <Image
                src="/images/img3.jpg"
                alt="user"
                fill
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-1/2">
              <Image
                src="/images/img6.jpg"
                alt="user"
                fill
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
