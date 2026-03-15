export const siteConfig = {
  title: 'My Personal Blog',
  description: 'A minimalist blog focused on readability',
  url: 'https://uilfl.github.io',
  locale: 'en-US',
  author: {
    name: 'Yusheng Chen',
    bio: 'A brief description about yourself',
    location: 'Taipei, Shanghai and Tokyo',
    avatar: '',
    links: [
      { label: 'Email', url: 'mailto:your.email@example.com', icon: 'email' },
      { label: 'GitHub', url: 'https://github.com/uilfl', icon: 'github' },
    ],
  },
  nav: [
    { title: 'Posts', url: '/posts/' },
    { title: 'Categories', url: '/categories/' },
    { title: 'Tags', url: '/tags/' },
    { title: 'Search', url: '/search/' },
    { title: 'About', url: '/about/' },
  ],
} as const;
