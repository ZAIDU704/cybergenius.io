export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Bilal Ahmad Dar',
  displayName: 'Bilal Dar',
  firstName: 'BILAL',
  seriesTag: 'CYBERSECURITY JOURNEY',
  originalLabel: 'A PERSONAL PORTFOLIO',
  role: 'Cybersecurity Learner & Aspiring Web Developer',
  tagline: ['Cybersecurity Learner', 'Web Design', 'Technology'],
  intro: 'I am a cybersecurity learner from Kashmir, Jammu and Kashmir, India, exploring cybersecurity fundamentals, network security awareness, web development, and digital tools. This portfolio documents my learning interests and personal work.',
  location: 'Kashmir, Jammu & Kashmir, India',
  email: '',
  links: {
    linkedin: 'https://in.linkedin.com/in/bilal-dar-032310290',
    github: 'https://github.com/ZAIDU704',
  },
  resumePdf: '/assets/Cybersecurity.pdf',
  portrait: {
    src: '/assets/Zaid2.png',
    srcSet: '/assets/Zaid2.png',
    alt: 'Bilal Ahmad Dar',
  },
  interests: ['Cybersecurity', 'Network Security', 'Web Development', 'Technology'],
};

export const education = [
  {
    school: 'Independent Learning',
    place: 'Kashmir, India',
    degree: 'Cybersecurity fundamentals, web design, and computer technology',
    period: 'Ongoing',
    score: 'In progress',
  },
];

export type Experience = {
  company: string;
  role: string;
  place: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    year: '2026',
    genre: 'Web Design • Personal Project',
    logline: 'A personal website to present my learning interests, skills, and work.',
    stack: ['HTML', 'CSS', 'JavaScript Basics', 'Git', 'GitHub'],
    build: [
      'Customizing a portfolio website and learning how its files, components, and content fit together.',
      'Using GitHub to maintain and publish my personal website.',
    ],
    features: [
      'Personal introduction',
      'Skills and learning interests',
      'GitHub profile link',
      'Responsive portfolio design',
    ],
    metrics: [],
    github: 'https://github.com/ZAIDU704/cybergenius.io',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    subtitle: 'Learning and security awareness',
    skills: [
      { name: 'Cybersecurity Fundamentals', mono: 'Cy' },
      { name: 'Network Security Awareness', mono: 'Ns' },
      { name: 'Security Awareness', mono: 'Sa' },
      { name: 'Termux', mono: 'Tx' },
    ],
  },
  {
    id: 'web',
    title: 'Web Development',
    subtitle: 'Web basics and design',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript Basics', mono: 'Js' },
      { name: 'Web Design', mono: 'Wd' },
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
    ],
  },
  {
    id: 'creative',
    title: 'Creative Tools',
    subtitle: 'Design and media',
    skills: [
      { name: 'Graphic Design', mono: 'Gd' },
      { name: 'Video Editing', mono: 'Ve' },
      { name: 'Adobe Express', mono: 'Ae' },
      { name: 'Image Editing', mono: 'Ie' },
      { name: 'Content Creation', mono: 'Cc' },
      { name: 'AI Tools', mono: 'Ai' },
    ],
  },
  {
    id: 'computer',
    title: 'Computer Operations',
    subtitle: 'Everyday digital work',
    skills: [
      { name: 'MS Office', mono: 'Ms' },
      { name: 'Typing', mono: 'Ty' },
      { name: 'File Management', mono: 'Fm' },
      { name: 'Digital Asset Management', mono: 'Da' },
      { name: 'Data Entry', mono: 'De' },
      { name: 'Online Research', mono: 'Or' },
      { name: 'Document Preparation', mono: 'Dp' },
      { name: 'Basic Troubleshooting', mono: 'Bt' },
      { name: 'Task Management', mono: 'Tm' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: 'Ongoing',
    synopsis: 'Building a foundation in computer technology and cybersecurity.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Learning the Fundamentals',
        description: 'Exploring cybersecurity concepts, online safety, and network security awareness.',
        tags: ['Cybersecurity', 'Learning'],
        runtime: 'Ongoing',
        palette: ocean,
      },
    ],
  },
  {
    number: 2,
    title: 'The Web',
    period: 'Ongoing',
    synopsis: 'Learning how websites are designed, built, and published.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Building for the Web',
        description: 'Practising web design, HTML, CSS, JavaScript basics, Git, and GitHub.',
        tags: ['HTML', 'CSS', 'GitHub'],
        runtime: 'Ongoing',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'The Next Chapter',
    period: 'In progress',
    synopsis: 'Continuing to learn and develop practical digital skills.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Keep Exploring',
        description: 'Developing skills in cybersecurity, creative tools, and computer operations.',
        tags: ['Cybersecurity', 'Design', 'Technology'],
        runtime: 'In progress',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Learning focus', title: 'Cybersecurity', detail: 'Fundamentals and network security awareness', palette: ocean },
  { label: 'Web skills', title: 'Web Design', detail: 'HTML, CSS, and JavaScript basics', palette: violet },
  { label: 'Development tools', title: 'GitHub', detail: 'Personal projects and version control learning', palette: jade },
  { label: 'Creative skills', title: 'Video Editing', detail: 'Editing and digital content creation', palette: crimson },
  { label: 'Digital tools', title: 'AI Tools', detail: 'Exploring tools for learning and productivity', palette: amber },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Introduction',
    title: 'Bilal Ahmad Dar',
    lines: ['Cybersecurity Learner & Aspiring Web Developer', 'Kashmir, Jammu & Kashmir, India'],
    chips: ['Cybersecurity', 'Web Design'],
  },
  {
    kicker: 'Security',
    title: 'Learning to Protect',
    lines: ['Cybersecurity fundamentals', 'Network security awareness', 'Practical learning with technology tools'],
    chips: ['Cybersecurity', 'Termux'],
  },
  {
    kicker: 'Web',
    title: 'Building for the Web',
    lines: ['HTML and CSS', 'JavaScript basics', 'Git and GitHub'],
  },
  {
    kicker: 'Creative',
    title: 'Digital Creativity',
    lines: ['Graphic design and video editing', 'Adobe Express and AI tools', 'Document and file management'],
  },
  {
    kicker: 'Next chapter',
    title: 'Keep Learning',
    lines: ['Building practical skills step by step', 'Exploring cybersecurity and web development'],
  },
];

export type ProfileId = 'bilal' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'bilal',
    name: 'Bilal',
    blurb: 'The full portfolio, in order',
    color: '#4cc9ff',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Skills and personal work first',
    color: '#4cc9ff',
    order: ['story', 'skills', 'originals', 'about', 'journey', 'picks', 'moments'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Website and technical learning first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'about', 'picks', 'story', 'moments'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'Design and creative interests first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'about', 'skills', 'story', 'moments'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'Introduction • Learning interests', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Chapters`, palette: amber },
  originals: { nav: 'Projects', card: 'Personal Work', meta: `${projects.length} Personal Project`, palette: crimson },
  picks: { nav: 'Highlights', card: 'My Interests', meta: 'Skills and learning focus', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Milestones', card: 'Learning Milestones', meta: 'Learning in progress', palette: crimson },
  story: { nav: 'Document', card: 'Cybersecurity Document', meta: 'View the available PDF', palette: violet },
};
