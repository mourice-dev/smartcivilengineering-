import React from 'react';
import { NavLink } from 'react-router-dom';
import { Hammer, Mail, Phone, MapPin, Clock, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-slate-400 border-t border-white/5 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Company Brief Info */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-navy shadow-lg shadow-accent/15">
                <Hammer className="h-5.5 w-5.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-serif font-black text-lg tracking-wide uppercase">
                  Smart Civil
                </span>
                <span className="text-slate-500 text-[9px] font-sans font-bold tracking-widest uppercase mt-0.5">
                  Engineering Works Ltd
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
              Delivering complete engineering, architectural, and project management solutions in Rwanda since 2017. Committed to premium quality and structural durability from concept to completion.
            </p>

            <div className="text-[10px] text-slate-500 font-bold tracking-wider uppercase">
              RDB Company Code: 107429046
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-serif font-bold text-sm tracking-widest uppercase relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-6 after:h-[2px] after:bg-accent pb-2">
              Navigation
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm font-semibold tracking-wide">
              <li>
                <NavLink to="/" className="hover:text-accent transition-colors duration-200">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-accent transition-colors duration-200">About Company</NavLink>
              </li>
              <li>
                <NavLink to="/services" className="hover:text-accent transition-colors duration-200">Our Services</NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="hover:text-accent transition-colors duration-200">Completed Projects</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-accent transition-colors duration-200">Contact Us</NavLink>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-6">
            <h3 className="text-white font-serif font-bold text-sm tracking-widest uppercase relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-6 after:h-[2px] after:bg-accent pb-2">
              Capabilities
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm font-semibold tracking-wide">
              <li>
                <NavLink to="/services" className="hover:text-accent transition-colors duration-200">Engineering Studies</NavLink>
              </li>
              <li>
                <NavLink to="/services" className="hover:text-accent transition-colors duration-200">Architectural Services</NavLink>
              </li>
              <li>
                <NavLink to="/services" className="hover:text-accent transition-colors duration-200">Civil & Infrastructure</NavLink>
              </li>
              <li>
                <NavLink to="/services" className="hover:text-accent transition-colors duration-200">Structural Engineering</NavLink>
              </li>
              <li>
                <NavLink to="/services" className="hover:text-accent transition-colors duration-200">Project Supervision</NavLink>
              </li>
            </ul>
          </div>

          {/* Contact & Address */}
          <div className="space-y-6">
            <h3 className="text-white font-serif font-bold text-sm tracking-widest uppercase relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-6 after:h-[2px] after:bg-accent pb-2">
              Office Details
            </h3>
            <ul className="space-y-4.5 text-xs sm:text-sm font-semibold leading-relaxed">
              <li className="flex items-start space-x-3.5">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>
                  Kabeza Village, Kigarama Cell, Kicukiro District, Kigali City, Rwanda
                </span>
              </li>
              <li className="flex items-center space-x-3.5">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span className="text-white">+250 788 326 103</span>
              </li>
              <li className="flex items-center space-x-3.5">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span className="break-all text-white">smartcivilengineeringworks@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3.5">
                <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div className="flex flex-col text-[11px] text-slate-400 space-y-0.5">
                  <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
                  <span>Sat: 9:00 AM - 1:00 PM</span>
                  <span className="text-slate-650">Sun: Closed</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/5 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0 font-medium">
          <div>
            © {currentYear} Smart Civil Engineering Works Ltd.
          </div>

          <div className="flex items-center space-x-6">
            <span>Kigali, Rwanda</span>
            <button
              onClick={handleScrollToTop}
              className="flex items-center justify-center h-9 w-9 bg-white/5 text-slate-400 hover:text-white rounded-xl border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-200"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
