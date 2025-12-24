import React from "react";
import { heroSectionData } from "../config/SectionsData/herosection";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none mx-auto"
          >
            {heroSectionData.badge && (
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-surface text-textSecondary text-sm font-medium mb-6">
                <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
                {heroSectionData.badge}
              </div>
            )}

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text mb-6 leading-tight">
              {heroSectionData.title}
            </h1>

            <p className="text-lg md:text-xl text-textSecondary leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              {heroSectionData.description}
            </p>

            {heroSectionData.primaryCta && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={heroSectionData.primaryCta.link}
                className="inline-block bg-primary text-secondary px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
              >
                {heroSectionData.primaryCta.label}
              </motion.a>
            )}
          </motion.div>

          {/* Single Hero Image - Larger & Animated */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full relative"
          >
            {/* Decorative blob */}
            <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <img
              src={heroSectionData.image.src}
              alt={heroSectionData.image.alt}
              className="relative w-full rounded-2xl shadow-2xl border border-border transform transition-transform duration-500 hover:scale-[1.01]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
