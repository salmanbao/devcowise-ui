'use client';

import { useRouter } from 'next/navigation';
import CookiePolicyPage from '@/components/pages/CookiePolicyPage';

export default function CookiesPage() {
  const router = useRouter();
  const handleNavigateTo = (page: string) => {
    if (page === 'contact') router.push('/contact');
    else router.push('/');
  };

  return <CookiePolicyPage onNavigateTo={handleNavigateTo} />;
}
