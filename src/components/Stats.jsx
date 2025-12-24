import React from "react";
import { statsData } from "../config/SectionsData/stats";
import { motion } from "framer-motion";

const Stats = () => {
  return (
    <section className="py-12 bg-primary border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-secondary/80 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
