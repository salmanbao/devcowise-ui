'use client';

import { useRouter } from 'next/navigation';
import UXDesignServices from '@/components/pages/UXDesignServices';
import { useEstimator } from '@/components/context/EstimatorContext';

export default function UXDesignPage() {
  const router = useRouter();
  const { openEstimator } = useEstimator();

  const handleNavigateTo = (page: string) => {
    if (page === 'services') router.push('/services');
    else router.push('/services');
  };

  return <UXDesignServices onOpenEstimator={openEstimator} onNavigateTo={handleNavigateTo} />;
}
