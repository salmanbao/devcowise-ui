'use client';

import { useRouter } from 'next/navigation';
import DataStrategyServices from '@/components/pages/DataStrategyServices';
import { useEstimator } from '@/components/context/EstimatorContext';

export default function DataStrategyPage() {
  const router = useRouter();
  const { openEstimator } = useEstimator();

  const handleNavigateTo = (page: string) => {
    if (page === 'services') router.push('/services');
    else if (page === 'data-services') router.push('/services/data');
    else router.push('/services');
  };

  return <DataStrategyServices onOpenEstimator={openEstimator} onNavigateTo={handleNavigateTo} />;
}
