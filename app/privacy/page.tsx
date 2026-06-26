'use client';

import { useRouter } from 'next/navigation';
import PrivacyPolicyPage from '@/components/pages/PrivacyPolicyPage';

export default function PrivacyPage() {
  const router = useRouter();
  const handleNavigateTo = (page: string) => {
    if (page === 'contact') router.push('/contact');
    else router.push('/');
  };

  return <PrivacyPolicyPage onNavigateTo={handleNavigateTo} />;
}
