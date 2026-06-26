/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Layers, 
  Cpu, 
  RefreshCw, 
  GitMerge, 
  Check, 
  ChevronRight, 
  ChevronLeft,
  Activity,
  Workflow,
  Plus,
  Minus
} from 'lucide-react';

interface SystemsIntegrationProps {
  onOpenEstimator: () => void;
  onNavigateTo: (page: 'services' | 'industries' | 'portfolio' | 'assessment' | 'about') => void;
}

const INTEGRATED_SOLUTIONS = [
  {
    id: 'eai',
    title: "Enterprise Application Integration (EAI)",
    description: "Connect diverse enterprise systems to ensure seamless data flow and process automation across your entire organization. Break down organizational data silos and coordinate transactional procedures securely.",
    icon: Layers,
    details: [
      "Real-time Enterprise Service Bus (ESB) architectures",
      "Message-oriented middleware (MOM) setups",
      "Event-driven architecture design (EDA)",
      "Cross-departmental transactional integrity"
    ]
  },
  {
    id: 'api-mgmt',
    title: "API Development & Management",
    description: "Design, build, and manage secure APIs to facilitate communication between internal systems and external partners. Ensure high-performance telemetry, rate-limiting, and standard-compliant authorization gates.",
    icon: Cpu,
    details: [
      "High-throughput REST, GraphQL, and gRPC endpoints",
      "Zero Trust API gateway installation",
      "Self-documenting interactive sandboxes (OpenAPI/Swagger)",
      "Strict OAuth2, JWT, and mTLS security schemes"
    ]
  },
  {
    id: 'legacy-mod',
    title: "Legacy System Modernization",
    description: "Integrate critical legacy systems with modern cloud applications, extending their lifespan and value. Safely wrap old, clunky AS400, mainframe, or SQL monolith databases into performant cloud containers.",
    icon: RefreshCw,
    details: [
      "Strangler Application Pattern implementations",
      "Transactional mainframe replication wrappers",
      "Legacy RPC-to-gRPC microservice converters",
      "Continuous shadow traffic routing & validation"
    ]
  },
  {
    id: 'data-sync',
    title: "Data Integration & Synchronization",
    description: "Ensure consistent, real-time data across all platforms with robust ETL pipelines and synchronization strategies. Guarantee transaction atomicity and single sources of truth under heavy peaked loads.",
    icon: Workflow,
    details: [
      "Ultra-low latency Apache Kafka streaming pipelines",
      "Automated ETL and CDC (Change Data Capture) flows",
      "Distributed cache synchronization using Redis cluster setups",
      "Automated multi-database consistency checkers"
    ]
  }
];

export default function SystemsIntegration({ onOpenEstimator, onNavigateTo }: SystemsIntegrationProps) {
  const [activeAccordion, setActiveAccordion] = useState<string | null>('eai');

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="space-y-0 text-zinc-900" id="systems-integration-page">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative bg-zinc-950 text-white py-24 sm:py-32 px-6 sm:px-12 overflow-hidden border-b border-zinc-900"
        id="integration-hero"
      >
        {/* Subtle decorative high-tech background */}
        <div className="absolute inset-0 z-0 opacity-15" style={{
          backgroundImage: `linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />

        {/* Dynamic connection paths visual backdrop */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-35">
          <svg className="w-full h-full min-w-[800px] min-h-[500px]" viewBox="0 0 1000 600">
            {/* Pathways representing systems integration */}
            <motion.path 
              d="M 100 100 L 400 100 L 400 300 L 800 300" 
              fill="none" 
              stroke="#EE2737" 
              strokeWidth="1.5"
              strokeDasharray="8,8"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />
            <motion.path 
              d="M 200 500 L 500 500 L 500 200 L 900 200" 
              fill="none" 
              stroke="#ffffff" 
              strokeWidth="0.8"
              strokeDasharray="5,5"
              initial={{ strokeDashoffset: 50 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
            
            {/* Key Nodes */}
            <circle cx="400" cy="100" r="5" fill="#EE2737" />
            <circle cx="400" cy="300" r="5" fill="#EE2737" />
            <circle cx="500" cy="500" r="4" fill="#ffffff" />
            <circle cx="500" cy="200" r="4" fill="#ffffff" />
            
            {/* Text details as graphic assets */}
            <text x="415" y="105" fill="#6b7280" fontSize="10" fontFamily="monospace">NODE_INTEGRITY_OK</text>
            <text x="515" y="505" fill="#6b7280" fontSize="10" fontFamily="monospace">SYNC_LATENCY: 12ms</text>
          </svg>
        </div>

        {/* Dynamic visual ambient red light */}
        <div 
          className="absolute left-1/3 top-1/4 w-[600px] h-[600px] opacity-15 pointer-events-none rounded-full"
          style={{
            backgroundImage: 'radial-gradient(circle, #EE2737 0%, transparent 70%)'
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono bg-vd-red/10 border border-vd-red/20 px-3 py-1 rounded inline-block">
              Solutions Architecture
            </span>
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Systems Integration
            </h1>
            <p className="font-sans text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed">
              Seamlessly connect your digital ecosystem. We architect and implement robust integration solutions that unify your disparate applications, data, and processes, enabling real-time visibility and accelerated growth.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={onOpenEstimator}
                className="bg-vd-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded transition-colors inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-red-950/20"
                id="integration-hero-cta"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigateTo('portfolio')}
                className="bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 font-bold text-xs uppercase tracking-widest px-8 py-4 rounded transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                View Integration Portfolios
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE SOLUTIONS (ACCORDION STYLING TO MATCH HIGH FIDELITY) */}
      <section 
        className="py-24 px-6 sm:px-12 bg-white border-b border-zinc-100"
        id="integrated-solutions"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono">Service Overview</span>
            <h2 className="font-headline text-3xl sm:text-4xl font-black text-zinc-950">
              Integrated Solutions
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm">
              Comprehensive integration services designed to modernize your infrastructure and streamline operations. Click any capabilities to expand.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Col: Dynamic Expandable Accordion List */}
            <div className="lg:col-span-7 space-y-4">
              {INTEGRATED_SOLUTIONS.map((sol) => {
                const IconComp = sol.icon;
                const isExpanded = activeAccordion === sol.id;
                return (
                  <div 
                    key={sol.id}
                    className={`border rounded overflow-hidden transition-all duration-300 ${
                      isExpanded ? 'border-vd-red shadow-sm bg-zinc-50/15' : 'border-zinc-200 bg-white hover:border-zinc-300'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(sol.id)}
                      className="w-full px-6 py-5 text-left font-headline font-semibold text-zinc-950 text-sm sm:text-base flex justify-between items-center gap-4 cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 flex items-center justify-center rounded transition-colors ${
                          isExpanded ? 'bg-red-50 text-vd-red' : 'bg-zinc-50 text-zinc-400'
                        }`}>
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span className="text-zinc-900 font-bold font-headline">{sol.title}</span>
                      </div>
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
                          <div className="px-6 pb-6 pt-2 border-t border-zinc-100 space-y-4">
                            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                              {sol.description}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-500 font-mono">
                              {sol.details.map((detail, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 bg-vd-red rounded-full" />
                                  <span>{detail}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right Col: Design blueprint visual represent */}
            <div className="lg:col-span-5 bg-zinc-950 text-white rounded p-8 sm:p-10 border border-zinc-800 space-y-6 flex flex-col justify-between min-h-[400px]">
              <div className="space-y-4">
                <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono">Architecture Framework</span>
                <h3 className="font-headline text-2xl font-bold text-white">Unified API Gateway Architecture</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Our integration solutions map old enterprise databases and microservice layers into a centralized gateway secured by rate limiting, OAuth2 wrappers, and mTLS compliance loops.
                </p>
              </div>

              {/* Graphical mini diagram mapping EAI/API integration */}
              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded font-mono text-[10px] space-y-3.5 text-zinc-400">
                <div className="flex justify-between items-center bg-zinc-950 p-2 rounded border border-zinc-800/80">
                  <span className="text-green-400">● CLIENT_REQUEST</span>
                  <span className="text-zinc-500">HTTPS / GRPC</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-vd-red">↓ JWT/OAUTH MAPPING GATEWAY</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[9px]">
                  <div className="bg-zinc-950 p-1.5 border border-zinc-800 rounded">Microservices</div>
                  <div className="bg-zinc-950 p-1.5 border border-zinc-800 rounded">Kafka Streams</div>
                  <div className="bg-zinc-950 p-1.5 border border-zinc-800 rounded">AS400 Wrapper</div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-900 flex justify-between items-center">
                <span className="text-xxs uppercase tracking-widest text-zinc-500 font-bold">Latency SLA:</span>
                <span className="text-xs font-mono font-bold text-green-500 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded">
                  &lt; 150ms Guaranteed
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA Modernization Area */}
      <section 
        className="py-24 px-6 sm:px-12 bg-zinc-50 border-b border-zinc-100"
        id="integration-modernize-cta"
      >
        <div className="max-w-7xl mx-auto bg-zinc-950 text-white rounded p-8 sm:p-12 flex flex-col sm:flex-row justify-between items-center gap-6 border border-zinc-800">
          <div className="space-y-2">
            <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono">Infrastructure Upgrade</span>
            <h3 className="font-headline text-2xl sm:text-3xl font-black">Ready to consolidate your application stacks?</h3>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-xl">
              Connect with our principal architects to scope your integration timeline, mapping old legacy databases into secure, highly-available container clusters.
            </p>
          </div>
          <button
            onClick={onOpenEstimator}
            className="bg-vd-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded transition-colors inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-red-950/20 shrink-0"
          >
            Discuss Scoping Sprints
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
