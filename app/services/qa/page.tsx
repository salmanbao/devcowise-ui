'use client';

import { useRouter } from 'next/navigation';
import QaTestingServices from '@/components/pages/QaTestingServices';
import { useEstimator } from '@/components/context/EstimatorContext';

export default function QaPage() {
  const router = useRouter();
  const { openEstimator } = useEstimator();

  const handleNavigateTo = (page: string) => {
    if (page === 'services') router.push('/services');
    else router.push('/services');
  };

  return <QaTestingServices onOpenEstimator={openEstimator} onNavigateTo={handleNavigateTo} />;
}
