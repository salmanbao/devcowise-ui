import { Metadata } from 'next';
import CaseStudiesGrid from '@/components/pages/CaseStudiesGrid';

export const metadata: Metadata = {
  title: 'Success Stories | DevCoWise',
  description: 'Engineering outcomes realized across major industries.',
};

export default function PortfolioPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
      <div className="space-y-3 max-w-2xl">
        <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono">Case Studies</span>
        <h2 className="font-headline text-4xl font-extrabold text-zinc-950">Engineering Outcomes Realized</h2>
        <p className="text-zinc-500 text-sm sm:text-base">
          We don't just write software; we measure the impact. Browse actual client projects delivered across major industries, detailing core challenges, tech stacks, and quantified business improvements.
        </p>
      </div>
      <CaseStudiesGrid />
    </div>
  );
}
