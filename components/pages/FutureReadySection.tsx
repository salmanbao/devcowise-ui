/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '../data';
import { Cpu, GitMerge, Code, ArrowRight, Target, Sparkles, Plus, Check } from 'lucide-react';

interface FutureReadySectionProps {
  onOpenEstimator: () => void;
}

export default function FutureReadySection({ onOpenEstimator }: FutureReadySectionProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('ai-readiness');

  const selectedService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  // Helper to map icon string to Lucide component
  const renderIcon = (name: string, className = "w-6 h-6") => {
    switch (name) {
      case 'Cpu':
        return <Cpu className={className} />;
      case 'GitMerge':
        return <GitMerge className={className} />;
      case 'Code':
        return <Code className={className} />;
      default:
        return <Cpu className={className} />;
    }
  };

  return (
    <div className="space-y-12" id="solutions-explorer">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-3">
          <span className="text-xxs uppercase tracking-widest text-vd-red font-black font-mono">Modern Core Architectures</span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Future-Ready Solutions
          </h2>
          <p className="font-body-lg text-sm sm:text-base text-zinc-400 max-w-2xl">
            Comprehensive services designed to modernize your infrastructure and accelerate your journey. Click any capability to explore implementation parameters.
          </p>
        </div>
        <button
          onClick={onOpenEstimator}
          className="px-6 py-3 bg-vd-red text-white text-xs sm:text-sm uppercase tracking-wider font-bold rounded hover:bg-red-700 transition-all duration-300 inline-flex items-center gap-2 group shrink-0"
        >
          Architect Briefing
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Interactive Bento Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Hand: High Fidelity Featured Capability Dashboard */}
        <div className="col-span-1 lg:col-span-7 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col justify-between min-h-[480px] shadow-2xl relative group">
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-radial-gradient from-vd-red/20 to-transparent" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-8 sm:p-10 space-y-6 flex-grow flex flex-col justify-between z-10"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-block px-3 py-1 bg-vd-red/20 text-vd-red font-bold text-xxs uppercase tracking-widest rounded border border-vd-red/30">
                    Core Capability
                  </div>
                  <div className="text-zinc-600">
                    {renderIcon(selectedService.iconName, "w-8 h-8 text-vd-red")}
                  </div>
                </div>

                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {selectedService.title}
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-xl">
                  {selectedService.description}
                </p>

                {/* Sub-capabilities list */}
                <div className="space-y-3.5 pt-4">
                  <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Technical Deliverables:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedService.subCapabilities.map((sub, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center gap-2 text-vd-red">
                          <Check className="w-4 h-4 shrink-0" />
                          <h5 className="font-bold text-xs text-white uppercase tracking-wider">{sub.title}</h5>
                        </div>
                        <p className="text-xxs text-zinc-400 pl-6 leading-relaxed">{sub.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Client Brief Box */}
              <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-1">
                  <span className="text-xxs uppercase tracking-widest text-zinc-500 font-bold block">Case brief: {selectedService.caseStudyBrief.client}</span>
                  <p className="text-xs font-bold text-zinc-300 italic">"{selectedService.caseStudyBrief.outcome}"</p>
                </div>
                <button
                  onClick={onOpenEstimator}
                  className="text-xs text-vd-red hover:text-white font-bold inline-flex items-center gap-1.5 transition-colors group-hover:gap-2 duration-300"
                >
                  Explore AI Solutions
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Hand: Accordion Selection Cards */}
        <div className="col-span-1 lg:col-span-5 flex flex-col gap-4">
          {SERVICES.map((s) => {
            const isSelected = selectedServiceId === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedServiceId(s.id)}
                className={`w-full text-left p-6 sm:p-8 rounded-xl border transition-all duration-300 flex flex-col justify-center relative cursor-pointer overflow-hidden group ${
                  isSelected
                    ? 'border-vd-red bg-zinc-900/90 shadow-lg shadow-black/30'
                    : 'border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800/50 hover:border-zinc-700'
                }`}
              >
                {/* Visual accent color pill on active selection */}
                {isSelected && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-vd-red" />
                )}

                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2.5 rounded-lg transition-colors ${isSelected ? 'bg-vd-red/20 text-vd-red' : 'bg-zinc-800 text-zinc-400 group-hover:text-vd-red'}`}>
                    {renderIcon(s.iconName, "w-6 h-6")}
                  </div>
                  <Plus className={`w-4 h-4 text-zinc-600 transition-transform duration-300 ${isSelected ? 'rotate-45 text-vd-red' : 'group-hover:text-zinc-400'}`} />
                </div>

                <h3 className={`font-headline text-lg sm:text-xl font-bold mb-2 transition-colors ${isSelected ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>
                  {s.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                  {s.tagline}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
