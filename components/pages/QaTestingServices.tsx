/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronDown, 
  Zap, 
  Cpu, 
  Eye, 
  ShieldCheck, 
  TrendingUp, 
  Code, 
  Bot, 
  Globe, 
  Smartphone,
  Quote,
  CheckCircle2,
  Lock,
  MessageSquare,
  Sparkles,
  Layers,
  ChevronLeft
} from 'lucide-react';

interface QaTestingServicesProps {
  onOpenEstimator: () => void;
  onNavigateTo: (page: any) => void;
}

const QA_SERVICES = [
  {
    id: 'functional',
    title: 'Functional Testing',
    description: 'Ensure that all application features operate according to requirements, covering everything from unit tests to integration tests.',
    icon: CheckCircle2,
    badge: 'Core Quality',
    details: 'Our functional testing process validates each software function against the corresponding requirement. We cover Unit Testing, Integration Testing, System Testing, and User Acceptance Testing (UAT) to guarantee flawless behavior.'
  },
  {
    id: 'performance',
    title: 'Performance Testing',
    description: 'Identify and resolve performance bottlenecks with our robust testing strategies, ensuring optimal application speed and stability under load.',
    icon: Zap,
    badge: 'Scalability',
    details: 'Using advanced load and stress testing tools like JMeter and Gatling, we simulate thousands of concurrent users. We measure throughput, server resource consumption, and database latency to eliminate bottlenecks before release.'
  },
  {
    id: 'automation',
    title: 'Automation Testing',
    description: 'Improve efficiency and scalability with custom automation frameworks that increase speed and reduce manual effort.',
    icon: Cpu,
    badge: 'High Velocity',
    details: 'We build reusable automation suites with Selenium, Playwright, and Cypress. Our testing suites easily plug into your CI/CD pipeline, reducing regression cycles from days to minutes.'
  },
  {
    id: 'usability',
    title: 'Usability Testing',
    description: 'Enhance the user journey and usability with thorough UX testing, providing valuable insights into user behavior.',
    icon: Eye,
    badge: 'User Experience',
    details: 'Our experts evaluate the accessibility, ease-of-use, and aesthetic flow of your digital assets. We gather empirical feedback on interface friction to guide friction-free navigation and ensure maximum retention.'
  },
  {
    id: 'security',
    title: 'Security Testing',
    description: 'Detect and mitigate vulnerabilities, secure data access, and ensure industry-standard compliance across all user layers.',
    icon: ShieldCheck,
    badge: 'Zero Trust',
    details: 'We run OWASP Top 10 audits, dynamic security analysis (DAST), and configuration audits to ensure your data stays locked down and satisfies SOC2, HIPAA, or GDPR standards.'
  },
  {
    id: 'consulting',
    title: 'QA Consulting',
    description: 'Deploy professional QA architects to evaluate pipelines, outline modern automation frameworks, and upgrade processes.',
    icon: TrendingUp,
    badge: 'Strategic Advisory',
    details: 'Our senior advisors review your legacy testing methodologies, assist in modern tool selection, and establish an optimal, standardized QA workflow that elevates build consistency.'
  },
  {
    id: 'api',
    title: 'API Testing',
    description: 'Verify correctness, payloads, security protocols, and integration logic across all internal and public services.',
    icon: Code,
    badge: 'Interoperability',
    details: 'We comprehensively validate SOAP and REST endpoints for correct state changes, error handling under stress, data sanitization, payload structures, and response speeds.'
  },
  {
    id: 'rpa',
    title: 'RPA (Robotic Process Automation)',
    description: 'Automate complex business operations, repetitive digital routines, and cross-platform legacy pipelines safely.',
    icon: Bot,
    badge: 'Workflow Efficiency',
    details: 'Using secure software robots, we automate time-consuming, rule-based operations and integrate legacy apps without requiring invasive API overhauls.'
  },
  {
    id: 'web',
    title: 'Web Testing',
    description: 'Assure robust visual layout consistency, responsive breakpoints, and cross-browser stability for consumer-facing apps.',
    icon: Globe,
    badge: 'Multi-Browser',
    details: 'We conduct strict visual testing across major browser engines (Chromium, WebKit, Gecko) to guarantee responsive rendering and script compatibility on all screen sizes.'
  },
  {
    id: 'mobile',
    title: 'Mobile Testing',
    description: 'Run native-speed test matrices across Android and iOS, checking hardware integrations, offline synchronization, and push messaging.',
    icon: Smartphone,
    badge: 'Native Auditing',
    details: 'We run manual and automated tests on actual devices and virtual simulators to verify native interactions, battery drainage, offline cache persistence, and notification states.'
  }
];

const CASE_STUDIES = [
  {
    id: 'dnow',
    num: '01',
    company: 'DNOW',
    tag: 'Industrial Supplies',
    title: "Streamlined DNOW's Data Collection Processes",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxGRpvtxhOYjq4mQfXvTnzpChKOvOJOa3GriJDceJTx1iT_UIKxqFLLfdHKQUOfdu5rDihYTROza7FNJUZuyG37Uv0qLMcf8RRCyJutFdBlUM0DW62xcIydIcUnSALvCrFejEUW_MzqnK4qtrJHAxUgc5jGKJ-0PZ0lk_VtmPj9VCO7Y3rIBK0bDxdd1e9rKj2CDrkc5RC6EwODRfhqPKiaAwl_98z5jnk25kOaDkS5rqbbBcwW-db54JRJPkErJ6NE9w8q-cvWIY',
    desc: 'Engineered a highly resilient automated data synchronization architecture to aggregate distributed logistics registries, slashing synchronization errors by 98% and accelerating operational audits.'
  },
  {
    id: 'careem',
    num: '02',
    company: 'Careem',
    tag: 'Ride-Hailing',
    title: 'Automated Real-Time Dispatch Verification',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlJSAwsPInKzBw2KhZRWboTLlPKxrVyeHPWHDv35ahIZAoNPLaWSRb5AuXZd2g6hMSqIgxzDvfR7_IG5chEV8mNIN6YHDdZufLfgxBFJD4ZshlcRZ-i1LHeH6ffT8rvTciyZa70jo7fmE4cUsS0aERPkWDxCbQvVyj9x2911AdJdO7fowRmfCQoCg53Dwqp1Qi06UFMAg-iYtcARdX7rsfwd2rI1-u77aUVvqUrTlCwXa6AerwM7HkJREAGE5_shSPgjmMd_8r9xQ',
    desc: 'Built custom end-to-end regression pipelines to test geolocation routing, dynamic ride-matching, and multi-currency billing engines under simulated extreme regional traffic peaks.'
  },
  {
    id: 'onn',
    num: '03',
    company: 'ONN',
    tag: 'FinTech Ledger',
    title: 'High-Frequency Payment Gateway Testing Suite',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVf5tgUUk3K04JiXOyODWNsp_1Ey3nz80eftZeg5YG_V4guHjDGf4uSrHEqInLTrl31q_POWJrRNb3Fxjgc3VyB5ogdPM5Nr-gmorlSwyH7v_J4-daao20ouv8myOuZC-9JFkAUGrptEhYJWOZxuyRcJQe72k9jcEDXY8OT4UYiBneOlxqG-FzPaLByZUbfO8SItO-fML4-WY5gjr82dia3rDEhXi1FYh8ltUJh1k4xwc3vYAV_C1HXWHtHOaARbyRZdwjRwj9VSw',
    desc: 'Designed a reliable security and load testing environment replicating strict PCI-DSS specifications, securing transaction speeds under a 300% load spike with zero leak.'
  }
];

const FAQS = [
  {
    id: 'integration',
    question: 'How do you integrate automation into existing CI/CD pipelines?',
    answer: 'We seamlessly inject regression test suites directly into your Jenkins, GitHub Actions, GitLab CI, or CircleCI infrastructure. Tests are automatically triggered upon pull requests, providing developers with failure reports and stack traces within minutes, ensuring bad builds never hit production.'
  },
  {
    id: 'frameworks',
    question: 'Which automated testing frameworks do you specialize in?',
    answer: 'We align our tool selection with your technical stack. For web applications, we specialize in Playwright, Cypress, and Selenium with TypeScript/Java. For mobile, we leverage Appium and native testing libraries (Espresso and XCTest). For APIs, we build powerful Postman or custom axios/PyTest systems.'
  },
  {
    id: 'security-testing',
    question: 'How do you handle testing for secure, highly regulated applications?',
    answer: 'We follow strict Zero-Trust and OWASP security guidelines. Our engineers hold industry certifications and conduct deep vulnerability scans, static code analyses, role privilege escalation testing, and regulatory compliance validation (HIPAA, SOC2, PCI-DSS) using isolated sandboxes.'
  },
  {
    id: 'timeline',
    question: 'What is the typical timeline to set up an automated testing suite?',
    answer: 'We prioritize quick wins. Within the first 2 weeks, we configure the base automation framework, write the initial high-value sanity tests, and wire them to your CI/CD. From there, we incrementally scale coverage to cover full regression boundaries over subsequent 2-week sprints.'
  }
];

export default function QaTestingServices({ onOpenEstimator, onNavigateTo }: QaTestingServicesProps) {
  const [activeFaq, setActiveFaq] = useState<string | null>('integration');
  const [activeCaseStudyIndex, setActiveCaseStudyIndex] = useState(0);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleNextCaseStudy = () => {
    setActiveCaseStudyIndex((prev) => (prev + 1) % CASE_STUDIES.length);
  };

  const handlePrevCaseStudy = () => {
    setActiveCaseStudyIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
  };

  return (
    <div className="space-y-0 text-zinc-900 bg-white" id="qa-testing-services-page">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative bg-zinc-950 text-white py-28 sm:py-36 px-6 sm:px-12 overflow-hidden border-b border-zinc-900"
        id="qa-hero"
      >
        {/* Subtle grid accent background */}
        <div className="absolute inset-0 z-0 opacity-10" style={{
          backgroundImage: `linear-gradient(to right, rgba(238, 39, 55, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(238, 39, 55, 0.15) 1px, transparent 1px)`,
          backgroundSize: '45px 45px'
        }} />

        {/* Ambient colored glowing highlights */}
        <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-vd-red/10 blur-[130px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-10 left-1/4 w-[350px] h-[350px] bg-zinc-800/30 blur-[100px] rounded-full pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10 space-y-8">
          
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-white/5 rounded-full border border-white/10 text-xxs font-black tracking-widest text-vd-red uppercase font-mono">
            <span className="w-2 h-2 rounded-full bg-vd-red animate-pulse" />
            Services / Solutions Engineering / QA Automation & Testing
          </div>

          <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter leading-none max-w-4xl">
            QA Automation & Testing Services
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-sans font-light text-balance">
            Reliable, scalable, quality assurance (QA) & testing services designed to support your business at every stage of development.
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

      {/* 2. ELEVATE QUALITY SECTION */}
      <section 
        className="py-24 px-6 sm:px-12 bg-white border-b border-zinc-100"
        id="qa-elevate-quality"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left side: Heading */}
            <div className="lg:col-span-5 space-y-6">
              <div className="w-12 h-1 bg-vd-red" />
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 leading-tight">
                Elevate Quality with Expert QA Automation & Testing
              </h2>
            </div>

            {/* Right side: Detailed explanation */}
            <div className="lg:col-span-7">
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-sans font-light">
                With our comprehensive QA automation services, you can ensure your software performs flawlessly, delivering a seamless user experience. By automating quality assurance, we help identify and resolve issues faster, reducing time-to-market and operational costs. Our QA team leverages the latest tools, frameworks, and methodologies, adhering to industry best practices and rigorous quality standards to ensure your software exceeds expectations. From functional testing to performance optimization, we enable you to launch with confidence and maintain product excellence.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. COMPREHENSIVE QA SERVICES SECTION */}
      <section 
        className="py-24 px-6 sm:px-12 bg-zinc-50 border-b border-zinc-100"
        id="qa-services-grid"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xxs uppercase tracking-[0.2em] text-vd-red font-black font-mono block">
              Core Expertise
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950">
              Comprehensive Quality Assurance Services
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base">
              Explore our multi-layered validation matrices designed to secure your product lifecycle and elevate performance metrics.
            </p>
          </div>

          {/* Elegant Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {QA_SERVICES.map((service) => {
              const IconComp = service.icon;
              const isSelected = selectedService === service.id;
              
              return (
                <div 
                  key={service.id}
                  className={`bg-white border rounded-xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6 cursor-pointer group ${
                    isSelected ? 'border-vd-red ring-1 ring-vd-red bg-zinc-50/10' : 'border-zinc-200/60'
                  }`}
                  onClick={() => setSelectedService(isSelected ? null : service.id)}
                >
                  <div className="space-y-5">
                    
                    {/* Upper Line: Badge and Icon */}
                    <div className="flex justify-between items-center">
                      <span className="text-xxs uppercase tracking-widest bg-zinc-100 text-zinc-600 px-2.5 py-1 rounded font-mono font-bold">
                        {service.badge}
                      </span>
                      <div className="w-10 h-10 rounded-lg bg-red-50 text-vd-red flex items-center justify-center transition-transform group-hover:scale-110">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-headline text-lg font-bold text-zinc-950 group-hover:text-vd-red transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Accordion expansion for more high-fidelity detail */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden pt-4 border-t border-zinc-100 text-xs text-zinc-600 leading-relaxed"
                      >
                        {service.details}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="pt-2 flex justify-between items-center">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 group-hover:text-vd-red transition-colors inline-flex items-center gap-1.5">
                      {isSelected ? 'Collapse Details' : 'Learn more'}
                      <ArrowRight className={`w-3 h-3 transform transition-transform ${isSelected ? 'rotate-90 text-vd-red' : 'group-hover:translate-x-1'}`} />
                    </span>
                    <span className="text-xxs font-mono text-zinc-300">
                      QA-SEC // {service.id.toUpperCase()}
                    </span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. SUCCESS STORY SECTION */}
      <section 
        className="py-24 px-6 sm:px-12 bg-white border-b border-zinc-100"
        id="qa-success-stories"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2.5">
                <span className="w-8 h-0.5 bg-vd-red block" />
                <span className="text-xxs uppercase tracking-[0.25em] text-vd-red font-black font-mono">
                  Success Realized
                </span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight">
                Learn Why the World's Leading Organizations Trust Us
              </h2>
            </div>

            <button
              onClick={() => onNavigateTo('portfolio')}
              className="text-xs uppercase font-bold tracking-widest text-zinc-800 border border-zinc-200 hover:border-zinc-500 hover:bg-zinc-50 px-6 py-3.5 rounded transition-all flex items-center gap-2 cursor-pointer w-fit"
            >
              Read More Success Stories
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Case Study Slider Block */}
          <div className="relative bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-900 shadow-2xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[500px]">
              
              {/* Image Column */}
              <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent z-10 pointer-events-none" />
                
                <motion.img 
                  key={CASE_STUDIES[activeCaseStudyIndex].id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 0.75, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={CASE_STUDIES[activeCaseStudyIndex].image} 
                  alt={CASE_STUDIES[activeCaseStudyIndex].title} 
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Index / Company Marker Overlay */}
                <div className="absolute top-8 left-8 z-20">
                  <span className="text-5xl font-mono font-black text-white/20 block leading-none">
                    {CASE_STUDIES[activeCaseStudyIndex].num}
                  </span>
                </div>
              </div>

              {/* Data / Metadata Column */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between text-white space-y-10 relative z-20 bg-zinc-950">
                <div className="space-y-6">
                  
                  <div className="space-y-2">
                    <span className="text-xxs font-mono font-bold text-vd-red uppercase tracking-widest block">
                      {CASE_STUDIES[activeCaseStudyIndex].tag}
                    </span>
                    <h4 className="font-headline text-2xl font-bold tracking-tight text-zinc-400">
                      {CASE_STUDIES[activeCaseStudyIndex].company}
                    </h4>
                  </div>

                  <h3 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                    {CASE_STUDIES[activeCaseStudyIndex].title}
                  </h3>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans font-light">
                    {CASE_STUDIES[activeCaseStudyIndex].desc}
                  </p>
                </div>

                {/* Slider controls & actions */}
                <div className="flex items-center justify-between pt-6 border-t border-zinc-800">
                  <button
                    onClick={() => onNavigateTo('portfolio')}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-vd-red hover:underline cursor-pointer"
                  >
                    View Full Case Study
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex gap-2">
                    <button 
                      onClick={handlePrevCaseStudy}
                      className="w-10 h-10 rounded border border-zinc-800 hover:border-zinc-600 bg-zinc-900/50 flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4 text-zinc-400" />
                    </button>
                    <button 
                      onClick={handleNextCaseStudy}
                      className="w-10 h-10 rounded border border-zinc-800 hover:border-zinc-600 bg-zinc-900/50 flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4 text-zinc-400" />
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. WHAT'S DIFFERENT ABOUT VENTUREDIVE SECTION */}
      <section 
        className="py-24 px-6 sm:px-12 bg-zinc-50 border-b border-zinc-100"
        id="qa-differentiators"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xxs uppercase tracking-[0.2em] text-vd-red font-black font-mono block">
              The DevCoWise Edge
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-zinc-950">
              What's Different About DevCoWise?
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm">
              We approach testing not as an afterthought, but as an active velocity engine that accelerates deployment pipelines with zero compromise on safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: '01',
                title: 'AI-Powered Automation',
                description: 'We utilize state-of-the-art AI agents to dynamically heal test cases and inspect complex element paths, lowering maintenance costs by 60%.'
              },
              {
                num: '02',
                title: 'Fast Feedback Loops',
                description: 'Our testing framework integrates natively with development cycles. Pull requests trigger instant API validation and reports, boosting code velocity.'
              },
              {
                num: '03',
                title: 'Certified Domain Experts',
                description: 'Every test engineer holds globally recognized ISTQB or cloud security certifications, bringing rigorous analytical methodologies to every sprint.'
              },
              {
                num: '04',
                title: 'Scalable Frameworks',
                description: 'We build testing suites using customizable, open-source architectures. No proprietary tooling, protecting you from vendor lock-in.'
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-white border border-zinc-200/60 rounded-xl p-8 hover:border-vd-red/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div className="space-y-4">
                  <span className="font-mono text-3xl font-black text-vd-red/25 block">
                    {item.num}
                  </span>
                  <div className="space-y-2">
                    <h4 className="font-headline text-xs sm:text-sm font-black uppercase tracking-wider text-zinc-950">
                      {item.title}
                    </h4>
                    <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section 
        className="py-24 px-6 sm:px-12 bg-white border-b border-zinc-100"
        id="qa-testimonials"
      >
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          <div className="space-y-3">
            <span className="text-xxs uppercase tracking-[0.2em] text-vd-red font-black font-mono block">
              What Our Customers Say
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-black text-zinc-950">
              Validated by Tech Leaders Globally
            </h2>
          </div>

          <div className="relative pt-6">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 text-zinc-100 pointer-events-none select-none">
              <Quote className="w-16 h-16 opacity-40 text-zinc-200" />
            </span>

            <blockquote className="font-headline text-xl sm:text-2xl md:text-3xl font-medium text-zinc-800 leading-relaxed relative z-10 max-w-3xl mx-auto">
              "DevCoWise's automated testing suites transformed our release predictability. We went from manual weekly releases plagued with user friction to continuous, multiple deployments per day with complete functional peace of mind."
            </blockquote>
          </div>

          <div className="flex flex-col items-center justify-center space-y-3 pt-4">
            <div className="w-16 h-16 rounded-full border border-zinc-200 bg-zinc-50 overflow-hidden shadow-sm p-1">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDio2WK_U_6phc6OfWvVnYDljwFxkI-3Q-NJlhqc_niNPt6Hfp3H2Q2RAULvI-keOWFP0OjrJrHo0beT2gIxRKbRs7PIkWpnY5NynAtSAWJkoiUWsSxSuRN_KPGYZ7EtPHdnPJgQghdt-AqBWgn7D8AQJChw9Dpzw0SJl2k6qlNY51oZgdWlys5RfnksLXopPdVVSqw6vdCm8SHPx4XKJlsDgZzlLsoqTwKp2po6_Ougr96K-NlejnlNQqDSm9xnSLAIoUwwYbJ7UY" 
                alt="VP of Technology" 
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="text-center">
              <h4 className="font-headline text-xs uppercase tracking-widest font-black text-zinc-950">
                MICHAEL LIN
              </h4>
              <p className="text-zinc-500 text-xxs font-mono uppercase tracking-wider">
                Head of Software Quality, DNOW Logistics
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. FAQ ACCORDION SECTION */}
      <section 
        className="py-24 px-6 sm:px-12 bg-zinc-50 border-b border-zinc-100"
        id="qa-faq"
      >
        <div className="max-w-3xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xxs uppercase tracking-[0.2em] text-vd-red font-black font-mono block">
              Got Questions?
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

      {/* 8. BOTTOM CTA SECTION */}
      <section 
        className="py-28 bg-zinc-950 text-center relative overflow-hidden"
        id="qa-cta"
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
            Accelerate Your Development Cycle
          </h2>
          
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-sans font-light">
            Empower your engineering teams with rock-solid, fully automated test coverage. Partner with DevCoWise to deploy with absolute certainty.
          </p>
          
          <div className="pt-2">
            <button
              onClick={onOpenEstimator}
              className="bg-vd-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-8 py-4.5 rounded transition-all active:scale-[0.98] inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-red-950/20"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
