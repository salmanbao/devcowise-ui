/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ASSESSMENT_QUESTIONS } from '../data';
import { Check, ArrowRight, Award, Shield, Cpu, RefreshCw, Layers, Layout, Clock } from 'lucide-react';

interface DigitalAssessmentProps {
  onOpenEstimator: () => void;
}

export default function DigitalAssessment({ onOpenEstimator }: DigitalAssessmentProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { score: number; label: string; desc: string }>>({});
  const [showResult, setShowResult] = useState(false);

  // For the custom checklist recommendations
  const [checkedRecs, setCheckedRecs] = useState<Record<string, boolean>>({});

  const handleSelectOption = (score: number, label: string, desc: string) => {
    const q = ASSESSMENT_QUESTIONS[currentIdx];
    setAnswers((prev) => ({
      ...prev,
      [q.id.toString()]: { score, label, desc },
    }));

    if (currentIdx < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartAssessment = () => {
    setCurrentIdx(0);
    setAnswers({});
    setShowResult(false);
    setCheckedRecs({});
  };

  const toggleCheck = (id: string) => {
    setCheckedRecs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Compute stats
  const totalScore = (Object.values(answers) as { score: number; label: string; desc: string }[]).reduce((sum, item) => sum + item.score, 0);
  const maxScore = ASSESSMENT_QUESTIONS.length * 100;
  const percentage = Math.round((totalScore / maxScore) * 100);

  // Classification & customized details
  let classification = 'Legacy Native';
  let badgeColor = 'bg-red-50 text-red-600 border-red-200';
  let summaryText = '';
  let adviceItems: { id: string; title: string; text: string }[] = [];

  if (percentage <= 35) {
    classification = 'Legacy Architecture';
    badgeColor = 'bg-red-50 text-red-700 border-red-200';
    summaryText = 'Your core services and data pipelines rely heavily on legacy on-premise systems, resulting in significant operational friction, long sprint lead times, and restricted data availability.';
    adviceItems = [
      { id: 'l1', title: 'Legacy Strangler Pattern Strategy', text: 'Identify the highest-friction core component and wrap it with an API adapter instead of complete database rewrite.' },
      { id: 'l2', title: 'Establish Unified Data Pipelines', text: 'Deploy regular lightweight ETL scripts to move isolated spreadsheets and transactional logs to a cloud-based storage system.' },
      { id: 'l3', title: 'Responsive Frontend Pilot Project', text: 'Redesign your most frequently used internal customer dashboard to be responsive and touch-optimized.' }
    ];
  } else if (percentage <= 65) {
    classification = 'Transitioning Adaptive';
    badgeColor = 'bg-amber-50 text-amber-700 border-amber-200';
    summaryText = 'You have moved core computing loads to cloud-hosted VMs, but apps remain tightly coupled monoliths. Your processes are evolving, but releases require heavy manual orchestration.';
    adviceItems = [
      { id: 't1', title: 'Deconstruct Monolithic APIs', text: 'Migrate high-volume endpoints (like catalog search or accounts manager) to standalone serverless cloud functions.' },
      { id: 't2', title: 'Build Automated CI/CD Pipelines', text: 'Standardize builds with automated testing and continuous deploy stages, removing bi-weekly manual release windows.' },
      { id: 't3', title: 'AI Exploration Workshop', text: 'Draft safe guidelines for intellectual property and establish small PoC models utilizing custom embedding datasets.' }
    ];
  } else if (percentage <= 85) {
    classification = 'Agile Scale Pioneers';
    badgeColor = 'bg-teal-50 text-teal-700 border-teal-200';
    summaryText = 'You employ automated CI/CD processes, modern containerization, and responsive frontend layouts. Your systems are secure, but you are not yet leveraging model predictive automated agents.';
    adviceItems = [
      { id: 'a1', title: 'Secure LLM Orchestration', text: 'Deploy highly-specific, fine-tuned instruction models integrated securely with database vectors using Retrieval-Augmented Generation (RAG).' },
      { id: 'a2', title: 'Real-time Event Streaming Integration', text: 'Replace standard REST queries between microservices with Kafka or PubSub event-driven triggers for instant synchronization.' },
      { id: 'a3', title: 'A/B Testing Frameworks', text: 'Establish automatic user telemetry tracking and trigger automated layout variation rollouts based on real-time conversions.' }
    ];
  } else {
    classification = 'Future-Ready Pioneers';
    badgeColor = 'bg-emerald-50 text-emerald-700 border-emerald-200';
    summaryText = 'Incredible! You have robust serverless, elastic, and cloud-native systems. Your release times are measured in minutes, and data streams instantly. Let\'s push boundaries with advanced TechConsult agentic automation.';
    adviceItems = [
      { id: 'f1', title: 'Autonomous Multi-Agent Networks', text: 'Establish cooperating AI agents that handle multi-layer operations (customer dispute resolution, inventory reorders) autonomously.' },
      { id: 'f2', title: 'Edge AI Offline Integration', text: 'Move neural processing closer to telemetry endpoints for zero-latency offline diagnostics and mobile model inference.' },
      { id: 'f3', title: 'Zero Trust Security Architectures', text: 'Strengthen container security vectors with cryptographic authorization models at every service boundary.' }
    ];
  }

  const currentQuestion = ASSESSMENT_QUESTIONS[currentIdx];

  return (
    <div className="bg-white rounded shadow-xl border border-zinc-100 overflow-hidden" id="digital-assessment-container">
      {/* Container Header */}
      <div className="bg-zinc-900 text-white p-6 sm:p-8 flex items-center justify-between border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-vd-red/20 text-vd-red rounded">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-headline font-bold">Digital Maturity Diagnostic</h3>
            <p className="text-zinc-400 text-xs sm:text-sm">TechConsult Strategic Audit Tool</p>
          </div>
        </div>
        {!showResult && (
          <span className="text-xs font-mono bg-zinc-800 px-3 py-1 rounded text-zinc-300">
            Question {currentIdx + 1} of {ASSESSMENT_QUESTIONS.length}
          </span>
        )}
      </div>

      <div className="p-6 sm:p-8">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* Question Category & Text */}
              <div className="space-y-2">
                <span className="text-xxs uppercase tracking-widest bg-red-50 text-vd-red font-bold px-2.5 py-1 rounded border border-red-100 inline-block">
                  {currentQuestion.category}
                </span>
                <h4 className="text-lg sm:text-xl font-headline font-semibold text-zinc-900 leading-snug">
                  {currentQuestion.text}
                </h4>
              </div>

              {/* Multiple Choice Options */}
              <div className="grid grid-cols-1 gap-3.5 pt-2">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelectOption(option.score, option.label, option.description)}
                    className="p-4 rounded border border-zinc-200 text-left hover:border-vd-red/40 hover:bg-red-50/5 transition-all group flex items-start gap-3 bg-white hover:shadow-sm"
                  >
                    <div className="w-6 h-6 rounded-full border border-zinc-300 flex items-center justify-center font-bold text-xs text-zinc-400 group-hover:border-vd-red group-hover:bg-vd-red group-hover:text-white shrink-0 mt-0.5 transition-colors">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <div>
                      <h5 className="font-semibold text-zinc-900 group-hover:text-vd-red transition-colors text-sm sm:text-base">
                        {option.label}
                      </h5>
                      <p className="text-xs sm:text-sm text-zinc-500 mt-1 leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="pt-4">
                <div className="w-full bg-zinc-100 h-2 rounded overflow-hidden">
                  <div
                    className="bg-vd-red h-2 transition-all duration-300 rounded"
                    style={{ width: `${((currentIdx + 1) / ASSESSMENT_QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ) : (
            /* Result Dashboard */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
              id="assessment-results"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-zinc-100 pb-8">
                {/* Visual Circle Gauge */}
                <div className="col-span-1 md:col-span-4 flex flex-col items-center">
                  <div className="relative w-36 h-36 flex items-center justify-center">
                    {/* SVG Progress Circle */}
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="72"
                        cy="72"
                        r="64"
                        className="stroke-zinc-100 fill-none"
                        strokeWidth="10"
                      />
                      <circle
                        cx="72"
                        cy="72"
                        r="64"
                        className="stroke-vd-red fill-none transition-all duration-1000"
                        strokeWidth="10"
                        strokeDasharray={402}
                        strokeDashoffset={402 - (402 * percentage) / 100}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute text-center">
                      <span className="text-4xl font-headline font-bold text-zinc-950 block">{percentage}%</span>
                      <span className="text-xxs uppercase tracking-widest text-zinc-400 font-bold block">Score</span>
                    </div>
                  </div>
                </div>

                {/* Classification Text & Explanation */}
                <div className="col-span-1 md:col-span-8 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Maturity Level:</span>
                    <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded border ${badgeColor}`}>
                      {classification}
                    </span>
                  </div>
                  <h4 className="text-2xl font-headline font-bold text-zinc-900">Your Modernization Roadmap</h4>
                  <p className="text-zinc-600 text-sm leading-relaxed">{summaryText}</p>
                </div>
              </div>

              {/* Individual Question Answers Breakdown */}
              <div className="space-y-3">
                <h5 className="font-bold text-sm text-zinc-800 uppercase tracking-widest flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-vd-red" />
                  Category Breakdown
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(Object.entries(answers) as [string, { score: number; label: string; desc: string }][]).map(([key, item]) => {
                     const q = ASSESSMENT_QUESTIONS.find((x) => x.id === parseInt(key));
                     return (
                       <div key={key} className="p-3.5 rounded border border-zinc-100 bg-zinc-50/50 flex flex-col justify-between">
                         <div className="flex justify-between items-start">
                           <span className="text-xs font-semibold text-zinc-500">{q?.category}</span>
                           <span className={`text-xs font-bold font-mono ${item.score >= 80 ? 'text-green-600' : item.score >= 50 ? 'text-amber-600' : 'text-red-500'}`}>
                             {item.score}/100
                           </span>
                         </div>
                         <h6 className="font-semibold text-zinc-900 mt-1.5 text-xs truncate">{item.label}</h6>
                         <div className="w-full bg-zinc-200 h-1.5 rounded overflow-hidden mt-2">
                           <div
                             className={`h-1.5 rounded ${item.score >= 80 ? 'bg-green-500' : item.score >= 50 ? 'bg-amber-500' : 'bg-red-500'}`}
                             style={{ width: `${item.score}%` }}
                           />
                         </div>
                       </div>
                     );
                  })}
                </div>
              </div>

              {/* Actionable Customized Checklist */}
              <div className="space-y-4 pt-2">
                <div className="flex justify-between items-center">
                  <h5 className="font-bold text-sm text-zinc-800 uppercase tracking-widest flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-vd-red" />
                    Custom Recommendations (Click to Track Progress)
                  </h5>
                  <span className="text-xxs bg-zinc-100 px-2 py-0.5 rounded text-zinc-500">
                    {Object.values(checkedRecs).filter(Boolean).length} of {adviceItems.length} Completed
                  </span>
                </div>

                <div className="space-y-3">
                  {adviceItems.map((item) => {
                    const isChecked = !!checkedRecs[item.id];
                    return (
                      <button
                        key={item.id}
                        onClick={() => toggleCheck(item.id)}
                        className={`w-full p-4 rounded border text-left transition-all flex items-start gap-4 hover:shadow-sm bg-white ${
                          isChecked ? 'border-zinc-100 bg-zinc-50/50 opacity-70' : 'border-zinc-200 hover:border-zinc-300'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-sm border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            isChecked ? 'bg-green-500 border-green-500 text-white' : 'border-zinc-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <h6 className={`text-xs sm:text-sm font-bold text-zinc-900 ${isChecked ? 'line-through text-zinc-400' : ''}`}>
                            {item.title}
                          </h6>
                          <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{item.text}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom CTAs */}
              <div className="pt-6 border-t border-zinc-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                <button
                  onClick={restartAssessment}
                  className="w-full sm:w-auto px-5 py-2.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-bold rounded transition-colors text-sm inline-flex items-center justify-center gap-1.5"
                >
                  <RefreshCw className="w-4 h-4" />
                  Restart Assessment
                </button>
                <button
                  onClick={onOpenEstimator}
                  className="w-full sm:w-auto px-6 py-3 bg-vd-red text-white font-bold rounded hover:bg-red-700 transition-colors text-sm inline-flex items-center justify-center gap-2 shadow-md shadow-red-100"
                >
                  Discuss Custom Scoping Design
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
