import React from "react";
import { pricingData } from "../config/SectionsData/pricing";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <section className="py-24 bg-background" id="pricing">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-text mb-4"
          >
            {pricingData.sectionTitle}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {pricingData.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative p-8 rounded-2xl border ${
                plan.popular
                  ? "border-accent shadow-xl bg-surface scale-105 z-10"
                  : "border-border bg-background"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-medium shadow-md">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-text mb-2">{plan.name}</h3>
              <div className="text-4xl font-extrabold text-text mb-6">
                {plan.price}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-textSecondary"
                  >
                    <svg
                      className="w-5 h-5 text-accent mr-3 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? "bg-primary text-secondary hover:bg-black/80"
                    : "bg-surface border border-border text-text hover:bg-border/50"
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
