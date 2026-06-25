/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  MessageSquare, 
  GitBranch, 
  ShieldCheck, 
  Sliders, 
  ChevronDown, 
  Lightbulb, 
  Quote 
} from 'lucide-react';

interface SolutionsEngineeringProps {
  onOpenEstimator: () => void;
  onNavigateTo: (page: any) => void;
}

const DISCOVERY_STEPS = [
  {
    num: '01',
    title: 'DESIGN SPRINT',
    description: 'Rapid ideation and validation of core concepts to ensure alignment with user needs and market demands before significant engineering investment.'
  },
  {
    num: '02',
    title: 'BUSINESS CASE DEVELOPMENT',
    description: 'Defining technical architecture, resource requirements, and ROI metrics to establish a clear, actionable roadmap for development.'
  },
  {
    num: '03',
    title: 'INTERACTIVE PROTOTYPING',
    description: 'Creating high-fidelity, clickable models to test user flows, gather stakeholder feedback, and finalize functional requirements.'
  }
];

const GOVERNANCE_CARDS = [
  {
    icon: MessageSquare,
    title: 'CLEAR COMMUNICATION',
    description: 'Direct channels and regular cadence ensure total visibility into project status and technical decisions.'
  },
  {
    icon: GitBranch,
    title: 'RIGOROUS PROJECT MGT',
    description: 'Agile frameworks tailored to enterprise scale, managing dependencies and mitigating risks proactively.'
  },
  {
    icon: ShieldCheck,
    title: 'QUALITY ASSURANCE',
    description: 'Automated testing, continuous integration, and comprehensive code reviews are embedded from day one.'
  },
  {
    icon: Sliders,
    title: 'TAILORED SOLUTIONS',
    description: 'Architecture designed specifically for your unique constraints, tech stack, and long-term business goals.'
  }
];

const FAQS = [
  {
    id: 'sustainability',
    question: 'HOW DO YOU ENSURE SOFTWARE SUSTAINABILITY?',
    answer: 'We prioritize clean architecture, comprehensive documentation, and modern DevOps practices. By using robust design patterns and ensuring high test coverage, we deliver codebases that are maintainable, scalable, and easy to hand off to internal teams.'
  },
  {
    id: 'process',
    question: 'WHAT IS YOUR CUSTOM ENGINEERING PROCESS?',
    answer: 'Our process begins with a deep discovery phase to align on business objectives. We then move into iterative, agile development sprints involving continuous feedback loops, automated testing, and CI/CD deployment to ensure rapid, reliable delivery of functional increments.'
  },
  {
    id: 'advantages',
    question: 'WHAT ARE THE TECHNICAL ADVANTAGES OF PARTNERING WITH YOU?',
    answer: 'We bring a deep pool of certified cloud architects, full-stack veterans, and DevSecOps practitioners who build with the latest patterns. By applying standard architectural guidelines and strict quality gates, we minimize technical debt and accelerate release velocity.'
  }
];

export default function SolutionsEngineering({ onOpenEstimator, onNavigateTo }: SolutionsEngineeringProps) {
  const [expandedFaq, setExpandedFaq] = useState<string | null>('process');

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="space-y-0 text-zinc-900 bg-white" id="solutions-engineering-page">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative bg-zinc-950 text-white py-28 sm:py-36 px-6 sm:px-12 overflow-hidden border-b border-zinc-900"
        id="solutions-hero"
      >
        {/* Abstract Tech-themed Graphic Background (Laser lines & particles style) */}
        <div className="absolute inset-0 z-0 opacity-15" style={{
          backgroundImage: `linear-gradient(to right, rgba(238, 39, 55, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(238, 39, 55, 0.15) 1px, transparent 1px)`,
          backgroundSize: '45px 45px'
        }} />

        {/* Ambient radial gradients */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-vd-red/10 blur-[120px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-zinc-800/20 blur-[90px] rounded-full pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Hero Left: Text & CTA */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-8 h-0.5 bg-vd-red block" />
              <span className="text-xxs uppercase tracking-[0.25em] text-vd-red font-black font-mono">
                Services
              </span>
            </div>

            <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter leading-none">
              Solutions Engineering
            </h1>

            <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-sans font-light">
              We build custom software solutions that drive business transformation. From architecture design to deployment, our engineering teams deliver scalable, high-performance applications tailored to your specific enterprise needs.
            </p>

            <div className="pt-4">
              <button
                onClick={onOpenEstimator}
                className="bg-vd-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-8 py-4.5 rounded transition-all active:scale-[0.98] inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-red-950/20"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hero Right: High-Tech Graphic Image */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-1.5 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 pointer-events-none" />
              
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhu70zchA6FYkVjJkYlaT7PFFdmNyMx-pSu3IdMkxLdQs4VjZrvQe_sT_m6boEY3TepyOEArkkM0BRWtWZEUvD4E7bdUAFf3R5b9gp_EHdI3QnpFQ47V_ajTwGbzWlQvG5DqtgAEcAL2oSvqXe7opX5hWGeUmNMl71j8TRxpn7xmHApE6hb3_WhXqAIhyFZVxXkHnMlUvoKgTUfqiRLEtFQjh-_A1f0ppLeBfdVIRhVtGvoqprAy7BSfH48LaOb6fZPM-y5eA9ToM" 
                alt="Abstract rendering of software engineering and data architecture monolithic structures with red accents" 
                className="w-full h-[380px] object-cover rounded-xl opacity-80 group-hover:opacity-95 transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur-md border border-zinc-800 rounded px-2.5 py-1 text-[10px] font-mono tracking-widest text-vd-red font-black uppercase">
                Enterprise Stack
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. EXPERTISE SECTION */}
      <section 
        className="py-24 px-6 sm:px-12 bg-white border-b border-zinc-100"
        id="solutions-expertise"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Expertise Left Column: Title and Description */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 leading-tight">
                End-to-End Solutions Engineering Expertise
              </h2>
              <div className="w-12 h-1 bg-vd-red" />
              
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-sans">
                Our engineering approach bridges the gap between high-level strategic consultancy and rigorous software execution. We don't just write code; we architect systems designed for longevity, scale, and measurable business impact.
              </p>
              
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-sans">
                By leveraging cutting-edge technologies and proven agile methodologies, we navigate complex technical landscapes to deliver solutions that are both innovative and deeply reliable.
              </p>
            </div>

            {/* Expertise Right Column: Discovery Workshop Highlight Box */}
            <div className="lg:col-span-7 bg-zinc-50 border border-zinc-200/80 rounded-xl p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-vd-red/5 blur-3xl rounded-full pointer-events-none" />
              
              <div className="space-y-10">
                <div className="flex items-center gap-3.5 pb-2">
                  <span className="p-2.5 bg-red-50 text-vd-red rounded-lg">
                    <Lightbulb className="w-6 h-6" />
                  </span>
                  <h3 className="font-headline text-xl sm:text-2xl font-bold text-zinc-950">
                    Discovery Workshop
                  </h3>
                </div>

                <div className="space-y-8 divide-y divide-zinc-200/60">
                  {DISCOVERY_STEPS.map((step, index) => (
                    <div 
                      key={step.num} 
                      className={`flex gap-6 items-start ${index > 0 ? 'pt-8' : ''}`}
                    >
                      <div className="shrink-0 w-10 h-10 rounded-full bg-white border border-zinc-200 text-zinc-800 font-mono font-bold text-sm flex items-center justify-center shadow-sm">
                        {step.num}
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="font-headline text-xs sm:text-sm font-black uppercase tracking-widest text-zinc-950">
                          {step.title}
                        </h4>
                        <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SUCCESS STORIES SECTION */}
      <section 
        className="py-24 px-6 sm:px-12 bg-zinc-950 text-white border-b border-zinc-900"
        id="solutions-success"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Top Row: Heading and CTA */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2.5">
                <span className="w-8 h-0.5 bg-vd-red block" />
                <span className="text-xxs uppercase tracking-[0.25em] text-vd-red font-black font-mono">
                  Impact
                </span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Client Success Stories
              </h2>
            </div>

            <button
              onClick={() => onNavigateTo('portfolio')}
              className="text-xs uppercase font-bold tracking-widest text-white border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-900 px-6 py-3.5 rounded transition-all flex items-center gap-2 cursor-pointer w-fit"
            >
              More Case Studies
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Large Interactive Case Study Bento-style Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Visual Media Block */}
            <div className="lg:col-span-7 bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 relative group min-h-[300px] lg:min-h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10 pointer-events-none" />
              
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlJSAwsPInKzBw2KhZRWboTLlPKxrVyeHPWHDv35ahIZAoNPLaWSRb5AuXZd2g6hMSqIgxzDvfR7_IG5chEV8mNIN6YHDdZufLfgxBFJD4ZshlcRZ-i1LHeH6ffT8rvTciyZa70jo7fmE4cUsS0aERPkWDxCbQvVyj9x2911AdJdO7fowRmfCQoCg53Dwqp1Qi06UFMAg-iYtcARdX7rsfwd2rI1-u77aUVvqUrTlCwXa6AerwM7HkJREAGE5_shSPgjmMd_8r9xQ" 
                alt="Urban cityscape representing ride-hailing data logistics" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Branding Overlays */}
              <div className="absolute bottom-8 left-8 z-20 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg p-2 shrink-0">
                  <span className="text-zinc-950 font-headline font-black text-lg">C</span>
                </div>
                <div>
                  <h4 className="font-headline text-2xl font-black text-white tracking-tight">
                    Careem
                  </h4>
                  <p className="text-zinc-400 text-xxs font-mono uppercase tracking-widest">
                    Ride-Hailing Infrastructure Partner
                  </p>
                </div>
              </div>
            </div>

            {/* Detailed Metadata Block */}
            <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 rounded-xl p-8 sm:p-12 flex flex-col justify-between space-y-12">
              <div className="space-y-6">
                <span className="inline-block px-3 py-1 bg-green-950/40 text-green-400 border border-green-800/30 rounded-full font-mono text-xxs uppercase tracking-wider">
                  Ride-Hailing Infrastructure
                </span>
                
                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-white leading-tight">
                  Scaling a Super App for the Middle East
                </h3>
                
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Engineered the core architecture and backend services to support rapid expansion, handling complex logistics, payment processing, and real-time tracking across multiple regions.
                </p>
              </div>

              {/* Key Statistics Grid */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-zinc-800">
                <div className="space-y-1">
                  <span className="font-headline text-3xl sm:text-4xl font-black text-vd-red block">
                    50M+
                  </span>
                  <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest block">
                    Users Scaled
                  </span>
                </div>
                
                <div className="space-y-1">
                  <span className="font-headline text-3xl sm:text-4xl font-black text-white block">
                    99.9%
                  </span>
                  <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest block">
                    Uptime Maintained
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. TESTIMONIALS SECTION */}
      <section 
        className="py-24 px-6 sm:px-12 bg-zinc-50 border-b border-zinc-100"
        id="solutions-testimonials"
      >
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          <div className="space-y-3">
            <span className="text-xxs uppercase tracking-[0.2em] text-vd-red font-black font-mono block">
              Global Endorsements
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-black text-zinc-950">
              What Our Customers Say About Us
            </h2>
          </div>

          <div className="relative pt-6">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 text-zinc-200 pointer-events-none select-none">
              <Quote className="w-16 h-16 opacity-35" />
            </span>

            <blockquote className="font-headline text-xl sm:text-2xl md:text-3xl font-medium text-zinc-800 leading-relaxed relative z-10 max-w-3xl mx-auto">
              "The engineering talent provided was exceptional. They integrated seamlessly with our internal teams, bringing a level of technical rigor and architectural foresight that significantly accelerated our product roadmap."
            </blockquote>
          </div>

          <div className="flex flex-col items-center justify-center space-y-3 pt-4">
            <div className="w-16 h-16 rounded-full border border-zinc-200 bg-white overflow-hidden shadow-sm p-1">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDio2WK_U_6phc6OfWvVnYDljwFxkI-3Q-NJlhqc_niNPt6Hfp3H2Q2RAULvI-keOWFP0OjrJrHo0beT2gIxRKbRs7PIkWpnY5NynAtSAWJkoiUWsSxSuRN_KPGYZ7EtPHdnPJgQghdt-AqBWgn7D8AQJChw9Dpzw0SJl2k6qlNY51oZgdWlys5RfnksLXopPdVVSqw6vdCm8SHPx4XKJlsDgZzlLsoqTwKp2po6_Ougr96K-NlejnlNQqDSm9xnSLAIoUwwYbJ7UY" 
                alt="Joyce Chen, VP of Engineering, ONN" 
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="text-center">
              <h4 className="font-headline text-xs uppercase tracking-widest font-black text-zinc-950">
                JOYCE CHEN
              </h4>
              <p className="text-zinc-500 text-xxs font-mono uppercase tracking-wider">
                VP of Engineering, ONN
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. GOVERNANCE & DELIVERY SECTION */}
      <section 
        className="py-24 px-6 sm:px-12 bg-white border-b border-zinc-100"
        id="solutions-governance"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xxs uppercase tracking-[0.2em] text-vd-red font-black font-mono block">
              Delivery Methodology
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950">
              Trusted Governance, Exceptional Service Delivery
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
              Our engagement models are built on transparency, disciplined execution, and a relentless focus on quality, ensuring your project is delivered on time and to specification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {GOVERNANCE_CARDS.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div 
                  key={card.title}
                  className="bg-zinc-50 border border-zinc-200/60 rounded-xl p-8 hover:border-vd-red/30 hover:bg-white hover:shadow-lg transition-all duration-300 space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-5">
                    <div className="w-12 h-12 rounded-lg bg-red-50 text-vd-red flex items-center justify-center shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-headline text-xs sm:text-sm font-black uppercase tracking-wider text-zinc-950">
                        {card.title}
                      </h4>
                      <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. FAQ ACCORDION SECTION */}
      <section 
        className="py-24 px-6 sm:px-12 bg-zinc-50 border-b border-zinc-100"
        id="solutions-faq"
      >
        <div className="max-w-3xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xxs uppercase tracking-[0.2em] text-vd-red font-black font-mono block">
              Technical Guidelines
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-zinc-950">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => {
              const isOpen = expandedFaq === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="border border-zinc-200 rounded-xl bg-white overflow-hidden transition-all duration-200"
                >
                  <button 
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex justify-between items-center p-6 text-left hover:bg-zinc-50/50 transition-colors focus:outline-none cursor-pointer"
                  >
                    <span className={`font-headline text-xs sm:text-sm font-bold uppercase tracking-widest ${isOpen ? 'text-vd-red' : 'text-zinc-950'}`}>
                      {faq.question}
                    </span>
                    <motion.span 
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`shrink-0 ${isOpen ? 'text-vd-red' : 'text-zinc-400'}`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-1 text-zinc-600 text-xs sm:text-sm leading-relaxed border-t border-zinc-100 bg-zinc-50/40">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. BOTTOM CTA SECTION */}
      <section 
        className="py-28 bg-zinc-950 text-center relative overflow-hidden"
        id="solutions-cta"
      >
        {/* Striped ambient grid overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: `linear-gradient(45deg, #EE2737 25%, transparent 25%, transparent 50%, #EE2737 50%, #EE2737 75%, transparent 75%, transparent)`,
          backgroundSize: '24px 24px'
        }} />

        {/* Outer radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-vd-red/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center space-y-8">
          <h2 className="font-headline text-4xl sm:text-5xl font-black text-white leading-none tracking-tight">
            Partner with Us for Solutions That Deliver
          </h2>
          
          <div className="pt-2">
            <button
              onClick={onOpenEstimator}
              className="bg-vd-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-8 py-4.5 rounded transition-all active:scale-[0.98] inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-red-950/20"
            >
              Discuss Your Project
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
