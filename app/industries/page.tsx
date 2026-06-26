'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useEstimator } from '@/components/context/EstimatorContext';

export default function IndustriesPage() {
  const { openEstimator } = useEstimator();

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
      <div className="space-y-3 max-w-2xl">
        <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono">Industry Segments</span>
        <h2 className="font-headline text-4xl font-extrabold text-zinc-950">Tailored Domain Expertise</h2>
        <p className="text-zinc-500 text-sm sm:text-base">
          Every sector demands specialized security parameters, data models, and workflow speeds. We deploy bespoke engineering frameworks optimized for critical compliance rules.
        </p>
      </div>

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

      <div className="bg-vd-dark text-white rounded p-8 sm:p-12 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="space-y-2">
          <h4 className="font-headline text-2xl font-bold">Have unique industry requirements?</h4>
          <p className="text-zinc-400 text-sm">Our scoping specialists excel in compiling highly customized technical briefs matching specialized standards.</p>
        </div>
        <button
          type="button"
          onClick={(e) => { e.preventDefault(); openEstimator(); }}
          className="bg-vd-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded shrink-0 transition-colors inline-flex items-center gap-2"
        >
          Discuss Custom Scoping
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
