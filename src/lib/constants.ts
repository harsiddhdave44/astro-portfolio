import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/harsiddhdave44',
  mail: 'mailto:harsiddhdave44@outlook.com',
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
  DESCRIPTION: 'Experience building and operating cloud platforms and delivery systems.',
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
    title: 'Bachelor of Engineering in Computer Science',
    institution: 'Gujarat Technological University',
    link: 'https://www.gtu.ac.in/',
    date: '2017 - 2020',
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
      'Design and operate AWS infrastructure with Terraform, EKS, ECS, and supporting cloud services.',
      'Build and maintain delivery pipelines with Jenkins, GitHub Actions, and GitLab CI.',
      'Lead production troubleshooting across application, database, networking, and container layers.',
      'Partner with engineering teams on reliability, security, cloud architecture, and release automation.',
    ],
  },
  {
    company: 'InterviewReady',
    location: 'India',
    position: 'DevOps Engineer',
    link: 'https://www.interviewready.io/',
    start: 'Oct 2022',
    end: 'Jul 2023',
    tasks: [
      'Reduced AWS infrastructure spend from about $900 to about $300 per month.',
      'Cut PostgreSQL migration execution time from about 60 seconds to about 7 seconds.',
      'Improved delivery pipelines and deployment workflows, reducing deployment time by about 50%.',
    ],
  },
  {
    company: 'RKIT Software Private Limited',
    link: 'https://www.rkitsoftware.com/',
    location: 'India',
    position: 'Cloud Engineer / .NET Developer',
    start: 'Jul 2019',
    end: 'Sep 2022',
    tasks: [
      'Configured and maintained cloud infrastructure and application environments.',
      'Developed and supported .NET applications alongside cloud and deployment work.',
      'Worked across application delivery, troubleshooting, and infrastructure operations.',
    ],
  },
]
