import React from "react";
import { featuresData } from "../config/SectionsData/features";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Features = () => {
  return (
    <section className="py-24 bg-background" id="features">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-text mb-4"
          >
            {featuresData.sectionTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-textSecondary"
          >
            {featuresData.subTitle}
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {featuresData.features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-surface border border-border hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Icon */}
              <div className="mb-6 h-12 w-12 flex items-center justify-center p-2 rounded-lg bg-background border border-border">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold text-text mb-3">
                {feature.title}
              </h3>
              <p className="text-textSecondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
