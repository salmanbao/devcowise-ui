'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  BarChart4,
  Layers,
  Settings,
  Database,
  Users,
  CheckCircle2,
  Workflow,
  ChevronLeft,
  ChevronRight,
  Quote
} from 'lucide-react';

interface ErpSolutionsPageProps {
  onOpenEstimator: () => void;
  onNavigateTo: (page: any) => void;
}

const INDUSTRY_MODULES = [
  {
    title: 'Healthcare ERP',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAliaUVkcqlsYLtIDjRRBoaH-z2eGGRC43U_I9mYgI_EggADYlTFC2db1SywOgUXoUO3KGJdVEdYF5f98e3Bnu-XLePSxN9XeH41tmHIPazrUiC-FYMkbrmfvflaZ0eZGF3805b-2z9O_qhFDQma-DGbp0-sUhUCn-CROOFBxpf6OMCCaRJc6EqWiYs0Zloe-zJ-8rN4etVl3RQdPR753ouGcqPHcsVEV0zbLfqP_ZpvEnvaOBadAtDbqE4CDa19twrvXcLqI9JhSU',
    details: 'Focus on HIPAA compliance, patient management, inventory tracking for medical supplies, and real-time data analytics for clinical operations.'
  },
  {
    title: 'Chemical Industry ERP',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMtpXT800yx1jNnZkNBSgejDKzCXQZBV6-x5gq_cCMACc7BLFrAKjawY_oHKnykdIrWKRMVNfZuImRB8CCgwso8Z77y5h_EXh8I89N4et400rPCfjRyrUQrbE925XdT7827ByS9N7gt9PsDSmNT5ZwBL18qHmpSWb3gKTLo2BLQ7nDo7nw_LzJx44ia2uyBbOrJGfSaalFBBjc1pHEPt9tI6WgCiVviYiMqfWn7wxMWj0qaUq-YqvhrgdmiDA82zP9ibVkezG1Q10',
    details: 'Specialized modules for formulation management, regulatory compliance (REACH/GHS), batch tracking, and advanced safety protocols.'
  },
  {
    title: 'Garments & Apparel ERP',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCd572Qhw1jKAj01m2sg3v6u5B5nwd-MvZQ-wb6v_OYOOU0sgJObiZT_TvF03rqPppjhL8wdf1hlAwqVAGr9JdUPomXpPXYDJc-UkqD5nsDNKcazcldMEIe_BtG_vZ9uqVDatALpVp9sQtNjnALUUnRixrEh2dTue7ou_2kqGRDyxue8z5KTKlxhRXm-ElclkxSIGZ9s4GGyoXIXKk4-VscDEvfwh9MxF4kBPINPpe3bX-pzguOADLXAT2RA1U5u_zSe8jzgBRHbF4',
    details: 'End-to-end supply chain visibility, production planning for diverse product lines, multi-tier supply chain management, and quality control.'
  },
  {
    title: 'Smart Manufacturing ERP',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkbMnJikzFJbKntrwZz_pCMf4-Kg-MmA4IvcoAiPhaHUCFApBkNb2YxSmOKD8OGwKDmym4yMJKsd439AHGRr0ZTqvjMF5fObhDnRRIu9_uB6G-_7o1-9WpGr2lMWxWH_F8aUZaRkVLuRSCmXazRsboZ9vmIad_Gz3N3YkTNpq4ZBBQNOuID3q8sLWHA8Nx7Uc8vlEFFRKNDpgCu34ayD-IJ5qUIxKtwpDvffRAej_G_Zem73PMKSmrowCXCn1nLfzkSHHytobqob8',
    details: 'Integration with IoT/Edge devices, robotic process automation (RPA), predictive maintenance, and real-time shop floor monitoring.'
  }
];

const CORE_CAPABILITIES = [
  {
    icon: Database,
    title: 'Centralized Data Hub',
    description: 'Eliminate data silos with a single source of truth across all departments.'
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Automate repetitive workflows to reduce human error and operational overhead.'
  },
  {
    icon: BarChart4,
    title: 'Real-Time Analytics',
    description: 'Customizable dashboards providing actionable intelligence and forecasting.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    description: 'Role-based access control, encryption, and comprehensive audit trails.'
  },
  {
    icon: Layers,
    title: 'Seamless Integrations',
    description: 'Connect with existing legacy systems, CRM, and third-party APIs effortlessly.'
  },
  {
    icon: Zap,
    title: 'Scalable Architecture',
    description: 'Cloud-native solutions designed to grow alongside your business demands.'
  }
];

const IMPLEMENTATION_ROADMAP = [
  {
    phase: '01',
    title: 'Discovery & Analysis',
    description: 'Comprehensive audit of current workflows and identification of critical pain points.'
  },
  {
    phase: '02',
    title: 'Solution Architecture',
    description: 'Designing custom modules, data structures, and integration pathways.'
  },
  {
    phase: '03',
    title: 'Agile Development',
    description: 'Iterative build process with regular stakeholder reviews and QA testing.'
  },
  {
    phase: '04',
    title: 'Deployment & Training',
    description: 'Phased rollout strategies, comprehensive documentation, and user onboarding.'
  }
];

const ERP_TESTIMONIALS = [
  {
    quote: "The ERP modernization completely transformed our supply chain visibility. We've reduced inventory holding costs by 22% while improving delivery times.",
    author: "Sarah Jenkins",
    role: "Chief Operating Officer",
    company: "Global Logistics Inc."
  },
  {
    quote: "Implementing this system allowed us to seamlessly integrate our legacy HR and finance tools. The automated workflows alone save our team 40 hours a week.",
    author: "David Chen",
    role: "VP of Operations",
    company: "Nexus Manufacturing"
  },
  {
    quote: "The real-time analytics dashboard gives our executive team the exact insights we need. It's not just software; it's a strategic advantage.",
    author: "Elena Rodriguez",
    role: "Chief Financial Officer",
    company: "Apex Healthcare"
  }
];

export default function ErpSolutionsPage({ onOpenEstimator, onNavigateTo }: ErpSolutionsPageProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % ERP_TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + ERP_TESTIMONIALS.length) % ERP_TESTIMONIALS.length);
  };

  return (
    <div className="space-y-0 text-zinc-900 bg-white">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-zinc-950/80 z-10" />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL3vE0DnjuSJlSk9xuqzKttuM51wLYNtxkTMIfJrno893GLfgyG_MI9s-ImDX8cppSni0OxYjoRfFWfg-jyv0s_F8OoKQOMocqVCMXtC2oWNQuFhssiT5Oqapu6dFGX6PH4dAcuHdOL1umWl554LMrtbg5uOh-QhwIpMboHk2L-X-6YkaqkmX_43yq5bNAVqf3TIVOT6W6G_cVMUMqaJw2cRmTW9kwJvUwNMEMJWvHd_W-jeBCqIGLaPw6hgDmWOJIp07QY0OzDVc"
            alt="Next-Gen ERP Solutions"
            className="w-full h-full object-cover object-center opacity-60"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-vd-red font-mono font-bold tracking-widest text-xs uppercase mb-4 block">
                Enterprise Solutions
              </span>
              <h1 className="text-4xl lg:text-6xl font-black text-white font-headline leading-tight tracking-tight">
                Next-Gen ERP Solutions for Complex Industries
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl">
                Streamline operations, optimize resources, and drive intelligent growth with our custom-engineered enterprise resource planning platforms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-6 flex flex-wrap gap-4"
            >
              <button
                onClick={onOpenEstimator}
                className="bg-vd-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded transition-colors inline-flex items-center gap-2"
              >
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE TRUST RIBBON */}
      <section className="bg-zinc-900 border-b border-zinc-800 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest font-bold shrink-0">
              Enterprise Compliance Standards
            </span>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-70 grayscale">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-vd-red" />
                <span className="text-white font-headline font-bold text-sm tracking-widest uppercase">SOC2 Type II</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-vd-red" />
                <span className="text-white font-headline font-bold text-sm tracking-widest uppercase">ISO 27001</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-vd-red" />
                <span className="text-white font-headline font-bold text-sm tracking-widest uppercase">HIPAA Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-vd-red" />
                <span className="text-white font-headline font-bold text-sm tracking-widest uppercase">GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY MODULES GRID */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-vd-red font-mono font-bold tracking-widest text-xs uppercase">Specialized Domains</span>
            <h2 className="text-3xl md:text-4xl font-black font-headline text-zinc-950">Industry ERP Modules</h2>
            <p className="text-zinc-500">
              Purpose-built solutions designed to meet the rigorous compliance and operational standards of complex sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {INDUSTRY_MODULES.map((module, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded overflow-hidden border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow group flex flex-col"
              >
                <div className="aspect-video w-full overflow-hidden relative">
                  <img
                    src={module.image}
                    alt={module.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-white font-headline font-bold text-xl">
                    {module.title}
                  </h3>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    {module.details}
                  </p>
                  <button 
                    onClick={onOpenEstimator}
                    className="text-vd-red font-bold text-xs uppercase tracking-wider flex items-center gap-2 group-hover:text-red-700 transition-colors w-fit"
                  >
                    Explore Module
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 space-y-6 sticky top-32">
              <span className="text-vd-red font-mono font-bold tracking-widest text-xs uppercase">Platform Architecture</span>
              <h2 className="text-3xl md:text-4xl font-black font-headline text-zinc-950 leading-tight">
                Core Capabilities of our ERP Engine
              </h2>
              <p className="text-zinc-500 leading-relaxed">
                Built on modern cloud-native principles, our ERP systems deliver uncompromising performance, security, and flexibility.
              </p>
              <button
                onClick={onOpenEstimator}
                className="bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded transition-colors inline-flex items-center gap-2 mt-4"
              >
                Discuss Architecture
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-8">
              {CORE_CAPABILITIES.map((capability, idx) => (
                <div key={idx} className="p-6 rounded border border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
                  <div className="w-10 h-10 rounded bg-white shadow-sm border border-zinc-100 flex items-center justify-center text-vd-red mb-4">
                    <capability.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-headline font-bold text-lg text-zinc-950 mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION ROADMAP */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-vd-red font-mono font-bold tracking-widest text-xs uppercase">Deployment Strategy</span>
            <h2 className="text-3xl md:text-4xl font-black font-headline">Implementation Roadmap</h2>
            <p className="text-zinc-400">
              A structured, risk-mitigated approach to rolling out complex enterprise systems with minimal business disruption.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {IMPLEMENTATION_ROADMAP.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Connector Line (hidden on mobile) */}
                {idx < IMPLEMENTATION_ROADMAP.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-full h-[1px] bg-zinc-800" />
                )}
                
                <div className="bg-zinc-900 border border-zinc-800 rounded p-6 h-full relative z-10 hover:border-vd-red/50 transition-colors">
                  <span className="text-4xl font-black text-zinc-800 font-headline block mb-4">
                    {step.phase}
                  </span>
                  <h3 className="font-headline font-bold text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT SUCCESS STORIES / TESTIMONIALS */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-vd-red font-mono font-bold tracking-widest text-xs uppercase">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-black font-headline text-zinc-950">Proven Transformations</h2>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute top-0 left-0 text-zinc-100 -translate-x-4 -translate-y-6 -z-10">
              <Quote className="w-32 h-32" />
            </div>
            
            <div className="bg-zinc-50 border border-zinc-100 rounded p-8 md:p-12 min-h-[300px] flex flex-col justify-center relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <p className="text-xl md:text-2xl font-headline font-bold text-zinc-900 leading-relaxed">
                    "{ERP_TESTIMONIALS[activeTestimonial].quote}"
                  </p>
                  
                  <div>
                    <h4 className="font-bold text-zinc-950 text-lg">
                      {ERP_TESTIMONIALS[activeTestimonial].author}
                    </h4>
                    <p className="text-zinc-500 text-sm">
                      {ERP_TESTIMONIALS[activeTestimonial].role}, <span className="font-semibold text-vd-red">{ERP_TESTIMONIALS[activeTestimonial].company}</span>
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex items-center justify-center gap-4 mt-8">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-vd-red hover:border-vd-red transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {ERP_TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      activeTestimonial === idx ? 'bg-vd-red' : 'bg-zinc-300 hover:bg-zinc-400'
                    }`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-vd-red hover:border-vd-red transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-24 bg-vd-red text-white text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl md:text-5xl font-black font-headline tracking-tight">
            Ready to modernize your operations?
          </h2>
          <p className="text-red-100 text-lg">
            Schedule a technical consultation with our enterprise architecture team.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={onOpenEstimator}
              className="bg-white text-vd-red hover:bg-zinc-100 font-bold text-xs uppercase tracking-widest px-8 py-4 rounded transition-colors"
            >
              Request a Demo
            </button>
            <button
              onClick={() => onNavigateTo('contact')}
              className="bg-transparent border border-red-200 hover:bg-red-800 font-bold text-xs uppercase tracking-widest px-8 py-4 rounded transition-colors"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
