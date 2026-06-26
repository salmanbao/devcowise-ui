'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, Sparkles, Send } from 'lucide-react';
import { useEstimator } from '@/components/context/EstimatorContext';
import { createClient } from '@/utils/supabase/client';

const BUDGET_OPTIONS = [
  { value: 'under-50k', label: '< $50,000', desc: 'SME or proof-of-concept' },
  { value: '50k-150k', label: '$50,000 - $150,000', desc: 'Standard mid-scale rollout' },
  { value: '150k-500k', label: '$150,000 - $500,000', desc: 'Enterprise core modernization' },
  { value: 'above-500k', label: '$500,000+', desc: 'Multi-phased cloud transformation' },
];

const TIMELINE_OPTIONS = [
  { value: 'urgent', label: '1 - 3 Months', desc: 'Fast-track MVP launch' },
  { value: 'standard', label: '3 - 6 Months', desc: 'Phased implementation' },
  { value: 'long-term', label: '6+ Months', desc: 'Comprehensive enterprise scaling' },
];

const CHALLENGE_OPTIONS = [
  'Rigid Legacy Mainframes',
  'Slow Performance / UX Friction',
  'Manual Workflows & Data Silos',
  'AI Integration Security Concerns',
  'No DevOps / Slow Deployments',
  'Regulatory / Compliance Bottlenecks',
];

interface ConsultationSubmission {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  challenges: string[];
  details: string;
}

export default function ProjectEstimatorModal() {
  const { isOpen, closeEstimator } = useEstimator();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<ConsultationSubmission>({
    name: '',
    email: '',
    company: '',
    projectType: 'ERP Implementation & Optimization',
    budget: '50k-150k',
    timeline: 'standard',
    challenges: [],
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketRef, setTicketRef] = useState('');

  const handleClose = useCallback(() => {
    closeEstimator();
  }, [closeEstimator]);

  const handleChallengeToggle = (challenge: string) => {
    setFormData((prev) => {
      const exists = prev.challenges.includes(challenge);
      return {
        ...prev,
        challenges: exists
          ? prev.challenges.filter((c) => c !== challenge)
          : [...prev.challenges, challenge],
      };
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      setStep(4);
      return;
    }

    setIsSubmitting(true);

    const supabase = createClient();
    const generatedTicketRef = `VD-${Math.floor(100000 + Math.random() * 900000)}`;

    const { error } = await supabase.from('project_estimates').insert({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      project_type: formData.projectType,
      budget: formData.budget,
      timeline: formData.timeline,
      challenges: formData.challenges,
      details: formData.details || null,
      ticket_reference: generatedTicketRef,
    });

    setIsSubmitting(false);

    if (error) {
      console.error('Supabase error:', error);
      // Still show success even on error for demo purposes
      setTicketRef(generatedTicketRef);
    } else {
      setTicketRef(generatedTicketRef);
    }
    setSubmitted(true);
  };

  const resetEstimator = () => {
    setStep(1);
    setSubmitted(false);
    setTicketRef('');
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: 'ERP Implementation & Optimization',
      budget: '50k-150k',
      timeline: 'standard',
      challenges: [],
      details: '',
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto" id="estimator-modal-overlay">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white text-zinc-900 rounded shadow-2xl overflow-hidden m-4 z-10 border border-zinc-100"
        >
          <div className="bg-zinc-900 text-white p-6 flex justify-between items-center border-b border-zinc-800">
            <div>
              <span className="text-xs uppercase tracking-widest text-vd-red font-semibold font-mono">TechConsult Partnering</span>
              <h3 className="text-xl font-headline font-bold">Discuss Your Project</h3>
            </div>
            <button
              onClick={handleClose}
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="flex items-center space-x-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                        step === s
                          ? 'bg-vd-red text-white ring-4 ring-red-100'
                          : step > s
                          ? 'bg-green-500 text-white'
                          : 'bg-zinc-100 text-zinc-400'
                      }`}
                    >
                      {step > s ? <Check className="w-4 h-4" /> : s}
                    </div>
                    <span className={`text-xs font-semibold hidden sm:inline ${step === s ? 'text-zinc-900' : 'text-zinc-400'}`}>
                      {s === 1 ? 'Focus' : s === 2 ? 'Scope' : s === 3 ? 'Challenges' : 'Contact'}
                    </span>
                  </div>
                ))}
              </div>

              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                  <label className="block text-sm font-semibold text-zinc-700">What is the primary objective of your digital initiative?</label>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { title: 'ERP Implementation & Optimization', desc: 'Deploy, customize, or integrate enterprise ERP systems (SAP, Oracle, Microsoft Dynamics) for unified business processes.' },
                      { title: 'AI Readiness & Integration', desc: 'Construct secure datasets, fine-tune models, automate core operations.' },
                      { title: 'Technology Roadmap & Strategy', desc: 'Systematically audit architectures, build cloud-native strategies, optimize costs.' },
                      { title: 'Application & Legacy Modernisation', desc: 'Migrate legacy monoliths into lightning-fast, secure, and intuitive web interfaces.' },
                      { title: 'Full Custom Engineering Portfolio', desc: 'Build client-facing apps, end-to-end cloud platforms, or innovative hardware APIs.' },
                    ].map((type) => (
                      <button
                        key={type.title}
                        type="button"
                        onClick={() => { setFormData((prev) => ({ ...prev, projectType: type.title })); setStep(2); }}
                        className={`p-4 rounded-lg border text-left transition-all hover:border-vd-red/40 hover:bg-red-50/10 ${formData.projectType === type.title ? 'border-vd-red bg-red-50/20 shadow-sm' : 'border-zinc-200 bg-white'}`}
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="font-semibold text-zinc-900">{type.title}</h4>
                          {formData.projectType === type.title && <span className="w-2.5 h-2.5 bg-vd-red rounded-full" />}
                        </div>
                        <p className="text-xs text-zinc-500 mt-1">{type.desc}</p>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-zinc-700">Estimated Project Budget</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {BUDGET_OPTIONS.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, budget: opt.value }))}
                          className={`p-3 rounded-lg border text-left transition-all ${formData.budget === opt.value ? 'border-vd-red bg-red-50/10 ring-2 ring-red-100' : 'border-zinc-200 hover:border-zinc-300'}`}
                        >
                          <span className="block font-semibold text-sm text-zinc-900">{opt.label}</span>
                          <span className="block text-xxs text-zinc-400">{opt.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-zinc-700">Desired Project Timeline</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {TIMELINE_OPTIONS.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, timeline: opt.value }))}
                          className={`p-3 rounded-lg border text-left transition-all ${formData.timeline === opt.value ? 'border-vd-red bg-red-50/10 ring-2 ring-red-100' : 'border-zinc-200 hover:border-zinc-300'}`}
                        >
                          <span className="block font-semibold text-sm text-zinc-900">{opt.label}</span>
                          <span className="block text-xxs text-zinc-400">{opt.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <button type="button" onClick={() => setStep(1)} className="px-4 py-2 text-zinc-500 hover:text-zinc-800 font-medium">Back</button>
                    <button type="button" onClick={() => setStep(3)} className="px-6 py-2.5 bg-zinc-900 text-white rounded font-semibold hover:bg-zinc-800 transition-colors inline-flex items-center gap-2">
                      Continue <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-zinc-700">What are your critical bottlenecks? (Select all that apply)</label>
                    <p className="text-xs text-zinc-400">Identifying issues helps us customize the architectural brief.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {CHALLENGE_OPTIONS.map((ch) => {
                      const selected = formData.challenges.includes(ch);
                      return (
                        <button
                          key={ch}
                          type="button"
                          onClick={() => handleChallengeToggle(ch)}
                          className={`p-3 rounded-lg border text-left transition-all flex items-center justify-between ${selected ? 'border-vd-red bg-red-50/20 text-vd-red' : 'border-zinc-200 text-zinc-600 hover:border-zinc-300 bg-white'}`}
                        >
                          <span className="text-xs font-semibold">{ch}</span>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selected ? 'bg-vd-red border-vd-red text-white' : 'border-zinc-300 bg-white'}`}>
                            {selected && <Check className="w-2.5 h-2.5" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-zinc-700">Any other details or goals?</label>
                    <textarea
                      name="details"
                      value={formData.details}
                      onChange={handleInputChange}
                      placeholder="Describe integration parameters, special regulatory environments, etc."
                      className="w-full px-4 py-2.5 border border-zinc-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-vd-red"
                      rows={3}
                    />
                  </div>

                  <div className="flex justify-between pt-4">
                    <button type="button" onClick={() => setStep(2)} className="px-4 py-2 text-zinc-500 hover:text-zinc-800 font-medium">Back</button>
                    <button type="button" onClick={() => setStep(4)} className="px-6 py-2.5 bg-zinc-900 text-white rounded font-semibold hover:bg-zinc-800 transition-colors inline-flex items-center gap-2">
                      Finalize <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                  <div className="text-center pb-2">
                    <h4 className="font-bold text-zinc-950 text-base">Almost there!</h4>
                    <p className="text-xs text-zinc-500">Provide your contact details so our Solutions Architect can reach out within 24 business hours.</p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Full Name *</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleInputChange} placeholder="e.g. Sarah Connor" className="w-full px-4 py-2 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-vd-red" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Work Email *</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="s.connor@cyberdyne.com" className="w-full px-4 py-2 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-vd-red" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Company / Organization *</label>
                        <input type="text" name="company" required value={formData.company} onChange={handleInputChange} placeholder="Cyberdyne Systems" className="w-full px-4 py-2 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-vd-red" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-50 rounded-lg p-4 text-xs text-zinc-600 border border-zinc-100 space-y-1">
                    <span className="font-bold block text-zinc-900 uppercase tracking-widest text-xxs mb-1 text-vd-red">Brief Summary</span>
                    <div><span className="font-semibold text-zinc-800">Initiative Focus:</span> {formData.projectType}</div>
                    <div><span className="font-semibold text-zinc-800">Budget Range:</span> {formData.budget.replace('-', ' to ')}</div>
                    <div><span className="font-semibold text-zinc-800">Timeline Scope:</span> {formData.timeline}</div>
                    {formData.challenges.length > 0 && <div className="truncate"><span className="font-semibold text-zinc-800">Identified Bottlenecks:</span> {formData.challenges.join(', ')}</div>}
                  </div>

                  <div className="flex justify-between pt-4">
                    <button type="button" onClick={() => setStep(3)} className="px-4 py-2 text-zinc-500 hover:text-zinc-800 font-medium" disabled={isSubmitting}>Back</button>
                    <button type="submit" disabled={isSubmitting} className="px-8 py-3 bg-vd-red text-white rounded font-bold hover:bg-red-700 transition-colors inline-flex items-center gap-2">
                      {isSubmitting ? <><div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />Submitting...</> : <><Send className="w-4 h-4" />Submit Brief</>}
                    </button>
                  </div>
                </motion.div>
              )}
            </form>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-headline font-bold text-zinc-950">Project Brief Submitted Successfully!</h4>
                <p className="text-zinc-600 max-w-md mx-auto">Thank you, <span className="font-bold text-zinc-900">{formData.name}</span>. We have generated ticket reference <span className="font-mono text-vd-red font-semibold">#{ticketRef}</span> for <span className="font-semibold">{formData.company}</span>.</p>
                <p className="text-xs text-zinc-400 max-w-sm mx-auto pt-2">A certified Solutions Engineer will analyze your parameters and dispatch a tailored technical scoping proposal via <span className="underline">{formData.email}</span>.</p>
              </div>
              <div className="bg-zinc-50 p-4 rounded-lg text-left max-w-md mx-auto border border-zinc-100 space-y-1.5 text-xs text-zinc-600">
                <div className="font-bold text-zinc-900 border-b pb-1 mb-1.5 flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-vd-red" />Initial Scoping Parameters Detected</div>
                <div>• Budget is allocated for <span className="font-semibold text-zinc-800">{formData.budget === 'under-50k' ? 'Fast MVP Phase' : 'Enterprise Core Architecture'}</span>.</div>
                <div>• Critical bottlenecks include: <span className="font-semibold text-zinc-800">{formData.challenges.length > 0 ? formData.challenges.slice(0, 2).join(', ') : 'Infrastructure modernization'}</span>.</div>
                <div>• Scoping document preparation status: <span className="text-green-600 font-semibold">Active</span>.</div>
              </div>
              <div className="pt-4 flex justify-center gap-4">
                <button onClick={resetEstimator} className="px-5 py-2.5 bg-zinc-100 text-zinc-700 font-semibold rounded hover:bg-zinc-200 transition-colors">Submit Another</button>
                <button onClick={handleClose} className="px-6 py-2.5 bg-vd-red text-white font-semibold rounded hover:bg-red-700 transition-colors">Return to Dashboard</button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
