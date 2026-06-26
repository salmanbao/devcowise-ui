'use client';

import { useRouter } from 'next/navigation';
import DigitalAssessment from '@/components/pages/DigitalAssessment';
import { useEstimator } from '@/components/context/EstimatorContext';

export default function AssessmentPage() {
  const router = useRouter();
  const { openEstimator } = useEstimator();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
      <div className="space-y-3 text-center max-w-2xl mx-auto">
        <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono">Assessment Audit Tool</span>
        <h2 className="font-headline text-4xl font-black text-zinc-950">Digital Transformation Diagnostic</h2>
        <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
          Evaluate your operational readiness for automation, infrastructure elasticity, and team agility. Take the 4-step diagnostic to generate your custom action report.
        </p>
      </div>
      <DigitalAssessment onOpenEstimator={openEstimator} />
    </div>
  );
}
