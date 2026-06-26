'use client';

import { useRouter } from 'next/navigation';
import DataPrivacySecurityServices from '@/components/pages/DataPrivacySecurityServices';
import { useEstimator } from '@/components/context/EstimatorContext';

export default function DataPrivacyPage() {
  const router = useRouter();
  const { openEstimator } = useEstimator();

  const handleNavigateTo = (page: string) => {
    if (page === 'services') router.push('/services');
    else if (page === 'data-services') router.push('/services/data');
    else router.push('/services');
  };

  return <DataPrivacySecurityServices onOpenEstimator={openEstimator} onNavigateTo={handleNavigateTo} />;
}
