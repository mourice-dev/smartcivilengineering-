import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-16 bg-warm-bg text-slate-700 font-sans min-h-screen">
      
      {/* Header */}
      <section className="bg-navy text-white py-12 md:py-16 relative overflow-hidden border-b border-white/5">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <span className="text-accent text-[10px] font-bold tracking-widest uppercase bg-accent/15 px-3 py-1.5 rounded-full border border-accent/25">
            Legal
          </span>
          <h1 className="text-2xl md:text-4xl font-serif font-black uppercase text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Last Updated: July 15, 2026. Learn how we collect, store, and manage your data.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white border border-slate-200/50 p-6 md:p-10 rounded-2xl shadow-md space-y-6 text-xs sm:text-sm leading-relaxed font-medium text-slate-600">
          
          <h2 className="text-navy font-serif font-black text-lg sm:text-xl uppercase border-b border-slate-100 pb-2">
            1. Introduction
          </h2>
          <p>
            Smart Civil Engineering Works Limited ("we," "us," "our") values your privacy. This Privacy Policy explains how we collect, use, and share information about you when you visit our website ([smartcivilengineeringworks.rw](http://smartcivilengineeringworks.rw)), submit inquiries through our contact forms, or interact with our services.
          </p>

          <h2 className="text-navy font-serif font-black text-lg sm:text-xl uppercase border-b border-slate-100 pb-2 mt-6">
            2. Information We Collect
          </h2>
          <p>
            We collect information that you provide directly to us:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Personal Contact Data:</strong> Name, email address, phone number, and physical address provided during inquiries or consultation requests.</li>
            <li><strong>Project Inquiries:</strong> Details related to architectural designs, building supervision, structural audits, or estimation requirements.</li>
            <li><strong>Log Files & Analytics:</strong> Standard details such as IP address, browser type, referring pages, and user activity via Google Analytics to help monitor and improve web traffic.</li>
          </ul>

          <h2 className="text-navy font-serif font-black text-lg sm:text-xl uppercase border-b border-slate-100 pb-2 mt-6">
            3. How We Use Your Information
          </h2>
          <p>
            We process your information for legitimate engineering business interests, including:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Responding to requests, tenders, or direct messages received via our contact forms.</li>
            <li>Managing contracted engineering supervision, site calculations, and permit files compliance.</li>
            <li>Analyzing site usage trends to improve user experience, SEO performance, and responsiveness.</li>
            <li>Complying with the laws governing businesses and corporate entities in Rwanda.</li>
          </ul>

          <h2 className="text-navy font-serif font-black text-lg sm:text-xl uppercase border-b border-slate-100 pb-2 mt-6">
            4. Data Retention
          </h2>
          <p>
            We retain personal information for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, tax, or reporting requirements. Standard log analytics records are anonymized and stored securely.
          </p>

          <h2 className="text-navy font-serif font-black text-lg sm:text-xl uppercase border-b border-slate-100 pb-2 mt-6">
            5. Your Legal Rights
          </h2>
          <p>
            Depending on your jurisdiction, you may have the right to request access to the personal data we hold about you, request corrections, request erasure, or object to processing. To exercise these rights, please contact us at <a href="mailto:smartcivilengineeringworks@gmail.com" className="text-accent hover:underline">smartcivilengineeringworks@gmail.com</a>.
          </p>

          <h2 className="text-navy font-serif font-black text-lg sm:text-xl uppercase border-b border-slate-100 pb-2 mt-6">
            6. Changes to this Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. We will post any changes on this page with an updated revision date. We encourage you to review this policy periodically.
          </p>

        </div>
      </section>

    </div>
  );
};

export default PrivacyPolicy;
