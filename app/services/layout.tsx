import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | DevCoWise',
  description: 'Comprehensive digital transformation services including solutions engineering, DevOps, data engineering, and more.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
