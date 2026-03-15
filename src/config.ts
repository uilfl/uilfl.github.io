export const siteConfig = {
  title: 'My Personal Blog',
  description: 'A minimalist blog focused on readability',
  url: 'https://uilfl.github.io',
  locale: 'en-US',
  author: {
    name: 'Yusheng Chen',
    tagline: 'Developer',
    bio: 'A developer who works across multiple cities — Taipei, Shanghai, and Tokyo. Blending different cultural and technological approaches in work and life.',
    location: 'Taipei, Shanghai and Tokyo',
    avatar: '',
    links: [
      { label: 'Email', url: 'mailto:your.email@example.com', icon: 'email' },
      { label: 'GitHub', url: 'https://github.com/uilfl', icon: 'github' },
    ],
  },
  nav: [
    { title: 'Blog', url: '/blog/' },
    { title: 'About', url: '/about/' },
  ],
  education: [
    {
      title: 'University Name',
      description: 'Bachelor of Computer Science',
      period: 'Sep 2018 - Jun 2022',
      url: '',
    },
  ],
  projects: [
    {
      title: 'Project Alpha',
      description: 'A full-stack web application built with modern technologies.',
      url: 'https://github.com/uilfl',
      image: '',
    },
    {
      title: 'Project Beta',
      description: 'An open-source CLI tool for developer productivity.',
      url: 'https://github.com/uilfl',
      image: '',
    },
    {
      title: 'Project Gamma',
      description: 'A cross-platform mobile app for daily task management.',
      url: 'https://github.com/uilfl',
      image: '',
    },
  ],
} as const;
