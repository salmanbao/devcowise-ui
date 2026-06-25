import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight,
  Database,
  BrainCircuit,
  Network,
  ChevronDown,
  Quote,
  Building2,
  Workflow
} from 'lucide-react';

interface DataServicesProps {
  onOpenEstimator: () => void;
  onNavigateTo: (page: any) => void;
}

const SERVICES = [
  {
    id: 'strategy',
    title: 'Data Strategy & Consulting',
    icon: Network,
    description: 'Aligning your data initiatives with business objectives. We design comprehensive blueprints for data governance, quality, and architecture.',
    tags: ['Governance', 'Architecture Design', 'Maturity Assessment'],
    link: 'data-strategy'
  },
  {
    id: 'engineering',
    title: 'Data Engineering & Pipelines',
    icon: Database,
    description: 'Building robust, automated pipelines to ingest, process, and store data at scale with minimal latency.',
    tags: ['ETL/ELT', 'Data Warehousing', 'Data Lakes'],
    link: 'data-engineering'
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: BrainCircuit,
    description: 'Leverage predictive analytics, natural language processing, and custom ML models to automate decisions and uncover hidden operational insights.',
    tags: ['Predictive Modeling', 'NLP', 'Computer Vision'],
    link: 'services' // Assuming this links to a general services or specific AI page if created
  }
];

const METHODOLOGY_STEPS = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description: 'We analyze your current data ecosystem, identifying bottlenecks, silos, and opportunities for modernization.'
  },
  {
    number: '02',
    title: 'Architecture Design',
    description: 'Crafting scalable, secure frameworks utilizing modern cloud infrastructure tailored to your specific transaction volumes.'
  },
  {
    number: '03',
    title: 'Development & Implementation',
    description: 'Agile engineering of pipelines, data warehouses, and integration points with stringent quality assurance protocols.'
  },
  {
    number: '04',
    title: 'Insights & Optimization',
    description: 'Deploying BI dashboards and machine learning models, followed by continuous monitoring and performance tuning.'
  }
];

const FAQS = [
  {
    question: "How do you ensure data security during a migration or transformation project?",
    answer: "We implement a security-first approach, utilizing end-to-end encryption, strict role-based access controls (RBAC), and continuous vulnerability scanning. Our processes are fully compliant with GDPR, CCPA, and SOC2 standards to ensure your data remains protected at all times."
  },
  {
    question: "How scalable are the data architectures you design?",
    answer: "We build cloud-native, decoupled architectures (often utilizing serverless components) that auto-scale based on computational demand. This ensures your data infrastructure can seamlessly handle petabytes of data without manual provisioning or performance degradation."
  },
  {
    question: "What is the typical timeline for implementing an AI/ML model?",
    answer: "Timelines vary based on data readiness and model complexity. However, a typical engagement involves a 2-4 week discovery and data preparation phase, followed by 6-8 weeks of model training, validation, and deployment. We prioritize agile sprints to deliver early ROI."
  }
];

export default function DataServices({ onOpenEstimator, onNavigateTo }: DataServicesProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="space-y-0 text-zinc-900 bg-white">
      
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[80vh] flex items-center pt-24 pb-32 px-6 overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDftGGDABBe1BgYuHMP2jyucdVsAhvqQEnDrEG_bPv0NdRIUyo6d7Ig6MmVRLu76NcmfSpeoo2ZoNCXxeNdEOrT-0R4shma71gegVTNGOWArBeOAPuA11pZ3Ai0XH9i3prSGyIDu0Z5gNeVbYK__NvitkoU9LqOxm1TnRgqHSLKAJOmMuLWowP1dIaT9Pq-Ri3Q9pIdipaTs41ea0AjgFQYeCkJpI4TffBathps1Spes1deheey9xXHiRWXdrr9A38x6E7ZiS4P9Lc" 
            alt="Data network visualization" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="max-w-4xl space-y-6">
            <span className="font-mono text-[10px] text-red-400 uppercase tracking-widest font-black block">Core Expertise</span>
            
            <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl font-black mb-6 text-white tracking-tight leading-none">
              Unlocking Value from <span className="text-vd-red">Complex Data</span>
            </h1>
            
            <p className="text-zinc-300 text-lg sm:text-xl max-w-2xl leading-relaxed">
              We build robust, scalable data architectures and deploy cutting-edge AI to transform raw information into strategic operational assets.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <button
                onClick={onOpenEstimator}
                className="bg-vd-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded transition-colors inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-red-900/20"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href="#overview"
                className="bg-transparent border border-zinc-700 text-white hover:bg-zinc-800 font-bold text-xs uppercase tracking-widest px-8 py-4 rounded transition-colors cursor-pointer"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICES OVERVIEW */}
      <section id="overview" className="py-24 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-3xl">
            <h2 className="font-headline text-3xl sm:text-4xl font-black text-zinc-950 mb-4 tracking-tight">
              Comprehensive Data Solutions
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed">
              End-to-end data capabilities engineered for performance, security, and actionable intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id} 
                  className={`border border-zinc-200 rounded-lg p-8 flex flex-col justify-between group transition-all duration-300 ${idx === 2 ? 'bg-zinc-950 text-white md:col-span-2 lg:col-span-1 border-zinc-800 hover:border-zinc-700' : 'bg-zinc-50 hover:border-vd-red hover:shadow-lg hover:-translate-y-1'}`}
                >
                  <div>
                    <div className={`w-12 h-12 rounded flex items-center justify-center mb-8 ${idx === 2 ? 'bg-zinc-800 text-white' : 'bg-red-50 text-vd-red'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <h3 className={`font-headline text-2xl font-black mb-4 ${idx === 2 ? 'text-white' : 'text-zinc-950'}`}>
                      {service.title}
                    </h3>
                    
                    <p className={`text-sm leading-relaxed mb-8 ${idx === 2 ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex gap-2 flex-wrap">
                      {service.tags.map(tag => (
                        <span 
                          key={tag} 
                          className={`font-mono text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded ${idx === 2 ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-200/50 text-zinc-600'}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {idx !== 2 && (
                      <button 
                        onClick={() => onNavigateTo(service.link)}
                        className="text-vd-red font-bold text-xs uppercase tracking-widest hover:text-red-700 transition-colors inline-flex items-center gap-1 cursor-pointer"
                      >
                        Learn more <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR APPROACH */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <h2 className="font-headline text-3xl sm:text-4xl font-black text-zinc-950 mb-6 tracking-tight">
                A Data-Driven Methodology
              </h2>
              <div className="w-16 h-1 bg-vd-red mb-6" />
              <p className="text-zinc-600 text-sm leading-relaxed">
                Our proven process ensures rigorous execution from initial audit to final deployment, minimizing risk while accelerating time-to-value.
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-12 border-l border-zinc-200 pl-8 md:pl-16 relative">
              {METHODOLOGY_STEPS.map((step, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[41px] md:-left-[73px] top-0 w-4 h-4 bg-zinc-50 border-2 border-zinc-300 rounded-full group-hover:border-vd-red transition-colors duration-300"></div>
                  
                  <span className="font-mono text-[10px] text-vd-red font-black tracking-widest uppercase mb-2 block">
                    Phase {step.number}
                  </span>
                  
                  <h3 className="font-headline text-2xl font-black text-zinc-950 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-zinc-600 text-sm leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: STRATEGIC ALLIANCES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <h2 className="font-headline text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
            Strategic Data Alliances
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
            {/* Using text representations or placeholders for logos as per standard practice when SVGs aren't provided */}
            <div className="font-headline text-2xl font-black tracking-tighter text-zinc-800">Snowflake</div>
            <div className="font-headline text-2xl font-black tracking-tighter text-zinc-800 flex items-center gap-1">
              <Building2 className="w-6 h-6" /> AWS
            </div>
            <div className="font-headline text-2xl font-black tracking-tighter text-zinc-800">Microsoft Azure</div>
            <div className="font-headline text-2xl font-black tracking-tighter text-zinc-800">Google Cloud</div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TESTIMONIAL */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
          <Quote className="w-12 h-12 text-red-500 mx-auto opacity-50" />
          
          <blockquote className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            "DevCoWise fundamentally transformed how we utilize our data. They didn't just build pipelines; they engineered a scalable foundation that allowed our AI initiatives to finally take flight, resulting in a 40% reduction in operational bottlenecks."
          </blockquote>
          
          <div className="pt-4 space-y-1">
            <div className="font-bold text-white uppercase tracking-wider text-xs font-mono">CTO, Global Logistics Enterprise</div>
            <div className="text-zinc-500 text-[10px] uppercase font-mono tracking-widest">Enterprise Data Transformation</div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          
          <div className="text-center space-y-4">
            <h2 className="font-headline text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-600 text-sm">
              Insights into our engineering standards, scalability, and implementation processes.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className={`bg-white border rounded-lg transition-colors overflow-hidden ${isOpen ? 'border-vd-red shadow-md' : 'border-zinc-200'}`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-zinc-50 transition-colors"
                  >
                    <span className="font-headline font-bold text-zinc-900 pr-8">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-vd-red' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-zinc-600 text-sm leading-relaxed border-t border-zinc-100 mt-2">
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

      {/* SECTION 7: BOTTOM CTA */}
      <section className="py-24 bg-vd-red text-white text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none">
            Start Your Data Journey Today!
          </h2>
          <p className="text-red-100 text-base md:text-lg">
            Partner with DevCoWise to engineer high-performance data architectures and unlock actionable intelligence across your organization.
          </p>
          
          <div className="pt-4">
            <button
              onClick={onOpenEstimator}
              className="inline-block bg-white text-vd-red font-bold text-xs uppercase tracking-widest px-10 py-5 rounded hover:bg-zinc-100 transition-colors cursor-pointer shadow-lg shadow-black/10"
            >
              Start Your Data Journey
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
