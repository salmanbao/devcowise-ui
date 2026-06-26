import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | DevCoWise',
  description: 'Engineering excellence meets strategic design.',
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono">Company Philosophy</span>
          <h2 className="font-headline text-4xl font-extrabold text-zinc-950">Engineering Excellence meets Strategic Design</h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            At DevCoWise, we partner with modern enterprises to design, build, and scale high-fidelity software architectures that move markets. Operating as an extension of your product organization, our cross-functional teams prioritize scalable clean-code, beautiful interactive interfaces, and secure backend operations.
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

      <div className="space-y-8 pt-4 border-t border-zinc-100">
        <div className="space-y-2">
          <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono">Expert Insights</span>
          <h3 className="font-headline text-2xl sm:text-3xl font-bold text-zinc-950">DevCoWise Tech Radar</h3>
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
    </div>
  );
}
