import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  Building2, 
  Route, 
  Boxes, 
  ClipboardCheck, 
  HardHat, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import FaqAccordion from '../components/FaqAccordion';

const Services = () => {
  const serviceCategories = [
    {
      id: 'studies',
      title: 'Engineering Studies & Investigations',
      icon: Compass,
      desc: 'Critical pre-construction studies to assess soil properties, land topography, and compile engineering reports for safe project planning.',
      items: [
        { name: 'Feasibility Studies', details: 'Economic and technical evaluation to determine the viability of infrastructure plans.' },
        { name: 'Topographical Surveys', details: 'High-precision site mapping and contours modeling using modern electronic surveying gear.' },
        { name: 'Site & Geotechnical Investigations', details: 'Drilling and logging to map subsurface lithology and load-bearing capacities.' },
        { name: 'Soil Testing and Analysis', details: 'Laboratory testing of soil shear strength, plasticity index, moisture density relations.' },
        { name: 'Technical Due Diligence', details: 'Comprehensive evaluation of existing structural safety and geological risks.' },
        { name: 'Engineering Assessments', details: 'Structural calculations and drainage assessments for new developments.' }
      ]
    },
    {
      id: 'architectural',
      title: 'Architectural Services',
      icon: Building2,
      desc: 'Creative space designs paired with professional blueprints, interior plans, permit files, and premium 3D visualizations.',
      items: [
        { name: 'Architectural Concept Design', details: 'Drafting floor layouts, spacing relations, and initial exterior silhouettes.' },
        { name: 'Detailed Architectural Design', details: 'Drafting building sections, elevations, doors/windows schedules, and construction schedules.' },
        { name: 'Interior Space Planning', details: 'Optimizing interior rooms layout, material textures mapping, lighting design.' },
        { name: 'Permit Documentation', details: 'Compiling files and stamps to comply with local municipality zoning and building guidelines.' },
        { name: '3D Visualization & Rendering', details: 'Creating photorealistic exterior and interior perspective pictures for marketing.' },
        { name: 'Construction Documentation', details: 'Developing detailed architectural specs and material notes for contractors.' }
      ]
    },
    {
      id: 'civil',
      title: 'Civil & Infrastructure Engineering',
      icon: Route,
      desc: 'Planning and engineering core municipal infrastructure systems, water lines, storm drainage, and road networks.',
      items: [
        { name: 'Road Engineering', details: 'Design of flexible and rigid pavements, horizontal alignment geometries, street details.' },
        { name: 'Drainage & Stormwater Management', details: 'Hydrological design of storm drains, channels, retention basins, and culverts.' },
        { name: 'Water Supply Systems', details: 'Hydraulic modeling of supply mains, pumping stations, distribution pipelines, reservoirs.' },
        { name: 'Sewerage & Wastewater Systems', details: 'Sizing gravity collectors, manholes, lift stations, and basic municipal sewer grids.' }
      ]
    },
    {
      id: 'structural',
      title: 'Structural Engineering',
      icon: Boxes,
      desc: 'Precision calculations and drafting for structural frames, concrete foundations, heavy steel structures, and structural audits.',
      items: [
        { name: 'Reinforced Concrete Structures', details: 'Designing structural columns, flat slabs, beams, retaining walls, shear cores.' },
        { name: 'Steel Structures', details: 'Engineering steel roof trusses, gantries, industrial warehouses, connections design.' },
        { name: 'Foundation Engineering', details: 'Sizing strip foundations, combined footings, pile caps, and ground slab supports.' },
        { name: 'Industrial Structures', details: 'Structural layouts for process plants, equipment support plinths, silo bases.' },
        { name: 'Water Tanks & Reservoirs', details: 'Hydrodynamic calculations for underground, ground-level, and elevated water tanks.' },
        { name: 'Structural Audits & Rehabilitation', details: 'Ultrasonic concrete scanning, rebound hammer tests, load capacity retrofitting plans.' }
      ]
    },
    {
      id: 'management',
      title: 'Project Management & Supervision',
      icon: ClipboardCheck,
      desc: 'On-site construction supervision, QA/QC audits, cost management, and rigorous safety controls.',
      items: [
        { name: 'Construction Supervision', details: 'On-site monitoring of materials and workmanship compliance to blueprints.' },
        { name: 'Contract Administration', details: 'Managing payment certifications, site instructions, and variations claims.' },
        { name: 'Quality Assurance & Quality Control', details: 'Testing concrete slump/cubes, rebar sizing checks, structural steel weld audits.' },
        { name: 'Cost Management', details: 'Quantity surveying, bills of quantities preparation, project cash-flow tracking.' },
        { name: 'Scheduling and planning', details: 'Creating Gantt chart timelines and resource allocation milestones.' },
        { name: 'Health & Safety Management', details: 'Enforcing site safety protocols, PPE usage, and scaffold inspection checks.' }
      ]
    },
    {
      id: 'activities',
      title: 'Additional Construction Activities',
      icon: HardHat,
      desc: 'Civil works, building execution, electrical installation, plumbing/HVAC services, and premium finishing works.',
      items: [
        { name: 'Construction of Buildings', details: 'General contracting for residential villas, apartments, commercial offices.' },
        { name: 'Construction of Utility Projects', details: 'Site work, retaining walls construction, piping trenches, utility connection lines.' },
        { name: 'Civil Engineering Projects', details: 'Constructing concrete road drainage structures, slope stabilization, culverts.' },
        { name: 'Electrical Installation', details: 'Wiring buildings, installing distribution boards, light fixtures, earthing grids.' },
        { name: 'Plumbing, Heat & Air-Conditioning', details: 'Drafting and piping clean water lines, sewer hookups, and HVAC vent plans.' },
        { name: 'Building Completion and Finishing', details: 'Premium plastering, floor tiles laying, custom gypsum works, painting, exterior cladding.' }
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(serviceCategories[0].id);
  const activeCategory = serviceCategories.find(cat => cat.id === activeTab);

  return (
    <div className="pt-20 font-sans bg-warm-bg text-slate-700">
      
      {/* Header (Keeps corporate blue theme for contrast) */}
      <section className="bg-navy text-white py-20 md:py-28 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-navy/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-accent text-[10px] font-sans font-black tracking-widest uppercase bg-accent/15 px-4 py-2 rounded-xl border border-accent/25">
            What We Do
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-black tracking-tight uppercase leading-tight text-white">
            Engineering & Consultancy Services
          </h1>
          <p className="text-slate-350 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            From initial geotechnical soil investigations to photorealistic 3D blueprints and on-site supervisor controls.
          </p>
        </div>
      </section>

      {/* Services Exploration Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-black text-navy uppercase">
            Explore Our Full Range
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium">
            Select a division below to discover the specific engineering capabilities and civil activities we offer.
          </p>
        </div>

        {/* Categories Tab buttons */}
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Vertical Tabs Sidebar */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-2 border-r border-slate-200/50 pr-0 lg:pr-8">
            {serviceCategories.map((category) => {
              const Icon = category.icon;
              const isActive = category.id === activeTab;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center space-x-4 p-4.5 rounded-2xl text-left transition-all duration-200 ${
                    isActive 
                      ? 'bg-accent text-white shadow-xl scale-[1.01]' 
                      : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/50 shadow-md'
                  }`}
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                    isActive ? 'bg-white/10 text-white' : 'bg-slate-50 text-accent border border-slate-200/50 shadow-sm'
                  }`}>
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm tracking-wide leading-tight uppercase font-sans">{category.title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab Content Area */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Division Intro */}
                <div className="space-y-4 bg-navy text-white p-8 rounded-3xl relative overflow-hidden shadow-2xl border border-white/5">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 bg-accent/5 rounded-full filter blur-2xl opacity-40 pointer-events-none" />
                  <div className="relative z-10 flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-white shadow-lg">
                      <activeCategory.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif font-black uppercase tracking-wide text-white">
                      {activeCategory.title}
                    </h3>
                  </div>
                  <p className="relative z-10 text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                    {activeCategory.desc}
                  </p>
                </div>

                {/* Sub-services Grid List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {activeCategory.items.map((item, index) => (
                    <div 
                      key={index}
                      className="bg-white border border-slate-200/50 p-6 rounded-3xl shadow-xl hover:border-accent/20 transition-all flex items-start space-x-4 text-slate-700"
                    >
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <h4 className="font-bold text-navy text-xs sm:text-sm uppercase leading-snug tracking-wide font-sans">
                          {item.name}
                        </h4>
                        <p className="text-slate-650 text-xs leading-relaxed font-medium">
                          {item.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </section>

      {/* Frequently Asked Questions Accordion Section */}
      <section className="bg-slate-100 py-20 md:py-28 border-t border-slate-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-accent text-[10px] font-black tracking-widest uppercase bg-accent/10 px-4 py-2 rounded-xl font-sans">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-navy uppercase">
              Permits, Audits & Operations
            </h2>
            <p className="text-slate-600 font-sans text-xs sm:text-sm max-w-xl mx-auto font-medium leading-relaxed">
              Find quick answers to common regulatory, calculation, and supervisions questions regarding building in Rwanda.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* FAQ/Info Banner */}
      <section className="bg-navy text-white py-20 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 bg-accent/5 rounded-full filter blur-2xl opacity-30 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent border border-accent/20 mx-auto shadow-md">
            <HelpCircle className="h-6 w-6" />
          </div>
          <h3 className="text-2xl md:text-4xl font-serif font-black uppercase tracking-tight text-white">Need Custom Technical Specifications?</h3>
          <p className="text-slate-350 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-medium">
            Our engineering team regularly drafts customized bills of quantities (BOQ) and site layouts. Let us know what details you require for your tender proposal.
          </p>
          <div className="pt-2">
            <a
              href="mailto:smartcivilengineeringworks@gmail.com"
              className="inline-flex items-center space-x-2.5 px-6 py-3.5 bg-accent hover:bg-white text-white hover:text-navy text-xs font-black tracking-widest uppercase rounded-xl transition-all shadow-lg hover:scale-[1.01]"
            >
              Request Technical Details
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
