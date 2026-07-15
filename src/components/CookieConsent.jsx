import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ShieldAlert, X } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const consent = localStorage.getItem('smart_civil_cookie_consent');
    if (!consent) {
      // Show consent banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else if (consent === 'accepted') {
      // Initialize analytics if already accepted
      enableAnalytics();
    }
  }, []);

  const enableAnalytics = () => {
    // Trigger Google Analytics initialization if defined
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const disableAnalytics = () => {
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  };

  const handleAccept = () => {
    localStorage.setItem('smart_civil_cookie_consent', 'accepted');
    enableAnalytics();
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('smart_civil_cookie_consent', 'declined');
    disableAnalytics();
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-[9999] bg-navy border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-md text-white font-sans text-xs sm:text-sm"
        >
          <div className="flex items-start space-x-4">
            {/* Shield Icon */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-accent border border-accent/30 mt-0.5">
              <ShieldAlert className="h-5 w-5" />
            </div>

            {/* Content text */}
            <div className="flex-1 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-display font-black text-sm uppercase tracking-wide">
                  Cookie & Privacy Notice
                </span>
                <button
                  onClick={handleDecline}
                  className="p-1 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <p className="text-slate-350 text-xs leading-relaxed font-semibold">
                We use cookies to analyze web traffic and optimize your browsing experience. By clicking "Accept", you consent to our use of analytics cookies. Read our{' '}
                <NavLink to="/cookies" className="text-accent hover:underline font-bold">
                  Cookie Policy
                </NavLink>{' '}
                and{' '}
                <NavLink to="/privacy" className="text-accent hover:underline font-bold">
                  Privacy Policy
                </NavLink>{' '}
                to learn more.
              </p>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3 pt-1">
                <button
                  onClick={handleAccept}
                  className="px-5 py-2 bg-accent hover:bg-white text-navy font-bold text-[10px] sm:text-xs uppercase tracking-wider rounded-full transition-all duration-200 shadow-md hover:scale-[1.02]"
                >
                  Accept
                </button>
                <button
                  onClick={handleDecline}
                  className="px-5 py-2 bg-white/5 hover:bg-white/10 text-white font-bold text-[10px] sm:text-xs uppercase tracking-wider rounded-full border border-white/10 transition-all duration-200 hover:scale-[1.02]"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
