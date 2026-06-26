'use client';

import { useRouter } from 'next/navigation';
import CloudDataServices from '@/components/pages/CloudDataServices';
import { useEstimator } from '@/components/context/EstimatorContext';

export default function CloudDataPage() {
  const router = useRouter();
  const { openEstimator } = useEstimator();

  const handleNavigateTo = (page: string) => {
    if (page === 'services') router.push('/services');
    else if (page === 'data-services') router.push('/services/data');
    else router.push('/services');
  };

  return <CloudDataServices onOpenEstimator={openEstimator} onNavigateTo={handleNavigateTo} />;
}
