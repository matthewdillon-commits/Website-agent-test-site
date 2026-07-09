export const products = [
  {
    label: 'AI Phone Agents',
    href: '/phone-agents',
    desc: '24/7 voice AI for inbound & outbound calls',
  },
  {
    label: 'AI Chat Agents',
    href: '/chat-agents',
    desc: 'Intelligent chat support across every channel',
  },
  {
    label: 'AI Visibility',
    href: '/always-on-visibility',
    desc: 'AI visibility monitoring & insights',
  },
] as const

export const resources = [
  {
    label: 'Success Stories',
    href: '/success-stories',
    desc: 'Real results from real clients',
  },
  {
    label: 'Learning Center',
    href: '/learn',
    desc: 'AI receptionist & phone agent guides',
  },
  {
    label: 'Solutions',
    href: '/solutions',
    desc: 'After-hours, booking, lead qualification',
  },
  {
    label: 'Blog',
    href: '/blog',
    desc: 'News, insights & guides',
  },
  {
    label: 'Events & Social',
    href: '/events',
    desc: 'Updates & LinkedIn posts',
  },
] as const

export const industries = [
  {
    slug: 'real-estate',
    name: 'Real Estate & Mortgage',
    tagline: 'Close more deals with AI that never sleeps',
    navDesc: 'Lead qualification & showing scheduling',
    description:
      'AI agents that qualify leads, schedule showings, and handle mortgage pre-qualification calls around the clock.',
  },
  {
    slug: 'home-services',
    name: 'Home Services',
    tagline: 'Book more jobs, miss fewer calls',
    navDesc: 'Service booking & dispatch',
    description:
      'AI agents that handle service booking, quote requests, dispatching, and follow-up reviews for home service businesses.',
  },
  {
    slug: 'restaurants',
    name: 'Restaurants',
    tagline: 'Every call answered, every table filled',
    navDesc: 'Reservations, orders & catering calls',
    description:
      'Voice AI for reservation booking, takeout/delivery orders, menu inquiries, and event/catering calls.',
  },
  {
    slug: 'financial-services',
    name: 'Financial Services',
    tagline: 'Secure, compliant AI for every client interaction',
    navDesc: 'Loan qualification & account support',
    description:
      'Handle client inquiries with the speed and precision financial services demand — securely and compliantly, 24/7.',
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    tagline: 'Better patient access, less admin burden',
    navDesc: 'Patient scheduling & triage',
    description:
      'AI agents for patient scheduling, prescription refills, after-hours triage, and insurance verification.',
  },
  {
    slug: 'insurance',
    name: 'Insurance',
    tagline: 'Faster quotes, smoother claims, happier policyholders',
    navDesc: 'Quotes, claims & policy renewals',
    description:
      'AI agents for quote generation, claims intake, policy renewals, and intelligent agent routing.',
  },
  {
    slug: 'automotive',
    name: 'Automotive Services & Dealerships',
    tagline: 'Fill your bays and sell more cars with AI',
    navDesc: 'Appointments, test drives & recalls',
    description:
      'AI agents for service appointment booking, vehicle inquiries, test drive scheduling, and recall notifications.',
  },
  {
    slug: 'ecommerce',
    name: 'E-commerce & Retail',
    tagline: 'Turn every interaction into a sale',
    navDesc: 'Orders, returns & cart recovery',
    description:
      'AI agents for order status, returns/exchanges, product recommendations, and abandoned cart recovery.',
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    tagline: 'Win more clients with always-on AI',
    navDesc: 'Client intake & consultation booking',
    description:
      'AI agents for client intake, appointment scheduling, consultation booking, and follow-up outreach.',
  },
] as const

export const integrations = [
  { name: 'salesforce', font: "'Nunito', sans-serif", weight: 800, transform: 'lowercase' as const },
  { name: 'HubSpot', font: "'Plus Jakarta Sans', sans-serif", weight: 700 },
  { name: 'zendesk', font: "'Inter', sans-serif", weight: 700, transform: 'lowercase' as const },
  { name: 'Intercom', font: "'Inter', sans-serif", weight: 600 },
  { name: 'slack', font: "'Lato', sans-serif", weight: 700, transform: 'lowercase' as const },
  { name: 'Zoom', font: "'Inter', sans-serif", weight: 700 },
  { name: 'Shopify', font: "'Nunito', sans-serif", weight: 700 },
  { name: 'stripe', font: "'Inter', sans-serif", weight: 600, transform: 'lowercase' as const },
  { name: 'Notion', font: "'Source Serif 4', Georgia, serif", weight: 400 },
  { name: 'Zapier', font: "'Inter', sans-serif", weight: 700 },
  { name: 'Mailchimp', font: "'Nunito', sans-serif", weight: 700 },
  { name: 'Calendly', font: "'Inter', sans-serif", weight: 600 },
]

export const features = [
  {
    id: 'phone',
    tag: 'AI Phone Agents',
    tagClass: 'tag-purple',
    gradient: '/assets/gradient-purple.webp',
    headline: 'Answer every inbound call instantly',
    bullets: [
      'Qualify leads in real-time and route to your team',
      'Book appointments automatically — no missed opportunities',
      'Handle FAQs, routing, and escalations with full context',
    ],
    cta: 'Discover our AI Phone Agents',
    href: '/phone-agents',
  },
  {
    id: 'outbound',
    tag: 'Outbound AI Calling',
    tagClass: 'tag-orange',
    gradient: '/assets/gradient-orange.webp',
    headline: 'Turn conversations into revenue',
    bullets: [
      'Follow up leads instantly with AI-driven calls',
      'Recover abandoned checkouts and re-engage past customers',
      'Run AI-powered campaigns that close deals while you sleep',
    ],
    cta: 'Expand your revenue engine',
    href: '/phone-agents',
  },
  {
    id: 'intel',
    tag: 'Conversation Intelligence Engine',
    tagClass: 'tag-blue',
    gradient: '/assets/gradient-blue.webp',
    headline: 'Know every conversation, improve every response',
    bullets: [
      'Every call is analyzed automatically — spot patterns others miss',
      "Identify what converts and what doesn't in real-time",
      'Track revenue per conversation and optimize for ROI',
    ],
    cta: 'Unlock conversation intelligence',
    href: '/always-on-visibility',
  },
]

export const caseStudies = [
  {
    slug: 'norsteel-buildings',
    company: 'Norsteel Buildings',
    stat: '$400K',
    desc: 'in sales in 3 months',
    image: '/assets/norsteel.webp',
    tall: true,
  },
  {
    slug: 'hilltop-tree-care',
    company: 'Hilltop Tree Care',
    stat: '30+',
    desc: 'qualified leads generated',
    image: '/assets/hilltop.jpg',
    tall: false,
  },
  {
    slug: 'calrington-community-health-centre',
    company: 'Calrington Community Health Centre',
    stat: '1000s',
    desc: 'of patient conversations handled',
    image: '/assets/calrington.jpeg',
    tall: false,
  },
]

export const steps = [
  {
    num: '01',
    title: 'Connect your channels',
    desc: 'Link your email, phone, live chat, and CRM in minutes. No engineering required — just authenticate and go.',
  },
  {
    num: '02',
    title: 'LimitlessAI starts learning',
    desc: 'The system begins analyzing your existing conversations immediately, building a baseline of what good looks like for your business.',
  },
  {
    num: '03',
    title: 'Watch every conversation improve',
    desc: 'Your team gets real-time suggestions, auto-drafted responses, and a live feed of insights — conversations get better from day one.',
  },
]

export const blogPosts = [
  {
    slug: 'ai-chat-agents-lead-generation',
    tag: 'AI Chat Agents',
    title: 'Your Website Is Losing Leads While You Sleep',
    excerpt:
      'Most small businesses still rely on contact forms. In an era where consumers expect instant answers, that assumption is costing businesses real money.',
    gradient: 'linear-gradient(135deg, #e8b4f8 0%, #f5d0a9 30%, #f0c6d8 60%, #ddd6fe 100%)',
  },
  {
    slug: 'ai-phone-agents',
    tag: 'AI Phone Agents',
    title: 'The Phone Is Not Dead',
    excerpt:
      'The voice AI agent market has reached $2.4 billion. 80% of callers who reach voicemail will not leave a message — they call the next business.',
    gradient: 'linear-gradient(135deg, #fde68a 0%, #fdba74 25%, #f9a8d4 50%, #c4b5fd 75%, #93c5fd 100%)',
  },
  {
    slug: 'geo-ai-visibility',
    tag: 'GEO / AI Visibility',
    title: 'SEO Is Not Dead. But It Is Not Enough Anymore.',
    excerpt:
      'AI-referred web sessions increased by over 500% year-over-year. If your business is not part of AI answers, you are invisible.',
    gradient: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 40%, #ede9fe 70%, #f3e8ff 100%)',
  },
]

export const stats = [
  { value: 8842, label: 'conversations analyzed' },
  { value: 94, suffix: '%', label: 'average response quality' },
  { value: 31, prefix: '+', suffix: '%', label: 'improvement in satisfaction' },
  { value: 847, label: 'self-improvements made' },
]

export const footerColumns = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', href: '/#features' },
      { label: 'Success Stories', href: '/success-stories' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Limitless AI', href: '/limitless-ai' },
      { label: 'Partners', href: '/partners' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Learn',
    links: [
      { label: 'What Is an AI Receptionist?', href: '/learn' },
      { label: 'What Is AI Visibility?', href: '/learn' },
      { label: 'What Is an AI Phone Agent?', href: '/learn' },
      { label: 'Best AI Receptionist', href: '/learn' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'After-Hours Answering', href: '/solutions' },
      { label: 'Missed Call Recovery', href: '/solutions' },
      { label: 'Appointment Booking', href: '/solutions' },
      { label: 'Lead Qualification', href: '/solutions' },
    ],
  },
  {
    heading: 'Compare',
    links: [
      { label: 'All Comparisons', href: '/compare' },
      { label: 'Birdeye vs LimitlessAI', href: '/compare' },
      { label: 'Podium vs LimitlessAI', href: '/compare' },
      { label: 'Intercom vs LimitlessAI', href: '/compare' },
      { label: 'Drift vs LimitlessAI', href: '/compare' },
    ],
  },
  {
    heading: 'Locations',
    links: [
      { label: 'Toronto', href: '/locations' },
      { label: 'Vancouver', href: '/locations' },
      { label: 'Montreal', href: '/locations' },
      { label: 'Calgary', href: '/locations' },
      { label: 'View all locations →', href: '/locations' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
]

export const contactInfo = {
  phone: '+1-289-217-2428',
  email: 'leads@limitlessai.ca',
  linkedin: 'https://www.linkedin.com/company/106987144',
  instagram: 'https://www.instagram.com/limitlessai.ca/',
  app: 'https://app.limitlessai.ca',
}
