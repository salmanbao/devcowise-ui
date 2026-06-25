import React from 'react';
import { motion } from 'motion/react';
import { 
  Cloud, 
  ShieldCheck, 
  Terminal, 
  Activity, 
  ArrowRight,
  CheckCircle2,
  Lock,
  Zap,
  Server
} from 'lucide-react';

interface CloudInfrastructureServicesProps {
  onOpenEstimator: () => void;
  onNavigateTo: (page: any) => void;
}

const CAPABILITIES = [
  {
    title: 'Cloud Migration',
    description: 'Seamlessly transition legacy systems to modern cloud environments with meticulous planning and minimal disruption.',
    icon: Cloud,
  },
  {
    title: 'Infrastructure as Code (IaC)',
    description: 'Automate provisioning and management for absolute consistency, scalability, and deployment speed.',
    icon: Terminal,
  },
  {
    title: 'Cloud Security & Compliance',
    description: 'Hardened architectures rigorously designed to meet and exceed the most stringent global regulatory standards.',
    icon: ShieldCheck,
  },
  {
    title: 'Managed Cloud Services',
    description: 'Proactive 24/7 monitoring, incident response, and continuous optimization of your critical cloud ecosystem.',
    icon: Activity,
  }
];

const FRAMEWORK_STEPS = [
  {
    phase: '01',
    title: 'Cloud Readiness Assessment',
    description: 'Evaluating current architectural state, identifying technical debt, and defining precise business goals.'
  },
  {
    phase: '02',
    title: 'Strategic Roadmap',
    description: 'Designing a highly tailored multi-cloud or hybrid strategy optimized for your specific workloads.'
  },
  {
    phase: '03',
    title: 'Execution & Migration',
    description: 'Executing precision-engineered migrations focused on data integrity and zero operational downtime.'
  },
  {
    phase: '04',
    title: 'Continuous Optimization',
    description: 'Relentlessly monitoring telemetry to maximize performance and aggressively manage cost-efficiency.'
  }
];

const INDUSTRIES = [
  {
    name: 'Fintech',
    focus: 'High-frequency data processing',
    description: 'Low-latency infrastructures designed for real-time financial transactions and analytics.',
    icon: Zap
  },
  {
    name: 'Healthtech',
    focus: 'HIPAA-compliant infrastructures',
    description: 'Secure, audit-ready cloud environments tailored for sensitive patient data and medical workloads.',
    icon: Lock
  }
];

export default function CloudInfrastructureServices({ onOpenEstimator, onNavigateTo }: CloudInfrastructureServicesProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 px-6 overflow-hidden bg-zinc-50 border-b border-zinc-100">
        <div className="absolute inset-0 -z-0 opacity-[0.03]">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-vd-red via-transparent to-transparent opacity-20" />
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <span className="font-mono text-[10px] text-vd-red font-black uppercase tracking-[0.3em] block">Infrastructure Excellence</span>
            <h1 className="font-headline text-5xl md:text-7xl font-black text-zinc-950 tracking-tight leading-none max-w-5xl">
              Architecting Scalable, <span className="text-vd-red">Secure Cloud Futures</span>
            </h1>
            <p className="text-zinc-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Empower your enterprise with resilient, high-performance infrastructure designed for agility and uncompromising security.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button
                onClick={() => {
                  const el = document.getElementById('capabilities');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-vd-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-10 py-5 rounded transition-all shadow-lg shadow-red-900/20"
              >
                Explore Solutions
              </button>
              <button
                onClick={onOpenEstimator}
                className="bg-white border border-zinc-200 text-zinc-900 hover:bg-zinc-50 font-bold text-xs uppercase tracking-widest px-10 py-5 rounded transition-all"
              >
                Consult an Expert
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Comprehensive Cloud Capabilities */}
      <section id="capabilities" className="py-24 px-6 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-black text-zinc-950 mb-4 tracking-tight">
              Comprehensive Cloud Capabilities
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl">
              Engineering excellence across every layer of your cloud stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CAPABILITIES.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-10 bg-zinc-50 border border-zinc-100 rounded hover:border-vd-red hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-white border border-zinc-100 text-vd-red rounded flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-headline text-2xl font-black text-zinc-950 mb-4">
                    {cap.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed text-sm">
                    {cap.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Our Cloud Transformation Framework */}
      <section className="py-24 px-6 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-black text-zinc-950 mb-4 tracking-tight">
              Our Cloud Transformation Framework
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              A rigorous, proven methodology to ensure structural integrity and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FRAMEWORK_STEPS.map((step, idx) => (
              <div key={step.phase} className="relative group">
                {idx < FRAMEWORK_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-[1px] bg-zinc-200 z-0" />
                )}
                <div className="relative z-10 flex flex-col">
                  <div className="w-20 h-20 bg-white border border-zinc-200 rounded-full flex items-center justify-center mb-8 font-mono text-xl font-black text-vd-red group-hover:bg-vd-red group-hover:text-white group-hover:border-vd-red transition-all shadow-sm">
                    {step.phase}
                  </div>
                  <span className="font-mono text-[10px] text-vd-red font-black uppercase tracking-widest mb-2 block">Phase {step.phase}</span>
                  <h3 className="font-headline text-xl font-black text-zinc-950 mb-4 tracking-tight leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Multi-Cloud Expertise */}
      <section className="py-24 px-6 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="font-headline text-2xl md:text-3xl font-black text-zinc-950 tracking-tight">
            Multi-Cloud Platform Expertise
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex flex-col items-center gap-3">
              <Server className="w-10 h-10 text-zinc-800" />
              <span className="font-headline font-black text-zinc-800 tracking-tighter text-xl">AWS</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 bg-zinc-800 flex items-center justify-center rounded-sm">
                <div className="w-6 h-6 border-2 border-white rotate-45" />
              </div>
              <span className="font-headline font-black text-zinc-800 tracking-tighter text-xl">Azure</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="flex gap-1">
                <div className="w-4 h-4 bg-red-500 rounded-full" />
                <div className="w-4 h-4 bg-blue-500 rounded-full" />
                <div className="w-4 h-4 bg-yellow-500 rounded-full" />
              </div>
              <span className="font-headline font-black text-zinc-800 tracking-tighter text-xl">Google Cloud</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Industry-Specific Cloud Solutions */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-black text-zinc-950 mb-4 tracking-tight">
              Industry-Specific Cloud Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              return (
                <div key={ind.name} className="flex gap-8 group">
                  <div className="shrink-0 w-16 h-16 bg-zinc-50 border border-zinc-100 rounded flex items-center justify-center text-vd-red group-hover:bg-vd-red group-hover:text-white transition-all shadow-sm">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <h3 className="font-headline text-2xl font-black text-zinc-950">{ind.name}</h3>
                      <span className="font-mono text-[10px] bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded font-bold uppercase">{ind.focus}</span>
                    </div>
                    <p className="text-zinc-600 leading-relaxed">
                      {ind.description}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-xs font-mono text-zinc-500 font-bold uppercase tracking-wider">
                        <CheckCircle2 className="w-4 h-4 text-vd-red" /> 
                        High-availability architecture
                      </li>
                      <li className="flex items-center gap-2 text-xs font-mono text-zinc-500 font-bold uppercase tracking-wider">
                        <CheckCircle2 className="w-4 h-4 text-vd-red" /> 
                        Regulatory alignment (HIPAA/GDPR)
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-vd-red/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
          <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tight leading-none">
            Elevate Your Infrastructure.
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Let's discuss your cloud strategy and build an architecture that scales with your ambition.
          </p>
          <div className="pt-4">
            <button
              onClick={onOpenEstimator}
              className="bg-vd-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-[0.2em] px-12 py-6 rounded transition-all shadow-xl shadow-red-900/40 inline-flex items-center gap-3"
            >
              Consult our Cloud Experts
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
