/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronDown, 
  Layers, 
  Globe, 
  Cpu, 
  Palette, 
  CheckCircle2, 
  Cloud, 
  Database,
  Smartphone,
  Quote,
  Check,
  Zap,
  Shield,
  Clock,
  Award,
  ChevronLeft,
  Terminal,
  ChevronRight
} from 'lucide-react';

interface CustomAppsServicesProps {
  onOpenEstimator: () => void;
  onNavigateTo: (page: any) => void;
}

const SERVICES = [
  {
    id: 'mobile',
    title: 'Mobile App Development',
    description: 'Engaging, custom mobile apps for iOS, Android, and cross-platform, tailored to your business goals.',
    icon: Smartphone,
    badge: 'Mobile First',
    details: 'We build high-performance native (iOS/Swift, Android/Kotlin) and hybrid (React Native, Flutter) applications designed to optimize retention and run lightning-fast on actual devices.'
  },
  {
    id: 'web',
    title: 'Web Development',
    description: 'Responsive, high-performance web solutions designed to elevate your digital presence.',
    icon: Globe,
    badge: 'Web Excellence',
    details: 'Using modern technologies like React, Next.js, and Vue, we craft fully responsive, load-optimized, and SEO-friendly applications that provide desktop-grade interactions.'
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Scalable, secure backend systems and APIs to power seamless user experiences.',
    icon: Cpu,
    badge: 'Core Engine',
    details: 'Our backends are designed for durability and high throughput. We specialize in Node.js, Python, Go, and Java, providing robust REST/GraphQL APIs and modular microservices.'
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure Modernization',
    description: 'Upgrade legacy systems to enhance performance and scalability.',
    icon: Layers,
    badge: 'Legacy to Cloud',
    details: 'We refactor monolithic applications into containerized microservices (Docker/Kubernetes), optimizing workflows, accelerating boot times, and eliminating technical debt.'
  },
  {
    id: 'design',
    title: 'Product Design',
    description: 'User-centered design that combines aesthetics with functionality for exceptional user experiences.',
    icon: Palette,
    badge: 'UX/UI Engineering',
    details: 'Our designers conduct strict usability mapping, wireframing, and interactive prototyping in Figma to engineer visual pathways that reduce churn and spark joy.'
  },
  {
    id: 'qa',
    title: 'QA Automation & Testing',
    description: 'Ensure reliability & performance with robust quality assurance and automated testing frameworks.',
    icon: CheckCircle2,
    badge: 'Zero Defects',
    details: 'We implement advanced CI/CD automated regression suites with Playwright, Selenium, and Jest, covering full functional endpoints, integration gates, and stress tests.'
  },
  {
    id: 'cloud',
    title: 'Cloud-Native Applications',
    description: 'Build highly scalable and efficient software applications optimized for diverse cloud environments.',
    icon: Cloud,
    badge: 'Cloud First',
    details: 'We deploy fault-tolerant serverless architectures and distributed systems across AWS, GCP, and Azure to optimize hosting costs and handle millions of concurrent hits.'
  },
  {
    id: 'data',
    title: 'Enterprise Data Solutions',
    description: 'Leverage advanced data analytics and insights to make smarter business decisions.',
    icon: Database,
    badge: 'Data Intelligence',
    details: 'We build robust real-time data pipelines (Kafka/Spark), construct modern data warehouses, and implement business intelligence dashboards to turn databases into strategic assets.'
  }
];

const APPROACH_STEPS = [
  {
    num: '01',
    title: 'Product Discovery Workshop',
    desc: 'Collaborate to uncover your business challenges, goals, and unique needs.'
  },
  {
    num: '02',
    title: 'Strategy & Roadmap Creation',
    desc: 'Define a clear path with strategic planning and detailed execution plans.'
  },
  {
    num: '03',
    title: 'Agile Development & Testing',
    desc: 'Build solutions incrementally with ongoing testing for quality assurance.'
  },
  {
    num: '04',
    title: 'Implementation & Deployment',
    desc: 'Seamlessly integrate, deploy, and launch solutions for maximum business impact.'
  },
  {
    num: '05',
    title: 'Ongoing Support & Maintenance',
    desc: 'Ensure your software stays optimized and evolves with your business.'
  }
];

const CASE_STUDIES = [
  {
    id: 'retail-giant',
    company: 'Logix Retail',
    tag: 'E-Commerce Scaling',
    title: 'Re-engineering High-Load Checkout Pipelines',
    metric: '99.99% Uptime under 4x Spike',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    desc: 'Successfully rebuilt a major retailer checkout core into a cloud-native serverless architecture, scaling performance to sustain massive holiday promotional sales and dropping checkout latencies from 4.2s to under 350ms.'
  },
  {
    id: 'health-core',
    company: 'Aura Health',
    tag: 'Medical HIPAA Compliant App',
    title: 'Designing and Launching Remote Diagnostics Core',
    metric: '1.2M+ Active Patient Logs',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    desc: 'Architected an end-to-end medical mobile and web application featuring strict database column-level encryption, multi-role access layers, and dynamic peer-to-peer webRTC video consulting integrations.'
  },
  {
    id: 'fin-ledger',
    company: 'Apex Ledger',
    tag: 'FinTech Multi-Asset Wallet',
    title: 'Enterprise Real-Time Transaction Engine',
    metric: '$400M+ Annual Volume Audited',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    desc: 'Engineered high-frequency payment reconciliation software, utilizing distributed event logs to prevent ledger discrepancies and ensuring real-time webhook propagation under severe networks.'
  }
];

const VALUE_PROPS = [
  {
    title: 'Agile Delivery Engine',
    description: 'Two-week sprint cycles with transparent dashboard updates, allowing you to trace feature burn-down charts live.',
    icon: Zap
  },
  {
    title: 'Enterprise Security Architecture',
    description: 'We bake in OWASP Top-10 compliance, data isolation, and robust end-to-end encryption into every application layer.',
    icon: Shield
  },
  {
    title: 'Rapid Deployment Strategy',
    description: 'Native CI/CD tooling reduces deployment cycles, enabling stable feature updates multiple times a day.',
    icon: Clock
  },
  {
    title: 'Certified Talent Pool',
    description: 'Our software engineering staff are globally certified on modern cloud infrastructure and software architecture standards.',
    icon: Award
  }
];

const FAQS = [
  {
    id: 'tech-stack',
    question: 'What tech stack do you recommend for custom applications?',
    answer: 'We tailor the stack to your business constraints and scalability objectives. For rapid MVP launches, we often leverage a React/Next.js frontend paired with Node.js/PostgreSQL. For enterprise workloads requiring strict multithreading, we build backend microservices with Go or Java Spring Boot.'
  },
  {
    id: 'ip-ownership',
    question: 'Who owns the intellectual property (IP) of the developed application?',
    answer: 'You do. Upon release and project sign-off, 100% of the proprietary source code, software architecture designs, intellectual property, and hosting credentials are legally transferred to your organization with complete transparency.'
  },
  {
    id: 'dev-methodology',
    question: 'How do you ensure transparency during the development phases?',
    answer: 'We run on strict Agile Scrum frameworks. You get a dedicated Jira dashboard, invites to bi-weekly live sprint demo sessions, and direct access to Slack channels containing your project manager, engineering leads, and QA specialists.'
  },
  {
    id: 'post-launch-support',
    question: 'What happens after the software application is launched?',
    answer: 'We provide comprehensive post-launch support SLA plans ranging from simple on-call maintenance to active continuous development teams. We monitor application health, server workloads, error trackers, and supply immediate security hotfixes.'
  }
];

export default function CustomAppsServices({ onOpenEstimator, onNavigateTo }: CustomAppsServicesProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  const [activeFaq, setActiveFaq] = useState<string | null>('tech-stack');

  const nextCase = () => setActiveCaseStudy((prev) => (prev + 1) % CASE_STUDIES.length);
  const prevCase = () => setActiveCaseStudy((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);

  return (
    <div className="bg-white text-zinc-900" id="custom-apps-services-page">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative bg-zinc-950 text-white py-28 sm:py-36 px-6 sm:px-12 overflow-hidden border-b border-zinc-900"
        id="custom-apps-hero"
      >
        {/* Blurred backdrop image to mimic the high-fidelity screenshot with overlaid code */}
        <div className="absolute inset-0 z-0 opacity-15 mix-blend-luminosity select-none pointer-events-none">
          <img 
            alt="Source code logic background" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjKfCcJmYeFMvUUU0t16rEJ677QUzz_k7DKjftbg4R1C0w39Dm8qs6C1PseBC6CH-XLzKYmid2TJG2oqlLpk7uXTsttand9DnGnUKtnhCjnfbXnc5e1mbncjPJNg34NNIptQOWVdU0LKsME3UWAJAfXJGuA7_A8OqBxYngsZhuKD542i-lBe0PvIxVWIH9AZFdGnxqGfgG7ivBfW5E2LrJrbSHTns3Jv33JM9ltYugRYeU-0X08SQd9zkQbF-JiPIkjoEGa3fUNmA"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Ambient colored glowing highlights matching our tech-forward system */}
        <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-vd-red/10 blur-[130px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-10 left-1/4 w-[350px] h-[350px] bg-zinc-800/30 blur-[100px] rounded-full pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10 space-y-8">
          
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-white/5 rounded-full border border-white/10 text-xxs font-black tracking-widest text-vd-red uppercase font-mono">
            <span className="w-2 h-2 rounded-full bg-vd-red animate-pulse" />
            Solution Engineering / Custom Application Development
          </div>

          <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter leading-none max-w-4xl text-balance">
            Custom Application<br />Development Services
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-sans font-light text-balance">
            Tailored application development services that deliver immediate and sustainable business impact.
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
      </section>

      {/* 2. REVOLUTIONIZING DIGITAL EXPERIENCES INTRO */}
      <section 
        className="py-24 px-6 sm:px-12 bg-white border-b border-zinc-100"
        id="custom-apps-intro"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Bold Display Heading */}
            <div className="lg:col-span-6 space-y-6">
              <div className="w-12 h-1 bg-vd-red" />
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 leading-tight tracking-tight">
                Revolutionizing Digital Experiences, One Solution at a Time
              </h2>
            </div>

            {/* Right Column: Detailed Context Text */}
            <div className="lg:col-span-6">
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-sans font-light">
                Empower your business with robust, scalable, and cutting-edge custom software. From idea to execution, we partner with you to design, build, and deliver software that transforms your challenges into opportunities and ensures long-term success. Our deep domain experts design clean application schemas, robust endpoints, and user interfaces engineered to convert.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. KEY CUSTOM SOFTWARE DEVELOPMENT SERVICES */}
      <section 
        className="py-24 px-6 sm:px-12 bg-zinc-50 border-b border-zinc-100"
        id="custom-apps-services-grid"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xxs uppercase tracking-[0.2em] text-vd-red font-black font-mono block">
              Capabilities Suite
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
              Key Custom Software Application Development Services
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base">
              A comprehensive offering tailored to accelerate product roadmaps and maximize platform performance.
            </p>
          </div>

          {/* High Fidelity Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => {
              const IconComp = service.icon;
              const isSelected = selectedService === service.id;
              
              return (
                <div 
                  key={service.id}
                  onClick={() => setSelectedService(isSelected ? null : service.id)}
                  className={`bg-white border rounded-lg p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer group relative overflow-hidden ${
                    isSelected ? 'border-vd-red ring-1 ring-vd-red bg-zinc-50/10' : 'border-zinc-200/60'
                  }`}
                >
                  <div className="space-y-4 flex-grow">
                    
                    {/* Upper Header info & beautiful decorative icon */}
                    <div className="flex justify-between items-start">
                      <span className="text-[9px] uppercase tracking-widest bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded font-mono font-bold">
                        {service.badge}
                      </span>
                      <div className="text-zinc-300 group-hover:text-vd-red/80 transition-colors">
                        <IconComp className="w-8 h-8 stroke-[1.2]" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-headline text-base sm:text-lg font-bold text-zinc-950 group-hover:text-vd-red transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Expandable Accordion with detailed tech-forward description */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden pt-3 mt-3 border-t border-zinc-100 text-xs text-zinc-600 leading-relaxed"
                        >
                          {service.details}
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>

                  {/* Footer link trigger visual indicator */}
                  <div className="pt-6 border-t border-zinc-100/40 mt-6 flex justify-between items-center">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-800 group-hover:text-vd-red transition-colors inline-flex items-center gap-1">
                      {isSelected ? 'Collapse' : 'Learn more'}
                      <ArrowRight className={`w-3 h-3 transform transition-transform ${isSelected ? 'rotate-90 text-vd-red' : 'group-hover:translate-x-1'}`} />
                    </span>
                    <span className="text-[9px] font-mono text-zinc-300">
                      SYS-{service.id.toUpperCase()}
                    </span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. OUR APPROACH MULTI-STEP PROCESS */}
      <section 
        className="py-24 px-6 sm:px-12 bg-zinc-950 text-white border-b border-zinc-900"
        id="custom-apps-approach"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-0.5 bg-vd-red block" />
              <span className="text-xxs uppercase tracking-[0.25em] text-vd-red font-black font-mono">
                Methodology
              </span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-none">
              Our Approach to Custom Software Development Services
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-3xl font-sans font-light">
              From deep discovery to rapid development and seamless delivery, we combine agile methodologies and technical excellence to build software solutions that truly work for you.
            </p>
          </div>

          {/* Timeline Process Block */}
          <div className="relative pt-8">
            
            {/* Connecting Timeline Line (Hidden on mobile grid) */}
            <div className="hidden lg:block absolute top-[52px] left-4 right-4 h-0.5 bg-zinc-800 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
              {APPROACH_STEPS.map((step, idx) => (
                <div key={idx} className="space-y-6 group">
                  
                  {/* Step bubble and line indicator */}
                  <div className="flex items-center lg:block">
                    <div className="w-8 h-8 rounded-full bg-vd-red border-4 border-zinc-950 ring-2 ring-vd-red/20 text-white flex items-center justify-center font-mono text-[10px] font-bold shadow-md relative z-10 group-hover:scale-110 transition-transform">
                      {step.num}
                    </div>
                    {/* Mobile helper line */}
                    <div className="lg:hidden flex-grow h-0.5 bg-zinc-800 ml-4" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-headline text-sm sm:text-base font-bold text-white group-hover:text-vd-red transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans font-light">
                      {step.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 5. REAL-WORLD RESULTS CASE STUDY SECTION */}
      <section 
        className="py-24 px-6 sm:px-12 bg-white border-b border-zinc-100"
        id="custom-apps-results"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-4">
              <span className="text-xxs uppercase tracking-[0.2em] text-vd-red font-black font-mono block">
                Proven Track Record
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight">
                Real-World Results
              </h2>
              <p className="text-zinc-500 text-sm sm:text-base max-w-xl">
                See how we help fast-growing enterprise scale-ups modernize systems and release with absolute trust.
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

          {/* Interactive Case Study Slider */}
          <div className="bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-900 shadow-2xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[460px]">
              
              {/* Cover Image Column */}
              <div className="lg:col-span-6 relative min-h-[250px] lg:min-h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-zinc-950 via-zinc-950/30 to-transparent z-10 pointer-events-none" />
                
                <motion.img 
                  key={CASE_STUDIES[activeCaseStudy].id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 0.8, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  src={CASE_STUDIES[activeCaseStudy].image} 
                  alt={CASE_STUDIES[activeCaseStudy].title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* KPI metrics marker overlay */}
                <div className="absolute bottom-6 left-6 z-20 bg-vd-red text-white text-xxs font-mono font-bold tracking-wider px-3 py-1.5 rounded uppercase">
                  {CASE_STUDIES[activeCaseStudy].metric}
                </div>
              </div>

              {/* Success metrics explanation columns */}
              <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between text-white space-y-8 relative z-20 bg-zinc-950">
                
                <div className="space-y-6">
                  
                  <div className="space-y-2">
                    <span className="text-xxs font-mono font-bold text-vd-red uppercase tracking-widest block">
                      {CASE_STUDIES[activeCaseStudy].tag}
                    </span>
                    <h4 className="font-headline text-lg font-bold text-zinc-400">
                      {CASE_STUDIES[activeCaseStudy].company}
                    </h4>
                  </div>

                  <h3 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                    {CASE_STUDIES[activeCaseStudy].title}
                  </h3>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans font-light text-balance">
                    {CASE_STUDIES[activeCaseStudy].desc}
                  </p>
                </div>

                {/* Navigator buttons */}
                <div className="flex items-center justify-between pt-6 border-t border-zinc-800">
                  <span className="text-[10px] font-mono text-zinc-500">
                    CASE {activeCaseStudy + 1} OF {CASE_STUDIES.length}
                  </span>

                  <div className="flex gap-2">
                    <button 
                      onClick={prevCase}
                      className="w-10 h-10 rounded border border-zinc-800 hover:border-zinc-600 bg-zinc-900/50 flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4 text-zinc-400" />
                    </button>
                    <button 
                      onClick={nextCase}
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

      {/* 6. WHY CHOOSE VENTUREDIVE VALUE PROPS */}
      <section 
        className="py-24 px-6 sm:px-12 bg-zinc-50 border-b border-zinc-100"
        id="custom-apps-why-choose"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xxs uppercase tracking-[0.2em] text-vd-red font-black font-mono block">
              Why Us
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-zinc-950">
              Why Choose DevCoWise
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm">
              We focus on building resilient software architectures paired with user journeys built purely to perform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUE_PROPS.map((prop, idx) => {
              const IconComp = prop.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-zinc-200/60 rounded-xl p-8 hover:border-vd-red/30 hover:shadow-lg transition-all duration-300 flex flex-col space-y-5"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-vd-red flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-headline text-xs sm:text-sm font-black uppercase tracking-wider text-zinc-950">
                      {prop.title}
                    </h4>
                    <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. WHAT OUR CUSTOMERS SAY TESTIMONIAL */}
      <section 
        className="py-24 px-6 sm:px-12 bg-white border-b border-zinc-100"
        id="custom-apps-testimonial"
      >
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          <div className="space-y-3">
            <span className="text-xxs uppercase tracking-[0.2em] text-vd-red font-black font-mono block">
              Testimonials
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-black text-zinc-950">
              What Our Customers Say
            </h2>
          </div>

          <div className="relative pt-6">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 text-zinc-100 pointer-events-none select-none">
              <Quote className="w-16 h-16 opacity-30 text-zinc-200" />
            </span>

            <blockquote className="font-headline text-xl sm:text-2xl md:text-3xl font-medium text-zinc-800 leading-relaxed relative z-10 max-w-3xl mx-auto">
              "Partnering with DevCoWise to design our cloud-native transaction platform was the best engineering decision we made. Their team is exceptionally responsive, highly skilled, and delivered a production-ready application that handled our growth peaks without a single hitch."
            </blockquote>
          </div>

          <div className="flex flex-col items-center justify-center space-y-3 pt-4">
            <div className="w-14 h-14 rounded-full border border-zinc-200 bg-zinc-50 overflow-hidden shadow-sm p-1">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" 
                alt="VP of Technology" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            <div className="text-center">
              <h4 className="font-headline text-xs uppercase tracking-widest font-black text-zinc-950">
                SARAH JENSEN
              </h4>
              <p className="text-zinc-500 text-xxs font-mono uppercase tracking-wider">
                VP of Platform Engineering, Logix Retail
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section 
        className="py-24 px-6 sm:px-12 bg-zinc-50 border-b border-zinc-100"
        id="custom-apps-faq"
      >
        <div className="max-w-3xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xxs uppercase tracking-[0.2em] text-vd-red font-black font-mono block">
              Inquiries
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-zinc-950">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="border border-zinc-200 rounded-xl bg-white overflow-hidden transition-all duration-200"
                >
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
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

      {/* 9. BOTTOM CTA */}
      <section 
        className="py-28 bg-zinc-950 text-center relative overflow-hidden"
        id="custom-apps-cta"
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
            Ready to Build Your Custom Software Application?
          </h2>
          
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-sans font-light">
            Bring your most complex product visions to life. Partner with DevCoWise's specialized engineering squads to ship high-fidelity software with speed and certainty.
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
