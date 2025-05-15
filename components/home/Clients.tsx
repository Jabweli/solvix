import Image from "next/image";
import React from "react";

const Clients = () => {
  return (
    <div className="responsive-padding py-10 md:py-20 flex flex-wrap justify-center items-center lg:justify-between gap-8 gap-y-4">
      <Image src="/icons/logoipsum-1.svg" alt="company 1 logo" width={170} height={40} className="w-35 h-auto"/>
      <Image src="/icons/logoipsum-2.svg" alt="company 2 logo" width={166} height={40} className="w-35 h-auto"/>
      <Image src="/icons/logoipsum-4.svg" alt="company 3 logo" width={156} height={40} className="w-35 h-auto"/>
      <Image src="/icons/logoipsum-6.svg" alt="company 4 logo" width={147} height={46} className="w-35 h-auto"/>
      <Image src="/icons/logoipsum-7.svg" alt="company 4 logo" width={132} height={46} className="w-35 h-auto"/>
    </div>
  );
};

export default Clients;
