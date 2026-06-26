/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  GitMerge, 
  Server, 
  Cloud, 
  Activity, 
  Box, 
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Cpu
} from 'lucide-react';

interface DevOpsServicesProps {
  onOpenEstimator: () => void;
  onNavigateTo: (page: 'services' | 'industries' | 'portfolio' | 'assessment' | 'about') => void;
}

const DEVOPS_CAPABILITIES = [
  {
    title: "CI/CD Pipeline Automation",
    description: "Automate code integration and deployment to speed up development, reduce errors, improve software quality, and shorten time-to-market for continuous value delivery.",
    icon: GitMerge,
    color: "bg-red-50 text-vd-red",
    borderColor: "hover:border-vd-red/30"
  },
  {
    title: "Infrastructure as Code (IaC)",
    description: "Streamline infrastructure management with code to ensure consistency, scalability, and easy environment replication, reducing the risk of configuration drift.",
    icon: Server,
    color: "bg-indigo-50 text-indigo-600",
    borderColor: "hover:border-indigo-500/30"
  },
  {
    title: "Cloud Infrastructure Management",
    description: "Maximize cost-efficiency, security, and flexibility by optimizing cloud resources and automating provisioning to meet business needs.",
    icon: Cloud,
    color: "bg-blue-50 text-blue-600",
    borderColor: "hover:border-blue-500/30"
  },
  {
    title: "Continuous Monitoring and Logging",
    description: "Implement continuous monitoring and advanced centralized logging systems to detect and proactively resolve performance issues.",
    icon: Activity,
    color: "bg-teal-50 text-teal-600",
    borderColor: "hover:border-teal-500/30"
  },
  {
    title: "Containerization and Orchestration",
    description: "Leverage Docker for portable containers and Kubernetes for automated scaling and management, boosting application portability and delivery speed.",
    icon: Box,
    color: "bg-purple-50 text-purple-600",
    borderColor: "hover:border-purple-500/30"
  },
  {
    title: "Security and Compliance Automation (DevSecOps)",
    description: "Embed security in CI/CD pipelines with real-time scanning and policy enforcement, ensuring secure and efficient software delivery.",
    icon: ShieldCheck,
    color: "bg-orange-50 text-orange-600",
    borderColor: "hover:border-orange-500/30"
  }
];

export default function DevOpsServices({ onOpenEstimator, onNavigateTo }: DevOpsServicesProps) {
  return (
    <div className="space-y-0 text-zinc-900" id="devops-services-page">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative bg-zinc-950 text-white py-24 sm:py-32 px-6 sm:px-12 overflow-hidden border-b border-zinc-900"
        id="devops-hero"
      >
        {/* Background Grid Accent */}
        <div className="absolute inset-0 z-0 opacity-15" style={{
          backgroundImage: `linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />

        {/* Dynamic ambient graphics */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-vd-red/10 blur-3xl rounded-full z-0 pointer-events-none mix-blend-screen" />
        <div className="absolute -right-20 top-1/4 w-96 h-96 bg-indigo-500/5 blur-3xl rounded-full z-0 pointer-events-none mix-blend-screen" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 rounded-full border border-white/20 text-xxs font-black tracking-widest text-zinc-300 uppercase font-mono">
            <span className="w-2 h-2 rounded-full bg-vd-red animate-pulse" />
            Solutions Engineering / DevOps & Continuous Integration
          </div>
          
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-tight">
            DevOps Services
          </h1>
          
          <p className="font-sans text-sm sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Accelerate deployments, scale effortlessly, and ensure top-notch security, with full-scale DevOps and CI/CD solutions.
          </p>
          
          <div className="pt-4 flex justify-center">
            <button
              onClick={onOpenEstimator}
              className="bg-vd-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded transition-all active:scale-95 shadow-lg shadow-red-950/20 cursor-pointer"
              id="devops-hero-cta"
            >
              Discuss Your Project
            </button>
          </div>
        </div>
      </section>

      {/* 2. END TO END CAPABILITIES */}
      <section 
        className="py-24 px-6 sm:px-12 bg-white border-b border-zinc-100"
        id="devops-capabilities"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-headline text-3xl sm:text-4xl font-black text-zinc-950 leading-tight">
              End-to-End DevOps Services for Scalable Growth
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm">
              Automate deployments and drive continuous innovation, ensuring security, scalability, and efficiency across your software development lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEVOPS_CAPABILITIES.map((cap, idx) => {
              const IconComp = cap.icon;
              return (
                <div 
                  key={idx}
                  className={`bg-white p-8 rounded border border-zinc-200/60 shadow-sm transition-all duration-300 group flex flex-col justify-between space-y-6 ${cap.borderColor}`}
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${cap.color}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    
                    <h3 className="font-headline text-lg sm:text-xl font-bold text-zinc-950 leading-snug">
                      {cap.title}
                    </h3>
                    
                    <p className="text-zinc-600 text-xs leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. METRIC PROOFS & INTEGRITY STANDARDS */}
      <section 
        className="py-20 px-6 sm:px-12 bg-zinc-50 border-b border-zinc-100"
        id="devops-infrastructure-audit"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono">Infrastructure Standards</span>
            <h2 className="font-headline text-3xl font-extrabold text-zinc-950">
              Hardened Release Operations for Zero Interruption
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
              At TechConsult, we don't just write scripts; we enforce highly secured cloud landing zones and multi-region deployment configurations. Whether migrating massive legacy databases or setting up container orchestrators, we integrate automated compliance pipelines that guard intellectual boundaries.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-zinc-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-vd-red shrink-0" />
                <span>Multi-Cloud Landing Zone Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-vd-red shrink-0" />
                <span>Zero Trust IAM Configuration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-vd-red shrink-0" />
                <span>SOC2 Compliance Automated Auditing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-vd-red shrink-0" />
                <span>99.99% Build Verification SLAs</span>
              </div>
            </div>
          </div>

          {/* Right hand layout showing simulated telemetry */}
          <div className="lg:col-span-5 bg-zinc-950 text-white rounded p-6 border border-zinc-800 space-y-4 font-mono text-[11px]">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
              <span className="text-vd-red font-bold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" /> CI_CD_PIPELINE
              </span>
              <span className="text-green-500 bg-green-500/10 px-2 py-0.5 rounded text-[9px]">STATUS: COMPLIANT</span>
            </div>
            <div className="space-y-2 text-zinc-400 text-[10px]">
              <div>&gt; npx security-audit --level=high</div>
              <div className="text-green-400">✔ 0 critical CVE vulnerabilities found in container image</div>
              <div>&gt; terraform validate &amp;&amp; terraform plan</div>
              <div className="text-green-400">✔ Infrastructure configuration validated successfully</div>
              <div>&gt; deploy --env=production --canary=10%</div>
              <div className="text-zinc-500">Syncing nodes (97% SLA met)</div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-2.5 rounded text-center text-xs text-white">
              SLA Guarantee: <span className="text-vd-red font-black">99.99% uptime</span> during migrations
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER BLUEPRINT CTA */}
      <section 
        className="py-16 px-6 sm:px-12 bg-white"
        id="devops-blueprint-cta"
      >
        <div className="max-w-4xl mx-auto bg-zinc-900 text-white rounded-xl p-8 sm:p-12 border border-zinc-800 text-center space-y-6">
          <h3 className="font-headline text-2xl sm:text-3xl font-bold">Have unique infrastructure and delivery goals?</h3>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Our DevOps team will audit your application portfolio, structure container paths, and setup automated canary releases to achieve instant deploys without user interruptions.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={onOpenEstimator}
              className="bg-vd-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded transition-colors inline-flex items-center gap-2 cursor-pointer shadow-md shadow-red-950/20"
            >
              Discuss Custom DevOps Plans
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
