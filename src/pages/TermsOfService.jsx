import React from 'react';

const TermsOfService = () => {
  return (
    <div className="pt-16 bg-warm-bg text-slate-700 font-sans min-h-screen">
      
      {/* Header */}
      <section className="bg-navy text-white py-12 md:py-16 relative overflow-hidden border-b border-white/5">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <span className="text-accent text-[10px] font-bold tracking-widest uppercase bg-accent/15 px-3 py-1.5 rounded-full border border-accent/25">
            Legal
          </span>
          <h1 className="text-2xl md:text-4xl font-serif font-black uppercase text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Last Updated: July 15, 2026. General terms governing engineering and design consultancies.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white border border-slate-200/50 p-6 md:p-10 rounded-2xl shadow-md space-y-6 text-xs sm:text-sm leading-relaxed font-medium text-slate-600">
          
          <h2 className="text-navy font-serif font-black text-lg sm:text-xl uppercase border-b border-slate-100 pb-2">
            1. Agreement to Terms
          </h2>
          <p>
            By accessing this website, you agree to comply with and be bound by these Terms of Service. If you do not agree to all of these terms, please do not use the website or submit inquiry requests.
          </p>

          <h2 className="text-navy font-serif font-black text-lg sm:text-xl uppercase border-b border-slate-100 pb-2 mt-6">
            2. Intellectual Property Rights
          </h2>
          <p>
            All architectural layouts, 3D visualizations, structural calculation templates, design sheets, images, logo marks, and content on this website are the property of Smart Civil Engineering Works Limited or our licensors and are protected by copyright, trademark, and intellectual property laws of Rwanda.
          </p>

          <h2 className="text-navy font-serif font-black text-lg sm:text-xl uppercase border-b border-slate-100 pb-2 mt-6">
            3. Disclaimer of Liability
          </h2>
          <p>
            The content on this website is provided for general informational purposes only. It does not constitute professional engineering, architectural, or structural advice. While we strive to maintain accurate project descriptions, actual engineering calculations and site supervision reports are delivered strictly under separate, signed consulting contracts. We are not liable for any action taken based on the information displayed on this website.
          </p>

          <h2 className="text-navy font-serif font-black text-lg sm:text-xl uppercase border-b border-slate-100 pb-2 mt-6">
            4. Service Inquiries & Estimates
          </h2>
          <p>
            Submitting a contact form, requesting an estimate, or using our interactive Cost Calculator does not form a binding contract for engineering works. Official scopes of work, schedules of values, payment milestones, and liability terms are detailed in formal engineering contracts signed by both parties.
          </p>

          <h2 className="text-navy font-serif font-black text-lg sm:text-xl uppercase border-b border-slate-100 pb-2 mt-6">
            5. Governing Law
          </h2>
          <p>
            These Terms of Service are governed by and construed in accordance with the laws of the Republic of Rwanda. Any disputes arising out of the use of this website shall be subject to the exclusive jurisdiction of the courts of Kigali, Rwanda.
          </p>

          <h2 className="text-navy font-serif font-black text-lg sm:text-xl uppercase border-b border-slate-100 pb-2 mt-6">
            6. Contact Us
          </h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
            <br />
            <strong>Smart Civil Engineering Works Ltd</strong>
            <br />
            Kicukiro District, Kigali, Rwanda
            <br />
            Email: <a href="mailto:smartcivilengineeringworks@gmail.com" className="text-accent hover:underline">smartcivilengineeringworks@gmail.com</a>
          </p>

        </div>
      </section>

    </div>
  );
};

export default TermsOfService;
