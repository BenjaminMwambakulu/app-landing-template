import React from "react";
import { heroSectionData } from "../config/SectionsData/herosection";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-12 relative">
      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-6">
        {heroSectionData.title}
      </h1>

      {/* Subheadline */}
      <p className="text-lg md:text-xl text-gray-700 text-center mb-8 leading-relaxed max-w-2xl">
        {heroSectionData.description}
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <Link
          to={heroSectionData.primaryButton.link}
          className="bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-black transition"
        >
          {heroSectionData.primaryButton.label}
        </Link>
        <Link
          to={heroSectionData.secondaryButton.link}
          className="border-2 border-black text-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition"
        >
          {heroSectionData.secondaryButton.label}
        </Link>
      </div>

      {/* App Image */}
      <div className="w-full flex justify-center">
        <img
          src={heroSectionData.image.src}
          alt={heroSectionData.image.alt}
          className="w-3/4 md:w-1/2 max-w-lg rounded-xl shadow-2xl transform hover:scale-105 transition duration-500"
        />
      </div>
    </section>
  );
};

export default Hero;
