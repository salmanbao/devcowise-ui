/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CASE_STUDIES } from '../data';
import { Search, Server, TrendingUp, HelpCircle, FileText, CheckCircle2 } from 'lucide-react';

export default function CaseStudiesGrid() {
  const [activeTab, setActiveTab] = useState<'All' | 'FinTech' | 'HealthTech' | 'Logistics' | 'Retail'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(CASE_STUDIES[0].id);

  // Filter case studies
  const filteredCases = CASE_STUDIES.filter((cs) => {
    const matchesTab = activeTab === 'All' || cs.industry === activeTab;
    const matchesSearch =
      cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  const selectedCase = CASE_STUDIES.find((cs) => cs.id === selectedCaseId) || CASE_STUDIES[0];

  const tabs: ('All' | 'FinTech' | 'HealthTech' | 'Logistics' | 'Retail')[] = [
    'All',
    'FinTech',
    'HealthTech',
    'Logistics',
    'Retail',
  ];

  return (
    <div className="space-y-8" id="case-studies-explorer">
      {/* Filters and search box */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-zinc-50 p-4 rounded border border-zinc-200/50">
        {/* Industry Tabs */}
        <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                // Auto-select the first item in the filtered list
                const firstFiltered = CASE_STUDIES.find((c) => tab === 'All' || c.industry === tab);
                if (firstFiltered) setSelectedCaseId(firstFiltered.id);
              }}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-all ${
                activeTab === tab
                  ? 'bg-vd-red text-white shadow-sm shadow-red-100'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 bg-white border border-zinc-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72 shrink-0">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search stack, title, scope..."
            className="w-full pl-10 pr-4 py-2.5 border border-zinc-200 rounded text-xs bg-white focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-vd-red text-zinc-800 font-semibold"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* List of Case Studies matching filters */}
        <div className="col-span-1 lg:col-span-5 space-y-3 max-h-[580px] overflow-y-auto pr-2" id="cases-list">
          <AnimatePresence mode="popLayout">
            {filteredCases.length > 0 ? (
              filteredCases.map((cs) => (
                <motion.button
                  key={cs.id}
                  layoutId={`cs-item-${cs.id}`}
                  onClick={() => setSelectedCaseId(cs.id)}
                  className={`w-full p-4 text-left rounded border transition-all duration-300 flex items-start gap-4 ${
                    selectedCaseId === cs.id
                      ? 'border-vd-red bg-red-50/15 shadow-sm ring-1 ring-red-100'
                      : 'border-zinc-200 bg-white hover:border-zinc-300'
                  }`}
                >
                  <img
                    src={cs.imageUrl}
                    alt={cs.title}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded object-cover bg-zinc-100 shrink-0 border border-zinc-100"
                  />
                  <div className="space-y-1 min-w-0">
                    <span className="text-xxs uppercase tracking-widest text-vd-red font-bold font-mono">
                      {cs.industry}
                    </span>
                    <h4 className="font-bold text-sm text-zinc-900 leading-tight truncate">
                      {cs.title}
                    </h4>
                    <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                      {cs.description}
                    </p>
                  </div>
                </motion.button>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 bg-white rounded border border-dashed border-zinc-200"
              >
                <p className="text-sm text-zinc-500 font-medium">No projects match your query parameters.</p>
                <button
                  onClick={() => {
                    setActiveTab('All');
                    setSearchQuery('');
                  }}
                  className="text-xs text-vd-red hover:underline font-bold mt-2"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Selected Case Study High Fidelity Detailed Preview Panel */}
        <div className="col-span-1 lg:col-span-7" id="case-detail-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCase.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded border border-zinc-200/80 shadow-md overflow-hidden"
            >
              {/* Cover Image with details */}
              <div className="relative h-56 bg-zinc-900 text-white flex items-end">
                <img
                  src={selectedCase.imageUrl}
                  alt={selectedCase.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover opacity-45 select-none pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                <div className="relative z-10 p-6 sm:p-8 space-y-2">
                  <span className="text-xxs font-mono uppercase tracking-widest bg-vd-red px-2.5 py-1 rounded font-bold">
                    {selectedCase.industry} Success Story
                  </span>
                  <h3 className="text-lg sm:text-2xl font-headline font-black text-white leading-tight">
                    {selectedCase.title}
                  </h3>
                </div>
              </div>

              {/* Sub-details */}
              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-zinc-700 text-sm leading-relaxed font-semibold">
                  {selectedCase.description}
                </p>

                {/* Challenges & Solutions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-2 p-4 bg-red-50/15 rounded border border-red-50 text-xs">
                    <h5 className="font-bold uppercase tracking-wider text-zinc-900 flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-vd-red" />
                      Operational Challenge
                    </h5>
                    <p className="text-zinc-600 leading-relaxed text-xs">{selectedCase.challenge}</p>
                  </div>

                  <div className="space-y-2 p-4 bg-emerald-50/15 rounded border border-emerald-50 text-xs">
                    <h5 className="font-bold uppercase tracking-wider text-zinc-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      TechConsult Solution
                    </h5>
                    <p className="text-zinc-600 leading-relaxed text-xs">{selectedCase.solution}</p>
                  </div>
                </div>

                {/* Metrics / Impact list */}
                <div className="space-y-3 pt-2">
                  <h5 className="text-xs uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-vd-red" />
                    Quantified Business Impact
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {selectedCase.impact.map((imp, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded border border-zinc-100 bg-zinc-50 flex flex-col justify-center"
                      >
                        <span className="text-xs font-bold text-zinc-800 leading-snug">{imp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Stack tags */}
                <div className="space-y-2 pt-2 border-t border-zinc-100">
                  <h5 className="text-xs uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5 text-vd-red" />
                    Transformation Architecture Stack
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCase.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-zinc-100 text-zinc-600 rounded text-xxs font-mono font-bold uppercase tracking-wider border border-zinc-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
