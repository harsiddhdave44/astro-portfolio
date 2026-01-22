import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/placeholder-harsiddh',
  linkedin: 'https://www.linkedin.com/in/placeholder-harsiddh',
  mail: 'mailto:harsiddh.dave@example.com',
  instagram: 'https://www.instagram.com/placeholder-harsiddh',
  medium: 'https://medium.com/@placeholder-harsiddh',
  discord: 'https://discordapp.com/users/placeholder',
  x: 'https://x.com/placeholder-harsiddh',
}

// Global
export const SITE: Site = {
  TITLE: 'Harsiddh Dave',
  DESCRIPTION:
    'Senior DevOps Engineer · Platform / Cloud Engineer · Backend-focused',
  AUTHOR: 'Harsiddh Dave',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Recent roles and hands-on platform engineering work.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Monitoring, platform automation, and backend engineering work.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Degree (Placeholder)',
    institution: 'University Name (Placeholder)',
    link: 'https://example.com',
    date: 'Year - Year',
  },
  {
    title: 'Certification (Placeholder)',
    institution: 'Platform / Provider',
    link: 'https://example.com',
    date: 'Year',
  },
  {
    title: 'Course (Placeholder)',
    institution: 'Training Provider',
    link: 'https://example.com',
    date: 'Year',
  },
]

export const EXPERIENCE = [
  {
    company: 'Sunflower Lab',
    location: 'India',
    position: 'Senior DevOps Engineer',
    start: 'Sep 2023',
    link: 'https://www.sunflowerlab.com/',
    end: 'Present',
    tasks: [
      'Designed and operated AWS infrastructure using Terraform and Kubernetes (EKS).',
      'Built and maintained CI/CD pipelines with Jenkins, GitHub Actions, and GitLab CI.',
      'Led troubleshooting of production issues including performance, memory leaks, and scaling.',
      'Partnered with application teams on cloud-native architecture and deployments.',
    ],
  },
  {
    company: 'InterviewReady',
    location: 'India',
    position: 'DevOps Engineer',
    link: 'https://example.com',
    start: 'Month YYYY',
    end: 'Month YYYY',
    tasks: [
      'Placeholder: built CI/CD workflows and deployment automation.',
      'Placeholder: managed cloud infrastructure and release pipelines.',
      'Placeholder: improved reliability and observability for production systems.',
    ],
  },
  {
    company: 'RKIT Software Private Limited',
    link: 'https://example.com',
    location: 'India',
    position: 'DevOps Engineer',
    start: 'Month YYYY',
    end: 'Month YYYY',
    tasks: [
      'Placeholder: automated infrastructure provisioning and environment setup.',
      'Placeholder: supported Kubernetes workloads and delivery pipelines.',
      'Placeholder: collaborated with engineering teams to ship reliable releases.',
    ],
  },
]
