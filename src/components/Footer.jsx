import React from "react";
import { footerData } from "../config/SectionsData/footer";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <a href="/" className="text-2xl font-bold text-text mb-4 block">
              AppTemplate
            </a>
            <p className="text-textSecondary max-w-sm">
              {footerData.description}
            </p>
          </motion.div>

          {/* Links Columns */}
          {footerData.columns.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="font-semibold text-text mb-6">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.link}
                      className="text-textSecondary hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-textSecondary text-sm">{footerData.copyright}</p>
          <div className="flex gap-6">
            {footerData.socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="text-textSecondary hover:text-primary transition-colors"
              >
                {social.platform}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
