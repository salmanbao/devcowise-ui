'use client';

import { useRouter } from 'next/navigation';
import TechConsultServices from '@/components/pages/TechConsultServices';
import { useEstimator } from '@/components/context/EstimatorContext';

export default function ServicesPage() {
  const router = useRouter();
  const { openEstimator } = useEstimator();

  const handleNavigateTo = (page: string) => {
    if (page === 'services') {
      router.push('/services');
    } else if (page === 'industries') {
      router.push('/industries');
    } else if (page === 'portfolio') {
      router.push('/portfolio');
    } else if (page === 'assessment') {
      router.push('/assessment');
    } else if (page === 'about') {
      router.push('/about');
    } else if (page === 'integration') {
      router.push('/services/integration');
    } else if (page === 'devops') {
      router.push('/services/devops');
    } else if (page === 'solutions') {
      router.push('/services/solutions');
    }
  };

  return (
    <TechConsultServices
      onOpenEstimator={openEstimator}
      onNavigateTo={handleNavigateTo}
    />
  );
}
