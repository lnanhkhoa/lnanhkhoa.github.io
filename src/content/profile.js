export const profile = {
  name: 'Khoa Le',
  title: 'Senior Full-Stack Developer',
  tagline:
    'Back-end-focused full-stack developer. 7 years building Node.js, TypeScript, and React systems — from microservices and GraphQL APIs to the AWS infrastructure behind them.',
  email: 'lnanhkhoa303@gmail.com',
  phone: '+84 39 996 4550',
  location: 'Ho Chi Minh City, Vietnam',
  resumeUrl: '/khoale-senior-resume.pdf',
  github: 'https://github.com/lnanhkhoa/',
  linkedin: 'https://www.linkedin.com/in/lnanhkhoa/'
}

// Hiring signals shown in the Contact section — the details a recruiter needs
// before deciding to reach out. `status` stays employed-but-listening: it must
// never read as "currently unemployed".
export const workPreferences = {
  status: 'Open to new opportunities',
  statusNote: 'Currently building at viAct — happy to talk about the right role',
  // Short two-line version of the stack, sized for the Hero terminal.
  stackLines: [
    'node · nest · typescript · python',
    'react · postgres · rabbitmq · aws'
  ],
  setup: ['Full-time remote', 'Onsite / hybrid in Ho Chi Minh City'],
  timezone: 'GMT+7 — overlaps with APAC & European mornings',
  languages: ['English', 'Vietnamese'],
  stack: ['Node.js', 'TypeScript', 'React', 'PostgreSQL', 'AWS', 'Docker']
}
