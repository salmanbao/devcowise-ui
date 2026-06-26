'use client';

import { useRouter } from 'next/navigation';
import DevOpsServices from '@/components/pages/DevOpsServices';
import { useEstimator } from '@/components/context/EstimatorContext';

export default function DevOpsPage() {
  const router = useRouter();
  const { openEstimator } = useEstimator();

  const handleNavigateTo = (page: string) => {
    if (page === 'services') router.push('/services');
    else router.push('/services');
  };

  return <DevOpsServices onOpenEstimator={openEstimator} onNavigateTo={handleNavigateTo} />;
}
