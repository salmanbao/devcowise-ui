import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <Link href="/" className="flex items-center gap-1.5 font-headline text-lg font-black text-zinc-950 hover:text-vd-red transition-colors">
          DevCoWise
          <span className="w-1.5 h-1.5 rounded bg-vd-red" />
        </Link>

        <nav className="flex flex-wrap justify-center gap-6">
          <Link href="/privacy" className="font-medium text-xs uppercase tracking-wider text-zinc-500 hover:text-zinc-900 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="font-medium text-xs uppercase tracking-wider text-zinc-500 hover:text-zinc-900 transition-colors">Terms of Service</Link>
          <Link href="/cookies" className="font-medium text-xs uppercase tracking-wider text-zinc-500 hover:text-zinc-900 transition-colors">Cookie Policy</Link>
          <Link href="/contact" className="font-medium text-xs uppercase tracking-wider text-zinc-500 hover:text-zinc-900 transition-colors">Contact Us</Link>
        </nav>

        <div className="font-medium text-xs uppercase tracking-wider text-zinc-400 font-mono">
          © 2026 DevCoWise. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
