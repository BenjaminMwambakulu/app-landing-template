import React from "react";
import { logoCloudData } from "../config/SectionsData/logocloud";

const LogoCloud = () => {
  return (
    <section className="py-24 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-textSecondary mb-10">
          {logoCloudData.title}
        </h2>
        <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          {logoCloudData.logos.map((logo, index) => (
            <img
              key={index}
              className="col-span-1 max-h-12 w-full object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              src={logo.url}
              alt={logo.name}
              width={158}
              height={48}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
