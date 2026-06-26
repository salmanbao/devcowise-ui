'use client';

import { useRouter } from 'next/navigation';
import CloudInfrastructureServices from '@/components/pages/CloudInfrastructureServices';
import { useEstimator } from '@/components/context/EstimatorContext';

export default function CloudInfrastructurePage() {
  const router = useRouter();
  const { openEstimator } = useEstimator();

  const handleNavigateTo = (page: string) => {
    if (page === 'services') router.push('/services');
    else if (page === 'data-services') router.push('/services/data');
    else router.push('/services');
  };

  return <CloudInfrastructureServices onOpenEstimator={openEstimator} onNavigateTo={handleNavigateTo} />;
}
