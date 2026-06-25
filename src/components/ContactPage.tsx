import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Send,
  Globe,
  MessageSquare
} from 'lucide-react';

interface ContactPageProps {
  onNavigateTo: (page: any) => void;
}

const OFFICES = [
  {
    city: 'London, UK',
    address: 'Level 39, One Canada Square, Canary Wharf, E14 5AB',
    coordinates: '51.5048° N, 0.0195° W'
  },
  {
    city: 'Dubai, UAE',
    address: 'Building 16, Dubai Internet City, PO Box 500001',
    coordinates: '25.1011° N, 55.1610° E'
  },
  {
    city: 'Karachi, PK',
    address: 'NIC Building, Main Shahrah-e-Faisal, Block 6 PECHS',
    coordinates: '24.8607° N, 67.0011° E'
  }
];

export default function ContactPage({ onNavigateTo }: ContactPageProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission would go here
    alert('Thank you for reaching out. Our engineering team will contact you shortly.');
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 max-w-4xl"
          >
            <span className="font-mono text-[10px] text-vd-red font-black uppercase tracking-[0.3em] block">Get in Touch</span>
            <h1 className="font-headline text-5xl md:text-7xl font-black text-zinc-950 tracking-tight leading-none">
              Let's Build the <span className="text-vd-red">Future Together</span>
            </h1>
            <p className="text-zinc-600 text-lg md:text-xl max-w-2xl leading-relaxed">
              Reach out to discuss how our engineering-first consultancy can accelerate your digital transformation and build robust, scalable solutions for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content: Form & Info */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 bg-white border border-zinc-100 p-8 md:p-12 rounded shadow-xl shadow-zinc-200/50">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] font-black uppercase tracking-widest text-zinc-500 block">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded px-4 py-4 focus:border-vd-red focus:ring-0 outline-none transition-all font-body text-zinc-900"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] font-black uppercase tracking-widest text-zinc-500 block">Work Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@company.com"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded px-4 py-4 focus:border-vd-red focus:ring-0 outline-none transition-all font-body text-zinc-900"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] font-black uppercase tracking-widest text-zinc-500 block">Company</label>
                    <input 
                      type="text" 
                      placeholder="Organization Name"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded px-4 py-4 focus:border-vd-red focus:ring-0 outline-none transition-all font-body text-zinc-900"
                      value={formState.company}
                      onChange={(e) => setFormState({...formState, company: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] font-black uppercase tracking-widest text-zinc-500 block">Service Interest</label>
                    <select 
                      className="w-full bg-zinc-50 border border-zinc-200 rounded px-4 py-4 focus:border-vd-red focus:ring-0 outline-none transition-all font-body text-zinc-900 cursor-pointer appearance-none"
                      value={formState.service}
                      onChange={(e) => setFormState({...formState, service: e.target.value})}
                    >
                      <option value="">Select an area of expertise</option>
                      <option value="software">Software Engineering</option>
                      <option value="data">Data & Analytics</option>
                      <option value="cloud">Cloud Architecture</option>
                      <option value="strategy">Digital Strategy</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] font-black uppercase tracking-widest text-zinc-500 block">Project Details</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell us about your technical challenges..."
                    className="w-full bg-zinc-50 border border-zinc-200 rounded px-4 py-4 focus:border-vd-red focus:ring-0 outline-none transition-all font-body text-zinc-900 resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full md:w-auto bg-vd-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-[0.2em] px-10 py-5 rounded transition-all shadow-lg shadow-red-900/20 inline-flex items-center justify-center gap-3"
                >
                  Send Inquiry
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Right: Direct Contact & Offices */}
            <div className="lg:col-span-5 space-y-12">
              
              {/* Direct Contact */}
              <div className="bg-zinc-50 border border-zinc-100 p-8 rounded space-y-8">
                <h3 className="font-headline text-2xl font-black text-zinc-950 flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-vd-red" />
                  Direct Contact
                </h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-white border border-zinc-200 rounded flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-vd-red" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] font-black uppercase tracking-widest text-zinc-500">General Inquiries</p>
                      <a href="mailto:hello@venturedive.com" className="text-zinc-900 font-bold hover:text-vd-red transition-colors">hello@venturedive.com</a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-white border border-zinc-200 rounded flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-vd-red" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] font-black uppercase tracking-widest text-zinc-500">New Business</p>
                      <a href="tel:+18005550199" className="text-zinc-900 font-bold hover:text-vd-red transition-colors">+1 (800) 555-0199</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Global Presence */}
              <div className="space-y-8">
                <h3 className="font-headline text-2xl font-black text-zinc-950 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-vd-red" />
                  Global Presence
                </h3>
                
                <div className="space-y-8">
                  {OFFICES.map((office) => (
                    <div key={office.city} className="flex gap-4 group">
                      <div className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded flex items-center justify-center shrink-0 group-hover:bg-vd-red group-hover:text-white transition-colors duration-300">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-headline font-black text-zinc-900">{office.city}</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">{office.address}</p>
                        <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest pt-2">{office.coordinates}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Map Illustration Placeholder */}
      <section className="py-24 px-6 bg-zinc-950 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNdlf8hAAMV_2GvrrASK7nNByS6PoXmIEO81KtVDEryBx5A-JFF68yiDZICfwclRnay4OTqoiRUW4DYFhgjld9w5esf0prXy3rSROqbd9-5cQ96_2fl7h5xjPjcrW-Zkw00a6LzSUzMSHaf0tRDJk790hVaYaLGD-EBywNoDxfsbzAu-TSirqb_pZZzzvnmbgK9q86SUb0s9_zmqoJdScKasKm-ofytb8rSk0Gei0JUEIb9egVa_-2TOmR12MuPTJpqV8Ct8SvvFY" 
            alt="World Map" 
            className="w-full h-full object-cover grayscale invert"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="font-headline text-3xl md:text-5xl font-black text-white tracking-tight">
            Engineering Across Borders.
          </h2>
        </div>
      </section>
    </div>
  );
}
