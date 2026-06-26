'use client';

import { useRouter } from 'next/navigation';
import DataServices from '@/components/pages/DataServices';
import { useEstimator } from '@/components/context/EstimatorContext';

export default function DataServicesPage() {
  const router = useRouter();
  const { openEstimator } = useEstimator();

  const handleNavigateTo = (page: string) => {
    if (page === 'services') router.push('/services');
    else router.push('/services');
  };

  return <DataServices onOpenEstimator={openEstimator} onNavigateTo={handleNavigateTo} />;
}
