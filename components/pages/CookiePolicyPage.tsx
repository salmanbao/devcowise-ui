'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Sliders, CheckCircle2, ShieldAlert, Mail, ArrowRight, Settings } from 'lucide-react';

interface CookiePolicyPageProps {
  onNavigateTo: (page: any) => void;
}

export default function CookiePolicyPage({ onNavigateTo }: CookiePolicyPageProps) {
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
              Cookie <span className="text-vd-red">Policy</span>
            </h1>
            <p className="text-zinc-600 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
              Transparency on how DevCoWise deploys cookies, local storage tokens, and diagnostic telemetry to optimize portal speed and security.
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
                <Cookie className="w-5 h-5 text-vd-red" />
                Cookie Principles
              </h3>
              
              <ul className="space-y-3 text-xs text-zinc-600 font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-vd-red shrink-0 mt-0.5" />
                  <span>Strictly minimal tracking; zero invasive ad-retargeting.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-vd-red shrink-0 mt-0.5" />
                  <span>Essential cookies required for secure portal authentication.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-vd-red shrink-0 mt-0.5" />
                  <span>Anonymous performance telemetry to monitor loading speeds.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-vd-red shrink-0 mt-0.5" />
                  <span>Complete user control via browser privacy settings.</span>
                </li>
              </ul>

              <div className="pt-6 border-t border-zinc-200/60">
                <p className="text-xxs font-mono uppercase tracking-wider text-zinc-400 mb-3">Privacy concerns?</p>
                <button
                  onClick={() => onNavigateTo('privacy')}
                  className="w-full bg-zinc-900 hover:bg-vd-red text-white text-xs font-bold uppercase tracking-widest py-3.5 px-4 rounded transition-colors flex items-center justify-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  Review Privacy Policy
                </button>
              </div>
            </div>
          </div>

          {/* Main Document Body */}
          <div className="lg:col-span-8 space-y-12 text-zinc-700 leading-relaxed text-sm md:text-base font-normal">
            
            <div className="space-y-4">
              <h2 className="font-headline text-2xl md:text-3xl font-black text-zinc-950 pb-2 border-b border-zinc-100">
                1. What Are Cookies?
              </h2>
              <p>
                Cookies are small text files or local storage tokens placed on your computer or mobile device when you visit the DevCoWise digital portal. They enable our web servers to recognize your device, preserve active session states (such as interactive Digital Maturity Audit progress), and maintain secure container connections.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-headline text-2xl md:text-3xl font-black text-zinc-950 pb-2 border-b border-zinc-100">
                2. Categories of Cookies We Utilize
              </h2>
              <p>We classify our portal cookies into three distinct functional tiers:</p>
              
              <div className="space-y-4 pt-2">
                
                {/* Tier 1 */}
                <div className="bg-zinc-50 border border-zinc-200/70 p-6 rounded space-y-2">
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <h4 className="font-headline font-bold text-zinc-950 text-base">Strictly Essential Cookies</h4>
                    <span className="text-xxs font-mono uppercase bg-zinc-900 text-white px-2 py-0.5 rounded font-bold tracking-wider">Always Active</span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    These cookies are fundamental to web container operation and security routing. They facilitate basic load balancing across Cloud Run ingress nodes, prevent cross-site request forgery (CSRF), and maintain user consent preferences. The site cannot function safely without these tokens.
                  </p>
                </div>

                {/* Tier 2 */}
                <div className="bg-zinc-50 border border-zinc-200/70 p-6 rounded space-y-2">
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <h4 className="font-headline font-bold text-zinc-950 text-base">Analytics & Performance Telemetry</h4>
                    <span className="text-xxs font-mono uppercase bg-vd-red/10 text-vd-red px-2 py-0.5 rounded font-bold tracking-wider">Optional</span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    We deploy anonymous diagnostic cookies to measure page rendering latency, monitor API error rates, and understand which consulting service pages (such as Cloud Infrastructure vs. Data Engineering) receive the highest engineering inquiry volume. Data is aggregated and never linked to personal identities.
                  </p>
                </div>

                {/* Tier 3 */}
                <div className="bg-zinc-50 border border-zinc-200/70 p-6 rounded space-y-2">
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <h4 className="font-headline font-bold text-zinc-950 text-base">Functional & Assessment State</h4>
                    <span className="text-xxs font-mono uppercase bg-vd-red/10 text-vd-red px-2 py-0.5 rounded font-bold tracking-wider">Optional</span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Used to remember your specific selections when utilizing interactive estimators or auditing tools during your session, eliminating the need to re-enter parameters when navigating back and forth between portal views.
                  </p>
                </div>

              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-headline text-2xl md:text-3xl font-black text-zinc-950 pb-2 border-b border-zinc-100">
                3. Third-Party Integrations
              </h2>
              <p>
                When viewing embedded case study graphics or interactive mapping previews on our Global Offices contact page, external content delivery networks (CDNs) or mapping APIs may set independent local storage tokens to handle image caching and geographic rendering. We ensure all third-party vendors adhere strictly to global enterprise privacy standards.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-headline text-2xl md:text-3xl font-black text-zinc-950 pb-2 border-b border-zinc-100">
                4. Managing Your Cookie Preferences
              </h2>
              <p>
                You retain complete authority over cookie execution. Most modern web browsers allow you to inspect, clear, or block cookies directly through their settings panel:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-zinc-600 text-xs md:text-sm">
                <li><strong>Chrome / Brave:</strong> Settings &gt; Privacy and security &gt; Third-party cookies</li>
                <li><strong>Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
              </ul>
              <p className="text-xs text-zinc-500 italic pt-1">
                Please note that disabling strictly essential routing cookies may result in degraded portal performance or inability to submit consulting inquiries.
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
                onClick={() => onNavigateTo('terms')}
                className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-vd-red transition-colors inline-flex items-center gap-2"
              >
                View Terms of Service <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
