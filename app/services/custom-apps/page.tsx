'use client';

import { useRouter } from 'next/navigation';
import CustomAppsServices from '@/components/pages/CustomAppsServices';
import { useEstimator } from '@/components/context/EstimatorContext';

export default function CustomAppsPage() {
  const router = useRouter();
  const { openEstimator } = useEstimator();

  const handleNavigateTo = (page: string) => {
    if (page === 'services') router.push('/services');
    else router.push('/services');
  };

  return <CustomAppsServices onOpenEstimator={openEstimator} onNavigateTo={handleNavigateTo} />;
}
