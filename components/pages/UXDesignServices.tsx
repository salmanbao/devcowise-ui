/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Search, 
  Layers, 
  PenTool, 
  Palette, 
  CheckSquare, 
  Cpu, 
  Quote, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2,
  TrendingUp,
  Award
} from 'lucide-react';

interface UXDesignServicesProps {
  onOpenEstimator: () => void;
  onNavigateTo: (page: any) => void;
}

const DESIGN_PROCESS_STEPS = [
  {
    num: '01',
    title: 'Empathize & Discover',
    description: 'Deep qualitative and quantitative research to uncover true user needs and business constraints.',
    details: 'Through user interviews, survey analysis, persona development, and field observations, we build a profound foundation of user understanding before a single pixel is drawn.',
    badge: 'Research Phase'
  },
  {
    num: '02',
    title: 'Define & Strategize',
    description: 'Synthesizing findings into clear problem statements and actionable product strategies.',
    details: 'We map out user journey pathways, align business objectives with design goals, and construct information architectures that simplify complexity.',
    badge: 'Strategy Phase'
  },
  {
    num: '03',
    title: 'Ideate & Prototype',
    description: 'Rapid exploration of concepts translated into interactive, low-to-high fidelity prototypes.',
    details: 'We visualize solutions starting from low-fidelity wireframes to high-fidelity, interactive clickable prototypes in Figma, facilitating rapid validation.',
    badge: 'Creation Phase'
  },
  {
    num: '04',
    title: 'Test & Iterate',
    description: 'Validating assumptions through user testing sessions, refining designs based on empirical feedback.',
    details: 'By testing designs with real users in moderated and unmoderated sessions, we isolate friction points, optimize layouts, and iterate toward success.',
    badge: 'Validation Phase'
  },
  {
    num: '05',
    title: 'Deliver & Refine',
    description: 'Handoff of comprehensive design systems and continuous post-launch optimization.',
    details: 'We supply developers with tokenized, fully-documented design components, assets, and specs, remaining involved post-launch to monitor metrics and continuously refine.',
    badge: 'Delivery Phase'
  }
];

const COMPREHENSIVE_SERVICES = [
  {
    title: 'User Research & Insights',
    description: 'In-depth qualitative and quantitative analysis to understand behaviors, needs, and motivations.',
    icon: Search,
    detail: 'We conduct user interviews, usability audits, competitor research, and user persona crafting to feed exact user behavior maps directly into product blueprints.'
  },
  {
    title: 'Information Architecture',
    description: 'Structuring content logically to ensure intuitive navigation and seamless user journeys.',
    icon: Layers,
    detail: 'We design intuitive sitemaps, advanced taxonomic trees, interactive flowcharts, and clear navigation schemas to minimize cognitive load.'
  },
  {
    title: 'Wireframing & Prototyping',
    description: 'Developing blueprint models and interactive flows for early validation and stakeholder alignment.',
    icon: PenTool,
    detail: 'From sketch to fully interactive micro-interactions, we construct high-fidelity functional prototypes that mimic final live software exactly.'
  },
  {
    title: 'Visual Interface Design',
    description: 'Creating pixel-perfect, brand-aligned interfaces that are aesthetically pleasing and accessible.',
    icon: Palette,
    detail: 'We define cohesive typography, modern color tokens, grid structures, and UI visual signatures adhering to high accessibility (WCAG AA/AAA) regulations.'
  },
  {
    title: 'Usability Testing',
    description: 'Rigorous evaluation methods to identify friction points and optimize the final experience.',
    icon: CheckSquare,
    detail: 'Using heatmaps, gaze tracking, eye-tracking mockups, and structured task compliance tests, we refine layouts with cold empirical evidence.'
  },
  {
    title: 'Design Systems & Strategy',
    description: 'Building scalable component libraries and strategic frameworks for long-term product consistency.',
    icon: Cpu,
    detail: 'We formulate extensive, enterprise-grade design tokens, component variants in Figma, and UI kits to accelerate front-end delivery by up to 45%.'
  }
];

const SUCCESS_STORIES = [
  {
    id: 'fintech-redesign',
    metric: '+40% Conversion Rate',
    metricLabel: 'Transaction Completion Increase',
    company: 'FinSphere Mobile Wallet',
    tag: 'FinTech App Redesign',
    title: 'Streamlining Cross-Border Peer-to-Peer Transactions',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    desc: 'We completely overhauled the transaction checkout funnel, reducing transaction stages from 7 screen gates down to 3, introducing bio-metric smart-sheets, and establishing a unified typography token framework. This resulted in a immediate 40% rise in end-user conversion rates.',
    highlights: ['Reduced Checkout Friction', 'Consistent Tokenized Architecture', 'WCAG AA Accessibility Compliance']
  },
  {
    id: 'health-dashboard',
    metric: '-28% Onboarding Churn',
    metricLabel: 'First-Week Retention Boost',
    company: 'Aura Health diagnostics',
    tag: 'Medical Dashboard & Portal',
    title: 'Designing a High-Fidelity Patient Triage System',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    desc: 'Medical portals require dense informational clarity. We re-architected the Aura health practitioner logs dashboard, building modular visual diagnostics cards that allow medical staff to digest emergency patient logs with 35% higher response velocity.',
    highlights: ['Generous negative space', 'Optimized scanning patterns', 'Highly accessible color system']
  }
];

const TESTIMONIALS = [
  {
    quote: "DevCoWise completely changed how our company thinks about design. They didn't just hand over high-fidelity screens; they integrated with our product owners, formulated a robust custom design system that cut development cycles in half, and engineered a user pathway that immediately boosted our activation metrics.",
    author: "Elena Rostov",
    role: "Head of Product",
    company: "FinSphere Global",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "The rigor of DevCoWise's user testing phase was outstanding. They identified navigation friction points that we were completely blind to. The resulting interactive application is exceptionally intuitive and has received rave reviews from our enterprise customer pool.",
    author: "Marcus Vance",
    role: "VP of Engineering",
    company: "Aura Diagnostics",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export default function UXDesignServices({ onOpenEstimator, onNavigateTo }: UXDesignServicesProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [activeStory, setActiveStory] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextStory = () => setActiveStory((prev) => (prev + 1) % SUCCESS_STORIES.length);
  const prevStory = () => setActiveStory((prev) => (prev - 1 + SUCCESS_STORIES.length) % SUCCESS_STORIES.length);

  return (
    <div className="bg-white text-zinc-900" id="ux-design-services-page">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative bg-[#1A1211] text-white py-24 sm:py-32 px-6 sm:px-12 overflow-hidden border-b border-zinc-900"
        id="ux-design-hero"
      >
        {/* Glow Effects */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-vd-red/10 blur-[150px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-zinc-800/40 blur-[120px] rounded-full pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-xxs font-black tracking-widest text-vd-red uppercase font-mono">
              <span className="w-2 h-2 rounded-full bg-vd-red animate-pulse" />
              Creative Studio / UX & UI Design Excellence
            </div>

            <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter leading-none max-w-2xl text-balance">
              Human-Centered<br />UX Design Services
            </h1>

            <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-sans font-light text-balance">
              Crafting intuitive digital experiences that delight users and drive business growth through meticulous engineering and empathetic design.
            </p>

            <div className="pt-4">
              <button
                onClick={onOpenEstimator}
                className="bg-vd-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-8 py-4.5 rounded transition-all active:scale-[0.98] inline-flex items-center gap-2.5 cursor-pointer shadow-lg shadow-red-950/30"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Visual Image Block */}
          <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[460px] lg:h-[500px] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent z-10 pointer-events-none" />
            <img 
              alt="Human-Centered UX Design Services Wireframes and UI Workflow" 
              className="w-full h-full object-cover select-none" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC091XK1kFvTA8llkjmZMhAtKhprqe2vgWtUTo7q1nO3UPM9BHyLrCxHyYTE7bJdMvpSxmTpY8x8girPE5CjcMYZfQwV4T0fOHkmyCOfOcnj4v9eK-lwbGReg39E9kajohzn9_A1j7As-fo-foA9F1_RSqypnXHiQTNB_CQfWh2vv0lFdcyj1mzOX3kcot2042_T4csy1z65qXQS5p9Tq0sElE5o3aqxxvlVpCqyjcld8G34i1OivHrV6oqR45nM0LBkrN6PlLwGRw"
              referrerPolicy="no-referrer"
            />
            {/* Overlay badge matching high-tech branding */}
            <div className="absolute top-4 right-4 z-20 bg-zinc-900/95 backdrop-blur-md border border-zinc-800 text-[10px] font-mono font-bold tracking-wider px-3.5 py-1.5 rounded uppercase text-vd-red flex items-center gap-1.5 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-vd-red" />
              Interactive Prototypes
            </div>
          </div>

        </div>
      </section>

      {/* 2. DESIGN THINKING PROCESS */}
      <section 
        className="py-24 px-6 sm:px-12 bg-zinc-50 border-b border-zinc-100"
        id="ux-design-process"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xxs uppercase tracking-[0.2em] text-vd-red font-black font-mono block">
              Methodology Focus
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight text-balance">
              Our Design Thinking Process
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base max-w-2xl mx-auto">
              A rigorous, iterative methodology engineered to deliver measurable user value at every scale of product development.
            </p>
          </div>

          {/* Stepper Grid Timeline / Interactive Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Nav List */}
            <div className="lg:col-span-5 space-y-3">
              {DESIGN_PROCESS_STEPS.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-5 rounded-lg border transition-all duration-300 flex items-center gap-4 cursor-pointer group relative overflow-hidden ${
                      isActive 
                        ? 'bg-white border-vd-red shadow-md shadow-zinc-200/50' 
                        : 'bg-zinc-100/50 border-zinc-200/50 hover:bg-white hover:border-zinc-300'
                    }`}
                  >
                    <span className={`font-mono text-xs font-bold px-2 py-1 rounded ${isActive ? 'bg-red-50 text-vd-red' : 'bg-zinc-200 text-zinc-600'}`}>
                      {step.num}
                    </span>
                    <div className="flex-grow">
                      <h3 className={`font-headline text-sm sm:text-base font-bold transition-colors ${isActive ? 'text-vd-red' : 'text-zinc-800 group-hover:text-zinc-950'}`}>
                        {step.title}
                      </h3>
                      <p className="text-zinc-500 text-[11px] truncate max-w-xs mt-0.5">
                        {step.badge}
                      </p>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform text-zinc-400 group-hover:text-vd-red ${isActive ? 'translate-x-1 text-vd-red' : ''}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Detailed Description panel */}
            <div className="lg:col-span-7 bg-white border border-zinc-200/60 rounded-xl p-8 sm:p-12 shadow-sm min-h-[350px] flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50/40 rounded-full blur-2xl pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <span className="text-xxs font-mono font-bold tracking-widest text-vd-red uppercase bg-red-50 px-3 py-1 rounded inline-block">
                    {DESIGN_PROCESS_STEPS[activeStep].badge}
                  </span>

                  <h3 className="font-headline text-2xl sm:text-3xl font-bold text-zinc-900">
                    {DESIGN_PROCESS_STEPS[activeStep].num}. {DESIGN_PROCESS_STEPS[activeStep].title}
                  </h3>

                  <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-sans">
                    {DESIGN_PROCESS_STEPS[activeStep].description}
                  </p>

                  <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-light font-sans border-l-2 border-vd-red/30 pl-4 py-1 italic bg-zinc-50/50 pr-4 rounded-r">
                    {DESIGN_PROCESS_STEPS[activeStep].details}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="pt-8 border-t border-zinc-100 mt-8 flex justify-between items-center text-xxs font-mono text-zinc-400">
                <span>METHODOLOGY GATEWAY</span>
                <span>STEP {activeStep + 1} OF 5</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. COMPREHENSIVE UX/UI SERVICES */}
      <section 
        className="py-24 px-6 sm:px-12 bg-white border-b border-zinc-100"
        id="ux-services-grid"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="space-y-4 max-w-3xl">
            <span className="text-xxs uppercase tracking-[0.2em] text-vd-red font-black font-mono block">
              Core Capabilities
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
              Comprehensive UX/UI Services
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm md:text-base">
              End-to-end design solutions supporting cross-functional engineering processes to launch clean interfaces with swift performance metrics.
            </p>
          </div>

          {/* Grid of 6 design cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPREHENSIVE_SERVICES.map((serv, idx) => {
              const IconComp = serv.icon;
              return (
                <div 
                  key={idx}
                  className="group relative bg-zinc-50 border border-zinc-200/60 rounded-xl p-8 hover:bg-white hover:border-vd-red/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-lg bg-red-50 text-vd-red flex items-center justify-center group-hover:bg-vd-red group-hover:text-white transition-colors duration-300">
                      <IconComp className="w-6 h-6 stroke-[1.5]" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-headline text-base sm:text-lg font-bold text-zinc-950 group-hover:text-vd-red transition-colors duration-300">
                        {serv.title}
                      </h3>
                      <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                        {serv.description}
                      </p>
                    </div>

                    <p className="text-zinc-400 text-[11px] leading-relaxed font-light group-hover:text-zinc-500 transition-colors pt-3 border-t border-zinc-200/40">
                      {serv.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. SUCCESS STORIES (CASE STUDY OVERVIEW) */}
      <section 
        className="py-24 px-6 sm:px-12 bg-zinc-50 border-b border-zinc-100"
        id="ux-success-stories"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-4">
              <span className="text-xxs uppercase tracking-[0.2em] text-vd-red font-black font-mono block">
                Measurable Impact
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight">
                Success Stories
              </h2>
              <p className="text-zinc-500 text-xs sm:text-sm">
                How our design processes deliver substantial user engagement and immediate conversions.
              </p>
            </div>

            <button
              onClick={() => onNavigateTo('portfolio')}
              className="text-xs uppercase font-bold tracking-widest text-zinc-800 border border-zinc-200 hover:border-zinc-500 hover:bg-zinc-50 px-6 py-3.5 rounded transition-all flex items-center gap-2 cursor-pointer w-fit"
            >
              All Case Studies
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Large Slider Featured Block */}
          <div className="bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-900 shadow-2xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[480px]">
              
              {/* Image Column */}
              <div className="lg:col-span-6 relative min-h-[250px] lg:min-h-full overflow-hidden bg-zinc-900">
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-zinc-950 via-zinc-950/20 to-transparent z-10 pointer-events-none" />
                
                <motion.img 
                  key={SUCCESS_STORIES[activeStory].id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 0.75, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  src={SUCCESS_STORIES[activeStory].image} 
                  alt={SUCCESS_STORIES[activeStory].title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Big Stat Box Badge */}
                <div className="absolute top-6 left-6 z-20 bg-vd-red text-white p-4 rounded-lg shadow-lg">
                  <span className="block font-headline text-2xl sm:text-3xl font-black leading-none">
                    {SUCCESS_STORIES[activeStory].metric}
                  </span>
                  <span className="block text-[9px] uppercase tracking-wider font-mono font-bold mt-1 text-red-100">
                    {SUCCESS_STORIES[activeStory].metricLabel}
                  </span>
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between text-white space-y-8 bg-zinc-950 relative z-20">
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xxs font-mono font-bold text-vd-red uppercase tracking-widest block">
                      {SUCCESS_STORIES[activeStory].tag}
                    </span>
                    <h4 className="font-headline text-sm font-bold text-zinc-400">
                      {SUCCESS_STORIES[activeStory].company}
                    </h4>
                  </div>

                  <h3 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                    {SUCCESS_STORIES[activeStory].title}
                  </h3>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans font-light">
                    {SUCCESS_STORIES[activeStory].desc}
                  </p>

                  {/* Highlights list */}
                  <div className="pt-4 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">Focus Deliverables:</span>
                    <div className="flex flex-wrap gap-2">
                      {SUCCESS_STORIES[activeStory].highlights.map((hl, idx) => (
                        <span key={idx} className="bg-white/5 border border-white/10 text-white text-xxs px-3 py-1 rounded-full font-sans font-light">
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Slider Footer controls */}
                <div className="flex items-center justify-between pt-6 border-t border-zinc-900">
                  <span className="text-[10px] font-mono text-zinc-500">
                    CASE {activeStory + 1} OF {SUCCESS_STORIES.length}
                  </span>

                  <div className="flex gap-2">
                    <button 
                      onClick={prevStory}
                      className="w-10 h-10 rounded border border-zinc-800 hover:border-zinc-600 bg-zinc-900/50 flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4 text-zinc-400" />
                    </button>
                    <button 
                      onClick={nextStory}
                      className="w-10 h-10 rounded border border-zinc-800 hover:border-zinc-600 bg-zinc-900/50 flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4 text-zinc-400" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. CLIENT TESTIMONIAL */}
      <section 
        className="py-24 px-6 sm:px-12 bg-white border-b border-zinc-100"
        id="ux-client-testimonial"
      >
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          <div className="space-y-3">
            <span className="text-xxs uppercase tracking-[0.2em] text-vd-red font-black font-mono block">
              Validation
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-black text-zinc-950">
              Client Testimonials
            </h2>
          </div>

          <div className="relative pt-6">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 text-zinc-100 pointer-events-none select-none">
              <Quote className="w-16 h-16 opacity-20 text-zinc-200" />
            </span>

            <blockquote className="font-headline text-xl sm:text-2xl md:text-3xl font-medium text-zinc-800 leading-relaxed relative z-10 max-w-3xl mx-auto">
              "{TESTIMONIALS[activeTestimonial].quote}"
            </blockquote>
          </div>

          {/* Slide Navigation & Author */}
          <div className="flex flex-col items-center justify-center space-y-4 pt-4">
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="w-8 h-8 rounded-full border border-zinc-200 hover:border-zinc-400 flex items-center justify-center text-zinc-500 cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="w-14 h-14 rounded-full border border-zinc-200 bg-zinc-50 overflow-hidden p-1">
                <img 
                  src={TESTIMONIALS[activeTestimonial].image} 
                  alt={TESTIMONIALS[activeTestimonial].author} 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <button 
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)}
                className="w-8 h-8 rounded-full border border-zinc-200 hover:border-zinc-400 flex items-center justify-center text-zinc-500 cursor-pointer transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="text-center">
              <h4 className="font-headline text-xs uppercase tracking-widest font-black text-zinc-950">
                {TESTIMONIALS[activeTestimonial].author}
              </h4>
              <p className="text-zinc-500 text-xxs font-mono uppercase tracking-wider">
                {TESTIMONIALS[activeTestimonial].role}, {TESTIMONIALS[activeTestimonial].company}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. BOTTOM BANNER / CTA */}
      <section 
        className="py-28 bg-zinc-950 text-center relative overflow-hidden"
        id="ux-design-cta"
      >
        {/* Subtle patterned overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: `linear-gradient(45deg, #EE2737 25%, transparent 25%, transparent 50%, #EE2737 50%, #EE2737 75%, transparent 75%, transparent)`,
          backgroundSize: '24px 24px'
        }} />

        {/* Outer radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-vd-red/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center space-y-8">
          <h2 className="font-headline text-4xl sm:text-5xl font-black text-white leading-none tracking-tight">
            Ready to Create Something Beautiful?
          </h2>
          
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-sans font-light">
            Bring your most ambitious interface ideas to life. Let’s co-design a visual language that fits perfectly with your users' routines.
          </p>
          
          <div className="pt-2">
            <button
              onClick={onOpenEstimator}
              className="bg-vd-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-8 py-4.5 rounded transition-all active:scale-[0.98] inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-red-950/20"
            >
              Start Your Design Journey
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
