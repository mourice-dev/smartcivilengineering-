import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Layers, CheckCircle } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsList = [
    {
      id: 1,
      title: 'RDIS Muhanga Office',
      category: 'Commercial',
      desc: 'Commercial / Office Building',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop',
      year: '2019',
      location: 'Muhanga, Rwanda',
      model: 'Design, Build & Supervision',
      scope: 'Structural execution, masonry work, floor slab engineering, plumbing systems, and premium office finishes.'
    },
    {
      id: 2,
      title: 'Nyabyondo Commercial Building',
      category: 'Commercial',
      desc: 'Commercial Building',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=600&auto=format&fit=crop',
      year: '2020',
      location: 'Kigali, Rwanda',
      model: 'Detailed Design & Structural Calculations',
      scope: 'Concept layout, 3D visualization modeling, structural stability analysis, and municipality permit documents.'
    },
    {
      id: 3,
      title: 'Muyumbu TVET',
      category: 'Educational',
      desc: 'Educational Infrastructure Classroom Blocks',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop',
      year: '2021',
      location: 'Muyumbu, Rwanda',
      model: 'Structural Design & Site Supervision',
      scope: 'Complete structural modeling of three-storey classroom blocks, reinforced concrete calculations, and on-site QA/QC controls.'
    },
    {
      id: 4,
      title: 'G+1 Residential House',
      category: 'Residential',
      desc: 'Modern G+1 Residential Building',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop',
      year: '2018',
      location: 'Kicukiro, Kigali',
      model: 'Design & Construction Supervision',
      scope: 'Detailed architectural drawing, interior partition layout, electrical piping installation, and external paving.'
    },
    {
      id: 5,
      title: 'G+1 Residential House (Modern)',
      category: 'Residential',
      desc: 'High-end G+1 Residential Building',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop',
      year: '2020',
      location: 'Gasabo, Kigali',
      model: 'Design, Build & Supervision',
      scope: 'Feasibility studies, structural design checks, reinforced concrete frame execution, and premium cladding finishing.'
    },
    {
      id: 6,
      title: 'Kirehe Gymnasium Structural Design',
      category: 'Structural',
      desc: 'Large span structural engineering design',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop',
      year: '2022',
      location: 'Kirehe, Eastern Province',
      model: 'Structural Auditing & Design Consultancy',
      scope: 'Designing large-span structural steel roof trusses, foundations loading parameters, and wind shear calculations.'
    },
    {
      id: 7,
      title: 'G+1 Residential Houses (Rebero)',
      category: 'Residential',
      desc: 'G+1 Residential Development Estate',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop',
      year: '2022',
      location: 'Rebero, Kigali',
      model: 'Full Architecture, Planning & Supervision',
      scope: 'Master plan coordinates, infrastructure layout, individual villa designs, and building supervision.'
    },
    {
      id: 8,
      title: 'Busogo Petrol Station',
      category: 'Infrastructure',
      desc: 'Commercial / Industrial Fuel Station Block',
      image: 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?q=80&w=600&auto=format&fit=crop',
      year: '2021',
      location: 'Busogo, Rwanda',
      model: 'Design, Build & Supervision',
      scope: 'Hydraulic and safety hazard design, concrete containment slab engineering, utility infrastructure, and service shop design.'
    },
    {
      id: 9,
      title: 'Busanza Commercial House',
      category: 'Commercial',
      desc: 'Multi-storey Commercial Building',
      image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=600&auto=format&fit=crop',
      year: '2019',
      location: 'Kanombe, Kigali',
      model: 'Detailed Design & Site Supervision',
      scope: 'Complete structural concrete framework design, staircases design, fire safety permit files, and drainage systems.'
    },
    {
      id: 10,
      title: 'G+1 Residential House (A)',
      category: 'Residential',
      desc: 'Family G+1 Residential Building',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop',
      year: '2018',
      location: 'Nyarugenge, Kigali',
      model: 'General Construction Supervision',
      scope: 'Excavation management, concrete footings supervision, bricklaying control, and structural steel reinforcement checks.'
    },
    {
      id: 11,
      title: 'G+1 Residential House (B)',
      category: 'Residential',
      desc: 'Modern Design G+1 House',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=600&auto=format&fit=crop',
      year: '2019',
      location: 'Gisozi, Kigali',
      model: 'Design & Build',
      scope: 'Soil tests, conceptual layout planning, 3D renderings, foundation sizing, masonry walls, and interior finishes.'
    },
    {
      id: 12,
      title: 'G+2 Residential House (A)',
      category: 'Residential',
      desc: 'G+2 Residential Building',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=600&auto=format&fit=crop',
      year: '2020',
      location: 'Kicukiro, Kigali',
      model: 'Structural Calculations & Supervision',
      scope: 'Multi-storey concrete column sizing, reinforced floor slabs, steel stairs, and plumbing distribution supervision.'
    },
    {
      id: 13,
      title: 'G+2 Residential House (B)',
      category: 'Residential',
      desc: 'G+2 Residential Building',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop',
      year: '2020',
      location: 'Remera, Kigali',
      model: 'Design, Build & Supervision',
      scope: 'Initial land topo surveys, structural blueprints design, brickwork, plastering, interior tiling, and paint work.'
    },
    {
      id: 14,
      title: 'G+2 Residential House (C)',
      category: 'Residential',
      desc: 'G+2 Residential Building',
      image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=600&auto=format&fit=crop',
      year: '2021',
      location: 'Kigarama, Kigali',
      model: 'Detailed Design & Structural Checks',
      scope: 'Drafting columns layout, shear walls calculations, utility mapping, and submitting permit files to local construction registries.'
    },
    {
      id: 15,
      title: 'G+2 Residential House (D)',
      category: 'Residential',
      desc: 'G+2 Residential Building',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=600&auto=format&fit=crop',
      year: '2021',
      location: 'Kabeza, Kigali',
      model: 'Construction supervision & Quality control',
      scope: 'Concrete slump checks, cube crash testing reports, rebar details compliance, and electrical wiring audits.'
    },
    {
      id: 16,
      title: 'G+1 Twin Residential House',
      category: 'Residential',
      desc: 'Twin Residential Development',
      image: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=600&auto=format&fit=crop',
      year: '2022',
      location: 'Nyarutarama, Kigali',
      model: 'Design & Construction Supervision',
      scope: 'Combined footings design, firewall partitions structural calculations, MEP systems routing, and exterior finishing.'
    },
    {
      id: 17,
      title: 'Musanze Mixed Use Complex',
      category: 'Commercial',
      desc: 'Mixed Use Commercial / Residential Development',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=600&auto=format&fit=crop',
      year: '2022',
      location: 'Musanze, Northern Province',
      model: 'Design, Build & Supervision',
      scope: 'Musanze mixed use structural execution, foundation load sizing, slope retaining wall blueprints, and construction.'
    },
    {
      id: 18,
      title: 'G+1 Residential House (Bruno)',
      category: 'Residential',
      desc: 'G+1 Residential Building for Bruno',
      image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=600&auto=format&fit=crop',
      year: '2021',
      location: 'Kicukiro, Kigali',
      model: 'Detailed Design & Structural Calculations',
      scope: 'Full conceptual blueprints, structural calculations, and permit files coordination.'
    },
    {
      id: 19,
      title: 'G+1 Residential House (3 Tigers)',
      category: 'Residential',
      desc: 'G+1 Residential Building for 3 Tigers',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600&auto=format&fit=crop',
      year: '2021',
      location: 'Gasabo, Kigali',
      model: 'Design, Build & Supervision',
      scope: 'Turnkey residential package, site excavation, retaining walls design, reinforced concrete structural frame, and high-end gypsum ceiling board finishes.'
    },
    {
      id: 20,
      title: 'G+3 Residential Apartment',
      category: 'Residential',
      desc: 'G+3 Multi-storey Apartment Building',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600&auto=format&fit=crop',
      year: '2022',
      location: 'Kibagabaga, Kigali',
      model: 'Detailed Design & Structural Calculations',
      scope: 'Shear wall seismic calculations, foundations loading designs, underground stormwater storage design, and permit approvals.'
    },
    {
      id: 21,
      title: 'G+1 Residential House (C)',
      category: 'Residential',
      desc: 'Modern G+1 Residential Building',
      image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=600&auto=format&fit=crop',
      year: '2019',
      location: 'Kicukiro, Kigali',
      model: 'General Construction Supervision',
      scope: 'Reinforced concrete slab check, column vertical alignment inspection, and waterproofing system supervision for wet areas.'
    },
    {
      id: 22,
      title: 'G+1 Residential House (D)',
      category: 'Residential',
      desc: 'G+1 Residential Building',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=600&auto=format&fit=crop',
      year: '2019',
      location: 'Gasabo, Kigali',
      model: 'Design & Construction',
      scope: 'Architectural drawings, boundary walls masonry execution, roofing installation, plumbing fixtures, and painting works.'
    },
    {
      id: 23,
      title: 'Rebero Commercial Building',
      category: 'Commercial',
      desc: 'Rebero Commercial Building for Sentabyo',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop',
      year: '2022',
      location: 'Rebero, Kigali',
      model: 'Detailed Design & Structural Checks',
      scope: 'Detailed structural design of multi-storey commercial frame, parking retaining wall design, and permit applications.'
    },
    {
      id: 24,
      title: 'G+2 Residential House (E)',
      category: 'Residential',
      desc: 'G+2 Residential Building',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=600&auto=format&fit=crop',
      year: '2020',
      location: 'Kabeza, Kigali',
      model: 'Design, Build & Supervision',
      scope: 'Feasibility studies, structural checks, foundations concrete castings, brickwork, plastering, interior and exterior cladding.'
    }
  ];

  const categories = ['All', 'Commercial', 'Residential', 'Infrastructure', 'Structural'];

  const filteredProjects = activeCategory === 'All' 
    ? projectsList 
    : projectsList.filter(proj => proj.category === activeCategory);

  return (
    <div className="pt-16 font-sans bg-warm-bg text-slate-700">
      
      {/* Header (Keeps corporate blue theme) */}
      <section className="bg-navy text-white py-6 md:py-8 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-navy/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <span className="text-accent text-[9px] font-sans font-black tracking-widest uppercase bg-accent/15 px-3 py-1 rounded-lg border border-accent/25">
            Portfolio
          </span>
          <h1 className="text-lg md:text-xl font-serif font-black tracking-tight uppercase leading-tight text-white">
            Projects Delivered
          </h1>
          <p className="text-slate-350 text-[10px] max-w-2xl mx-auto leading-relaxed font-medium">
            A showcase of our completed projects demonstrating our engineering expertise across Rwanda.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex flex-wrap items-center justify-center gap-1.5 border-b border-slate-200/50 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-lg text-[9px] font-bold tracking-widest uppercase transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-accent text-white shadow-md shadow-accent/20'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/50 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-warm-bg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white border border-slate-200/50 rounded-2xl overflow-hidden shadow-md hover:border-accent/20 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 cursor-pointer flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-44 overflow-hidden bg-slate-100 shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-navy/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-white text-[8px] font-sans font-black tracking-widest uppercase">
                  {project.category}
                </div>
              </div>
              
              {/* Text Info */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[9px] text-slate-550 font-bold tracking-wider uppercase">
                    <span className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3 text-accent" />
                      <span>{project.location.split(',')[0]}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3 text-accent" />
                      <span>{project.year}</span>
                    </span>
                  </div>
                  
                  <h3 className="text-navy font-serif font-black text-sm uppercase group-hover:text-accent transition-colors duration-250 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 text-[10px] leading-relaxed font-medium line-clamp-2">
                    {project.desc}
                  </p>
                </div>
                
                <div className="border-t border-slate-100 mt-3 pt-3 text-accent text-[9px] font-black tracking-widest uppercase flex items-center justify-between">
                  <span>View Details</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Details Modal Sheet */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-navy/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div 
              className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col lg:flex-row max-h-[90svh] overflow-y-auto lg:overflow-hidden border border-slate-200/50"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 z-50 p-2 bg-navy/60 hover:bg-navy text-white rounded-lg transition-colors duration-150"
                aria-label="Close details"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Image Column */}
              <div className="w-full lg:w-1/2 h-48 lg:h-auto bg-slate-900 relative shrink-0">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 text-white space-y-0.5">
                  <span className="text-[8px] font-bold tracking-widest bg-accent text-white px-2 py-0.5 rounded uppercase font-sans">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-sm font-black uppercase tracking-tight mt-1 leading-tight text-white">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Details Content Column */}
              <div className="w-full lg:w-1/2 p-5 lg:p-6 overflow-y-auto space-y-4 text-slate-700">
                
                {/* Meta details list */}
                <div className="grid grid-cols-2 gap-3 border-b border-slate-100 pb-4 text-[10px] font-sans">
                  <div className="space-y-0.5">
                    <span className="text-slate-500 font-bold uppercase tracking-wider text-[8px]">Execution Model</span>
                    <span className="block text-navy font-black leading-snug">
                      {selectedProject.model}
                    </span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-slate-500 font-bold uppercase tracking-wider text-[8px]">Standards Used</span>
                    <span className="block text-navy font-black flex items-center space-x-1">
                      <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0" />
                      <span>Rwandan & ISO</span>
                    </span>
                  </div>
                  <div className="space-y-0.5 pt-1">
                    <span className="text-slate-500 font-bold uppercase tracking-wider text-[8px]">Location</span>
                    <span className="block text-navy font-black flex items-center space-x-1">
                      <MapPin className="h-3 w-3 text-accent" />
                      <span>{selectedProject.location}</span>
                    </span>
                  </div>
                  <div className="space-y-0.5 pt-1">
                    <span className="text-slate-500 font-bold uppercase tracking-wider text-[8px]">Completion Year</span>
                    <span className="block text-navy font-black flex items-center space-x-1">
                      <Calendar className="h-3 w-3 text-accent" />
                      <span>{selectedProject.year}</span>
                    </span>
                  </div>
                </div>

                {/* Scope of Work */}
                <div className="space-y-2">
                  <h3 className="text-navy font-sans font-bold text-xs uppercase tracking-wide flex items-center space-x-1.5">
                    <Layers className="h-4 w-4 text-accent" />
                    <span>Scope & Technical Details</span>
                  </h3>
                  <p className="text-slate-600 font-sans text-[10px] leading-relaxed font-medium">
                    {selectedProject.scope}
                  </p>
                  <p className="text-slate-550 font-sans text-[10px] leading-relaxed pt-1 font-medium">
                    As a high-impact engineering project delivered by Smart Civil Works Ltd, this building conforms strictly to local structural and civil parameters. The site management team implemented strict occupational hazard controls, concrete durability assays, and routine inspection audits throughout execution.
                  </p>
                </div>

                {/* Close modal */}
                <div className="pt-2 font-sans">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-full py-2 bg-navy hover:bg-accent text-white hover:text-white text-[10px] font-black tracking-widest uppercase rounded-lg transition-all shadow-md"
                  >
                    Close Sheet
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Projects;
