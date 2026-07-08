import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, features }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group relative flex flex-col justify-between p-8 bg-white border border-slate-200/50 rounded-3xl shadow-lg hover:border-accent/20 hover:shadow-2xl hover:shadow-slate-200/85 transition-all duration-300 overflow-hidden"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 h-28 w-28 bg-gradient-to-br from-accent/5 to-slate-100 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Icon container */}
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-accent border border-slate-100 group-hover:bg-accent group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
          <Icon className="h-5 w-5" />
        </div>

        {/* Title */}
        <h3 className="text-sm font-black text-navy mt-6 mb-3 group-hover:text-accent transition-colors duration-300 uppercase tracking-wider font-serif">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-655 font-sans text-[11px] leading-relaxed mb-6 font-medium">
          {description}
        </p>

        {/* Features list */}
        {features && features.length > 0 && (
          <ul className="space-y-2.5 mb-6 border-t border-slate-100 pt-4 font-sans">
            {features.slice(0, 4).map((feat, index) => (
              <li key={index} className="flex items-center space-x-2.5 text-[10px] text-slate-500 font-semibold">
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
          className="inline-flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-accent transition-colors duration-200"
        >
          <span>Explore Capabilities</span>
          <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1.5 transition-transform duration-250 text-accent" />
        </NavLink>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
