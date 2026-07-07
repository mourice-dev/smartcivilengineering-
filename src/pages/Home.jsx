import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import PartnerTicker from '../components/PartnerTicker';
import CostCalculator from '../components/CostCalculator';
import Testimonials from '../components/Testimonials';
import { 
  Compass, 
  Building2, 
  Route, 
  Boxes, 
  ClipboardCheck, 
  HardHat, 
  Award, 
  Clock, 
  Users2, 
  FolderCheck,
  ArrowRight
} from 'lucide-react';

const Home = () => {
  const featuredServices = [
    {
      icon: Compass,
      title: 'Engineering Studies',
      description: 'Comprehensive feasibility assessments, topographical mapping, soil analysis, and geotechnical investigations to validate structural foundations.',
      features: ['Feasibility Studies', 'Topographical Surveys', 'Soil Testing & Analysis', 'Technical Due Diligence']
    },
    {
      icon: Building2,
      title: 'Architectural Services',
      description: 'Premium architectural concept layouts, interior design space planning, permit documents, and photorealistic 3D visualization rendering.',
      features: ['Concept & Detailed Design', '3D Visualization & Rendering', 'Interior Space Planning', 'Permit Documentation']
    },
    {
      icon: Route,
      title: 'Civil & Infrastructure',
      description: 'Master planning and design of road systems, municipal stormwater management, drinking water distribution, and sewerage wastewater networks.',
      features: ['Road & Highway Engineering', 'Stormwater & Drainage Systems', 'Water Supply Networks', 'Sewerage Infrastructure']
    },
    {
      icon: Boxes,
      title: 'Structural Engineering',
      description: 'Advanced structural drafting for reinforced concrete frames, heavy steel framework designs, foundation details, and structural auditing.',
      features: ['Reinforced Concrete Structures', 'Steel Structure Framing', 'Foundation Calculations', 'Structural Audits & Rehabilitation']
    }
  ];

  const statistics = [
    { value: '26+', label: 'Completed Projects', icon: FolderCheck },
    { value: '2017', label: 'Established Year', icon: Clock },
    { value: '100%', label: 'RDB Compliance', icon: Award },
    { value: '6', label: 'Core Divisions', icon: Users2 }
  ];

  const chooseUsReasons = [
    {
      title: 'Multidisciplinary Expertise',
      desc: 'We house engineering studies, architectural rendering, structural design, and construction execution under one roof to streamline workflows.'
    },
    {
      title: 'Legally Registered & Compliant',
      desc: 'Smart Civil Engineering Works is fully registered with the Rwanda Development Board (RDB Company Code: 107429046) since 2017, complying with all tax obligations.'
    },
    {
      title: 'End-to-End Delivery',
      desc: 'Our integrated methodology ensures seamless handovers from initial soil testing and blueprint design to final key-handover and site closing.'
    },
    {
      title: 'Local Knowledge, Regional Ambition',
      desc: 'Deep operational insight into the Rwandan construction environment, building standard permits, and zoning regulations.'
    }
  ];

  return (
    <div className="pt-20 bg-warm-bg text-slate-700">
      {/* Hero Header */}
      <Hero />

      {/* Statistics Section */}
      <section className="relative z-30 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        <div className="bg-navy rounded-3xl border border-white/5 shadow-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {statistics.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent border border-accent/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-3xl md:text-4xl font-black text-white">
                    {stat.value}
                  </span>
                  <span className="text-slate-350 text-[10px] font-black tracking-widest uppercase">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Logo Marquee scrolling ticker */}
      <PartnerTicker />

      {/* Featured Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-accent text-[10px] font-sans font-black tracking-widest uppercase bg-accent/10 px-4 py-2 rounded-xl">
            Our Specialties
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-black text-navy tracking-tight uppercase">
            What We Build & Deliver
          </h2>
          <p className="text-slate-600 font-sans text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            Providing complete engineering and architectural solutions from initial feasibility studies through structural drafting to supervision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>

        <div className="text-center mt-14 font-sans">
          <NavLink
            to="/services"
            className="inline-flex items-center space-x-2.5 px-7 py-4 bg-navy hover:bg-accent text-white hover:text-white text-xs font-black tracking-widest uppercase rounded-xl transition-all shadow-lg hover:scale-[1.02]"
          >
            <span>View Full Capabilities</span>
            <ArrowRight className="h-4 w-4" />
          </NavLink>
        </div>
      </section>

      {/* Interactive Project Cost Estimator Section */}
      <section className="bg-slate-100 py-20 md:py-28 border-y border-slate-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-accent text-[10px] font-sans font-black tracking-widest uppercase bg-accent/10 px-4 py-2 rounded-xl">
              Interactive Planning Tool
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-navy tracking-tight uppercase">
              Consultancy Fee Estimator
            </h2>
            <p className="text-slate-600 font-sans text-xs sm:text-sm max-w-xl mx-auto font-medium leading-relaxed">
              Estimate your architectural blueprints, soil testing, and construction supervision costs instantly based on your project size.
            </p>
          </div>
          
          <CostCalculator />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-navy text-white py-20 md:py-28 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 bg-accent/5 rounded-full filter blur-3xl opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text details */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-accent text-[10px] font-sans font-black tracking-widest uppercase bg-accent/15 px-4 py-2 rounded-xl border border-accent/20 inline-block">
                  Company Advantage
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-black text-white uppercase tracking-tight leading-tight">
                  Why Partners Choose Smart Civil Works
                </h2>
                <p className="text-slate-350 font-sans text-sm md:text-base leading-relaxed font-medium">
                  We bridge the gap between creative architectural concepts and realistic structural execution, ensuring your investment is built on verified, compliant, and durable structures.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 font-sans">
                {chooseUsReasons.map((reason, index) => (
                  <div key={index} className="space-y-2 border-l border-accent/40 pl-4">
                    <h3 className="text-white font-black text-sm uppercase tracking-wider">
                      {reason.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed font-medium">
                      {reason.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Card Mockup */}
            <div className="bg-white border border-slate-200/50 p-8 md:p-10 rounded-3xl shadow-xl relative font-sans text-slate-700">
              <div className="absolute top-[-10px] right-[-10px] h-4 w-4 bg-accent rounded-full animate-ping" />
              
              <div className="space-y-6">
                <h3 className="text-navy font-serif font-black text-xl uppercase tracking-wider">
                  Project Inquiries & Partnerships
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                  Smart Civil Engineering Works Limited welcomes partnerships with public agencies, private developers, and international architectural consultants looking for a registered local partner in East Africa.
                </p>
                <div className="border-t border-slate-100 my-6 pt-6 text-xs sm:text-sm font-semibold">
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-slate-550 font-bold uppercase tracking-wider">Primary Contact:</span>
                    <span className="text-navy font-black">+250 788 326 103</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-550 font-bold uppercase tracking-wider">Email Address:</span>
                    <span className="text-accent font-black break-all">smartcivilengineeringworks@gmail.com</span>
                  </div>
                </div>
                <NavLink
                  to="/contact"
                  className="flex items-center justify-center space-x-2 w-full py-4 bg-accent hover:bg-navy text-white text-xs font-black tracking-widest uppercase rounded-xl transition-all shadow-lg hover:scale-[1.01]"
                >
                  <span>Discuss a Project</span>
                  <ArrowRight className="h-4 w-4" />
                </NavLink>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="space-y-4">
            <span className="text-accent text-[10px] font-sans font-black tracking-widest uppercase bg-accent/10 px-4 py-2 rounded-xl inline-block">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-navy tracking-tight uppercase">
              Projects Showcase
            </h2>
            <p className="text-slate-600 font-sans text-xs sm:text-sm md:text-base max-w-xl font-medium">
              A brief preview of our engineering achievements. Over 26+ residential, commercial, and educational buildings successfully completed across Rwanda.
            </p>
          </div>
          <NavLink
            to="/projects"
            className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-accent hover:text-accent-hover transition-colors font-sans"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="h-4 w-4" />
          </NavLink>
        </div>

        {/* 3 Featured Projects preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'RDIS Muhanga Office',
              category: 'Commercial / Office Building',
              image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop'
            },
            {
              title: 'Muyumbu TVET',
              category: 'Educational Infrastructure',
              image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop'
            },
            {
              title: 'G+1 Residential Houses (Rebero)',
              category: 'Residential Development',
              image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop'
            }
          ].map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="group bg-white border border-slate-200/50 rounded-3xl overflow-hidden shadow-lg hover:border-slate-300 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-navy/90 backdrop-blur-sm px-3.5 py-1.5 rounded-lg text-white text-[9px] font-sans font-black tracking-widest uppercase">
                  Featured
                </div>
              </div>
              <div className="p-6">
                <span className="text-accent text-[9px] font-sans font-black tracking-widest uppercase block mb-1">
                  {project.category}
                </span>
                <h3 className="text-navy font-serif font-black text-xl uppercase group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Review Slider */}
      <section className="bg-slate-100 py-20 md:py-28 border-t border-slate-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-accent text-[10px] font-sans font-black tracking-widest uppercase bg-accent/10 px-4 py-2 rounded-xl font-sans">
              Feedback
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-navy tracking-tight uppercase">
              What Our Clients Say
            </h2>
            <p className="text-slate-600 font-sans text-xs sm:text-sm max-w-xl mx-auto font-medium leading-relaxed">
              Read how our structural audits, engineering designs, and active supervision help developers achieve success.
            </p>
          </div>

          <Testimonials />
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-accent text-white py-20 md:py-24 relative overflow-hidden font-sans">
        <div className="absolute top-[-50px] right-[-50px] h-48 w-48 bg-white/10 rounded-full pointer-events-none animate-pulse" />
        <div className="absolute bottom-[-100px] left-[-100px] h-72 w-72 bg-white/5 rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black uppercase tracking-tight leading-tight">
            Let's build something extraordinary together.
          </h2>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-semibold">
            Partner with Kigali's premier civil engineering consultancy and turn your concept drafts into durable structural realities.
          </p>
          <div className="pt-4">
            <NavLink
              to="/contact"
              className="inline-flex items-center space-x-2.5 px-8 py-4 bg-navy hover:bg-white text-white hover:text-navy text-xs font-black tracking-widest uppercase rounded-xl transition-all shadow-2xl hover:scale-[1.03]"
            >
              <span>Get Started Today</span>
              <ArrowRight className="h-4 w-4" />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
