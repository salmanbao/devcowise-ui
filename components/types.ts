/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CaseStudy {
  id: string;
  title: string;
  industry: 'FinTech' | 'HealthTech' | 'Logistics' | 'Retail' | 'Enterprise';
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
  techStack: string[];
  imageUrl: string;
}

export interface AssessmentQuestion {
  id: number;
  text: string;
  category: 'AI Readiness' | 'Infrastructure' | 'Agility' | 'User Experience';
  options: {
    label: string;
    score: number;
    description: string;
  }[];
}

export interface ConsultationSubmission {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  challenges: string[];
  details: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  subCapabilities: {
    title: string;
    description: string;
  }[];
  caseStudyBrief: {
    client: string;
    outcome: string;
  };
}
