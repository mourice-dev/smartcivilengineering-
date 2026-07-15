import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../data/faqData';

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto font-sans">
      {faqs.map((faq, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={index}
            className="bg-white border border-slate-200/50 rounded-2xl overflow-hidden shadow-md transition-all duration-200"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
            >
              <span className="font-display font-bold text-sm sm:text-base text-navy pr-4 uppercase tracking-wide">
                {faq.question}
              </span>
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all ${
                isOpen ? 'bg-accent text-white' : 'bg-slate-50 text-slate-700 border border-slate-200/50'
              } transition-colors duration-200`}>
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
