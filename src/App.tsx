/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Menu,
  X,
  Cpu,
  GitMerge,
  Code,
  RefreshCw,
  Lightbulb,
  Rocket,
  Search,
  BookOpen,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Layers,
  Award,
  Users,
  CheckCircle2,
  TrendingUp,
  FileText
} from 'lucide-react';
import ProjectEstimatorModal from './components/ProjectEstimatorModal';
import CaseStudiesGrid from './components/CaseStudiesGrid';
import FutureReadySection from './components/FutureReadySection';
import DigitalAssessment from './components/DigitalAssessment';
import TechConsultServices from './components/TechConsultServices';
import SystemsIntegration from './components/SystemsIntegration';
import DevOpsServices from './components/DevOpsServices';
import SolutionsEngineering from './components/SolutionsEngineering';
import QaTestingServices from './components/QaTestingServices';
import CustomAppsServices from './components/CustomAppsServices';
import UXDesignServices from './components/UXDesignServices';
import DataEngineeringServices from './components/DataEngineeringServices';
import CloudDataServices from './components/CloudDataServices';
import CloudInfrastructureServices from './components/CloudInfrastructureServices';
import DataStrategyServices from './components/DataStrategyServices';
import DataPrivacySecurityServices from './components/DataPrivacySecurityServices';
import DataServices from './components/DataServices';
import ContactPage from './components/ContactPage';

type NavigationPage = 'services' | 'industries' | 'portfolio' | 'assessment' | 'about' | 'integration' | 'devops' | 'solutions' | 'qa' | 'custom-apps' | 'ux-design' | 'data-engineering' | 'cloud-data' | 'data-strategy' | 'data-privacy' | 'data-services' | 'cloud-infrastructure' | 'contact';

export default function App() {
  const [activePage, setActivePage] = useState<NavigationPage>('data-privacy');
  const [estimatorOpen, setEstimatorOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  // Quick navigation handler that closes mobile menu
  const navigateTo = (page: NavigationPage) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-vd-red selection:text-white flex flex-col justify-between">
      
      {/* Dynamic Project Estimator Modal slider */}
      <ProjectEstimatorModal
        isOpen={estimatorOpen}
        onClose={() => setEstimatorOpen(false)}
      />

      {/* Header Sticky Navigation Panel */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-100 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo Brand Title */}
          <button 
            onClick={() => navigateTo('services')} 
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="font-headline text-2xl font-black tracking-tighter text-zinc-950 group-hover:text-vd-red transition-colors">
              DevCoWise
            </span>
            <span className="w-1.5 h-1.5 rounded bg-vd-red" />
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { id: 'solutions', label: 'Solutions', hasDropdown: true },
              { id: 'industries', label: 'Industries' },
              { id: 'portfolio', label: 'Success Stories' },
              { id: 'assessment', label: 'Maturity Audit' },
              { id: 'about', label: 'Company & Insights' },
              { id: 'contact', label: 'Contact' }
            ].map((nav) => {
              const isActive = activePage === nav.id || (nav.id === 'solutions' && (activePage === 'integration' || activePage === 'devops' || activePage === 'services' || activePage === 'qa' || activePage === 'custom-apps' || activePage === 'ux-design' || activePage === 'data-engineering' || activePage === 'cloud-data' || activePage === 'data-strategy' || activePage === 'data-privacy' || activePage === 'data-services' || activePage === 'cloud-infrastructure'));
              return (
                <div 
                  key={nav.id} 
                  className="relative py-2"
                  onMouseEnter={() => { if (nav.hasDropdown) setServicesDropdownOpen(true); }}
                  onMouseLeave={() => { if (nav.hasDropdown) setServicesDropdownOpen(false); }}
                >
                  <button
                    onClick={() => navigateTo(nav.id as NavigationPage)}
                    className={`relative font-semibold text-xs uppercase tracking-widest pb-1 transition-colors hover:text-vd-red cursor-pointer ${
                      isActive ? 'text-vd-red' : 'text-zinc-500'
                    }`}
                  >
                    {nav.label}
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-line"
                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-vd-red"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>

                  {nav.hasDropdown && servicesDropdownOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 rounded border border-zinc-100 bg-white shadow-xl z-50 divide-y divide-zinc-100 py-1 overflow-hidden">
                      <button
                        onClick={() => {
                          navigateTo('solutions');
                          setServicesDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest font-black text-zinc-500 hover:bg-zinc-50 hover:text-vd-red transition-colors cursor-pointer"
                      >
                        Solutions Engineering
                      </button>
                      <button
                        onClick={() => {
                          navigateTo('integration');
                          setServicesDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest font-black text-zinc-500 hover:bg-zinc-50 hover:text-vd-red transition-colors cursor-pointer"
                      >
                        Systems Integration
                      </button>
                      <button
                        onClick={() => {
                          navigateTo('devops');
                          setServicesDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest font-black text-zinc-500 hover:bg-zinc-50 hover:text-vd-red transition-colors cursor-pointer"
                      >
                        DevOps Services
                      </button>
                      <button
                        onClick={() => {
                          navigateTo('cloud-infrastructure');
                          setServicesDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest font-black text-zinc-500 hover:bg-zinc-50 hover:text-vd-red transition-colors cursor-pointer"
                      >
                        Cloud Infrastructure
                      </button>
                      <button
                        onClick={() => {
                          navigateTo('custom-apps');
                          setServicesDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest font-black text-zinc-500 hover:bg-zinc-50 hover:text-vd-red transition-colors cursor-pointer"
                      >
                        Custom Application Dev
                      </button>
                      <button
                        onClick={() => {
                          navigateTo('ux-design');
                          setServicesDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest font-black text-zinc-500 hover:bg-zinc-50 hover:text-vd-red transition-colors cursor-pointer"
                      >
                        UX Design Services
                      </button>
                      <button
                        onClick={() => {
                          navigateTo('data-services');
                          setServicesDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest font-black text-zinc-900 bg-zinc-50 border-b border-zinc-100 hover:text-vd-red transition-colors cursor-pointer"
                      >
                        All Data Services
                      </button>
                      <button
                        onClick={() => {
                          navigateTo('data-engineering');
                          setServicesDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest font-black text-zinc-500 hover:bg-zinc-50 hover:text-vd-red transition-colors cursor-pointer"
                      >
                        Data Engineering
                      </button>
                      <button
                        onClick={() => {
                          navigateTo('cloud-data');
                          setServicesDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest font-black text-zinc-500 hover:bg-zinc-50 hover:text-vd-red transition-colors cursor-pointer"
                      >
                        Cloud Data Services
                      </button>
                      <button
                        onClick={() => {
                          navigateTo('data-strategy');
                          setServicesDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest font-black text-zinc-500 hover:bg-zinc-50 hover:text-vd-red transition-colors cursor-pointer"
                      >
                        Data Strategy
                      </button>
                      <button
                        onClick={() => {
                          navigateTo('data-privacy');
                          setServicesDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest font-black text-zinc-500 hover:bg-zinc-50 hover:text-vd-red transition-colors cursor-pointer"
                      >
                        Data Privacy & Security
                      </button>
                      <button
                        onClick={() => {
                          navigateTo('qa');
                          setServicesDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest font-black text-zinc-500 hover:bg-zinc-50 hover:text-vd-red transition-colors cursor-pointer"
                      >
                        QA Automation & Testing
                      </button>
                      <button
                        onClick={() => {
                          navigateTo('services');
                          setServicesDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest font-black text-zinc-500 hover:bg-zinc-50 hover:text-vd-red transition-colors cursor-pointer"
                      >
                        All General Services
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop CTA & Mobile Toggle Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setEstimatorOpen(true)}
              className="hidden md:block bg-vd-red text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded hover:bg-red-700 transition-colors duration-200 shadow-md shadow-red-100/50 cursor-pointer"
            >
              Discuss Your Project
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-900 hover:text-vd-red transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-zinc-100 shadow-xl overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {[
                  { id: 'solutions', label: 'Solutions Engineering' },
                  { id: 'integration', label: '↳ Systems Integration', isSub: true },
                  { id: 'devops', label: '↳ DevOps Services', isSub: true },
                  { id: 'cloud-infrastructure', label: '↳ Cloud Infrastructure', isSub: true },
                  { id: 'custom-apps', label: '↳ Custom Application Dev', isSub: true },
                  { id: 'ux-design', label: '↳ UX Design Services', isSub: true },
                  { id: 'data-services', label: '↳ All Data Services', isSub: true },
                  { id: 'data-engineering', label: '↳ Data Engineering Services', isSub: true },
                  { id: 'cloud-data', label: '↳ Cloud Data Services', isSub: true },
                  { id: 'data-strategy', label: '↳ Data Strategy & Governance', isSub: true },
                  { id: 'data-privacy', label: '↳ Data Privacy & Security', isSub: true },
                  { id: 'qa', label: '↳ QA Automation & Testing', isSub: true },
                  { id: 'services', label: '↳ All General Services', isSub: true },
                  { id: 'industries', label: 'Industries' },
                  { id: 'portfolio', label: 'Success Stories' },
                  { id: 'assessment', label: 'Maturity Audit' },
                  { id: 'about', label: 'Company & Insights' },
                  { id: 'contact', label: 'Contact' }
                ].map((nav) => (
                  <button
                    key={nav.id}
                    onClick={() => navigateTo(nav.id as NavigationPage)}
                    className={`w-full text-left font-semibold text-sm uppercase tracking-wider py-2 transition-colors ${
                      nav.isSub ? 'pl-4 text-xs text-zinc-500 font-bold' : ''
                    } ${
                      activePage === nav.id ? 'text-vd-red' : 'text-zinc-600 hover:text-vd-red'
                    }`}
                  >
                    {nav.label}
                  </button>
                ))}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setEstimatorOpen(true);
                  }}
                  className="w-full text-center bg-vd-red text-white font-bold text-sm uppercase tracking-widest py-3 rounded hover:bg-red-700 transition-colors"
                >
                  Discuss Your Project
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Dynamic Workspace Router */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          
          {/* CONTACT PAGE */}
          {activePage === 'contact' && (
            <motion.div
              key="contact-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-0"
            >
              <ContactPage
                onNavigateTo={navigateTo}
              />
            </motion.div>
          )}

          {/* SOLUTIONS: Solutions Engineering portal */}
          {activePage === 'solutions' && (
            <motion.div
              key="solutions-tab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-0"
            >
              <SolutionsEngineering
                onOpenEstimator={() => setEstimatorOpen(true)}
                onNavigateTo={navigateTo}
              />
            </motion.div>
          )}

          {/* CUSTOM APPLICATION DEVELOPMENT SERVICES PAGE */}
          {activePage === 'custom-apps' && (
            <motion.div
              key="custom-apps-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-0"
            >
              <CustomAppsServices
                onOpenEstimator={() => setEstimatorOpen(true)}
                onNavigateTo={navigateTo}
              />
            </motion.div>
          )}

          {/* UX DESIGN SERVICES PAGE */}
          {activePage === 'ux-design' && (
            <motion.div
              key="ux-design-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-0"
            >
              <UXDesignServices
                onOpenEstimator={() => setEstimatorOpen(true)}
                onNavigateTo={navigateTo}
              />
            </motion.div>
          )}

          {/* DATA ENGINEERING SERVICES PAGE */}
          {activePage === 'data-engineering' && (
            <motion.div
              key="data-engineering-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-0"
            >
              <DataEngineeringServices
                onOpenEstimator={() => setEstimatorOpen(true)}
                onNavigateTo={navigateTo}
              />
            </motion.div>
          )}

          {/* CLOUD DATA SERVICES PAGE */}
          {activePage === 'cloud-data' && (
            <motion.div
              key="cloud-data-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-0"
            >
              <CloudDataServices
                onOpenEstimator={() => setEstimatorOpen(true)}
                onNavigateTo={navigateTo}
              />
            </motion.div>
          )}

          {/* CLOUD INFRASTRUCTURE SERVICES PAGE */}
          {activePage === 'cloud-infrastructure' && (
            <motion.div
              key="cloud-infra-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-0"
            >
              <CloudInfrastructureServices
                onOpenEstimator={() => setEstimatorOpen(true)}
                onNavigateTo={navigateTo}
              />
            </motion.div>
          )}

          {/* DATA STRATEGY SERVICES PAGE */}
          {activePage === 'data-strategy' && (
            <motion.div
              key="data-strategy-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-0"
            >
              <DataStrategyServices
                onOpenEstimator={() => setEstimatorOpen(true)}
                onNavigateTo={navigateTo}
              />
            </motion.div>
          )}

          {/* DATA PRIVACY & SECURITY SERVICES PAGE */}
          {activePage === 'data-privacy' && (
            <motion.div
              key="data-privacy-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-0"
            >
              <DataPrivacySecurityServices
                onOpenEstimator={() => setEstimatorOpen(true)}
                onNavigateTo={navigateTo}
              />
            </motion.div>
          )}

          {/* DATA SERVICES PAGE */}
          {activePage === 'data-services' && (
            <motion.div
              key="data-services-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-0"
            >
              <DataServices
                onOpenEstimator={() => setEstimatorOpen(true)}
                onNavigateTo={navigateTo}
              />
            </motion.div>
          )}

          {/* QA AUTOMATION & TESTING SERVICES PAGE */}
          {activePage === 'qa' && (
            <motion.div
              key="qa-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-0"
            >
              <QaTestingServices
                onOpenEstimator={() => setEstimatorOpen(true)}
                onNavigateTo={navigateTo}
              />
            </motion.div>
          )}

          {/* SERVICES: The high-fidelity TechConsult landing portal */}
          {activePage === 'services' && (
            <motion.div
              key="services-tab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-0"
            >
              <TechConsultServices
                onOpenEstimator={() => setEstimatorOpen(true)}
                onNavigateTo={navigateTo}
              />
            </motion.div>
          )}

          {/* SYSTEMS INTEGRATION PAGE */}
          {activePage === 'integration' && (
            <motion.div
              key="integration-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-0"
            >
              <SystemsIntegration
                onOpenEstimator={() => setEstimatorOpen(true)}
                onNavigateTo={navigateTo}
              />
            </motion.div>
          )}

          {/* DEVOPS SERVICES PAGE */}
          {activePage === 'devops' && (
            <motion.div
              key="devops-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-0"
            >
              <DevOpsServices
                onOpenEstimator={() => setEstimatorOpen(true)}
                onNavigateTo={navigateTo}
              />
            </motion.div>
          )}

          {/* INDUSTRIES TAB WORKSPACE */}
          {activePage === 'industries' && (
            <motion.div
              key="industries-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="max-w-7xl mx-auto px-6 py-16 space-y-12"
            >
              <div className="space-y-3 max-w-2xl">
                <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono">Industry Segments</span>
                <h2 className="font-headline text-4xl font-extrabold text-zinc-950">Tailored Domain Expertise</h2>
                <p className="text-zinc-500 text-sm sm:text-base">
                  Every sector demands specialized security parameters, data models, and workflow speeds. We deploy bespoke engineering frameworks optimized for critical compliance rules.
                </p>
              </div>

              {/* Grid of details for Industries */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'FinTech',
                    metric: '99.99% Core Uptime',
                    desc: 'Secure digital banking gateways, integrated wallets, micro-investment tools, and high-frequency settlement channels complying with PCI-DSS & SOC2 protocols.',
                    sub: 'PCI-DSS, Ledger Sync, Ledger Wrappers, Instant KYC Flow'
                  },
                  {
                    title: 'HealthTech',
                    metric: 'HIPAA & GDPR Audited',
                    desc: 'Telemedicine integrations, offline-first nurse applications, WebRTC encrypted consultations, and custom electronic medical records sync routers.',
                    sub: 'HIPAA compliant, WebRTC secure video, Patient data sync'
                  },
                  {
                    title: 'Logistics & Supply Chain',
                    metric: '97% ETA Calculation Accuracy',
                    desc: 'Fleet telematics telemetry, real-time geofenced warehouses, machine-learning transit schedulers, and driver mobile communication networks.',
                    sub: 'IoT Hub integrations, Kafka event pipes, Predictive ETAs'
                  },
                  {
                    title: 'B2C E-Commerce & Retail',
                    metric: '+64% Mobile Conversion Boost',
                    desc: 'Headless global store fronts on CDN edges, lightning-fast GraphQL indexers, Single-Click cart layouts, and integrated ERP stock updates.',
                    sub: 'Headless storefront, Edge CDN caching, GraphQL API'
                  }
                ].map((ind, idx) => (
                  <div key={idx} className="bg-zinc-50 border border-zinc-200/60 rounded p-8 hover:shadow-md transition-shadow flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <h4 className="font-headline text-xl font-bold text-zinc-950">{ind.title}</h4>
                        <span className="text-xxs font-mono bg-red-50 text-vd-red px-2.5 py-1 rounded font-bold">{ind.metric}</span>
                      </div>
                      <p className="text-zinc-600 text-sm leading-relaxed">{ind.desc}</p>
                    </div>
                    <div className="pt-4 border-t border-zinc-200/50">
                      <span className="text-xxs font-bold text-zinc-400 uppercase tracking-widest block">Core Frameworks Employed:</span>
                      <span className="text-xs font-mono text-zinc-600 mt-1 block">{ind.sub}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Industry CTA */}
              <div className="bg-vd-dark text-white rounded p-8 sm:p-12 flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="space-y-2">
                  <h4 className="font-headline text-2xl font-bold">Have unique industry requirements?</h4>
                  <p className="text-zinc-400 text-sm">Our scoping specialists excel in compiling highly customized technical briefs matching specialized standards.</p>
                </div>
                <button
                  onClick={() => setEstimatorOpen(true)}
                  className="bg-vd-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded shrink-0 transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  Discuss Custom Scoping
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* PORTFOLIO TAB WORKSPACE */}
          {activePage === 'portfolio' && (
            <motion.div
              key="portfolio-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="max-w-7xl mx-auto px-6 py-16 space-y-12"
            >
              <div className="space-y-3 max-w-2xl">
                <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono">Case Studies</span>
                <h2 className="font-headline text-4xl font-extrabold text-zinc-950">Engineering Outcomes Realized</h2>
                <p className="text-zinc-500 text-sm sm:text-base">
                  We don't just write software; we measure the impact. Browse actual client projects delivered across major industries, detailing core challenges, tech stacks, and quantified business improvements.
                </p>
              </div>

              {/* Interactive Case Studies Selector Grid */}
              <CaseStudiesGrid />
            </motion.div>
          )}

          {/* DIGITAL MATURITY DIAGNOSTIC TAB WORKSPACE */}
          {activePage === 'assessment' && (
            <motion.div
              key="assessment-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="max-w-4xl mx-auto px-6 py-16 space-y-12"
            >
              <div className="space-y-3 text-center max-w-2xl mx-auto">
                <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono">Assessment Audit Tool</span>
                <h2 className="font-headline text-4xl font-black text-zinc-950">Digital Transformation Diagnostic</h2>
                <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
                  Evaluate your operational readiness for automation, infrastructure elasticity, and team agility. Take the 4-step diagnostic to generate your custom action report.
                </p>
              </div>

              {/* Maturity Assessment Core Widget */}
              <DigitalAssessment onOpenEstimator={() => setEstimatorOpen(true)} />
            </motion.div>
          )}

          {/* COMPANY & INSIGHTS TAB WORKSPACE */}
          {activePage === 'about' && (
            <motion.div
              key="about-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="max-w-7xl mx-auto px-6 py-16 space-y-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* About Intro */}
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono">Company Philosophy</span>
                  <h2 className="font-headline text-4xl font-extrabold text-zinc-950">Engineering Excellence meets Strategic Design</h2>
                  <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                    At TechConsult, we partner with modern enterprises to design, build, and scale high-fidelity software architectures that move markets. Operating as an extension of your product organization, our cross-functional teams prioritize scalable clean-code, beautiful interactive interfaces, and secure backend operations.
                  </p>
                  <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
                    We believe digital transformation shouldn't be a chaotic overhaul. Instead, we employ surgical, phased strangler-pattern migration paths that protect active business continuity while installing elastic cloud-native infrastructure.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                    <div className="p-4 bg-zinc-50 rounded border border-zinc-100 text-center">
                      <span className="block text-3xl font-headline font-black text-vd-red">120+</span>
                      <span className="text-xxs uppercase tracking-widest text-zinc-500 font-bold mt-1 block">Deployments Done</span>
                    </div>
                    <div className="p-4 bg-zinc-50 rounded border border-zinc-100 text-center">
                      <span className="block text-3xl font-headline font-black text-vd-red">97.4%</span>
                      <span className="text-xxs uppercase tracking-widest text-zinc-500 font-bold mt-1 block">Success SLA Met</span>
                    </div>
                    <div className="p-4 bg-zinc-50 rounded border border-zinc-100 text-center">
                      <span className="block text-3xl font-headline font-black text-vd-red">15+</span>
                      <span className="text-xxs uppercase tracking-widest text-zinc-500 font-bold mt-1 block">Years Avg Expert Exp</span>
                    </div>
                  </div>
                </div>

                {/* Core Principles */}
                <div className="lg:col-span-5 bg-zinc-50 rounded border border-zinc-200/60 p-8 space-y-6">
                  <h4 className="font-headline text-lg font-bold text-zinc-950 uppercase tracking-wider">Our Delivery Guarantees</h4>
                  
                  <div className="space-y-4 text-xs">
                    <div className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-50 text-vd-red flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xxs font-bold">1</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-zinc-900 uppercase tracking-wider text-xxs">Zero Interruption Delivery</h5>
                        <p className="text-zinc-500 mt-1 leading-relaxed">We orchestrate database migrations and microservice cutovers using secure blue-green environments to assure continuous system availability.</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-50 text-vd-red flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xxs font-bold">2</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-zinc-900 uppercase tracking-wider text-xxs">HIPAA & SOC2 Guardrails</h5>
                        <p className="text-zinc-500 mt-1 leading-relaxed">Security is not an afterthought. Every line of backend code is vulnerability-scanned and container ports are strictly managed under Zero Trust principles.</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-50 text-vd-red flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xxs font-bold">3</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-zinc-900 uppercase tracking-wider text-xxs">Modular Portability Guarantee</h5>
                        <p className="text-zinc-500 mt-1 leading-relaxed">We develop vendor-neutral software that runs seamlessly on container orchestrators, shielding your firm from licensing lock-ins.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Insights / Content Feed */}
              <div className="space-y-8 pt-4 border-t border-zinc-100">
                <div className="space-y-2">
                  <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono">Expert Insights</span>
                  <h3 className="font-headline text-2xl sm:text-3xl font-bold text-zinc-950">TechConsult Tech Radar</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      tag: 'AI Engineering',
                      title: 'Safe Enterprise RAG Integration',
                      desc: 'How to safely bind corporate knowledge bases with LLM embeddings without risk of compliance or IP leak.',
                      author: 'Director of AI Systems',
                      date: 'June 2026'
                    },
                    {
                      tag: 'DevSecOps',
                      title: 'The Modern Monolith Escape Plan',
                      desc: 'A complete step-by-step strategy utilizing the Strangler Pattern to migrate heavy AS400 endpoints with zero customer friction.',
                      author: 'Principal Cloud Architect',
                      date: 'May 2026'
                    },
                    {
                      tag: 'Design Systems',
                      title: 'Aesthetic Rhythm in Enterprise Portals',
                      desc: 'How micro-interactions, cohesive typography pairings, and clean spacing guidelines drive real-life software user retention.',
                      author: 'Head of Creative Engineering',
                      date: 'April 2026'
                    }
                  ].map((insight, idx) => (
                    <div key={idx} className="bg-white border border-zinc-200/60 rounded p-6 flex flex-col justify-between hover:border-vd-red/30 transition-all">
                      <div className="space-y-3">
                        <span className="text-xxs font-mono uppercase font-bold text-vd-red bg-red-50 px-2 py-0.5 rounded w-fit inline-block">{insight.tag}</span>
                        <h4 className="font-headline font-bold text-zinc-900 hover:text-vd-red cursor-pointer transition-colors leading-snug">{insight.title}</h4>
                        <p className="text-zinc-500 text-xs leading-relaxed">{insight.desc}</p>
                      </div>
                      <div className="pt-4 mt-4 border-t border-zinc-100 flex justify-between items-center text-xxs text-zinc-400">
                        <span>By {insight.author}</span>
                        <span>{insight.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <button 
            onClick={() => navigateTo('services')}
            className="flex items-center gap-1.5 cursor-pointer font-headline text-lg font-black text-zinc-950 hover:text-vd-red transition-colors"
          >
            DevCoWise
            <span className="w-1.5 h-1.5 rounded bg-vd-red" />
          </button>

          <nav className="flex flex-wrap justify-center gap-6">
            <button className="font-medium text-xs uppercase tracking-wider text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer">Privacy Policy</button>
            <button className="font-medium text-xs uppercase tracking-wider text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer">Terms of Service</button>
            <button className="font-medium text-xs uppercase tracking-wider text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer">Cookie Policy</button>
            <button 
              onClick={() => navigateTo('contact')}
              className="font-medium text-xs uppercase tracking-wider text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </nav>

          <div className="font-medium text-xs uppercase tracking-wider text-zinc-400 font-mono">
            © 2026 DevCoWise. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
