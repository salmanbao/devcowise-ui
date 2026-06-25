import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Lock, 
  Key, 
  Search, 
  FileText,
  ChevronRight, 
  ChevronDown,
  Sparkles,
  CheckCircle2,
  Shield,
  Server,
  EyeOff
} from 'lucide-react';

interface DataPrivacySecurityServicesProps {
  onOpenEstimator: () => void;
  onNavigateTo: (page: any) => void;
}

const CORE_CAPABILITIES = [
  {
    id: 'compliance',
    title: 'GDPR/CCPA Compliance',
    icon: FileText,
    description: 'Comprehensive audits and implementation frameworks to ensure strict adherence to global data privacy regulations, minimizing legal risk.',
  },
  {
    id: 'encryption',
    title: 'Data Encryption',
    icon: Lock,
    description: 'Advanced cryptographic protocols for data at rest and in transit, securing sensitive information against unauthorized access or interception.',
  },
  {
    id: 'access',
    title: 'Access Control',
    icon: Key,
    description: 'Granular identity and access management (IAM) solutions, enforcing least-privilege principles to protect critical systems and data lakes.',
  },
  {
    id: 'vulnerability',
    title: 'Vulnerability Assessment',
    icon: Search,
    description: 'Continuous scanning and penetration testing to identify and remediate security loopholes before they can be exploited by malicious actors.',
  },
  {
    id: 'audits',
    title: 'Security Audits',
    icon: ShieldCheck,
    description: 'Rigorous, independent evaluations of your security posture, providing actionable insights and roadmaps for continuous improvement.',
  }
];

const FAQS = [
  {
    question: "How do you ensure our data architecture complies with GDPR and CCPA?",
    answer: "We employ a 'privacy by design' methodology. This involves comprehensive data mapping, implementing automated consent management, establishing right-to-be-forgotten protocols, and ensuring strict data minimization and purpose limitation across your entire infrastructure."
  },
  {
    question: "What encryption standards do you implement for cloud data?",
    answer: "We utilize AES-256 encryption for data at rest across all storage layers, and enforce TLS 1.3 for all data in transit. We also support customer-managed encryption keys (CMEK) and advanced key management systems (KMS) for organizations requiring granular cryptographic control."
  },
  {
    question: "How frequently should we conduct security audits and vulnerability assessments?",
    answer: "For enterprise environments, we recommend continuous automated vulnerability scanning integrated into your CI/CD pipelines (DevSecOps), coupled with comprehensive manual penetration testing conducted at least bi-annually or after any major architectural change."
  },
  {
    question: "Can you help us recover and secure our infrastructure after a data breach?",
    answer: "Yes. Our incident response team can help identify the breach vector, contain the threat, recover compromised systems, and deploy immediate structural remediations (such as zero-trust architecture) to prevent future occurrences."
  }
];

export default function DataPrivacySecurityServices({ onOpenEstimator, onNavigateTo }: DataPrivacySecurityServicesProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="space-y-0 text-zinc-900 bg-white">
      
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden bg-zinc-50 border-b border-zinc-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-vd-red rounded font-mono text-[10px] uppercase tracking-widest font-black">
              <Shield className="w-3.5 h-3.5" />
              Enterprise Protection
            </div>
            
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 tracking-tight leading-none">
              Data Privacy & <br className="hidden sm:inline" />
              <span className="text-vd-red">Security Services</span>
            </h1>
            
            <p className="text-zinc-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              Safeguard your digital assets with enterprise-grade protection. We architect resilient data privacy frameworks that ensure compliance, build trust, and defend against evolving threats.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenEstimator}
                className="bg-vd-red text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded hover:bg-red-700 transition-colors cursor-pointer shadow-lg shadow-red-100/50"
              >
                Secure Your Data Now
              </button>
              
              <a
                href="#services"
                className="bg-zinc-900 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded hover:bg-zinc-800 transition-colors cursor-pointer text-center"
              >
                Explore Services
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden border border-zinc-200 shadow-2xl bg-zinc-950 group">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60 z-10" />
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOrZEKuLGYeSa83y17y_Rv4sNr1OzZYMMe45lNQjAw5CaP0cm38D2KBaOwQlI2CkxeiWnB-EQqwWcSBiLAwas1DlyDhO7tPAYDxc671AU8pFDzo4cAYPdtKqOLPUPay-Z3NJEPO5q5RehBz9CegaL6Bv4dLYfovhxCTuO0lypvHtbkIs9YsaaCh-2z1vfPXOzEXx4Q2-gB-9Dpg5V2pjqVMf_sBpM_C29hkn9t0csxchB-hUb-u257u6jEZ68F2GUnLtJ4_H50fjM"
                alt="Cybersecurity abstraction"
                className="w-full aspect-[4/3] object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 space-y-2">
                <span className="text-xxs font-mono text-red-400 uppercase tracking-widest font-black block">Zero-Trust Architecture</span>
                <p className="text-xs text-zinc-300 font-medium">Protecting critical infrastructure with precision engineering.</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 2: ENSURING ENTERPRISE-GRADE SECURITY */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-xxs font-mono uppercase font-black text-vd-red tracking-widest block">Proactive Defense</span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
            Ensuring Enterprise-Grade Security
          </h2>
          <div className="w-16 h-1 bg-vd-red mx-auto" />
          <p className="text-zinc-600 text-base md:text-lg leading-relaxed pt-4">
            In a landscape of continuous regulatory shifts and highly sophisticated cyber threats, reactive security is insufficient. We embed privacy by design into your data architecture, creating proactive defenses that protect your reputation and bottom line.
          </p>
        </div>
      </section>

      {/* SECTION 3: COMPLIANCE & SECURITY GRID */}
      <section id="services" className="py-24 bg-zinc-50 border-y border-zinc-100 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-headline text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
              Core Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_CAPABILITIES.map((capability, idx) => {
              const Icon = capability.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white p-8 border border-zinc-200 rounded-lg hover:border-vd-red hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-red-50 text-vd-red rounded flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-headline text-xl font-bold text-zinc-950 mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 4: SECURITY-FIRST CULTURE */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:48px_48px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-xxs font-mono uppercase font-black text-red-500 tracking-widest block">Value Proposition</span>
                <h2 className="font-headline text-3xl sm:text-4xl font-black text-white tracking-tight">
                  Building a Security-First Culture
                </h2>
                <div className="w-16 h-1 bg-vd-red" />
              </div>
              
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                True data protection extends beyond firewalls and encryption algorithms. It requires a fundamental shift in organizational culture. We help you establish comprehensive data governance frameworks where security is treated as a core engineering principle, not an afterthought.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    icon: EyeOff,
                    title: "Privacy by Design",
                    desc: "Embedding data protection logic directly into the software development lifecycle."
                  },
                  {
                    icon: Shield,
                    title: "Zero-Trust Architecture",
                    desc: "Eliminating implicit trust to strictly verify every access request, regardless of origin."
                  },
                  {
                    icon: Server,
                    title: "Continuous Compliance",
                    desc: "Automated drift detection to ensure persistent alignment with global regulations."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                    <div className="p-2 bg-red-500/10 text-red-400 rounded shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-white text-sm mb-1">{item.title}</h4>
                      <p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square sm:aspect-auto sm:h-[600px] rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900">
              <img 
                src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=800&q=80" 
                alt="Secure Server Infrastructure"
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ SECTION */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          
          <div className="text-center space-y-4">
            <h2 className="font-headline text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
              Security & Compliance FAQs
            </h2>
            <p className="text-zinc-600 text-sm">
              Common questions regarding our data protection methodologies and regulatory alignment.
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

      {/* SECTION 6: BOTTOM CTA SECTION */}
      <section className="py-24 bg-vd-red text-white text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none">
            Ready to fortify your data?
          </h2>
          <p className="text-red-100 text-base md:text-lg">
            Don't wait for a breach to prioritize security. Partner with DevCoWise to build a highly resilient, compliant data infrastructure today.
          </p>
          
          <div className="pt-4">
            <button
              onClick={onOpenEstimator}
              className="inline-block bg-white text-vd-red font-bold text-xs uppercase tracking-widest px-10 py-5 rounded hover:bg-zinc-100 transition-colors cursor-pointer shadow-lg shadow-black/10"
            >
              Secure Your Data Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
