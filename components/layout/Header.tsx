'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useEstimator } from '@/components/context/EstimatorContext';

const services = [
  { id: 'erp', label: 'ERP Solutions', href: '/erp-solutions' },
  { id: 'solutions', label: 'Solutions Engineering', href: '/services/solutions' },
  { id: 'integration', label: 'Systems Integration', href: '/services/integration' },
  { id: 'devops', label: 'DevOps Services', href: '/services/devops' },
  { id: 'cloud-infrastructure', label: 'Cloud Infrastructure', href: '/services/data/infrastructure' },
  { id: 'custom-apps', label: 'Custom Application Dev', href: '/services/custom-apps' },
  { id: 'ux-design', label: 'UX Design Services', href: '/services/ux-design' },
  { id: 'data-services', label: 'All Data Services', href: '/services/data' },
  { id: 'data-engineering', label: 'Data Engineering', href: '/services/data/engineering' },
  { id: 'cloud-data', label: 'Cloud Data Services', href: '/services/data/cloud' },
  { id: 'data-strategy', label: 'Data Strategy', href: '/services/data/strategy' },
  { id: 'data-privacy', label: 'Data Privacy & Security', href: '/services/data/privacy' },
  { id: 'qa', label: 'QA Automation & Testing', href: '/services/qa' },
  { id: 'services', label: 'All General Services', href: '/services' },
];

const navItems = [
  { id: 'solutions', label: 'Solutions', hasDropdown: true },
  { id: 'industries', label: 'Industries', href: '/industries' },
  { id: 'portfolio', label: 'Success Stories', href: '/portfolio' },
  { id: 'assessment', label: 'Maturity Audit', href: '/assessment' },
  { id: 'about', label: 'Company & Insights', href: '/about' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const { openEstimator } = useEstimator();

  const isServicesActive = pathname.startsWith('/services') || pathname.startsWith('/erp-solutions');

  const isActive = (item: typeof navItems[0]) => {
    if (item.href) return pathname === item.href;
    if (item.hasDropdown) return isServicesActive;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-100 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-headline text-2xl font-black tracking-tighter text-zinc-950 group-hover:text-vd-red transition-colors">
            DevCoWise
          </span>
          <span className="w-1.5 h-1.5 rounded bg-vd-red" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((nav) => (
            <div
              key={nav.id}
              className="relative py-2"
              onMouseEnter={() => { if (nav.hasDropdown) setServicesDropdownOpen(true); }}
              onMouseLeave={() => { if (nav.hasDropdown) setServicesDropdownOpen(false); }}
            >
              {nav.hasDropdown ? (
                <>
                  <button className={`relative font-semibold text-xs uppercase tracking-widest pb-1 transition-colors hover:text-vd-red ${
                    isActive(nav) ? 'text-vd-red' : 'text-zinc-500'
                  }`}>
                    {nav.label}
                    {isActive(nav) && (
                      <motion.div
                        layoutId="active-nav-line"
                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-vd-red"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 rounded border border-zinc-100 bg-white shadow-xl z-50 divide-y divide-zinc-100 py-1 overflow-hidden"
                      >
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            href={service.href}
                            onClick={() => setServicesDropdownOpen(false)}
                            className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest font-black text-zinc-500 hover:bg-zinc-50 hover:text-vd-red transition-colors cursor-pointer block"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={nav.href!}
                  className={`relative font-semibold text-xs uppercase tracking-widest pb-1 transition-colors hover:text-vd-red ${
                    isActive(nav) ? 'text-vd-red' : 'text-zinc-500'
                  }`}
                >
                  {nav.label}
                  {isActive(nav) && (
                    <motion.div
                      layoutId="active-nav-line"
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-vd-red"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); openEstimator(); }}
            className="hidden md:block bg-vd-red text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded hover:bg-red-700 transition-colors duration-200 shadow-md shadow-red-100/50"
          >
            Discuss Your Project
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-900 hover:text-vd-red transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-zinc-100 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <Link
                href="/services/solutions"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-left font-semibold text-sm uppercase tracking-wider py-2 transition-colors text-zinc-600 hover:text-vd-red"
              >
                Solutions Engineering
              </Link>
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={service.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-left pl-4 text-xs uppercase tracking-wider py-2 transition-colors text-zinc-500 hover:text-vd-red font-bold"
                >
                  ↳ {service.label}
                </Link>
              ))}
              {navItems.filter(n => !n.hasDropdown).map((nav) => (
                <Link
                  key={nav.id}
                  href={nav.href!}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-left font-semibold text-sm uppercase tracking-wider py-2 transition-colors text-zinc-600 hover:text-vd-red"
                >
                  {nav.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); openEstimator(); setMobileMenuOpen(false); }}
                className="w-full text-center bg-vd-red text-white font-bold text-sm uppercase tracking-widest py-3 rounded hover:bg-red-700 transition-colors"
              >
                Discuss Your Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
