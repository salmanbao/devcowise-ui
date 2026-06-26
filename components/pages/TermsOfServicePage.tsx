'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Scale, FileCheck, AlertTriangle, Cpu, CheckCircle2, Mail, ArrowRight } from 'lucide-react';

interface TermsOfServicePageProps {
  onNavigateTo: (page: any) => void;
}

export default function TermsOfServicePage({ onNavigateTo }: TermsOfServicePageProps) {
  const effectiveDate = "June 25, 2026";

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
                Effective Date: {effectiveDate}
              </span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-black text-zinc-950 tracking-tight leading-none">
              Terms of <span className="text-vd-red">Service</span>
            </h1>
            <p className="text-zinc-600 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
              The operational boundaries, intellectual property agreements, and engagement terms governing DevCoWise consultancy and software engineering.
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
                <Scale className="w-5 h-5 text-vd-red" />
                Agreement Summary
              </h3>
              
              <ul className="space-y-3 text-xs text-zinc-600 font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-vd-red shrink-0 mt-0.5" />
                  <span>Client retains 100% ownership of custom deliverable code.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-vd-red shrink-0 mt-0.5" />
                  <span>Clear SOW milestone boundaries and change management.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-vd-red shrink-0 mt-0.5" />
                  <span>Mutual limitation of liability and indemnification.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-vd-red shrink-0 mt-0.5" />
                  <span>Engineering SLAs governed by master consulting contracts.</span>
                </li>
              </ul>

              <div className="pt-6 border-t border-zinc-200/60">
                <p className="text-xxs font-mono uppercase tracking-wider text-zinc-400 mb-3">Contractual questions?</p>
                <button
                  onClick={() => onNavigateTo('contact')}
                  className="w-full bg-zinc-900 hover:bg-vd-red text-white text-xs font-bold uppercase tracking-widest py-3.5 px-4 rounded transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Contact Legal Counsel
                </button>
              </div>
            </div>
          </div>

          {/* Main Document Body */}
          <div className="lg:col-span-8 space-y-12 text-zinc-700 leading-relaxed text-sm md:text-base font-normal">
            
            <div className="space-y-4">
              <h2 className="font-headline text-2xl md:text-3xl font-black text-zinc-950 pb-2 border-b border-zinc-100">
                1. Acceptance of Terms
              </h2>
              <p>
                These Terms of Service ("Terms") constitute a binding legal contract between you ("Client", "User") and DevCoWise ("Company", "Consultancy"). By browsing our digital portal, scheduling engineering discovery workshops, or executing a Statement of Work (SOW), you agree to abide strictly by these provisions.
              </p>
              <p>
                If you are entering into these Terms on behalf of an enterprise or commercial entity, you represent and warrant that you hold full legal authority to bind that entity to these terms.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-headline text-2xl md:text-3xl font-black text-zinc-950 pb-2 border-b border-zinc-100">
                2. Scope of Consulting Services
              </h2>
              <p>
                DevCoWise provides specialized technology consultancy, including cloud infrastructure design, data engineering pipelines, AI/ML model integration, DevOps automation, and full-stack software development. Specific project deliverables, engineering milestones, timelines, and payment terms are governed by individual Master Services Agreements (MSAs) and Statements of Work (SOWs) executed between both parties.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-headline text-2xl md:text-3xl font-black text-zinc-950 pb-2 border-b border-zinc-100">
                3. Intellectual Property Rights
              </h2>
              <p>
                We believe in straightforward engineering equity. Upon full settlement of applicable invoices for a specific project milestone:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="bg-zinc-50 border border-zinc-200/60 p-6 rounded space-y-2">
                  <h4 className="font-headline font-bold text-zinc-900 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-vd-red" />
                    Custom Deliverables
                  </h4>
                  <p className="text-xs text-zinc-600">
                    The Client receives complete, exclusive, worldwide intellectual property ownership of all bespoke source code, UI designs, and data schemas engineered specifically for the Client under the SOW.
                  </p>
                </div>
                <div className="bg-zinc-50 border border-zinc-200/60 p-6 rounded space-y-2">
                  <h4 className="font-headline font-bold text-zinc-900 flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-vd-red" />
                    Pre-existing IP
                  </h4>
                  <p className="text-xs text-zinc-600">
                    DevCoWise retains ownership of pre-existing frameworks, internal CLI tools, boilerplate libraries, and general architectural methodologies utilized during development. The Client is granted a royalty-free perpetual license to use such background IP embedded in their deliverable.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-headline text-2xl md:text-3xl font-black text-zinc-950 pb-2 border-b border-zinc-100">
                4. Confidentiality & Non-Disclosure
              </h2>
              <p>
                Both DevCoWise and the Client agree to maintain strict confidentiality regarding proprietary business processes, trade secrets, system credentials, and unreleased product roadmaps shared during consulting engagements. Neither party shall disclose confidential information to external third parties without express written consent.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-headline text-2xl md:text-3xl font-black text-zinc-950 pb-2 border-b border-zinc-100">
                5. Warranties & Disclaimers
              </h2>
              <p>
                DevCoWise warrants that all custom engineering services will be performed in a diligent, workmanlike, and professional manner consistent with top-tier software industry standards. 
              </p>
              <div className="bg-amber-50/60 border border-amber-200/80 p-6 rounded text-xs text-zinc-700 flex gap-3.5 items-start">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Disclaimer of Warranties:</strong> Except as expressly stipulated in an executed SOW, our website and digital assessment tools are provided on an "AS IS" and "AS AVAILABLE" basis without statutory or implied warranties of merchantability or fitness for a particular purpose.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-headline text-2xl md:text-3xl font-black text-zinc-950 pb-2 border-b border-zinc-100">
                6. Limitation of Liability
              </h2>
              <p>
                In no event shall either party be liable to the other for indirect, incidental, punitive, or consequential damages (including lost corporate profits or revenue downtime) arising out of or related to consulting services or website usage. DevCoWise's aggregate cumulative liability under any SOW shall not exceed the total fees paid by the Client for the specific engineering milestone giving rise to liability.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-headline text-2xl md:text-3xl font-black text-zinc-950 pb-2 border-b border-zinc-100">
                7. Governing Law & Dispute Resolution
              </h2>
              <p>
                These Terms are governed by commercial arbitration statutes. Any disputes arising from consulting engagements shall first be subject to executive escalation, followed by binding confidential commercial arbitration in accordance with standard international technology dispute frameworks.
              </p>
            </div>

            <div className="pt-8 border-t border-zinc-200 flex justify-between items-center">
              <button
                onClick={() => onNavigateTo('privacy')}
                className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-vd-red transition-colors inline-flex items-center gap-2"
              >
                View Privacy Policy <ArrowRight className="w-4 h-4" />
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
