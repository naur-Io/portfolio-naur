//Me Photos
import me2 from "../assets/me-assets/me2.jpeg";
import me3 from "../assets/me-assets/me3.jpeg";

//Visual Gallery Photos
import maryinolinda from "../assets/visualGallery-assets/v1.png";
import valleyofthemoon from "../assets/visualGallery-assets/v2.jpg"

export const projectsData = {
  about: {
    id: "about",
    type: "about-me",
    title: "About Me",
    subtitle: "Software Engineer & Visual Creative",
    story:
      "I am a Brazilian software engineer who combines technical precision with artistic sensibility. Isee software not only as functional systems, but as crafted experiences where structure, clarity, and aesthetics work together.",
    current:
      "Currently, I develop full-stack solutions while continuously exploring visual design and photography as complementary disciplines that refine my understanding of product experience.",
    experience: [
      {
        role: "QA Engineer",
        company: "CIn - UFPE",
        date: "Current",
      },
      {
        role: "Software Engineer",
        company: "Motorola",
        date: "2026",
      },
      {
        role: "Full-Stack Developer",
        company: "Freelancer",
        date: "2022 – 2026",
      },
      {
        role: "Backend Developer",
        company: "Softex Pernambuco",
        date: "2023 – 2024",
      },
      {
        role: "Frontend Developer",
        company: "Softex Pernambuco",
        date: "2022 - 2023",
      },
      {
        role: "Designer & Photographer",
        company: "Freelancer",
        date: "2022 – 2026",
      },
    ],
    skills: [
      {
        title: "Software Engineering",
        desc: "I build scalable web and mobile applications with a strong focus on clean architecture, maintainable code, and long-term performance. I value clear abstractions, modular systems, and practical solutions. I also explore AI and machine learning as tools to create smarter and more efficient products.",
      },
      {
        title: "Visual Design & Composition",
        desc: "I see design as a balance between structure and creativity. I apply principles like hierarchy, contrast, and typography to create clear and intuitive interfaces, always considering responsiveness and user experience across devices.",
      },
      {
        title: "Photography & Aesthetic Direction",
        desc: "Photography is part of how I understand visual storytelling. I focus on light, framing, and atmosphere to build strong visual identities, and I’ve supported NGOs and eco-camping projects with imagery and digital presence.",
      },
    ],
    stack: [
      {
        name: "React",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
      },
      {
        name: "Node.js",
        icon: "https://s3.eu-west-1.amazonaws.com/images.tutorialedge.net/images/node.png",
      },
      {
        name: "Java",
        icon: "https://education.oracle.com/file/general/p-80-java.png",
      },
      {
        name: "TypeScript",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1280px-Typescript_logo_2020.svg.png",
      },
      {
        name: "Docker",
        icon: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
      },
      {
        name: "Git",
        icon: "https://img.icons8.com/color/512/git.png",
      },
      {
        name: "PostgreSQL",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1280px-Postgresql_elephant.svg.png",
      },
      {
        name: "Figma",
        icon: "https://blog.greggant.com/images/posts/2019-04-25-figma/Figma.png",
      },
      {
        name: "Canva",
        icon: "https://cdn-1.webcatalog.io/catalog/canva-cn/canva-cn-icon.png?v=1766364645830",
      },
    ],
    gallery: [me2, me3],
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
      "I'm Naur, a systems developer and audiovisual producer with practical experience in modern web and mobile applications.",
      "I primarily work with technologies from the Typescript ecosystem and structured backends, prioritizing well-defined architecture, performance, and user experience as central pillars of each project.",
      "In audiovisual production, I apply technical fundamentals of composition and visual storytelling to build with a clear identity and communicative intent. My unique approach lies in integrating aesthetics, storytelling, and visual direction within the same creative process.",
    ],
    gallery: [
      {
        id: 1,
        src: maryinolinda,
        behanceUrl: "https://www.behance.net/gallery/244600657/Mary-in-Olinda",
      },
       {
        id: 2,
        src: valleyofthemoon,
        behanceUrl: "https://www.behance.net/gallery/245155443/Valley-of-the-Moon",
      },
    ],
    thumb:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
  },
};
