//Me Photos
import me2 from "../assets/me-assets/me2.jpeg";
import me3 from "../assets/me-assets/me3.jpeg";

//Visual Gallery Photos
import maryinolinda from "../assets/visualGallery-assets/v1.png";
import valleyofthemoon from "../assets/visualGallery-assets/v2.jpg";

export const projectsData = {
  about: {
    id: "about",
    type: "about-me",
    title: "About Me",
    subtitle: "Software Engineer & Visual Creative",
    story:
      "Engenheiro de software. Simultaneamente, experimento o nomadismo digital, exercendo meu trabalho enquanto estou em constante movimento, explorando novos destinos.",
    current:
      "Atualmente, crio soluções e sistemas completos para a internet, desde pequenos sistemas até sistemas mais robustos com integração de modelos de Inteligência Artificial e aplicação de Testes de Automatizados. \nAlém disso, mantenho a fotografia e o storytelling como atividades paralelas. Tenho experiência em web design e produção visual e audiovisual.",
    experience: [
      {
        role: "Software Engineer",
        company: "CIn - UFPE",
        date: "2026",
      },
      {
        role: "QA Engineer",
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
        title: "Engenheiro de Software",
        desc: "Tenho experiência prática em desenvolvimento de software, com foco em aplicações web Full-stack. Trabalho principalmente com tecnologias do ecossistema Java & Typescript, priorizando arquitetura definida, desempenho e testes de software como pilares centrais de cada projeto.",
      },
      {
        title: "Fotografia & Direção Estética",
        desc: "A fotografia integra o modo como crio narrativas visuais. Além de colaborar com ONGs e projetos de ecoturismo, Campings e outros projetos por meio da fotografia e da presença digital, busco trabalhar a pessoas e a atmosfera para transmitir identidade e significado às imagens e vídeos verticais e horizontais.",
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
  title: "Feature in Development",
  subtitle: "Projeto em desenvolvimento",
  company: "To Be Defined",
  role: "To Be Defined",
  tools: ["Tbd"],
  timeline: "2026",
  description:
    "Em Desenvolvimento",
  context:
    "Em Desenvolvimento",
  image:
    "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=2070&auto=format&fit=crop",
  thumb:
    "https://images.unsplash.com/photo-1621111848501-8d3634f82336?q=80&w=1000&auto=format&fit=crop",
},
  blogs: {
    id: "blogs",
    type: "blog-list",
    title: "Escrita sobre estudos de Tecnologia",
    subtitle: "Pensamentos, Tutoriais e Insights de Estudos sobre Tecnologia",
    thumb:
      "https://images.pexels.com/photos/5951544/pexels-photo-5951544.jpeg?_gl=1*8vy6cx*_ga*MTc1OTQzMDY0Ny4xNzQ3OTk5OTU1*_ga_8JE65Q40S6*czE3NzAxNDMyOTIkbzEwJGcxJHQxNzcwMTQzMzMwJGoyMiRsMCRoMA..",
  },
  laptop: {
    id: "laptop",
    type: "visual-gallery",
    title: "Visual Portfolio",
    subtitle: "Direção de Fotografia e Design Audiovisual",
    scrollText: [
      "Na fotografia, procuro explorar narrativas visuais que falem através de sensações",
      "Paisagens, lugares afastados e isolados, para mim, são espaços onde o gradenza e o silêncio revelam uma sensação de presença, imensidão e contemplação",
      "",
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
        id: 3,
        src: "UFPE Garden",
        behanceUrl:
          "https://www.behance.net/gallery/246002465/UFPE-Garden",
      },
    ],
    thumb:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
  },
};
