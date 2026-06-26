'use client';

import { useRouter } from 'next/navigation';
import TermsOfServicePage from '@/components/pages/TermsOfServicePage';

export default function TermsPage() {
  const router = useRouter();
  const handleNavigateTo = (page: string) => {
    if (page === 'contact') router.push('/contact');
    else router.push('/');
  };

  return <TermsOfServicePage onNavigateTo={handleNavigateTo} />;
}
