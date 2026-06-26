'use client';

import { useRouter } from 'next/navigation';
import DataEngineeringServices from '@/components/pages/DataEngineeringServices';
import { useEstimator } from '@/components/context/EstimatorContext';

export default function DataEngineeringPage() {
  const router = useRouter();
  const { openEstimator } = useEstimator();

  const handleNavigateTo = (page: string) => {
    if (page === 'services') router.push('/services');
    else if (page === 'data-services') router.push('/services/data');
    else router.push('/services');
  };

  return <DataEngineeringServices onOpenEstimator={openEstimator} onNavigateTo={handleNavigateTo} />;
}
