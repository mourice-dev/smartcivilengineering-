import React from 'react';

const PartnerTicker = () => {
  const partners = [
    { name: 'RDIS Muhanga', type: 'Diocese Partnership' },
    { name: 'Kigali City', type: 'Public Works' },
    { name: 'TVET Muyumbu', type: 'Educational Center' },
    { name: 'Kicukiro District', type: 'Municipality' },
    { name: 'Sentabyo Commercial', type: 'Private Developer' },
    { name: 'Rebero Village Estate', type: 'Real Estate' },
    { name: 'Busogo local council', type: 'Public Works' }
  ];

  const scrollList = [...partners, ...partners];

  return (
    <div className="bg-slate-50 py-12 border-y border-slate-200/30 overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <span className="text-accent text-[9px] font-black tracking-widest uppercase block">
          Trusted Partners & Clients
        </span>
      </div>

      <div className="flex w-full overflow-hidden select-none">
        <div className="flex space-x-8 animate-marquee whitespace-nowrap">
          {scrollList.map((partner, index) => (
            <div
              key={index}
              className="inline-flex flex-col items-center justify-center px-8 py-4 bg-white border border-slate-200/40 rounded-2xl min-w-[200px] shadow-sm"
            >
              <span className="text-navy font-serif font-black text-sm uppercase tracking-wide">
                {partner.name}
              </span>
              <span className="text-slate-450 text-[9px] font-bold uppercase tracking-widest mt-1">
                {partner.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerTicker;
