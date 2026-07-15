import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowRight, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="pt-16 bg-warm-bg min-h-[80vh] flex items-center justify-center font-sans px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-6 bg-white border border-slate-200/50 p-8 md:p-12 rounded-3xl shadow-xl">
        
        {/* Animated Warning Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent border border-accent/25">
            <AlertTriangle className="h-8 w-8" />
          </div>
        </motion.div>

        {/* Text Details */}
        <div className="space-y-2">
          <h1 className="text-5xl font-serif font-black text-navy leading-none">
            404
          </h1>
          <h2 className="text-lg font-display font-black text-navy uppercase tracking-wide">
            Page Not Found
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 pt-4">
          <NavLink
            to="/"
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-accent hover:bg-navy text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-350 shadow-md hover:scale-[1.02]"
          >
            <Home className="h-4 w-4" />
            <span>Go Back Home</span>
          </NavLink>
          
          <NavLink
            to="/projects"
            className="flex items-center justify-center space-x-1.5 px-6 py-3 bg-slate-50 hover:bg-slate-100 text-navy font-bold text-xs uppercase tracking-wider rounded-full border border-slate-200/55 transition-all duration-350 hover:scale-[1.02]"
          >
            <span>Explore Projects</span>
            <ArrowRight className="h-4 w-4" />
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default NotFound;
