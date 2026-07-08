import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Is Smart Civil Works Ltd fully licensed and registered?',
      answer: 'Yes, Smart Civil Engineering Works Limited is a legally registered private company fully compliant with the laws governing companies and construction in Rwanda since September 2017.'
    },
    {
      question: 'What is included in your Engineering Studies package?',
      answer: 'Our studies package covers initial site feasibility assays, high-precision topographical land mapping, geotechnical sub-surface soil core logging, and official soil testing laboratory analysis to guarantee structural foundation safety.'
    },
    {
      question: 'How do you coordinate building permits in Kigali?',
      answer: 'We compile all required structural calculations, architectural floor layouts, MEP plumbing/electrical drawings, and environmental impact assessments, then coordinate with municipal and local district authorities to secure construction permits.'
    },
    {
      question: 'Do you offer structural audits for existing buildings?',
      answer: 'Yes. We conduct structural audits and rehabilitation designs using ultrasonic concrete scanners and rebound hammers to assess loading capacities, cracks, and concrete carbonation, drafting retrofitting blueprints.'
    },
    {
      question: 'Can you work as a local supervisor for international contractors?',
      answer: 'Absolutely. We regularly act as the local supervising consultant in Rwanda, providing quantity surveying (BOQ validation), concrete quality control (slump and cube crash tests), and site safety management.'
    }
  ];

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
