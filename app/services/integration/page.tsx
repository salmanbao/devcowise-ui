'use client';

import { useRouter } from 'next/navigation';
import SystemsIntegration from '@/components/pages/SystemsIntegration';
import { useEstimator } from '@/components/context/EstimatorContext';

export default function IntegrationPage() {
  const router = useRouter();
  const { openEstimator } = useEstimator();

  const handleNavigateTo = (page: string) => {
    if (page === 'services') router.push('/services');
    else if (page === 'solutions') router.push('/services/solutions');
    else router.push('/services');
  };

  return <SystemsIntegration onOpenEstimator={openEstimator} onNavigateTo={handleNavigateTo} />;
}
