import React from "react";
import { testimonialsData } from "../config/SectionsData/testimonials";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section className="py-24 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-text"
          >
            {testimonialsData.sectionTitle}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-background p-8 rounded-2xl shadow-sm border border-border flex flex-col justify-between transition-all duration-300 hover:shadow-md"
            >
              <blockquote className="text-lg text-text mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover border border-border"
                />
                <div>
                  <div className="font-semibold text-text">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-textSecondary">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
