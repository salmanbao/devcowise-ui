'use client';

import { useRouter } from 'next/navigation';
import SolutionsEngineering from '@/components/pages/SolutionsEngineering';
import { useEstimator } from '@/components/context/EstimatorContext';

export default function SolutionsPage() {
  const router = useRouter();
  const { openEstimator } = useEstimator();

  const handleNavigateTo = (page: string) => {
    if (page === 'services') router.push('/services');
    else if (page === 'integration') router.push('/services/integration');
    else if (page === 'devops') router.push('/services/devops');
    else if (page === 'contact') router.push('/contact');
    else router.push('/services');
  };

  return <SolutionsEngineering onOpenEstimator={openEstimator} onNavigateTo={handleNavigateTo} />;
}
