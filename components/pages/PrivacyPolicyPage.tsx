'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, CheckCircle2, Mail, ArrowRight } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigateTo: (page: any) => void;
}

export default function PrivacyPolicyPage({ onNavigateTo }: PrivacyPolicyPageProps) {
  const lastUpdated = "June 25, 2026";

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 max-w-4xl"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] text-vd-red font-black uppercase tracking-[0.3em] bg-red-50 px-3 py-1 rounded border border-red-100">
                Legal & Compliance
              </span>
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                Last Updated: {lastUpdated}
              </span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-black text-zinc-950 tracking-tight leading-none">
              Privacy <span className="text-vd-red">Policy</span>
            </h1>
            <p className="text-zinc-600 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
              DevCoWise is committed to engineering absolute trust. This policy outlines our standards for data collection, enterprise confidentiality, and privacy protection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Quick Navigation Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-zinc-50 border border-zinc-200/80 p-8 rounded sticky top-28 space-y-6">
              <h3 className="font-headline font-black text-lg text-zinc-950 flex items-center gap-2">
                <Shield className="w-5 h-5 text-vd-red" />
                Policy Highlights
              </h3>
              
              <ul className="space-y-3 text-xs text-zinc-600 font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-vd-red shrink-0 mt-0.5" />
                  <span>Strict enterprise NDA and IP protection standards.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-vd-red shrink-0 mt-0.5" />
                  <span>Zero unauthorized third-party data selling or brokering.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-vd-red shrink-0 mt-0.5" />
                  <span>GDPR, CCPA, and SOC2 Type II compliance alignment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-vd-red shrink-0 mt-0.5" />
                  <span>Transparent data subject access and deletion rights.</span>
                </li>
              </ul>

              <div className="pt-6 border-t border-zinc-200/60">
                <p className="text-xxs font-mono uppercase tracking-wider text-zinc-400 mb-3">Questions about data?</p>
                <button
                  onClick={() => onNavigateTo('contact')}
                  className="w-full bg-zinc-900 hover:bg-vd-red text-white text-xs font-bold uppercase tracking-widest py-3.5 px-4 rounded transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Contact Privacy Team
                </button>
              </div>
            </div>
          </div>

          {/* Main Document Body */}
          <div className="lg:col-span-8 space-y-12 text-zinc-700 leading-relaxed text-sm md:text-base font-normal">
            
            <div className="space-y-4">
              <h2 className="font-headline text-2xl md:text-3xl font-black text-zinc-950 pb-2 border-b border-zinc-100">
                1. Introduction & Scope
              </h2>
              <p>
                Welcome to DevCoWise ("Company", "we", "our", "us"). We operate as an engineering-first technology consultancy specializing in cloud infrastructure, custom application development, artificial intelligence solutions, and enterprise data strategy. This Privacy Policy applies to all interactions with our digital portal, consulting services, client discovery sessions, and software delivery pipelines.
              </p>
              <p>
                By accessing our website or engaging our consulting services, you acknowledge the collection and handling practices detailed in this statement.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-headline text-2xl md:text-3xl font-black text-zinc-950 pb-2 border-b border-zinc-100">
                2. Information We Collect
              </h2>
              <p>
                To deliver high-fidelity engineering and strategic solutions, we collect specific categories of business and technical information:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="bg-zinc-50 border border-zinc-200/60 p-6 rounded space-y-2">
                  <h4 className="font-headline font-bold text-zinc-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-vd-red" />
                    Directly Provided Data
                  </h4>
                  <p className="text-xs text-zinc-600">
                    Contact details (name, corporate email, phone), company name, project specifications, technical infrastructure overviews, and inquiries submitted via our contact or audit forms.
                  </p>
                </div>
                <div className="bg-zinc-50 border border-zinc-200/60 p-6 rounded space-y-2">
                  <h4 className="font-headline font-bold text-zinc-900 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-vd-red" />
                    Automated Telemetry
                  </h4>
                  <p className="text-xs text-zinc-600">
                    IP addresses, browser types, device identifiers, referring URLs, time spent on pages, and interaction metrics with our Digital Maturity Audit tools.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-headline text-2xl md:text-3xl font-black text-zinc-950 pb-2 border-b border-zinc-100">
                3. How We Utilize Your Data
              </h2>
              <p>We process collected data strictly for legitimate corporate and consultative purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-600">
                <li><strong>Service Delivery:</strong> Scoping engineering architectures, generating custom digital maturity reports, and executing agreed contract deliverables.</li>
                <li><strong>Client Communication:</strong> Responding to RFP requests, scheduling discovery workshops, and transmitting critical project updates.</li>
                <li><strong>Platform Optimization:</strong> Analyzing aggregate portal traffic to enhance UX flows, system speed, and content relevance.</li>
                <li><strong>Security & Compliance:</strong> Protecting against malicious activity, preventing unauthorized access, and fulfilling statutory regulatory mandates.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-headline text-2xl md:text-3xl font-black text-zinc-950 pb-2 border-b border-zinc-100">
                4. Data Sharing & Confidentiality
              </h2>
              <p>
                DevCoWise maintains strict confidentiality over client IP and proprietary systems. We do <strong>not</strong> sell, rent, or trade your business or personal data to advertising networks. Data is only disclosed under the following controlled conditions:
              </p>
              <p>
                <strong>Vetted Cloud Infrastructure Subprocessors:</strong> We utilize enterprise-grade cloud providers (such as Google Cloud Platform and AWS) to host secure databases and web containers. All subprocessors are bound by stringent Data Processing Agreements (DPAs).
              </p>
              <p>
                <strong>Legal Compliance:</strong> We may disclose information if required by court order, binding regulatory mandate, or to defend the intellectual property rights of DevCoWise and its clients.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-headline text-2xl md:text-3xl font-black text-zinc-950 pb-2 border-b border-zinc-100">
                5. Enterprise Security & Retention
              </h2>
              <p>
                We implement defense-in-depth security architectures, including TLS 1.3 encryption in transit, AES-256 encryption at rest, role-based access control (RBAC), and regular vulnerability assessments. Client discovery data and contact inquiries are retained only for the duration necessary to fulfill client business requirements or comply with legal retention statutes.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-headline text-2xl md:text-3xl font-black text-zinc-950 pb-2 border-b border-zinc-100">
                6. Your Privacy Rights
              </h2>
              <p>
                Depending on your jurisdiction (such as GDPR in the EU or CCPA in California), you possess fundamental rights regarding your data:
              </p>
              <div className="bg-red-50/50 border border-red-100 p-6 rounded text-xs text-zinc-700 space-y-2">
                <p>
                  You may request access to, rectification of, or complete erasure of your submitted personal records. To initiate a Data Subject Request (DSR), please contact our Data Protection Officer directly at <a href="mailto:privacy@devcowise.com" className="text-vd-red font-bold underline">privacy@devcowise.com</a>. We verify all requests within 3 business days.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-200 flex justify-between items-center">
              <button
                onClick={() => onNavigateTo('terms')}
                className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-vd-red transition-colors inline-flex items-center gap-2"
              >
                View Terms of Service <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigateTo('cookies')}
                className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-vd-red transition-colors inline-flex items-center gap-2"
              >
                View Cookie Policy <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
