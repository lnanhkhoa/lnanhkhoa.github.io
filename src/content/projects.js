export const projects = [
  {
    title: 'Internal HRM System',
    company: 'Groove Technology',
    description:
      "An internal system that streamlined the company's HR operations — employee profiles, leave management, recognition points, a policy Q&A chatbot, and performance tracking. It replaced manual processes with a single source of truth for HR data.",
    technologies: [
      'KeystoneJS',
      'NestJS',
      'GraphQL',
      'PostgreSQL',
      'TailwindCSS',
      'Docker',
      'GitHub Actions',
      'BullMQ',
      'Meilisearch',
      'Redis',
      'AWS ELB',
      'AWS EC2',
      'AWS ECR',
      'AWS CloudFront',
      'AWS S3',
      'AWS SQS',
      'AWS SES',
      'AWS RDS',
      'AWS CloudWatch'
    ],
    teamSize: '5-6 members',
    role: 'Technical Lead',
    period: 'Sep 2023 - May 2025',
    keyFeatures: [
      'Employee profile management',
      'Onboarding, promotion and offboarding flows',
      'Leave request and recognition management',
      'Role-based access control',
      'Policy Q&A chatbot built on the OpenAI SDK',
      'Email templates, notifications, and approval flows',
      'Encryption for sensitive data fields',
      'Background jobs on self-hosted Trigger.dev',
      'Company announcements'
    ],
    liveUrl: 'https://ghomehr.groovetechnology.com/'
  },
  {
    title: 'MarketBase+',
    company: 'Groove Technology',
    description:
      'An Australian-owned B2B SaaS platform for sales teams, combining a Chrome extension that overlays contact data on LinkedIn with a web app for managing and exporting B2B data — DMU Discovery (decision-making unit mapping), technographics, and CRM export.',
    technologies: [
      'KeystoneJS',
      'Prisma',
      'ElasticSearch',
      'ReactJS',
      'TailwindCSS',
      'Docker',
      'AWS ELB',
      'AWS EC2',
      'AWS ECR',
      'AWS CloudFront',
      'AWS S3',
      'AWS SQS',
      'AWS SES',
      'AWS RDS',
      'AWS CloudWatch'
    ],
    teamSize: '6 members',
    role: 'Senior Full-Stack Developer',
    period: 'Sep 2023 - May 2025',
    keyFeatures: [
      'Chrome extension overlaying contact info on LinkedIn profiles',
      'One-click data export to CRMs like Salesforce',
      'Decision-making unit mapping for complex account prospecting',
      "Technographic insights into each company's tech stack",
    ],
    liveUrl: 'https://www.marketbaseplus.com/'
  },
  {
    title: 'Insurance Product',
    company: 'Gigacover',
    description:
      'An embedded B2B2C insurance platform serving the gig economy, freelancers, and platform workers across Southeast Asia. Businesses launch digital insurance microsites — underwriting, KYC, policy issuance, and fulfillment — on web and mobile.',
    technologies: ['ReactJS', 'Bootstrap', 'React Native', 'Redux', 'TypeScript'],
    teamSize: '8-10 members',
    role: 'Front-end Developer',
    period: 'Nov 2020 - Dec 2021',
    keyFeatures: [
      'Client-launchable insurance microsites',
      "Products tailored to companies' employees and gig workers",
    ],
    liveUrl: 'https://gigacover.com/'
  },
  {
    title: "Biti's Loyalty",
    company: 'Bitis',
    description:
      "A loyalty mobile app for Vietnam's leading footwear brand. Customers tracked purchases, earned points, and redeemed rewards during holiday campaigns, both in-store and online. The back-end covered RESTful APIs, database design, background jobs, and third-party integrations.",
    technologies: ['Strapi', 'ExpressJS', 'MySQL', 'ReactJS', 'Nginx', 'BullMQ', 'PM2'],
    teamSize: '5 members',
    role: 'Back-end Developer',
    period: 'Nov 2018 - Apr 2020',
    keyFeatures: [
      'Authentication via SMS and social login',
      'Coupon management',
      'User and receipt migration from the core system',
      'Lucky Spin Wheel promotion campaign',
    ],
    liveUrl: 'http://bitis.com.vn/pages/bitis-loyalty'
  }
]
