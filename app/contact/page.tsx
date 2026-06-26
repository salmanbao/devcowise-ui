'use client';

import { useRouter } from 'next/navigation';
import ContactPage from '@/components/pages/ContactPage';

export default function ContactPageWrapper() {
  const router = useRouter();
  const handleNavigateTo = (page: string) => {
    if (page === 'services') router.push('/services');
    else if (page === 'assessment') router.push('/assessment');
  };

  return <ContactPage onNavigateTo={handleNavigateTo} />;
}
