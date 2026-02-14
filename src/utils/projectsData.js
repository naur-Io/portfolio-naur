export const projectsData = {
  about: {
    id: "about",
    type: "about-me",
    title: "About Me",
    subtitle: "Software Developer",
    story:
      "I was born and raised in Cairo, Egypt. Ever since I was a child, I have had a passion for art and design. I was captivated by the vibrant colors and intricate details of the things around me, which inspired me to learn web design, where I delved deeper into the world of UX and product design.",
    current:
      "Today I'm a Design Lead at mano improving the daily process of ordering groceries.",
    experience: [
      { role: "Design Lead", company: "Mano", date: "Current" },
      { role: "Senior Designer", company: "Shopify", date: "2021 – 2022" },
      { role: "Product Designer", company: "OLX", date: "2020 – 2021" },
      { role: "UX/UI Designer", company: "Shrink", date: "2019 – 2020" },
    ],
    skills: [
      {
        title: "Digital Design",
        desc: "Providing innovative problem-solving methods and impactful solutions to ensure a better experience.",
      },
      {
        title: "Frontend Development",
        desc: "Building responsive, accessible, and performant web applications using modern technologies.",
      },
      {
        title: "Micro-Interactions",
        desc: "Adding subtle animations and interactions to delight users.",
      },
    ],
    stack: [
      {
        name: "Framer",
        icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Framer_logo.svg",
      },
      {
        name: "Figma",
        icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      },
      {
        name: "Notion",
        icon: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
      },
      {
        name: "React",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        name: "Vue",
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
      },
      {
        name: "Node",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593642532400-2682810df593?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  mobile1: {
    id: "mobile1",
    type: "case-study",
    title: "Cashless",
    subtitle: "Mobile App",
    company: "Shrink",
    role: "Design Lead",
    tools: ["Figma", "Framer", "Arc", "Notion"],
    timeline: "2020 — 2021",
    description:
      "Managing finances with tools for tracking expenses and budgeting.",
    context:
      "An app that is a powerful tool designed to help users manage their financial responsibilities effectively. The app offers a range of features, including credit card tracking.",
    image:
      "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=2070&auto=format&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1621111848501-8d3634f82336?q=80&w=1000&auto=format&fit=crop",
  },
  blogs: {
    id: "blogs",
    type: "blog-list",
    title: "Writing",
    subtitle: "Thoughts, tutorials & insights",
    thumb:
      "https://images.pexels.com/photos/5951544/pexels-photo-5951544.jpeg?_gl=1*8vy6cx*_ga*MTc1OTQzMDY0Ny4xNzQ3OTk5OTU1*_ga_8JE65Q40S6*czE3NzAxNDMyOTIkbzEwJGcxJHQxNzcwMTQzMzMwJGoyMiRsMCRoMA..",
    posts: [
      {
        id: 1,
        title: "The Future of UI Design",
        desc: "Exploring how AI and spatial computing are reshaping interface design patterns.",
        date: "Oct 12, 2025",
        image:
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
      },
      {
        id: 2,
        title: "Mastering CSS Grid",
        desc: "A comprehensive guide to building complex layouts with few lines of code.",
        date: "Sep 28, 2025",
        image:
          "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1000&auto=format&fit=crop",
      },
      {
        id: 3,
        title: "Vue 3 Composition API",
        desc: "Why I switched from Options API and how it improved my code reusability.",
        date: "Aug 15, 2025",
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop",
      },
      {
        id: 4,
        title: "Minimalism in 2026",
        desc: "Is the bento-grid trend here to stay? Analyzing modern web trends.",
        date: "Jul 03, 2025",
        image:
          "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1000&auto=format&fit=crop",
      },
    ],
  },
  laptop: {
    id: "laptop",
    type: "visual-gallery",
    title: "Visual Portfolio",
    subtitle: "Photography & Audiovisual Direction",
    scrollText: [
      "I'm Tamer, a multi-disciplinary creator specializing in capturing immersive and engaging visual experiences.",
      "My work is characterized by a commitment to clarity, emotion, and attention to detail, ensuring that every frame resonates authentically with its audience.",
      "I have a deep appreciation for lighting and composition. Driven by the desire to innovate and push creative boundaries in the audiovisual industry.",
    ],
    gallery: [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop",
        behanceUrl: "#project1",
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop",
        behanceUrl: "#project2",
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop",
        behanceUrl: "#project3",
      },
      {
        id: 4,
        src: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000&auto=format&fit=crop",
        behanceUrl: "#project4",
      },
    ],
    thumb:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
  },
};
