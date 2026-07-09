import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, features }) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group relative flex flex-col justify-between p-6 md:p-8 bg-white border border-slate-200/50 rounded-2xl shadow-md hover:border-accent/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 overflow-hidden"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 h-28 w-28 bg-gradient-to-br from-accent/5 to-slate-100 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Icon container */}
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-accent border border-slate-100 group-hover:bg-accent group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
          <Icon className="h-5 w-5" />
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-black text-navy mt-5 mb-2 group-hover:text-accent transition-colors duration-300 uppercase tracking-wider font-serif">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-650 font-sans text-xs sm:text-sm leading-relaxed mb-4 font-medium">
          {description}
        </p>

        {/* Features list */}
        {features && features.length > 0 && (
          <ul className="space-y-2 mb-4 border-t border-slate-100 pt-3 font-sans">
            {features.slice(0, 4).map((feat, index) => (
              <li key={index} className="flex items-center space-x-2 text-xs text-slate-500 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Explore link */}
      <div className="mt-auto font-sans">
        <NavLink
          to="/services"
          className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 group-hover:text-accent transition-colors duration-200"
        >
          <span>Explore Capabilities</span>
          <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform duration-250 text-accent" />
        </NavLink>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
