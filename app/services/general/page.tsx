'use client';

import { useRouter } from 'next/navigation';
import TechConsultServices from '@/components/pages/TechConsultServices';
import { useEstimator } from '@/components/context/EstimatorContext';

export default function GeneralServicesPage() {
  const router = useRouter();
  const { openEstimator } = useEstimator();

  const handleNavigateTo = (page: string) => {
    if (page === 'services') router.push('/services');
    else router.push('/services');
  };

  return <TechConsultServices onOpenEstimator={openEstimator} onNavigateTo={handleNavigateTo} />;
}
