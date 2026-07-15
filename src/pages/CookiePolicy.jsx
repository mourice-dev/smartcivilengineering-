import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="pt-16 bg-warm-bg text-slate-700 font-sans min-h-screen">
      
      {/* Header */}
      <section className="bg-navy text-white py-12 md:py-16 relative overflow-hidden border-b border-white/5">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <span className="text-accent text-[10px] font-bold tracking-widest uppercase bg-accent/15 px-3 py-1.5 rounded-full border border-accent/25">
            Legal
          </span>
          <h1 className="text-2xl md:text-4xl font-serif font-black uppercase text-white tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Last Updated: July 15, 2026. Understanding how cookies improve your browsing experience.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white border border-slate-200/50 p-6 md:p-10 rounded-2xl shadow-md space-y-6 text-xs sm:text-sm leading-relaxed font-medium text-slate-600">
          
          <h2 className="text-navy font-serif font-black text-lg sm:text-xl uppercase border-b border-slate-100 pb-2">
            1. What Are Cookies?
          </h2>
          <p>
            Cookies are small text files placed on your computer or mobile device when you browse websites. They are widely used to make websites work, or work more efficiently, as well as to provide reporting information to site owners.
          </p>

          <h2 className="text-navy font-serif font-black text-lg sm:text-xl uppercase border-b border-slate-100 pb-2 mt-6">
            2. How We Use Cookies
          </h2>
          <p>
            We use cookies to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Analyze Web Traffic:</strong> We use Google Analytics cookies to track anonymous traffic trends, page views, and interactions so we can improve site speed and usability.</li>
            <li><strong>Remember User Choices:</strong> If you accept or decline our cookie consent banner, we save a cookie to remember this decision so you are not asked again on subsequent visits.</li>
          </ul>

          <h2 className="text-navy font-serif font-black text-lg sm:text-xl uppercase border-b border-slate-100 pb-2 mt-6">
            3. Types of Cookies We Use
          </h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Necessary Cookies:</strong> Required to enable core site functionality (like saving your cookie preference). These do not track personal information.</li>
            <li><strong>Performance & Analytics Cookies:</strong> Analytical cookies (Google Analytics) that capture details like pages visited, visit duration, browser types, and approximate geographic location (at a city scale, anonymously).</li>
          </ul>

          <h2 className="text-navy font-serif font-black text-lg sm:text-xl uppercase border-b border-slate-100 pb-2 mt-6">
            4. Managing Your Preferences
          </h2>
          <p>
            You can control your cookie settings at any time:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>You can clear your cookie consent choice by clearing your browser cache for this website, which will trigger the consent banner on your next load.</li>
            <li>You can decline analytics tracking using the "Decline" button on our Cookie Consent popup.</li>
            <li>You can modify your browser settings to refuse cookies altogether. Refer to your browser's Help menu for details.</li>
          </ul>

          <h2 className="text-navy font-serif font-black text-lg sm:text-xl uppercase border-b border-slate-100 pb-2 mt-6">
            5. Contact Information
          </h2>
          <p>
            For any queries concerning this Cookie Policy, email us at <a href="mailto:smartcivilengineeringworks@gmail.com" className="text-accent hover:underline">smartcivilengineeringworks@gmail.com</a>.
          </p>

        </div>
      </section>

    </div>
  );
};

export default CookiePolicy;
