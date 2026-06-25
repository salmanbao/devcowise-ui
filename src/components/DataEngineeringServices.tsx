/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Database, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Activity, 
  Zap, 
  GitCompare, 
  Workflow, 
  ChevronRight, 
  ChevronLeft, 
  Quote, 
  Settings, 
  Check, 
  Terminal, 
  HardDrive, 
  RefreshCw,
  Eye,
  ShieldCheck,
  Award
} from 'lucide-react';

interface DataEngineeringServicesProps {
  onOpenEstimator: () => void;
  onNavigateTo: (page: any) => void;
}

const MODERN_STACK_TOOLS = [
  { name: 'Snowflake', category: 'Data Warehousing', logo: '❄️' },
  { name: 'Databricks', category: 'Lakehouse', logo: '🧱' },
  { name: 'dbt', category: 'Data Transformation', logo: '🔨' },
  { name: 'Airflow', category: 'Orchestration', logo: '💨' },
  { name: 'Apache Kafka', category: 'Streaming', logo: '⚡' },
  { name: 'Spark', category: 'Big Data Processing', logo: '✨' },
  { name: 'AWS', category: 'Cloud Infrastructure', logo: '☁️' },
  { name: 'GCP', category: 'Cloud Infrastructure', logo: '☁️' },
  { name: 'Kubernetes', category: 'Infrastructure', logo: '☸️' }
];

const CORE_CAPABILITIES = [
  {
    title: 'Data Pipeline Automation',
    description: 'Design and deployment of robust, fault-tolerant data pipelines. We automate data movement from source to destination, minimizing latency and manual intervention.',
    icon: Workflow,
    highlights: ['Automated Orchestration', 'Self-Healing Pipelines', 'Failure Alerts & Retries'],
    color: 'from-red-500 to-rose-600'
  },
  {
    title: 'Data Warehousing',
    description: 'Architecture and implementation of modern cloud data warehouses. We optimize schema design for high-performance querying, structural modeling, and granular reporting.',
    icon: Database,
    highlights: ['Snowflake & BigQuery', 'Star & Snowflake Schemas', 'Query Cost Optimization'],
    color: 'from-orange-500 to-amber-600'
  },
  {
    title: 'ETL/ELT Services',
    description: 'Custom extraction, transformation, and loading processes. We utilize ELT patterns to leverage the compute power of modern cloud environments for raw efficiency.',
    icon: Zap,
    highlights: ['dbt Core & Cloud', 'Schema Drift Protection', 'High-Throughput Parsing'],
    color: 'from-yellow-500 to-amber-500'
  },
  {
    title: 'Data Lake Architecture',
    description: 'Implementation of scalable data lakes and lakehouses for unstructured and structured data, enabling advanced predictive analytics and machine learning workloads.',
    icon: HardDrive,
    highlights: ['Delta Lake & Iceberg', 'Granular Access Policies', 'Cost-Effective Storage'],
    color: 'from-emerald-500 to-teal-600'
  },
  {
    title: 'Real-time Processing',
    description: 'Streaming data architectures for sub-second, operational insights. We build systems that process and analyze events as they happen using Kafka, Flink, and Spark Streaming.',
    icon: Activity,
    highlights: ['Event-Driven Architectures', 'Sub-Second Latencies', 'Dead Letter Queuing'],
    color: 'from-cyan-500 to-blue-600'
  }
];

const METHODOLOGY_STEPS = [
  {
    num: '01',
    title: 'Discovery & Schema Audit',
    subtitle: 'Assessing Current Data Maturity',
    description: 'We audit your existing data infrastructure, map schema topologies, and identify ingestion friction points and data silos.',
    details: 'This ensures that the future-state blueprint completely aligns with both your storage budgets and analytical reporting goals.'
  },
  {
    num: '02',
    title: 'Modern Data Stack Strategy',
    subtitle: 'Architecting the Platform',
    description: 'We match your workloads to state-of-the-art tools (Snowflake, Databricks, dbt, Airflow) to prevent vendor lock-in and optimize compute cost.',
    details: 'Our customized frameworks guarantee high parallel execution power and decoupled storage/compute tiers.'
  },
  {
    num: '03',
    title: 'Pipeline Ingestion & Transformation',
    subtitle: 'Constructing the Pipelines',
    description: 'We build transactional data pipelines using highly optimized ELT workflows, converting raw json, csv, and API logs into clean, structured schemas.',
    details: 'Our pipelines feature built-in schema-drift management and are written in robust, fully-tested code blocks.'
  },
  {
    num: '04',
    title: 'Data Quality & Governance',
    subtitle: 'Securing Trusted Data',
    description: 'We establish runtime tests to validate data integrity (null checks, range audits, and unique-key validations) at every node.',
    details: 'We implement centralized meta-data catalogs, clear data lineage maps, and secure, granular role-based access control.'
  },
  {
    num: '05',
    title: 'DataOps & Continuous Observability',
    subtitle: 'Ensuring Long-Term Performance',
    description: 'We set up continuous monitoring and alerting systems to track database costs, query latency, pipeline bottlenecks, and job failures.',
    details: 'This is packaged with fully-automated CI/CD git integrations, allowing safe schema revisions with zero pipeline downtime.'
  }
];

const SUCCESS_STORIES = [
  {
    id: 'retail-warehouse',
    metric: '85% Faster Queries',
    metricLabel: 'Report Generation Performance',
    company: 'Velo Retail Group',
    tag: 'Cloud Warehouse Migration',
    title: 'Migrating 300TB Legacy On-Premise Warehouses to Snowflake',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    desc: 'Velo Retail was struggling with slow dashboard loading and massive computing bills. We re-modeled their entire transactional schema using dbt and migrated their historical systems to Snowflake. This migration slashed monthly warehouse cost by 42% while enabling lightning-fast analytics.',
    highlights: ['300TB Database Migrated', 'dbt Modeling Core integrated', '42% Hosting Cost Slashed']
  },
  {
    id: 'fintech-stream',
    metric: '10M+ Daily Events',
    metricLabel: 'Real-time Transactions Streamed',
    company: 'FinGate Global',
    tag: 'Real-time Streaming Engine',
    title: 'Architecting Event-Driven Ingestion with Apache Kafka',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    desc: 'For high-frequency transaction analysis, FinGate required real-time fraud scoring. We built an event-driven data pipeline using Apache Kafka, feeding live financial payloads directly to analytics services with sub-second delivery latency.',
    highlights: ['Kafka Cluster Deployment', 'Sub-second Data Latency', 'Automated Dead Letter Queue']
  }
];

const TESTIMONIALS = [
  {
    quote: "DevCoWise overhauled our entire data infrastructure. Their engineers designed an exceptionally robust dbt and Snowflake setup that allowed our product teams to run self-serve analytics with zero dependency on the core engineering group. Our decision cycle went from weeks to minutes.",
    author: "Dr. Sarah Jenkins",
    role: "VP of Data & Analytics",
    company: "Velo Retail Group",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "The reliability of the streaming pipelines DevCoWise built for us is remarkable. We process millions of daily financial queries with zero data loss. Their DataOps methodology ensures we catch schema anomalies before they ever hit downstream services.",
    author: "Richard Zhao",
    role: "Chief Technology Officer",
    company: "FinGate Global",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export default function DataEngineeringServices({ onOpenEstimator, onNavigateTo }: DataEngineeringServicesProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [activeStory, setActiveStory] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextStory = () => setActiveStory((prev) => (prev + 1) % SUCCESS_STORIES.length);
  const prevStory = () => setActiveStory((prev) => (prev - 1 + SUCCESS_STORIES.length) % SUCCESS_STORIES.length);

  return (
    <div className="bg-white text-zinc-900" id="data-engineering-services-page">
      
      {/* 1. HIGH-IMPACT HERO SECTION */}
      <section 
        className="relative bg-[#1A1211] text-white py-24 sm:py-32 px-6 sm:px-12 overflow-hidden border-b border-zinc-900"
        id="data-engineering-hero"
      >
        {/* Glow Effects */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-vd-red/10 blur-[150px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-zinc-800/40 blur-[120px] rounded-full pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-xxs font-black tracking-widest text-vd-red uppercase font-mono">
              <span className="w-2 h-2 rounded-full bg-vd-red animate-pulse" />
              Data Services
            </div>

            <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter leading-none max-w-2xl text-balance">
              Data Engineering<br />Services
            </h1>

            <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-sans font-light text-balance">
              Architecting scalable, high-performance data pipelines and modern data stacks. We transform complex data landscapes into unified, actionable foundations that accelerate intelligent decision-making.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenEstimator}
                className="bg-vd-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-8 py-4.5 rounded transition-all active:scale-[0.98] inline-flex items-center gap-2.5 cursor-pointer shadow-lg shadow-red-950/30"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('capabilities-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-transparent hover:bg-white/5 text-white font-bold text-xs uppercase tracking-widest px-8 py-4.5 rounded border border-zinc-700 hover:border-zinc-500 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                Explore Capabilities
              </button>
            </div>
          </div>

          {/* Right Visual Image Block */}
          <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[460px] lg:h-[500px] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent z-10 pointer-events-none" />
            <img 
              alt="Data Infrastructure and Advanced Pipelines" 
              className="w-full h-full object-cover select-none" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDws7zChIIgl6KWYzfrM7fE7iOtIQFV4Z3FmXLHOINCdlN_XS27zW3qbckUmPcUhppqCR6gWJkufFrKTGXk6-N2v3o-nlKqfz46tYMHu4w0yc2sXCdo24jSvvkZSWSp1gE3RDi6MsX6jCP-r7HNu3eRo_zD9jkQRaDT535D4cmCL6moUzPuSKyBC3jva6h3HF0wKdIq9KsgO0NFq_eJztzjhHtIjs7M_4huQjRmUT9p6RiOZCZOgUUI55Fv6KHEd_DLhFMAwuOpYKE"
              referrerPolicy="no-referrer"
            />
            {/* Overlay badge matching high-tech branding */}
            <div className="absolute top-4 right-4 z-20 bg-zinc-900/95 backdrop-blur-md border border-zinc-800 text-[10px] font-mono font-bold tracking-wider px-3.5 py-1.5 rounded uppercase text-vd-red flex items-center gap-1.5 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-vd-red" />
              Real-time Ingestion
            </div>
          </div>

        </div>
      </section>

      {/* 2. BUILDING ROBUST DATA FOUNDATIONS */}
      <section 
        className="py-24 px-6 sm:px-12 bg-white border-b border-zinc-100"
        id="data-foundations"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text and Features */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xxs uppercase tracking-[0.2em] text-vd-red font-black font-mono block">
                Infrastructure Excellence
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
                Building Robust Data Foundations
              </h2>
            </div>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-sans font-light">
              Modern enterprises require more than just data storage; they need resilient, automated ecosystems. We engineer ETL pipelines, automate warehouse operations, and implement DataOps practices to ensure your data is accurate, accessible, and ready for advanced analytics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-vd-red flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-headline text-sm font-bold text-zinc-950">Scalable Architecture</h4>
                  <p className="text-zinc-500 text-xs mt-1">Cloud-native designs that grow seamlessly with your data volume.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-vd-red flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-headline text-sm font-bold text-zinc-950">Automated Governance</h4>
                  <p className="text-zinc-500 text-xs mt-1">Embedded quality checks and lineage tracking across all pipelines.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Modern Data Stack Bento Card */}
          <div className="lg:col-span-5 bg-zinc-50 border border-zinc-200/60 rounded-2xl p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50/40 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-zinc-950">
                The Modern Data Stack
              </h3>
              <p className="text-zinc-500 text-xs leading-relaxed">
                We design environments using standard, highly performant tools that offer native scalability, low operational cost, and full modular compatibility.
              </p>
            </div>

            {/* Tech Icons Tag Cloud */}
            <div className="flex flex-wrap gap-2 pt-8 relative z-10">
              {MODERN_STACK_TOOLS.map((tool, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-zinc-200/80 hover:border-vd-red/30 transition-all px-3 py-2 rounded-lg flex items-center gap-2 group cursor-default shadow-sm"
                >
                  <span className="text-xs">{tool.logo}</span>
                  <div>
                    <p className="text-zinc-900 font-bold text-[10px] uppercase tracking-wider">{tool.name}</p>
                    <p className="text-zinc-400 text-[8px]">{tool.category}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-zinc-200/50 mt-8 flex justify-between items-center text-[10px] font-mono text-zinc-400">
              <span>INTEGRATION COMPATIBILITY</span>
              <span>100% CLOUD-NATIVE</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CORE CAPABILITIES SERVICE GRID */}
      <section 
        className="py-24 px-6 sm:px-12 bg-zinc-50 border-b border-zinc-100"
        id="capabilities-section"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xxs uppercase tracking-[0.2em] text-vd-red font-black font-mono block">
              Core Expertise
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight text-balance">
              Core Capabilities
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base max-w-2xl mx-auto">
              End-to-end engineering services designed to modernize your infrastructure and unlock the true value of your data assets.
            </p>
          </div>

          {/* Grid Layout of 5 Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_CAPABILITIES.map((cap, idx) => {
              const IconComp = cap.icon;
              return (
                <div 
                  key={idx}
                  className="group bg-white border border-zinc-200/60 rounded-xl p-8 hover:border-vd-red/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-lg bg-red-50 text-vd-red flex items-center justify-center group-hover:bg-vd-red group-hover:text-white transition-colors duration-300">
                      <IconComp className="w-6 h-6 stroke-[1.5]" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-headline text-lg sm:text-xl font-bold text-zinc-950 group-hover:text-vd-red transition-colors duration-300">
                        {cap.title}
                      </h3>
                      <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="pt-6 mt-6 border-t border-zinc-100 space-y-2">
                    {cap.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-vd-red shrink-0" />
                        <span className="text-zinc-500 text-xxs font-mono uppercase tracking-wider">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. OUR APPROACH - TECHNICAL METHODOLOGY */}
      <section 
        className="py-24 px-6 sm:px-12 bg-white border-b border-zinc-100"
        id="data-engineering-approach"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xxs uppercase tracking-[0.2em] text-vd-red font-black font-mono block">
              Execution Lifecycle
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight text-balance">
              Our Engineering Approach
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base max-w-2xl mx-auto">
              A systematic, rigorous process that ensures high dependability, performance isolation, and clean state recovery.
            </p>
          </div>

          {/* Stepper Interactive Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Nav List */}
            <div className="lg:col-span-5 space-y-3">
              {METHODOLOGY_STEPS.map((step, idx) => {
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
                        {step.subtitle}
                      </p>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform text-zinc-400 group-hover:text-vd-red ${isActive ? 'translate-x-1 text-vd-red' : ''}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Detailed Description panel */}
            <div className="lg:col-span-7 bg-zinc-50 border border-zinc-200/60 rounded-xl p-8 sm:p-12 min-h-[350px] flex flex-col justify-between relative overflow-hidden">
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
                    {METHODOLOGY_STEPS[activeStep].subtitle}
                  </span>

                  <h3 className="font-headline text-2xl sm:text-3xl font-bold text-zinc-900">
                    {METHODOLOGY_STEPS[activeStep].num}. {METHODOLOGY_STEPS[activeStep].title}
                  </h3>

                  <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-sans font-light text-balance">
                    {METHODOLOGY_STEPS[activeStep].description}
                  </p>

                  <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-light font-sans border-l-2 border-vd-red/30 pl-4 py-1 italic bg-white/60 pr-4 rounded-r">
                    {METHODOLOGY_STEPS[activeStep].details}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="pt-8 border-t border-zinc-200 mt-8 flex justify-between items-center text-xxs font-mono text-zinc-400">
                <span>METHODOLOGY GATEWAY</span>
                <span>STEP {activeStep + 1} OF 5</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. SUCCESS STORIES & METRIC BREAKDOWN */}
      <section 
        className="py-24 px-6 sm:px-12 bg-zinc-50 border-b border-zinc-100"
        id="data-success-stories"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-4">
              <span className="text-xxs uppercase tracking-[0.2em] text-vd-red font-black font-mono block">
                Proven Outcomes
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight">
                Case Studies
              </h2>
              <p className="text-zinc-500 text-xs sm:text-sm">
                How our optimized architectures deliver immense scalability and dramatic query performance gains.
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
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">Core Deliverables:</span>
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

      {/* 5B. TESTIMONIALS */}
      <section 
        className="py-24 px-6 sm:px-12 bg-white border-b border-zinc-100"
        id="data-testimonials"
      >
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          <div className="space-y-3">
            <span className="text-xxs uppercase tracking-[0.2em] text-vd-red font-black font-mono block">
              Validation
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-black text-zinc-950">
              Trusted by Data Leaders
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

      {/* 6. READY TO SCALE? CTA SECTION */}
      <section 
        className="py-28 bg-zinc-950 text-center relative overflow-hidden"
        id="data-cta"
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
            Ready to Scale Your Data Operations?
          </h2>
          
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-sans font-light">
            Empower your team with a performant, automated, single-source-of-truth data stack. Let’s co-engineer pipelines designed to support your next level of enterprise intelligence.
          </p>
          
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
