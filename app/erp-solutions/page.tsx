'use client';

import { useRouter } from 'next/navigation';
import ErpSolutionsPage from '@/components/pages/ErpSolutionsPage';
import { useEstimator } from '@/components/context/EstimatorContext';

export default function ErpSolutionsRoutePage() {
  const router = useRouter();
  const { openEstimator } = useEstimator();

  const handleNavigateTo = (page: string) => {
    if (page === 'services') router.push('/services');
    else if (page === 'contact') router.push('/contact');
    else router.push('/');
  };

  return <ErpSolutionsPage onOpenEstimator={openEstimator} onNavigateTo={handleNavigateTo} />;
}
