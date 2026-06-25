/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Cloud, 
  Database, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  GitCompare, 
  Activity, 
  Zap, 
  Network, 
  ChevronDown,
  Plus,
  Minus,
  HelpCircle,
  TrendingUp,
  Workflow,
  Globe,
  Settings,
  Server,
  Lock,
  RefreshCw
} from 'lucide-react';

interface CloudDataServicesProps {
  onOpenEstimator: () => void;
  onNavigateTo: (page: any) => void;
}

const FAQ_ITEMS = [
  {
    question: "How do you ensure data security during migration?",
    answer: "We employ end-to-end encryption (TLS 1.3 in transit, AES-256 at rest), utilize private network connections (such as AWS Direct Connect or Azure ExpressRoute), and strictly adhere to the principle of least privilege using granular IAM roles throughout the entire migration lifecycle. We also ensure compliance with critical data protection standards (GDPR, HIPAA, PCI-DSS) by implementing continuous auditing."
  },
  {
    question: "What is your approach to handling zero-downtime migrations?",
    answer: "We utilize advanced Change Data Capture (CDC) mechanisms and dual-write strategies. An initial bulk copy establishes the baseline data tier, while real-time replication streams incremental updates. Once both the source and target cloud instances are fully in-sync, we perform a seamless DNS or connection string switchover, causing zero disruption to active applications."
  },
  {
    question: "Do you support multi-cloud architectures?",
    answer: "Yes. We leverage industry-standard infrastructure-as-code (Terraform) and containerization technologies (Kubernetes, Docker) to design highly portable, cloud-agnostic data layers. This allows you to distribute processing pipelines or keep failover clusters active across AWS, Azure, and Google Cloud, optimizing both operating cost and geographical latency."
  },
  {
    question: "How do you control and optimize ongoing cloud computing costs?",
    answer: "We decouple storage from compute tiers, use auto-scaling rules that power down unnecessary clusters during off-peak hours, and integrate cost trackers. Through storage lifecycle policies, table partitioning, and query materialization, we consistently reduce our partners' cloud database bills by 30% to 50%."
  }
];

const CLOUD_PLATFORMS = [
  {
    name: 'Amazon Web Services',
    abbrev: 'AWS',
    description: 'The industry-standard cloud infrastructure with highly resilient tools like Redshift, Athena, EMR, Glue, and Kinesis.',
    color: 'hover:border-amber-500/40'
  },
  {
    name: 'Microsoft Azure',
    abbrev: 'Azure',
    description: 'Enterprise-grade ecosystem featuring high-throughput platforms like Azure Synapse Analytics, Data Lake Storage, and Event Hubs.',
    color: 'hover:border-blue-500/40'
  },
  {
    name: 'Google Cloud Platform',
    abbrev: 'GCP',
    description: 'State-of-the-art analytical tools with native serverless power like BigQuery, Cloud Dataflow, Cloud Pub/Sub, and Dataproc.',
    color: 'hover:border-red-500/40'
  }
];

const SERVICES = [
  {
    title: "Cloud Data Migration",
    description: "Seamless lift-and-shift or comprehensive re-architecture of legacy, on-premise systems to modern cloud environments with zero downtime protocols.",
    icon: RefreshCw,
    details: [
      "Database schema conversion & optimization",
      "Bulk raw load with Change Data Capture (CDC)",
      "Validation testing for 100% data fidelity"
    ]
  },
  {
    title: "Managed Data Services",
    description: "Continuous optimization, performance tuning, proactive monitoring, and administrative governance of your cloud data platforms to ensure peak speed and 24/7 reliability.",
    icon: Settings,
    details: [
      "Auto-scaling configuration and cost limits",
      "Continuous performance auditing & tuning",
      "Failover setup & disaster recovery readiness"
    ]
  },
  {
    title: "Serverless Data Architectures",
    description: "Design and deployment of event-driven, fully managed data pipelines that scale from zero to millions of messages automatically without provisioning servers.",
    icon: Zap,
    details: [
      "On-demand serverless query modeling",
      "Event-driven trigger functions (Lambda / Cloud Functions)",
      "Micro-billing optimization matching active usage"
    ]
  },
  {
    title: "Multi-Cloud Strategy",
    description: "Mitigate platform vendor lock-in and optimize analytical compute distribution with hybrid cloud structures customized to your regulatory and security bounds.",
    icon: Network,
    details: [
      "Portable Terraform-managed infrastructure",
      "Federated query setups across diverse clouds",
      "Geographic failover and compliance partitioning"
    ]
  }
];

export default function CloudDataServices({ onOpenEstimator, onNavigateTo }: CloudDataServicesProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-zinc-900" id="cloud-data-services-page">
      
      {/* 1. HERO SECTION WITH CLOUD BACKGROUND IMPLICATION */}
      <section 
        className="relative bg-[#111625] text-white py-24 sm:py-32 px-6 sm:px-12 overflow-hidden border-b border-zinc-950"
        id="cloud-services-hero"
      >
        {/* Abstract Cloud Pattern Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            alt="Cloud Infrastructure Abstract Pattern" 
            className="w-full h-full object-cover select-none filter brightness-50" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCursUB2i8s2PZB8NygOWyZcU7MPCJ5JFbRELwFshHURvRB33a4QduYRbrg5qpTujLZScGYw4J2RCNwB55LMMdg0m1irX3YY2NXKfTR7vPO4BYA6XmN9eNNAkYZzPW83riajODrwkVIeN5UzAy1enHgoPDbQykRDB3yAvyRT2sdQaiRebZiJgeHDk8JkL1LAHgf91l97_TUugNEPNI99_uRF9EmmDwh9DnGbrq_G0R3Dhs-8Jr0daeCiLUJAv1a2RKXrSbJNkA07o0"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sky-500/10 blur-[150px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-vd-red/10 blur-[120px] rounded-full pointer-events-none z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111625]/60 to-[#111625] z-0" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Text Column */}
          <div className="lg:col-span-8 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-xxs font-black tracking-widest text-vd-red uppercase font-mono">
              <span className="w-2 h-2 rounded-full bg-vd-red animate-pulse" />
              Cloud Data Ecosystems
            </div>

            <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter leading-none max-w-3xl text-balance">
              Cloud Data<br />Services
            </h1>

            <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-sans font-light text-balance">
              Elevate your enterprise with scalable, secure, and high-performance cloud data architectures. We engineer precise solutions that turn complex data landscapes into strategic assets.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenEstimator}
                className="bg-vd-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-8 py-4.5 rounded transition-all active:scale-[0.98] inline-flex items-center gap-2.5 cursor-pointer shadow-lg shadow-red-950/30"
              >
                Start Your Cloud Journey
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('platforms-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-transparent hover:bg-white/5 text-white font-bold text-xs uppercase tracking-widest px-8 py-4.5 rounded border border-zinc-700 hover:border-zinc-500 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                Explore Platforms
              </button>
            </div>
          </div>

          {/* Right Visual Stats Column */}
          <div className="lg:col-span-4 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-vd-red font-black uppercase tracking-wider block">Operational Guarantee</span>
              <p className="text-white font-headline text-2xl font-bold mt-1">SLA-Backed Excellence</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-400">Availability Guarantee</span>
                <span className="font-mono text-white font-bold">99.99%</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-400">Storage Optimization Gain</span>
                <span className="font-mono text-green-400 font-bold">Up to 50%</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-400">Zero-Downtime Pipeline</span>
                <span className="font-mono text-white font-bold">CDC Enabled</span>
              </div>
            </div>

            <div className="bg-white/5 p-4 rounded-lg border border-white/5 flex gap-3 items-start">
              <ShieldCheck className="w-5 h-5 text-vd-red shrink-0 mt-0.5" />
              <p className="text-zinc-300 text-xxs font-sans leading-relaxed">
                Fully compliant with SOC2 Type II, GDPR, HIPAA, and industry leading cryptographic requirements.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. 'MODERNIZE YOUR DATA STACK' SECTION */}
      <section 
        className="py-24 px-6 sm:px-12 bg-white border-b border-zinc-100"
        id="modernize-stack-section"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text and Features */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xxs uppercase tracking-[0.2em] text-vd-red font-black font-mono block">
                Next-Gen Infrastructure
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
                Modernize Your Data Stack
              </h2>
            </div>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-sans font-light text-balance">
              Transitioning to the cloud is more than a simple migration; it's a fundamental upgrade of your enterprise capabilities. We design resilient architectures that decouple storage from compute, ensuring infinite elasticity, extreme query performance, and unmatched billing efficiency.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-vd-red flex items-center justify-center shrink-0">
                  <Cloud className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-headline text-sm font-bold text-zinc-950">Infinite Scalability & Elasticity</h4>
                  <p className="text-zinc-500 text-xs mt-1">Scale processing pools independently of storage tiers as data volumes expand.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-vd-red flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-headline text-sm font-bold text-zinc-950">Enhanced Security & Compliance</h4>
                  <p className="text-zinc-500 text-xs mt-1">Granular RBAC, end-to-end payload encryption, and real-time metadata logging.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-vd-red flex items-center justify-center shrink-0">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-headline text-sm font-bold text-zinc-950">Real-time Analytics Readiness</h4>
                  <p className="text-zinc-500 text-xs mt-1">Immediate access to streams that convert raw event logs into active metrics.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-vd-red flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-headline text-sm font-bold text-zinc-950">Decoupled Compute Architecture</h4>
                  <p className="text-zinc-500 text-xs mt-1">Pay only for active execution power while preserving cold historical archives.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Abstract Stack Card Visual */}
          <div className="lg:col-span-5 bg-zinc-50 border border-zinc-200/60 rounded-2xl p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50/40 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-zinc-950">
                Resilient Multi-Cloud Layout
              </h3>
              <p className="text-zinc-500 text-xs leading-relaxed">
                Our designs integrate cleanly across hybrid platforms to eliminate single-point failures and enable high concurrency.
              </p>
            </div>

            {/* Grid of Abstract Tonal Layers */}
            <div className="grid grid-cols-3 gap-3 pt-8 relative z-10">
              <div className="border border-zinc-200 bg-white p-3 rounded-lg flex flex-col items-center justify-center text-center shadow-sm">
                <Server className="w-5 h-5 text-zinc-400 mb-1" />
                <span className="font-mono text-[9px] uppercase tracking-wider font-bold text-zinc-700">Storage</span>
                <span className="text-[7px] text-zinc-400">Decoupled</span>
              </div>
              <div className="border border-zinc-200 bg-white p-3 rounded-lg flex flex-col items-center justify-center text-center shadow-sm">
                <Cpu className="w-5 h-5 text-vd-red mb-1" />
                <span className="font-mono text-[9px] uppercase tracking-wider font-bold text-zinc-700">Compute</span>
                <span className="text-[7px] text-zinc-400">Auto-Scaling</span>
              </div>
              <div className="border border-zinc-200 bg-white p-3 rounded-lg flex flex-col items-center justify-center text-center shadow-sm">
                <Lock className="w-5 h-5 text-zinc-400 mb-1" />
                <span className="font-mono text-[9px] uppercase tracking-wider font-bold text-zinc-700">Security</span>
                <span className="text-[7px] text-zinc-400">Encrypted</span>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-200/50 mt-8 flex justify-between items-center text-[10px] font-mono text-zinc-400">
              <span>DESIGN SPECIFICATION</span>
              <span>MULTI-TENANCY SECURED</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SERVICE CARDS FOR CAPABILITIES */}
      <section 
        className="py-24 px-6 sm:px-12 bg-zinc-50 border-b border-zinc-100"
        id="cloud-engineering-capabilities"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xxs uppercase tracking-[0.2em] text-vd-red font-black font-mono block">
              Core Expertise
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight text-balance">
              Our Engineering Capabilities
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base max-w-2xl mx-auto">
              End-to-end engineering services designed to modernize your infrastructure, protect active transactions, and accelerate speed-to-insight.
            </p>
          </div>

          {/* Grid Layout of 4 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((serv, idx) => {
              const IconComp = serv.icon;
              return (
                <div 
                  key={idx}
                  className="group bg-white border border-zinc-200/60 rounded-xl p-8 sm:p-10 hover:border-vd-red/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-lg bg-red-50 text-vd-red flex items-center justify-center group-hover:bg-vd-red group-hover:text-white transition-colors duration-300">
                      <IconComp className="w-6 h-6 stroke-[1.5]" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-headline text-xl sm:text-2xl font-bold text-zinc-950 group-hover:text-vd-red transition-colors duration-300">
                        {serv.title}
                      </h3>
                      <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                        {serv.description}
                      </p>
                    </div>
                  </div>

                  {/* Specification details bullet list */}
                  <div className="pt-6 mt-6 border-t border-zinc-100 space-y-2">
                    {serv.details.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2">
                        <ArrowRight className="w-3.5 h-3.5 text-vd-red shrink-0" />
                        <span className="text-zinc-500 text-xxs font-mono uppercase tracking-wider">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. PLATFORM GRID SECTION */}
      <section 
        className="py-24 px-6 sm:px-12 bg-white border-b border-zinc-100"
        id="platforms-section"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xxs uppercase tracking-[0.2em] text-vd-red font-black font-mono block">
              Global Standards
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight text-balance">
              Certified Partnerships & Ecosystems
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base max-w-2xl mx-auto">
              We hold official system integrator certifications across the big three major clouds, allowing us to align your needs with standard environments.
            </p>
          </div>

          {/* Grid of 3 Cloud Providers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CLOUD_PLATFORMS.map((plat, idx) => (
              <div 
                key={idx}
                className={`bg-zinc-50 border border-zinc-200/60 rounded-xl p-8 transition-all duration-300 flex flex-col justify-between ${plat.color}`}
              >
                <div className="space-y-6">
                  {/* Platform Abbrev Tag */}
                  <span className="text-xxs font-mono font-bold text-vd-red uppercase tracking-widest bg-red-50 px-3 py-1 rounded inline-block">
                    {plat.abbrev} ARCHITECTURE
                  </span>

                  <div className="space-y-3">
                    <h3 className="font-headline text-xl font-bold text-zinc-950">
                      {plat.name}
                    </h3>
                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                      {plat.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-200 mt-6 text-xxs font-mono text-zinc-400">
                  <span>SYSTEM INTEGRATION READY</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS SECTION */}
      <section 
        className="py-24 px-6 sm:px-12 bg-zinc-50 border-b border-zinc-100"
        id="cloud-faq"
      >
        <div className="max-w-4xl mx-auto space-y-16">
          
          <div className="text-center space-y-4">
            <span className="text-xxs uppercase tracking-[0.2em] text-vd-red font-black font-mono block">
              Information Portal
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
              Technical FAQ
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm">
              Answers to common operational inquiries regarding security bounds, zero-downtime migrations, and hybrid frameworks.
            </p>
          </div>

          {/* Interactive Accordion Panel */}
          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-zinc-200/60 rounded-lg overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-zinc-50/50 transition-colors cursor-pointer"
                  >
                    <span className="font-headline text-sm sm:text-base font-bold text-zinc-900 pr-4">
                      {faq.question}
                    </span>
                    <span className={`w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-red-50 text-vd-red' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-zinc-100 text-zinc-600 text-xs sm:text-sm leading-relaxed font-sans font-light">
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

      {/* 6. BOTTOM CTA: START YOUR CLOUD JOURNEY TODAY */}
      <section 
        className="py-28 bg-zinc-950 text-center relative overflow-hidden"
        id="cloud-cta"
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
            Ready to Engineer Your Future?
          </h2>
          
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-sans font-light text-balance">
            Partner with our cloud engineers to architect a state-of-the-art data environment that minimizes costs while driving massive analytical concurrency.
          </p>
          
          <div className="pt-2">
            <button
              onClick={onOpenEstimator}
              className="bg-vd-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-8 py-4.5 rounded transition-all active:scale-[0.98] inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-red-950/20"
            >
              Start Your Cloud Journey Today
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
