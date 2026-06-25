/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft,
  Cpu, 
  GitMerge, 
  Code, 
  Shield, 
  Globe, 
  Users, 
  Award, 
  Zap,
  Check, 
  Plus, 
  Minus,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface TechConsultServicesProps {
  onOpenEstimator: () => void;
  onNavigateTo: (page: 'services' | 'industries' | 'portfolio' | 'assessment' | 'about' | 'integration' | 'devops') => void;
}

// Testimonials data
const TESTIMONIALS = [
  {
    quote: "TechConsult transformed our legacy transaction systems into a highly scalable API platform. Their focus on engineering excellence and zero-downtime deployment saved us millions.",
    author: "Marcus Vance",
    role: "Chief Technology Officer",
    company: "Financier Trust Co.",
    metric: "Zero Downtime Over 12-Month Rollout"
  },
  {
    quote: "The speed at which TechConsult designed and rolled out our clinical telehealth portal was incredible. They met absolute GDPR and HIPAA compliance from day one while maintaining a flawless UX.",
    author: "Dr. Elena Rostova",
    role: "Director of Clinical Infrastructure",
    company: "Apex Health Systems",
    metric: "43% Patient Triage Bottleneck Reduction"
  },
  {
    quote: "Their collaborative agile sprints and technical depth allowed us to integrate smart IoT tracking for 8,000+ logistics trucks ahead of schedule. Truly a world-class engineering partner.",
    author: "David Vance",
    role: "VP of Supply Chain Systems",
    company: "Global Logistics Group",
    metric: "$1.8M Fuel Consumption Savings"
  }
];

// FAQs data
const FAQS = [
  {
    question: "What software development models does TechConsult offer?",
    answer: "We offer end-to-end dedicated engineering squads, custom time-and-materials scoping pipelines, and milestone-based deliverables. Every model embeds senior technical architects directly into your product sprints to assure zero miscommunication."
  },
  {
    question: "How do you ensure enterprise data security and regulatory compliance?",
    answer: "Our software development processes are secure by design. We enforce strict DevSecOps gates, write HIPAA/GDPR-compliant source architectures, implement SOC2 security guardrails, and mandate multi-layer container token checks before production release."
  },
  {
    question: "Can you modernize old legacy software systems without operational downtime?",
    answer: "Yes, we specialize in the Strangler Application Pattern. We wrap legacy AS400, mainframe, or monolithic databases in modern microservices, testing traffic progressively via shadow routing to guarantee 100% active operational continuity."
  },
  {
    question: "What specific technology stacks do your engineering squads specialize in?",
    answer: "We are vendor-neutral. Our engineers specialize in modern high-performance frameworks including React, Node.js, Go, Python, Kubernetes, Apache Kafka, Redis, and cloud-native serverless deployments across AWS, GCP, and Azure."
  },
  {
    question: "How does the Digital Maturity Diagnostic align with project scoping?",
    answer: "The diagnostic evaluates your current engineering maturity across 4 parameters. We translate these metrics directly into a customized architectural brief, eliminating guesswork and accelerating code kickoff by weeks."
  }
];

export default function TechConsultServices({ onOpenEstimator, onNavigateTo }: TechConsultServicesProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const toggleFaq = (idx: number) => {
    setExpandedFaq(expandedFaq === idx ? null : idx);
  };

  return (
    <div className="space-y-0 text-zinc-900" id="tech-consult-services-page">

      {/* 1. HERO SECTION */}
      <section 
        className="relative bg-zinc-950 text-white py-24 sm:py-32 px-6 sm:px-12 overflow-hidden border-b border-zinc-900"
        id="services-hero-section"
      >
        {/* Web Geometric Grid Background overlay */}
        <div className="absolute inset-0 z-0 opacity-15" style={{
          backgroundImage: `linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />

        {/* Dynamic High-Tech Connection Nodes Network Visual */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
          <svg className="w-full h-full min-w-[800px] min-h-[500px]" viewBox="0 0 1000 600">
            {/* Connection Lines */}
            <motion.line x1="200" y1="150" x2="450" y2="280" stroke="#EE2737" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }} />
            <motion.line x1="450" y1="280" x2="750" y2="180" stroke="#ffffff" strokeWidth="0.8" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse' }} />
            <motion.line x1="450" y1="280" x2="350" y2="480" stroke="#EE2737" strokeWidth="0.8" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }} />
            <motion.line x1="750" y1="180" x2="850" y2="380" stroke="#ffffff" strokeWidth="0.5" />
            <motion.line x1="350" y1="480" x2="650" y2="420" stroke="#ffffff" strokeWidth="0.8" />

            {/* Nodes */}
            <circle cx="200" cy="150" r="4" fill="#EE2737" className="animate-pulse" />
            <circle cx="450" cy="280" r="6" fill="#EE2737" />
            <circle cx="750" cy="180" r="5" fill="#ffffff" />
            <circle cx="350" cy="480" r="4" fill="#EE2737" />
            <circle cx="850" cy="380" r="3" fill="#ffffff" />
            <circle cx="650" cy="420" r="5" fill="#EE2737" />

            {/* Glowing halos */}
            <circle cx="450" cy="280" r="16" stroke="#EE2737" strokeWidth="1" fill="none" strokeDasharray="4,4" className="animate-[spin_12s_linear_infinite]" />
            <circle cx="750" cy="180" r="12" stroke="#ffffff" strokeWidth="1" fill="none" strokeDasharray="3,3" className="animate-[spin_8s_linear_infinite]" />
          </svg>
        </div>

        {/* Glowing visual ambient light */}
        <div 
          className="absolute right-0 top-1/4 w-[500px] h-[500px] opacity-10 pointer-events-none rounded-full"
          style={{
            backgroundImage: 'radial-gradient(circle, #EE2737 0%, transparent 70%)'
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono bg-vd-red/10 border border-vd-red/20 px-3 py-1 rounded inline-block">
              Enterprise Solutions
            </span>
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Data Analytics & <br/>
              <span className="text-vd-red">Software Development</span> Services
            </h1>
            <p className="font-sans text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed">
              Accelerating enterprise growth and delivering measurable results through elite custom software engineering, cloud modernization, and advanced data intelligence.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={onOpenEstimator}
                className="bg-vd-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded transition-colors inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-red-950/20"
                id="hero-discuss-cta"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigateTo('assessment')}
                className="bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 font-bold text-xs uppercase tracking-widest px-8 py-4 rounded transition-colors inline-flex items-center gap-2 cursor-pointer"
                id="hero-diagnostic-cta"
              >
                Launch Maturity Diagnostic
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INNOVATION SECTION */}
      <section 
        className="py-24 px-6 sm:px-12 bg-white border-b border-zinc-100"
        id="innovation-section"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono">Modernization Catalyst</span>
              <h2 className="font-headline text-3xl sm:text-4xl font-black text-zinc-950 leading-tight">
                Unleashing the Power of Digital Innovation
              </h2>
              <div className="w-12 h-1 bg-vd-red rounded" />
            </div>
            <div className="lg:col-span-7 space-y-6 text-zinc-600">
              <p className="text-base sm:text-lg leading-relaxed font-light">
                In today's hyper-connected enterprise environment, innovation is not just an aesthetic concept—it is a critical survival metric. True digital acceleration requires deconstructing technical silos, optimizing data telemetry, and deploying secure client-facing portals that scale.
              </p>
              <p className="text-sm leading-relaxed">
                TechConsult embeds senior delivery architects and full-stack engineering teams to deliver responsive systems integrated with robust serverless APIs. By focusing on core business goals, we help organizations accelerate time-to-market and build resilient digital products ready for future intelligence layers.
              </p>
            </div>
          </div>

          {/* Reference Blueprint Card displaying {{DATA:IMAGE:IMAGE_3}} */}
          <div className="bg-zinc-50 border border-zinc-200 rounded p-6 sm:p-10 flex flex-col lg:flex-row gap-10 items-center">
            <div className="space-y-4 lg:w-5/12">
              <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono">Service Delivery Blueprint</span>
              <h3 className="font-headline text-2xl font-bold text-zinc-950">High-Fidelity Engineering Blueprint</h3>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                Explore our multi-layer service delivery model. Designed for strict enterprise availability, this framework guides our squads from initial scoping through zero-downtime deployment.
              </p>
              <div className="space-y-2 pt-2 text-xs text-zinc-500 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-vd-red rounded-full" />
                  <span>Interactive Diagnostics Integrated</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-vd-red rounded-full" />
                  <span>Phased Strangler Architecture Pattern</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-vd-red rounded-full" />
                  <span>Continuous Vulnerability Gated CI/CD</span>
                </div>
              </div>
              <button 
                onClick={onOpenEstimator}
                className="text-xs text-vd-red font-bold hover:underline inline-flex items-center gap-1 cursor-pointer pt-2"
              >
                Consult Our Technical Architects
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="lg:w-7/12 border border-zinc-200 shadow-xl overflow-hidden relative group rounded bg-white w-full">
              <div className="bg-zinc-100 border-b border-zinc-200 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                  <span className="text-xxs font-mono text-zinc-400 ml-3">techconsult-services-layout.jpg</span>
                </div>
                <span className="text-xxs font-mono bg-zinc-200 text-zinc-600 px-1.5 py-0.5 rounded">Blueprint View</span>
              </div>
              <div className="max-h-[360px] overflow-y-auto overflow-x-hidden scrollbar-thin">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80" 
                  alt="TechConsult Service Blueprint System Design" 
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALIZED CORE SERVICES */}
      <section 
        className="py-24 px-6 sm:px-12 bg-zinc-50 border-b border-zinc-100"
        id="specialized-services"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono">Specialized Engineering Stacks</span>
            <h2 className="font-headline text-3xl sm:text-4xl font-black text-zinc-950">
              Core Service Offerings
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm">
              In addition to bespoke product squads, we deploy hardened, repeatable frameworks in systems integration and automated operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Systems Integration Card */}
            <div className="bg-white border border-zinc-200 rounded-xl p-8 sm:p-10 flex flex-col justify-between hover:border-vd-red/30 hover:shadow-lg transition-all space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none text-9xl font-black font-headline group-hover:opacity-10 transition-all">
                API
              </div>
              <div className="space-y-4">
                <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono">Unifying Digital Ecosystems</span>
                <h3 className="font-headline text-2xl font-bold text-zinc-950">Systems Integration</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Connect diverse legacy architectures, build secure API pipelines, and establish Kafka-based event synchronization schemas without system interruptions.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xxs text-zinc-400 font-mono">
                  <span>↳ Enterprise Application Integration</span>
                  <span>↳ API Gateways & OAuth</span>
                  <span>↳ Legacy Strangler pattern</span>
                  <span>↳ Real-time Kafka Pipelines</span>
                </div>
              </div>
              <button
                onClick={() => onNavigateTo('integration')}
                className="w-fit text-xs font-bold uppercase tracking-widest text-vd-red inline-flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer border-b border-transparent hover:border-vd-red pb-1"
              >
                Explore Systems Integration
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* DevOps Services Card */}
            <div className="bg-white border border-zinc-200 rounded-xl p-8 sm:p-10 flex flex-col justify-between hover:border-vd-red/30 hover:shadow-lg transition-all space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none text-9xl font-black font-headline group-hover:opacity-10 transition-all">
                OPS
              </div>
              <div className="space-y-4">
                <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono">Hardening Release Velocity</span>
                <h3 className="font-headline text-2xl font-bold text-zinc-950">DevOps Services</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Accelerate development lifecycles, eliminate manual provisioning errors, and automate vulnerability checks with robust DevSecOps and container clustering.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xxs text-zinc-400 font-mono">
                  <span>↳ Automated CI/CD Pipelines</span>
                  <span>↳ Infrastructure as Code (IaC)</span>
                  <span>↳ Kubernetes Orchestration</span>
                  <span>↳ DevSecOps Guardrails</span>
                </div>
              </div>
              <button
                onClick={() => onNavigateTo('devops')}
                className="w-fit text-xs font-bold uppercase tracking-widest text-vd-red inline-flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer border-b border-transparent hover:border-vd-red pb-1"
              >
                Explore DevOps Services
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIGITAL TRANSFORMATION */}
      <section 
        className="relative py-24 px-6 sm:px-12 bg-zinc-950 text-white overflow-hidden border-b border-zinc-900"
        id="digital-transformation"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Abstract Grayscale Shape Panel */}
          <div className="lg:col-span-5 relative h-[300px] sm:h-[400px] border border-zinc-800 rounded overflow-hidden group bg-zinc-900 flex items-center justify-center">
            {/* Dark abstract overlay grid */}
            <div className="absolute inset-0 z-0 opacity-20" style={{
              backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }} />
            
            {/* Geometric grayscale structure mimicking 3D abstract shapes */}
            <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                alt="Grayscale Architectural Shape" 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xxs font-mono text-vd-red font-bold uppercase tracking-widest block">Core Architecture</span>
                <span className="font-headline text-lg font-bold text-white block mt-1">Structured 3D Platform Synthesis</span>
              </div>
            </div>
          </div>

          {/* Core Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono">Strangler Pattern & APIs</span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Digital Transformation
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Modernizing business infrastructure does not mean stopping operations. We design and install elastic microservices gateways, encapsulate high-risk transactional codebases, and migrate legacy mainframes progressively with zero customer impact.
              </p>
            </div>

            <div>
              <button 
                onClick={() => onNavigateTo('assessment')}
                className="bg-vd-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                Learn More About Our Audit
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trusted By Logo Strip */}
            <div className="pt-8 border-t border-zinc-800 space-y-4">
              <span className="text-xxs uppercase tracking-widest text-zinc-500 font-bold block font-mono">Trusted by Enterprise Leaders:</span>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-zinc-400 font-headline font-semibold text-xs uppercase tracking-widest">
                <span className="hover:text-white transition-colors">simplifi</span>
                <span className="hover:text-white transition-colors">APEX HEALTH</span>
                <span className="hover:text-white transition-colors">GLOBAL LOGISTICS</span>
                <span className="hover:text-white transition-colors">FINANCIER TRUST</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. VALUE PROPOSITIONS */}
      <section 
        className="py-24 px-6 sm:px-12 bg-zinc-50 border-b border-zinc-100"
        id="value-propositions"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono">Our Quality Pillars</span>
            <h2 className="font-headline text-3xl sm:text-4xl font-black text-zinc-950 leading-tight">
              A Trusted Partner for Enterprise-Level Innovation
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm max-w-xl mx-auto">
              Our engineering culture rests on absolute structural discipline, container-native delivery, and direct alignment on measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Proposition 1 */}
            <div className="bg-white border border-zinc-200/60 rounded p-6 hover:border-vd-red/30 hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-red-50 text-vd-red flex items-center justify-center rounded">
                  <Globe className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-headline text-base font-bold text-zinc-900">Global Expertise</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Access cross-functional squads of elite technical architects, software developers, and SecOps experts spanning major timezone clusters worldwide.
                </p>
              </div>
              <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest pt-2 border-t border-zinc-50">Global Squad Sync</span>
            </div>

            {/* Proposition 2 */}
            <div className="bg-white border border-zinc-200/60 rounded p-6 hover:border-vd-red/30 hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-red-50 text-vd-red flex items-center justify-center rounded">
                  <GitMerge className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-headline text-base font-bold text-zinc-900">Agility & Innovation</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Rapid interactive prototyping, weekly Scrum deliverables, and continuous integration feedback loops to keep your business ahead of the competition.
                </p>
              </div>
              <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest pt-2 border-t border-zinc-50">1-Week Agile Sprints</span>
            </div>

            {/* Proposition 3 */}
            <div className="bg-white border border-zinc-200/60 rounded p-6 hover:border-vd-red/30 hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-red-50 text-vd-red flex items-center justify-center rounded">
                  <Award className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-headline text-base font-bold text-zinc-900">Proven Track Record</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Delivering robust full-scale platforms since 2011 with an average SLA uptime score of 99.99% across critical financial and healthcare systems.
                </p>
              </div>
              <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest pt-2 border-t border-zinc-50">120+ Deployed Apps</span>
            </div>

            {/* Proposition 4 */}
            <div className="bg-white border border-zinc-200/60 rounded p-6 hover:border-vd-red/30 hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-red-50 text-vd-red flex items-center justify-center rounded">
                  <Zap className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-headline text-base font-bold text-zinc-900">Innovation at Scale</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Cloud-native serverless strategies, microservices, and modular data streams designed to handle rapid, heavy transaction peaks with elastic stability.
                </p>
              </div>
              <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest pt-2 border-t border-zinc-50">Elastic Infrastructure</span>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CASE STUDY SHOWCASE */}
      <section 
        className="py-24 px-6 sm:px-12 bg-white border-b border-zinc-100"
        id="case-study-showcase"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 border-b border-zinc-100 pb-8">
            <div className="space-y-2">
              <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono">Measurable Outcomes</span>
              <h2 className="font-headline text-3xl sm:text-4xl font-black text-zinc-950">
                Driving Results Across Industries
              </h2>
            </div>
            <button
              onClick={() => onNavigateTo('portfolio')}
              className="text-xs uppercase font-bold tracking-widest text-vd-red hover:underline inline-flex items-center gap-1.5 cursor-pointer"
            >
              Explore Full Portfolio
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Featured simplifi Card */}
          <div className="bg-zinc-950 text-white rounded overflow-hidden border border-zinc-800 grid grid-cols-1 lg:grid-cols-12 hover:shadow-2xl transition-all duration-300">
            {/* Visual background decoration */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-12 relative">
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none text-[150px] font-black font-headline select-none">
                %
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xxs uppercase tracking-widest bg-vd-red text-white font-bold px-2.5 py-1 rounded font-mono">
                    Featured FinTech Success
                  </span>
                  <span className="text-zinc-500 text-xxs font-mono">CASE ID: #TC-8893</span>
                </div>
                <h3 className="font-headline text-2xl sm:text-3xl font-black text-white">
                  simplifi Instant Card Issuance Platform
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
                  TechConsult engineered a microservices-driven instant banking gateway that consolidated distributed ledger records, automated KYC verification loops, and delivered instant digital cards directly on mobile checkouts.
                </p>
              </div>

              {/* MASSIVE METRIC OUTCOME */}
              <div className="space-y-2 border-l-2 border-vd-red pl-6 py-2">
                <span className="text-5xl sm:text-6xl font-headline font-black text-vd-red tracking-tighter block">
                  99.93%
                </span>
                <span className="text-xxs uppercase tracking-widest text-zinc-300 font-bold block font-mono">
                  Reduction in Card Issuance Time (Hours to Milliseconds)
                </span>
              </div>

              {/* Technologies list */}
              <div className="pt-4 border-t border-zinc-900 flex flex-wrap gap-2 text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                <span className="bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded">Go/gRPC</span>
                <span className="bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded">React Native</span>
                <span className="bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded">AWS ECS</span>
                <span className="bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded">Kafka Event Streams</span>
              </div>
            </div>

            {/* Side image representing the sleek futuristic fintech environment */}
            <div className="lg:col-span-5 relative min-h-[250px] lg:min-h-full bg-zinc-900 overflow-hidden border-t lg:border-t-0 lg:border-l border-zinc-800">
              <img 
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80" 
                alt="FinTech Digital Wallet and Analytics" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-zinc-950 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-8 left-8 right-8 space-y-2">
                <span className="text-xxs font-mono text-vd-red font-bold uppercase tracking-widest block">Client Profile</span>
                <span className="font-headline text-lg font-bold text-white block">simplifi Financial Corp</span>
                <p className="text-zinc-400 text-xs">A major digital payments network processing 1.4M daily transaction records.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section 
        className="py-24 px-6 sm:px-12 bg-zinc-900 text-white border-b border-zinc-950 relative overflow-hidden"
        id="testimonials-section"
      >
        {/* Subtle decorative elements */}
        <div className="absolute left-0 bottom-0 w-80 h-80 opacity-5 pointer-events-none rounded-full bg-vd-red" />
        
        <div className="max-w-4xl mx-auto space-y-12 relative z-10 text-center">
          <div className="space-y-2">
            <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono">Global Endorsements</span>
            <h2 className="font-headline text-3xl sm:text-4xl font-black text-white">
              What Our Customers Say
            </h2>
          </div>

          {/* Interactive Testimonial Box */}
          <div className="bg-zinc-950/80 border border-zinc-800 rounded p-8 sm:p-12 relative space-y-8 text-left min-h-[300px] flex flex-col justify-between">
            
            {/* Quote Icon */}
            <div className="text-vd-red text-6xl font-serif leading-none h-6 select-none opacity-20">
              “
            </div>

            {/* active testimonial */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <p className="font-headline text-lg sm:text-xl text-zinc-100 italic leading-relaxed font-light">
                  "{TESTIMONIALS[activeTestimonial].quote}"
                </p>
                
                <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 border-t border-zinc-800/60 pt-6">
                  <div>
                    <span className="block font-headline font-bold text-white text-base">
                      {TESTIMONIALS[activeTestimonial].author}
                    </span>
                    <span className="text-xs text-zinc-400">
                      {TESTIMONIALS[activeTestimonial].role}, <span className="text-vd-red font-semibold">{TESTIMONIALS[activeTestimonial].company}</span>
                    </span>
                  </div>
                  <span className="text-xxs font-mono bg-zinc-900 text-green-500 border border-zinc-800 px-2.5 py-1 rounded font-bold uppercase tracking-wider block w-fit">
                    {TESTIMONIALS[activeTestimonial].metric}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots and Arrow Controls */}
            <div className="flex justify-between items-center pt-2">
              <div className="flex gap-1.5">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-2 h-2 rounded transition-all cursor-pointer ${
                      activeTestimonial === idx ? 'bg-vd-red w-4' : 'bg-zinc-700 hover:bg-zinc-500'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 border border-zinc-800 bg-zinc-900 rounded hover:bg-zinc-800 hover:text-vd-red transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 border border-zinc-800 bg-zinc-900 rounded hover:bg-zinc-800 hover:text-vd-red transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. APPROACH SECTION */}
      <section 
        className="py-24 px-6 sm:px-12 bg-white border-b border-zinc-100"
        id="approach-section"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono">Delivery Methodology</span>
            <h2 className="font-headline text-3xl sm:text-4xl font-black text-zinc-950">
              Our Approach
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm">
              We replace guesswork with structured agile delivery, engineering clean-code architectures designed to hit core KPIs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Item 1 */}
            <div className="bg-zinc-50 border border-zinc-200/50 rounded p-8 hover:shadow-md transition-shadow flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="font-mono text-3xl font-black text-vd-red/20 block">01</span>
                <h3 className="font-headline text-lg font-bold text-zinc-950">Collaborative Partnership</h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  We don't act as passive software vendors. We embed as a direct extension of your product organization, aligning on security matrices, release velocity, and system scaling goals.
                </p>
              </div>
              <span className="text-[10px] uppercase font-mono font-bold text-zinc-400 block tracking-wider">Deep Team Alignment</span>
            </div>

            {/* Item 2 */}
            <div className="bg-zinc-50 border border-zinc-200/50 rounded p-8 hover:shadow-md transition-shadow flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="font-mono text-3xl font-black text-vd-red/20 block">02</span>
                <h3 className="font-headline text-lg font-bold text-zinc-950">Agility & Flexibility</h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  We develop software in 1-week iterative sprints, allowing organizations to pivot specifications dynamically to match market shifts while maintaining pristine source documentation.
                </p>
              </div>
              <span className="text-[10px] uppercase font-mono font-bold text-zinc-400 block tracking-wider">Adaptive Release Gates</span>
            </div>

            {/* Item 3 */}
            <div className="bg-zinc-50 border border-zinc-200/50 rounded p-8 hover:shadow-md transition-shadow flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="font-mono text-3xl font-black text-vd-red/20 block">03</span>
                <h3 className="font-headline text-lg font-bold text-zinc-950">Focused on Results</h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Every pipeline we clean, model we fine-tune, or dashboard interface we design is strictly benchmarked against business performance indicators, whether latency drops or conversion growth.
                </p>
              </div>
              <span className="text-[10px] uppercase font-mono font-bold text-zinc-400 block tracking-wider">Outcome Metrics Standard</span>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section 
        className="py-24 px-6 sm:px-12 bg-zinc-50"
        id="faq-section"
      >
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono">Service Guidelines</span>
            <h2 className="font-headline text-3xl sm:text-4xl font-black text-zinc-950">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm max-w-lg mx-auto">
              Have questions about our implementation squads, security practices, or scoping diagnostics? Here is how we build.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-zinc-200/60 rounded overflow-hidden transition-all hover:border-zinc-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 text-left font-headline font-semibold text-zinc-950 text-sm sm:text-base flex justify-between items-center gap-4 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="text-vd-red shrink-0">
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-zinc-100 text-zinc-600 text-xs sm:text-sm leading-relaxed">
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

    </div>
  );
}
