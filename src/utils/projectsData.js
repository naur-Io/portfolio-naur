//Me Photos
import me2 from "../assets/me-assets/me2.jpeg";
import me3 from "../assets/me-assets/me3.jpeg";

//Visual Gallery Photos
import maryinolinda from "../assets/visualGallery-assets/v1.png";
import valleyofthemoon from "../assets/visualGallery-assets/v2.jpg";
import UFPEGarden from "../assets/visualGallery-assets/v3.jpg";
import plantGeometry from "../assets/visualGallery-assets/v4.jpg";
import angeldoce from "../assets/visualGallery-assets/v6.jpg";
import bluecave from "../assets/visualGallery-assets/v5.png";
import cave from "../assets/visualGallery-assets/v7.png";

//content creator photos
import me4 from "../assets/vd2.gif";
import me5 from "../assets/vd.gif";

export const projectsData = {
  about: {
    id: "about",
    type: "about-me",
    title: "About Me",
    subtitle: "Software Engineer & Visual Creative",
    story:
      "Software engineer. Simultaneously, I experience digital nomadism, working while constantly on the move, exploring new destinations.",
    current:
      "Currently, I create complete internet solutions and systems, from small systems to more robust systems integrating Artificial Intelligence models and applying Automated Testing. In addition, I pursue photography and storytelling as side activities. I have experience in web design and visual and audiovisual production.",
    experience: [
      {
        role: "Software Engineer",
        company: "Motorola CIn/UFPE",
        date: "2026",
      },
      {
        role: "QA Engineer",
        company: "Motorola CIn/UFPE",
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
        title: "Software Engineer",
        desc: "I have practical experience in software development, focusing on full-stack web applications. I primarily work with Java and TypeScript ecosystem technologies, prioritizing defined architecture, performance, and software testing as central pillars of each project..",
      },
      {
        title: "Photography and Aesthetic Direction",
        desc: "Photography is integral to how I create visual narratives. In addition to collaborating with NGOs and ecotourism projects, campsites, and other initiatives through photography and digital presence, I strive to work with people and atmosphere to convey identity and meaning through vertical and horizontal images and videos.",
      },
    ],
    stack: [
      {
        name: "React",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
      },
      {
        name: "Vue",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1280px-Vue.js_Logo_2.svg.png",
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
        name: "SpringBoot",
        icon: "https://img.icons8.com/color/512/spring-logo.png",
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
      {
        name: "Da Vinci Resolve",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/DaVinci_Resolve_Studio.png/500px-DaVinci_Resolve_Studio.png",
      },
      {
        name: "CapCut",
        icon: "https://static.vecteezy.com/system/resources/thumbnails/048/759/325/small_2x/capcut-transparent-icon-free-png.png",
      },
    ],
    gallery: [me2, me3],
  },
  mobile1: {
    id: "mobile1",
    type: "case-study",
    title: "Digital Content Creator",
    subtitle:
      "editing videos and creating thumbnails for YouTube and social networks, focusing on simple content, attractive visuals and greater engagement.",
    company: "NAUR",
    role: "Youtuber Thumbnail Designer and Video Editor",
    tools: ["DaVinci Resolver, Adobe Photoshop"],
    timeline: "2026",
    description:
      "As a Digital Content Creator at NAUR, I focus on editing videos and creating thumbnails for YouTube and social networks. My goal is to produce simple yet engaging content with attractive visuals.",
    context:
      "I collaborate with other creators and clients to understand their vision and deliver high-quality content that meets their needs",
    image: me5,
    thumb:
      "https://images.unsplash.com/photo-1621111848501-8d3634f82336?q=80&w=1000&auto=format&fit=crop",
  },
  blogs: {
    id: "blogs",
    type: "blog-list",
    title: "Writing Technology Studies",
    subtitle: "Thoughts, Tutorials, and Insights from Technology Studies",
    thumb:
      "https://images.pexels.com/photos/5951544/pexels-photo-5951544.jpeg?_gl=1*8vy6cx*_ga*MTc1OTQzMDY0Ny4xNzQ3OTk5OTU1*_ga_8JE65Q40S6*czE3NzAxNDMyOTIkbzEwJGcxJHQxNzcwMTQzMzMwJGoyMiRsMCRoMA..",
  },
  laptop: {
    id: "laptop",
    type: "visual-gallery",
    title: "Visual Portfolio",
    subtitle: "Direção de Fotografia e Design Audiovisual",
    scrollText: [
      "In photography, I seek to explore visual narratives that speak through sensations.",
      "Landscapes, remote and isolated places, for me, are spaces where grandeur and silence reveal a sense of presence, immensity, and contemplation.",
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
        behanceUrl:
          "https://www.behance.net/gallery/245155443/Valley-of-the-Moon",
      },
      {
        id: 1,
        src: UFPEGarden,
        behanceUrl: "https://www.behance.net/gallery/246002465/UFPE-Garden",
      },
      {
        id: 1,
        src: plantGeometry,
        behanceUrl: "https://www.behance.net/gallery/254697595/Plants-Geometry",
      },
      {
        id: 1,
        src: angeldoce,
        behanceUrl:
          "https://www.behance.net/gallery/254754063/Anjo-da-Lapa-Doce",
      },
      {
        id: 1,
        src: bluecave,
        behanceUrl:
          "https://www.behance.net/gallery/254704425/Beneath-the-Blue",
      },
      {
        id: 1,
        src: cave,
        behanceUrl:
          "https://www.behance.net/gallery/254627671/Cave-Lapa-Doce",
      },
    ],
    thumb:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
  },
};
