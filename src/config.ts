export const siteConfig = {
  title: "Ric's Blog",
  description: "A minimalist blog focused on readability",
  url: "https://uilfl.github.io",
  locale: "en-US",
  author: {
    name: "Yusheng Chen",
    tagline: "Designer",
    bio: " Work hard and smart",
    location: "Ann Arbor, Michigan, USA",
    avatar: "",
    links: [
      {
        label: "Email",
        url: "mailto:ricworking@designedbyric.com",
        icon: "email",
      },
      { label: "GitHub", url: "https://github.com/uilfl", icon: "github" },
    ],
  },
  nav: [
    { title: "Blog", url: "/blog/" },
    { title: "About", url: "/about/" },
  ],
  education: [
    {
      title: "University of Michigan",
      description: "Master of Science in Information Science",
      period: "Aug 2026",
      url: "",
    },
    {
      title: "National ChengChi University",
      description:
        "Bachelor of Science and Art in Japanese Study and Digital Techonogies",
      period: "Sep 2021 - May 2026",
      url: "",
    },
  ],
  projects: [
    {
      title: "X School: Service Design Project",
      description:
        "A full-stack web application built with modern technologies.",
      url: "https://github.com/uilfl",
      image: "",
    },
    {
      title: "LLM Arena",
      description: "An open-source CLI tool for developer productivity.",
      url: "https://github.com/uilfl",
      image: "",
    },
    {
      title: "Good Temper Bar Design: Restaurant Landing Page Design",
      description: "A cross-platform mobile app for daily task management.",
      url: "https://github.com/uilfl",
      image: "",
    },
    {
      title: "Fintech Competition: Esun Bank 3rd place.",
      description: "A cross-platform mobile app for daily task management.",
      url: "https://github.com/uilfl",
      image: "",
    },
  ],
} as const;
