/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CaseStudy, AssessmentQuestion, ServiceDetail } from './types';

export const SERVICES: ServiceDetail[] = [
  {
    id: 'ai-readiness',
    title: 'AI Readiness & Integration',
    tagline: 'Unlock predictive insights and automation at scale.',
    description: 'Prepare your data infrastructure and operational workflows to seamlessly integrate artificial intelligence. We help you transform raw operational data into secure, fine-tuned predictive modules and agentic solutions.',
    iconName: 'Cpu',
    subCapabilities: [
      {
        title: 'Data Pipelines & Warehousing',
        description: 'Cleanse, orchestrate, and consolidate legacy transactional logs into query-optimized cloud warehouses ready for model training.'
      },
      {
        title: 'Custom LLMs & Fine-Tuning',
        description: 'Deploy specialized, instruction-tuned models tailored to your industry compliance, vocabulary, and intellectual property.'
      },
      {
        title: 'Agentic Workflow Automation',
        description: 'Establish stateful AI agents that perform multi-step back-office procedures, customer support, and automatic triage.'
      }
    ],
    caseStudyBrief: {
      client: 'Apex Health Systems',
      outcome: 'Reduced patient triage bottleneck by 43% with HIPAA-compliant triage assistant.'
    }
  },
  {
    id: 'tech-roadmap',
    title: 'Technology Roadmap & Strategy',
    tagline: 'Align your tech stack with long-term business goals.',
    description: 'A strategic, phased plan designed to modernize enterprise technology architectures. We eliminate tech debt, establish scalable APIs, and implement sustainable infrastructure that supports agile expansion.',
    iconName: 'GitMerge',
    subCapabilities: [
      {
        title: 'Architecture Audit & Mapping',
        description: 'Comprehensive analysis of existing databases, application performance, redundancy, and license costs.'
      },
      {
        title: 'Cloud Migrations & Microservices',
        description: 'Deconstruct massive, high-risk monolithic backends into secure, loosely-coupled microservices running on serverless containers.'
      },
      {
        title: 'DevSecOps & CI/CD Pipelines',
        description: 'Automate build-test-deploy lifecycles with continuous vulnerability scanning, reducing release-cycle durations from months to minutes.'
      }
    ],
    caseStudyBrief: {
      client: 'Global Logistics Group',
      outcome: 'Consolidated 14 disparate tracking systems into a unified API gateway saving $2.4M annually.'
    }
  },
  {
    id: 'legacy-modernisation',
    title: 'Application & Legacy Modernisation',
    tagline: 'Refactor and migrate monolithic code into high-efficiency cloud-native apps.',
    description: 'Transform legacy, slow-performing desktop and server systems into gorgeous, fast, and secure web and mobile experiences. We deliver fluid responsive interfaces backed by modern data engines.',
    iconName: 'Code',
    subCapabilities: [
      {
        title: 'UI/UX Revamp & Design Systems',
        description: 'Translate old, clunky dashboards into responsive, intuitive web app interfaces following atomic design standards.'
      },
      {
        title: 'API Enablement & Wrapper Services',
        description: 'Surgical integration of modern rest/gRPC API layers over older AS400 or mainframe systems without data disruption.'
      },
      {
        title: 'Incremental Strangler Pattern Migrations',
        description: 'Replace legacy modules step-by-step to guarantee continuous system uptime and zero operations downtime.'
      }
    ],
    caseStudyBrief: {
      client: 'Financier Trust Co.',
      outcome: 'Successfully migrated 25-year-old retail accounts manager with zero downtime over a 12-month phased rollout.'
    }
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Transforming Retail Banking for the Digital Generation',
    industry: 'FinTech',
    description: 'DevCoWise partnered with a major regional bank to build a secure, microservices-driven mobile banking platform featuring advanced financial tools and a dynamic digital wallet.',
    challenge: 'The client struggled with rigid legacy mainframe databases, slow transaction processing, and a disjointed customer experience that caused high user friction.',
    solution: 'We constructed a high-performance gRPC API gateway backed by cloud-native microservices, styled a sleek responsive frontend interface, and added real-time transaction tracking.',
    impact: [
      '99.99% system uptime achieved',
      'Average app rating climbed from 2.1 to 4.8 stars',
      'Transaction processing times dropped from 3.2s to 120ms'
    ],
    techStack: ['React Native', 'Node.js', 'Go', 'Kubernetes', 'Redis', 'PostgreSQL'],
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'case-2',
    title: 'AI-Powered Telehealth and Diagnostics Portal',
    industry: 'HealthTech',
    description: 'Designed an advanced, secure clinical platform that connects doctors with remote patients, using real-time video feeds and smart symptom tracking.',
    challenge: 'Long administrative wait times, critical privacy regulations (HIPAA/GDPR), and disjointed data sharing between remote clinics and central databases.',
    solution: 'Developed a custom cloud-based WebRTC system with encrypted records storage, paired with an offline-first mobile client for rural nurses.',
    impact: [
      'Served 1.2M+ virtual appointments',
      'Ensured 100% HIPAA and GDPR compliance auditing',
      'Reduced medical report routing delay by 80%'
    ],
    techStack: ['React', 'Express', 'WebRTC', 'FastAPI', 'AWS ECS', 'MongoDB'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'case-3',
    title: 'Smart IoT Supply Chain & Fleet Telematics Optimizer',
    industry: 'Logistics',
    description: 'Created an interactive dashboard connecting 8,000 active delivery vehicles to a smart routing system, optimizing warehouse loading speeds and delivery times.',
    challenge: 'Spiking fuel costs, inaccurate estimated arrival times (ETAs), and manual inventory dispatch mistakes due to poor real-time tracking.',
    solution: 'Deployed real-time geofencing, custom machine learning ETA model, and a responsive tablet app for field delivery crews.',
    impact: [
      'Saved $1.8M in annual fuel consumption costs',
      'ETA accuracy boosted to 97.4%',
      'Daily inventory dispatch capacity increased by 35%'
    ],
    techStack: ['Vue.js', 'Python', 'Apache Kafka', 'TensorFlow', 'PostgreSQL', 'Docker'],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'case-4',
    title: 'Omnichannel B2C E-Commerce Acceleration',
    industry: 'Retail',
    description: 'Overhauled a fragmented offline and online retail network into a lightning-fast headless e-commerce hub with single-click checkouts.',
    challenge: 'Frequent website crashes during flash-sales, slow catalog load speeds, and poor conversion rates on mobile web browsers.',
    solution: 'Built a custom headless storefront on Next.js, backed by an optimized global CDN cache and integrated payment orchestration modules.',
    impact: [
      'Conversion rate grew by 64% within first 3 months',
      'Lighthouse performance score boosted to 98/100',
      'Zero downtime during peak seasonal Black Friday traffic'
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'GraphQL', 'Shopify Engine', 'Vercel Edge'],
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80'
  }
];

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 1,
    category: 'AI Readiness',
    text: 'How would you describe your current data organization and readiness for Artificial Intelligence?',
    options: [
      {
        label: 'Siloed & Unstructured',
        score: 20,
        description: 'Our data sits in scattered spreadsheets, isolated databases, or paper records. There is no centralized warehouse.'
      },
      {
        label: 'Centralized Databases',
        score: 50,
        description: 'We have consolidated SQL/NoSQL databases, but they are not fully optimized or structured for machine learning ingestion.'
      },
      {
        label: 'Pipeline-Enabled & Managed',
        score: 80,
        description: 'We run regular automated ETL pipelines feeding a cloud data warehouse, but haven\'t deployed production models yet.'
      },
      {
        label: 'AI-Native & Federated',
        score: 100,
        description: 'We actively use production AI models, secure feature stores, and real-time inference loops to drive operations.'
      }
    ]
  },
  {
    id: 2,
    category: 'Infrastructure',
    text: 'What is the dominant architecture of your primary core software applications?',
    options: [
      {
        label: 'Legacy Monolith / On-Premise',
        score: 15,
        description: 'Applications run on physical on-site servers, using older tech stacks with slow, manual deployment cycles.'
      },
      {
        label: 'Co-Hosted Cloud Monolith',
        score: 45,
        description: 'We migrated our monolithic servers to virtual machines (VMs) in the cloud, but the codebase remains tightly coupled.'
      },
      {
        label: 'Hybrid Microservices / Containers',
        score: 75,
        description: 'Most services are containerized and run on cloud platforms (AWS, GCP, etc.) with automated release cycles.'
      },
      {
        label: 'Serverless & Cloud-Native',
        score: 100,
        description: 'Our backend is serverless, fully elastic, secured at every edge, and auto-scales instantly to match operational demand.'
      }
    ]
  },
  {
    id: 3,
    category: 'Agility',
    text: 'How do your teams manage changes and release product updates?',
    options: [
      {
        label: 'Phased Waterfall (Quarterly/Annual)',
        score: 20,
        description: 'Releases require massive manual coordination, lengthy QA reviews, and typically happen once or twice a year.'
      },
      {
        label: 'Ad-Hoc Agile (Monthly)',
        score: 50,
        description: 'We try to follow sprints, but deployments are high-friction events that require overnight patch windows.'
      },
      {
        label: 'Continuous Integration / Bi-Weekly',
        score: 80,
        description: 'We use automated CI pipelines. Code is pushed to production every 1-2 weeks with minimal manual oversight.'
      },
      {
        label: 'True Continuous Delivery (Daily)',
        score: 100,
        description: 'Developers push to master multiple times a day. Automated suites immediately build, test, and release code with zero risk.'
      }
    ]
  },
  {
    id: 4,
    category: 'User Experience',
    text: 'How optimized are your workflows and customer interfaces across mobile and web?',
    options: [
      {
        label: 'Legacy / Desktop-Only',
        score: 25,
        description: 'Our tools are difficult to use on mobile devices, require training, and have steep learning curves for end-users.'
      },
      {
        label: 'Basic Adaptive Layouts',
        score: 55,
        description: 'Websites work on mobile, but user flows are slow, with complex multi-step forms that lead to high dropout rates.'
      },
      {
        label: 'Modern Responsive Design',
        score: 85,
        description: 'Clean, beautiful interface built with a design system. Pages load quickly, and user actions feel smooth.'
      },
      {
        label: 'Frictionless Omnichannel',
        score: 100,
        description: 'Incredibly fast, contextual experience. Interactive micro-animations, single-click operations, and unified look across devices.'
      }
    ]
  }
];
