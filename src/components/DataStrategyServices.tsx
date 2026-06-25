/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Coins, 
  Brain, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles,
  Search,
  BookOpen,
  LineChart,
  GitMerge,
  MessageSquare,
  Building,
  Briefcase,
  Play
} from 'lucide-react';

interface DataStrategyServicesProps {
  onOpenEstimator: () => void;
  onNavigateTo: (page: any) => void;
}

const STRATEGIC_OFFERINGS = [
  {
    id: 'maturity',
    title: 'Data Maturity Assessment',
    tagline: 'Benchmark & Audit',
    icon: TrendingUp,
    description: 'Comprehensive evaluation of your current data landscape to identify gaps, bottlenecks, and opportunities for immediate impact.',
    bullets: [
      'Infrastructure & technology stack review',
      'Team data literacy & capability scoring',
      'Data pipeline & architecture quality audit',
      'Actionable investment prioritisation matrix'
    ],
    color: 'from-blue-50 to-blue-100/30 border-blue-100 text-blue-600'
  },
  {
    id: 'governance',
    title: 'Data Governance Framework',
    tagline: 'Security & Compliance',
    icon: ShieldCheck,
    description: 'Establishing robust policies, procedures, and standards to ensure data quality, security, and regulatory compliance across the enterprise.',
    bullets: [
      'Metadata management & lineage tracking',
      'RBAC & security policy engineering',
      'Regulatory readiness (GDPR, HIPAA, SOC2)',
      'Data stewardship & ownership assignment'
    ],
    color: 'from-emerald-50 to-emerald-100/30 border-emerald-100 text-emerald-600'
  },
  {
    id: 'monetization',
    title: 'Monetization Strategy',
    tagline: 'Value Creation',
    icon: Coins,
    description: 'Identifying new revenue streams and cost-saving opportunities by treating data as a product and integrating it into core business models.',
    bullets: [
      'Direct vs. indirect monetization modelling',
      'Data-as-a-Service (DaaS) infrastructure plans',
      'Operational efficiency cost-reduction audits',
      'Valuation of corporate data assets'
    ],
    color: 'from-amber-50 to-amber-100/30 border-amber-100 text-amber-600'
  },
  {
    id: 'ai-roadmap',
    title: 'AI/ML Roadmap',
    tagline: 'Future Readiness',
    icon: Brain,
    description: 'Strategic planning for the integration of artificial intelligence and machine learning, tailored to your organizational readiness and goals.',
    bullets: [
      'LLM & generative AI use-case discovery',
      'Feature engineering & MLOps pipeline planning',
      'Algorithmic bias & risk management',
      'Phased deployment & scaling schedule'
    ],
    color: 'from-red-50 to-red-100/30 border-red-100 text-vd-red'
  }
];

const STEPS = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description: 'We begin by mapping your existing data infrastructure, understanding business goals, and identifying critical use cases that define success.',
    details: [
      'Interviews with primary department stakeholders',
      'Technical assessment of databases & warehouses',
      'Identification of current data silos & leakages'
    ]
  },
  {
    number: '02',
    title: 'Architecture & Governance Design',
    description: 'Designing a modern, scalable data architecture alongside robust governance policies to ensure security, compliance, and democratized access.',
    details: [
      'Blueprint for target-state cloud data warehouse/lakehouse',
      'Definition of data-quality SLAs and compliance rules',
      'Integration plan with legacy software and external APIs'
    ]
  },
  {
    number: '03',
    title: 'Implementation & Enablement',
    description: 'Executing the strategy through agile engineering sprints, while fostering a data-literate culture to ensure high adoption across teams.',
    details: [
      'Deploying secure foundation layers on cloud platforms',
      'Fostering data-stewardship roles within your organization',
      'Building operational executive reporting dashboards'
    ]
  }
];

export default function DataStrategyServices({ onOpenEstimator, onNavigateTo }: DataStrategyServicesProps) {
  const [activeOffering, setActiveOffering] = useState('maturity');
  const [assessmentStep, setAssessmentStep] = useState(0);
  const [score, setScore] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  // Diagnostic checklist questions
  const questions = [
    {
      text: "How would you describe your current database state?",
      options: [
        { label: "Siloed files, Excel sheets, and disconnected on-prem databases", value: 1 },
        { label: "Centralized relational database, but queries are slow & complex", value: 3 },
        { label: "Modern cloud data lakehouse with robust, automated pipelines", value: 5 }
      ]
    },
    {
      text: "Who has access to key business metrics in real-time?",
      options: [
        { label: "Only a few technical engineers who write manual SQL", value: 1 },
        { label: "Select managers using static weekly PDF reports", value: 3 },
        { label: "All decision-makers via self-serve interactive BI tools", value: 5 }
      ]
    },
    {
      text: "What is your organization's stance on AI & Machine Learning?",
      options: [
        { label: "No current initiatives; we struggle with basic reporting", value: 1 },
        { label: "Interested, but we lack clean data to train reliable models", value: 3 },
        { label: "Actively deploying GenAI or predictive models with clean MLOps", value: 5 }
      ]
    },
    {
      text: "How is data security & compliance managed?",
      options: [
        { label: "Informal rules; keys shared over Slack; hard to track", value: 1 },
        { label: "Basic passwords; manual audits done once a year", value: 3 },
        { label: "Strict role-based access control with automated real-time compliance checks", value: 5 }
      ]
    }
  ];

  const handleAnswer = (val: number) => {
    const nextScore = [...score, val];
    setScore(nextScore);
    if (assessmentStep < questions.length - 1) {
      setAssessmentStep(assessmentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetAssessment = () => {
    setAssessmentStep(0);
    setScore([]);
    setShowResult(false);
  };

  const calculateMaturityLevel = () => {
    const total = score.reduce((a, b) => a + b, 0);
    const average = total / questions.length;
    if (average <= 2) {
      return {
        title: "Level 1: Reactive & Foundational",
        desc: "Your data is currently locked in static silos, creating operational drag. Focus on cataloging databases, migrating to secure cloud platforms, and standardizing core metrics before launching advanced analytics.",
        action: "Recommended: Data Maturity Assessment and basic Data Governance Setup."
      };
    } else if (average <= 3.8) {
      return {
        title: "Level 2: Standardized & Emerging",
        desc: "You have centralized some data, but still rely heavily on manual reporting and engineering handoffs. Prioritize deploying self-serve dashboards, defining formal stewardship, and preparing clean pipelines for AI readiness.",
        action: "Recommended: Data Governance Framework and AI/ML Roadmap."
      };
    } else {
      return {
        title: "Level 3: Strategic & Predictive",
        desc: "Excellent foundation. Your data is highly accessible, secure, and drives proactive business choices. Capitalize on this maturity by launching data productization models and generative AI automation pipelines.",
        action: "Recommended: Monetization Strategy and MLOps Scale."
      };
    }
  };

  return (
    <div className="space-y-0 text-zinc-900 bg-white">
      
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden bg-zinc-50 border-b border-zinc-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-vd-red rounded font-mono text-[10px] uppercase tracking-widest font-black">
              <Sparkles className="w-3.5 h-3.5" />
              Strategic Advisory
            </div>
            
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 tracking-tight leading-none">
              Data Strategy & <br className="hidden sm:inline" />
              <span className="text-vd-red">Governance</span>
            </h1>
            
            <p className="text-zinc-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              Architecting the resilient foundation for a data-driven enterprise. We align your complex data initiatives with direct business objectives, ensuring strict regulatory compliance, world-class security, and actionable enterprise intelligence.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenEstimator}
                className="bg-vd-red text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded hover:bg-red-700 transition-colors cursor-pointer shadow-lg shadow-red-100/50"
              >
                Develop Your Data Strategy
              </button>
              
              <a
                href="#offerings"
                className="bg-zinc-900 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded hover:bg-zinc-800 transition-colors cursor-pointer text-center"
              >
                Explore Offerings
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            {/* Aspect ratio framed placeholder representing engineering/data complexity */}
            <div className="relative rounded-lg overflow-hidden border border-zinc-200 shadow-2xl bg-zinc-950 group">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60 z-10" />
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRqIxvGe_5OmIgV6WyKOgOqDVWy8QSvCRXm6Iy2o7jndf7CUOE1TWkfYtVkv19YNSXVdA5pn8eADwmXvxVRCMMcln74SxhDFlA9OoRRV2CI30cm7gMDMuXTMrO3ld3-qEcFwXZxJWrvKKccf9uJS1Kk_EPijNKojf2AjScMIDKrPKOVJgkoSUSx5c1aAs_3slt4NL-mAe2stLlWoPGgPpT4lqmwLCddev3jGFjgA0X-VJPUl8em5U4AsTpREuVQHlROIqg-fqs6ys"
                alt="Structured abstract grid representing high-fidelity data strategy"
                className="w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/5] object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 space-y-2">
                <span className="text-xxs font-mono text-red-400 uppercase tracking-widest font-black block">Data Strategy Blueprint</span>
                <p className="text-xs text-zinc-300 font-medium">Translating raw datasets into scalable corporate equity.</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 2: TRANSFORM DATA INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xxs font-mono uppercase font-black text-vd-red tracking-widest block">Executive Summary</span>
            <h2 className="font-headline text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight leading-tight">
              Transform Data into a Strategic Asset
            </h2>
            <div className="w-16 h-1 bg-vd-red mx-auto" />
            <p className="text-zinc-600 text-sm sm:text-base md:text-lg leading-relaxed pt-2">
              In the modern digital economy, raw data is abundant but true strategic insight is extremely rare. Our Data Strategy practice helps forward-thinking organizations pivot from reactive, slow reporting cycles to proactive, predictive business intelligence. 
            </p>
            <p className="text-zinc-600 text-sm sm:text-base md:text-lg leading-relaxed">
              We engineer the organizational blueprints, standards, and pipelines necessary to ensure absolute data quality, high accessibility, and perfect strategic alignment—enabling your team to confidently monetize enterprise information and drive sustainable growth.
            </p>
          </div>

          {/* Three Key Value Drivers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            {[
              {
                title: "Regulatory Immunity",
                desc: "Navigate complex frameworks (GDPR, SOC2, HIPAA) with strict metadata compliance and strict tenant isolation guardrails."
              },
              {
                title: "Accelerated Decision Flow",
                desc: "Consolidate business definitions across divisions to eliminate manual query backlogs and boost reporting speed by up to 10x."
              },
              {
                title: "Enterprise Monetization",
                desc: "Architect scalable APIs, custom integration layers, and packaged data products to unlock new recurring revenue channels."
              }
            ].map((driver, idx) => (
              <div key={idx} className="bg-zinc-50 border border-zinc-200/60 rounded p-6 space-y-2 hover:shadow-md hover:border-zinc-300 transition-all">
                <span className="text-vd-red font-headline text-xl font-black block">0{idx + 1}.</span>
                <h4 className="font-headline font-bold text-zinc-950 text-sm uppercase tracking-wide">{driver.title}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">{driver.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: STRATEGIC OFFERINGS GRID */}
      <section id="offerings" className="py-20 bg-zinc-50 border-y border-zinc-100 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xxs font-mono uppercase font-black text-vd-red tracking-widest block">Capabilities</span>
            <h2 className="font-headline text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
              Strategic Offerings
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm">
              Discover our core service avenues designed to audit, structure, protect, and maximize your primary digital resources.
            </p>
          </div>

          {/* Interactive Offerings Workspace Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Sidebar Tab Selectors */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {STRATEGIC_OFFERINGS.map((offering) => {
                const Icon = offering.icon;
                const isSelected = activeOffering === offering.id;
                return (
                  <button
                    key={offering.id}
                    onClick={() => setActiveOffering(offering.id)}
                    className={`flex items-start text-left p-5 rounded border transition-all cursor-pointer ${
                      isSelected 
                        ? 'bg-white border-vd-red shadow-md shadow-zinc-100 scale-[1.01]' 
                        : 'bg-zinc-100/50 border-zinc-200/60 hover:bg-zinc-100 hover:border-zinc-300'
                    }`}
                  >
                    <div className={`p-3 rounded mr-4 ${isSelected ? 'bg-red-50 text-vd-red' : 'bg-zinc-200 text-zinc-600'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xxs uppercase tracking-wider text-zinc-400 font-bold font-mono">{offering.tagline}</span>
                      <h3 className="font-headline font-bold text-zinc-950 text-base mt-0.5">{offering.title}</h3>
                      <p className="text-zinc-500 text-xs line-clamp-1 mt-1 font-normal leading-relaxed">{offering.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Display Pane */}
            <div className="lg:col-span-7 bg-white border border-zinc-200 rounded-lg p-6 sm:p-10 shadow-lg relative flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {STRATEGIC_OFFERINGS.map((offering) => {
                  if (offering.id !== activeOffering) return null;
                  const Icon = offering.icon;
                  return (
                    <motion.div
                      key={offering.id}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-50 text-vd-red rounded">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xxs font-mono uppercase font-black text-vd-red tracking-widest">{offering.tagline}</span>
                          <h3 className="font-headline text-xl sm:text-2xl font-black text-zinc-950">{offering.title}</h3>
                        </div>
                      </div>

                      <p className="text-zinc-600 text-sm leading-relaxed font-normal">
                        {offering.description}
                      </p>

                      <div className="space-y-3 pt-2">
                        <h4 className="text-zinc-950 text-xs font-bold uppercase tracking-wider font-mono">Core Service Deliverables:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {offering.bullets.map((bullet, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span className="text-zinc-600 text-xs leading-normal font-medium">{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-xxs text-zinc-400 font-mono">
                  * All strategic advisory blueprints come with executive implementation schedules.
                </div>
                <button
                  onClick={onOpenEstimator}
                  className="inline-flex items-center gap-2 text-vd-red font-bold text-xs uppercase tracking-widest hover:text-red-700 transition-colors w-fit cursor-pointer"
                >
                  Discuss this service <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

          {/* Interactive Diagnostic Tool Section */}
          <div className="bg-white border border-zinc-200 rounded-lg p-6 sm:p-10 shadow-lg max-w-4xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-5 space-y-4">
                <span className="text-xxs font-mono uppercase font-black text-vd-red tracking-widest block">Interactive Diagnostic</span>
                <h3 className="font-headline text-2xl font-black text-zinc-950 tracking-tight leading-tight">
                  Data Maturity Quick-Check
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Evaluate your organization's architectural state instantly. Discover key bottlenecks and receive customized, strategist-grade recommendations.
                </p>
                <div className="pt-2">
                  <span className="text-[10px] font-mono text-zinc-400 block uppercase font-bold">Duration: 1 Minute</span>
                  <span className="text-[10px] font-mono text-zinc-400 block uppercase font-bold">Outputs: Strategic Blueprint Guidance</span>
                </div>
              </div>

              <div className="md:col-span-7 bg-zinc-50 rounded-lg p-6 border border-zinc-100 relative min-h-[250px] flex flex-col justify-between">
                {!showResult ? (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-xxs font-mono text-zinc-400 uppercase font-bold">Step {assessmentStep + 1} of {questions.length}</span>
                      <div className="flex gap-1">
                        {questions.map((_, qIdx) => (
                          <div 
                            key={qIdx} 
                            className={`w-4 h-1 rounded ${qIdx <= assessmentStep ? 'bg-vd-red' : 'bg-zinc-200'}`} 
                          />
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-headline font-bold text-zinc-900 text-sm sm:text-base leading-snug">
                        {questions[assessmentStep].text}
                      </h4>
                    </div>

                    <div className="flex flex-col gap-2.5">
                      {questions[assessmentStep].options.map((opt, oIdx) => (
                        <button
                          key={oIdx}
                          onClick={() => handleAnswer(opt.value)}
                          className="w-full text-left px-4 py-3 bg-white border border-zinc-200 hover:border-vd-red hover:bg-red-50/20 text-xs text-zinc-700 font-semibold rounded transition-all cursor-pointer"
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6 flex flex-col justify-between h-full"
                  >
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded font-mono text-[9px] uppercase font-bold">
                        Check Completed Successfully
                      </div>
                      <h4 className="font-headline text-lg font-black text-zinc-950">
                        {calculateMaturityLevel().title}
                      </h4>
                      <p className="text-zinc-600 text-xs leading-relaxed">
                        {calculateMaturityLevel().desc}
                      </p>
                      <div className="p-3 bg-red-50/40 border border-red-100 rounded text-vd-red font-semibold text-xs mt-2">
                        {calculateMaturityLevel().action}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        onClick={resetAssessment}
                        className="px-4 py-2 bg-zinc-200 hover:bg-zinc-300 text-zinc-700 font-bold text-xxs uppercase tracking-widest rounded transition-colors cursor-pointer"
                      >
                        Restart Check
                      </button>
                      <button
                        onClick={onOpenEstimator}
                        className="px-4 py-2 bg-vd-red hover:bg-red-700 text-white font-bold text-xxs uppercase tracking-widest rounded transition-colors cursor-pointer flex-1 text-center"
                      >
                        Request Strategy Call
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: ROADMAP TO DATA EXCELLENCE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24 h-fit">
              <span className="text-xxs font-mono uppercase font-black text-vd-red tracking-widest block">Our Delivery Protocol</span>
              <h2 className="font-headline text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight leading-tight">
                Roadmap to Data <br className="hidden lg:inline" />
                <span className="text-vd-red">Excellence</span>
              </h2>
              <div className="w-16 h-1 bg-vd-red" />
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                Our structured advisory approach ensures a perfectly seamless transition from outdated legacy database silos to a unified, secure, and intelligent modern cloud data ecosystem. 
              </p>
              <p className="text-zinc-500 text-xs leading-relaxed">
                We prioritize quick-win business value milestones within your first 30 days, while simultaneously engineering highly robust and compliant architectural infrastructure that scales effortlessly.
              </p>

              <div className="pt-4">
                <button
                  onClick={onOpenEstimator}
                  className="inline-flex items-center gap-2 bg-zinc-950 hover:bg-zinc-850 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded transition-all cursor-pointer"
                >
                  Get Roadmap PDF <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 relative">
              {/* Timeline Connector bar */}
              <div className="absolute left-[23px] sm:left-[31px] top-6 bottom-6 w-0.5 bg-zinc-100 hidden md:block" />
              
              <div className="space-y-10 relative">
                {STEPS.map((step, sIdx) => (
                  <div key={sIdx} className="flex gap-6 sm:gap-8 relative group">
                    
                    {/* Circle Indicator */}
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-zinc-50 border-2 border-zinc-200 flex items-center justify-center font-headline text-base sm:text-lg font-black text-zinc-400 group-hover:border-vd-red group-hover:text-vd-red transition-all duration-300 z-10 shrink-0 shadow-sm bg-white">
                      {step.number}
                    </div>

                    <div className="bg-zinc-50 border border-zinc-200/60 rounded-lg p-6 sm:p-8 w-full hover:shadow-lg hover:border-zinc-300 transition-all">
                      <h4 className="font-headline font-black text-zinc-950 text-lg sm:text-xl tracking-tight mb-2">
                        {step.title}
                      </h4>
                      <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>
                      
                      <div className="space-y-2 pt-2 border-t border-zinc-200/50">
                        {step.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-xxs text-zinc-500 font-semibold font-mono">
                            <span className="w-1 h-1 rounded-full bg-vd-red" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: CLIENT SUCCESS STORY */}
      <section className="py-20 bg-zinc-950 text-white relative overflow-hidden">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xxs font-mono uppercase font-black text-red-500 tracking-widest block">Success Case Study</span>
            <h2 className="font-headline text-3xl sm:text-4xl font-black text-white tracking-tight">
              Strategic Impact in Action
            </h2>
            <div className="w-16 h-1 bg-vd-red" />
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative min-h-[300px] bg-zinc-800">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" 
                alt="Corporate Strategy Boardroom"
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-75"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <span className="text-xxs font-mono text-red-400 uppercase tracking-widest font-black">Strategic Transformation</span>
                <p className="text-xs text-zinc-300">Designing the data highway for multi-state financial services.</p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8">
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-mono uppercase bg-zinc-800 px-2.5 py-1 rounded text-red-400 font-bold">Fintech Sector</span>
                  <span className="text-[10px] font-mono uppercase bg-zinc-800 px-2.5 py-1 rounded text-zinc-300 font-bold">Governance Setup</span>
                </div>
                
                <h3 className="font-headline text-xl sm:text-2xl font-black text-white tracking-tight">
                  Unlocking $12M in Data-Monetization Streams for a Premier Retail Bank
                </h3>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  The client operated with disconnected, complex database environments causing strict reporting backlogs and audit compliance risks. DevCoWise architected a complete enterprise-wide data strategy, deploying an audited Data Governance Framework integrated with unified master data management.
                </p>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-4 border-y border-zinc-800">
                <div>
                  <span className="font-headline text-3xl sm:text-4xl font-black text-white block">+$12M</span>
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block tracking-wider font-semibold">New Revenue Channels</span>
                </div>
                <div>
                  <span className="font-headline text-3xl sm:text-4xl font-black text-red-500 block">40%</span>
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block tracking-wider font-semibold">Analytical Speedup</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="font-headline text-3xl sm:text-4xl font-black text-white block">100%</span>
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block tracking-wider font-semibold">GDPR & SOC2 Ready</span>
                </div>
              </div>

              {/* Client Quote */}
              <div className="space-y-2">
                <p className="text-zinc-300 text-xs italic leading-relaxed">
                  "DevCoWise didn't just give us advice; they gave us a meticulous, step-by-step master plan and technical leadership that converted our raw transactional logs into verified corporate equity."
                </p>
                <div className="text-xxs text-zinc-400 font-bold uppercase tracking-wider font-mono">
                  — Chief Information Officer, Strategic Finance Alliance
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: BOTTOM CTA SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-10 sm:p-20 text-center space-y-8 relative overflow-hidden shadow-xl">
            {/* Ambient Background Grid Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/20 via-transparent to-transparent opacity-60 z-0" />
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="text-xxs font-mono uppercase font-black text-vd-red tracking-widest block">Get Started</span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight leading-none">
                Ready to elevate your data capabilities?
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base">
                Connect directly with our primary data strategy experts today to design a crystal-clear, optimized roadmap to data maturity.
              </p>
              
              <div className="pt-4">
                <button
                  onClick={onOpenEstimator}
                  className="inline-block bg-vd-red text-white font-bold text-xs uppercase tracking-widest px-10 py-5 rounded hover:bg-red-700 transition-colors cursor-pointer shadow-lg shadow-red-100/50"
                >
                  Develop Your Data Strategy
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
