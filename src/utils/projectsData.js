import me2 from "../assets/me-assets/me2.jpeg";
import me3 from "../assets/me-assets/me3.jpeg";

import maryinolinda from "../assets/visualGallery-assets/v1.png";
import valleyofthemoon from "../assets/visualGallery-assets/v2.jpg";
import UFPEGarden from "../assets/visualGallery-assets/v3.jpg";
import plantGeometry from "../assets/visualGallery-assets/v4.jpg";
import angeldoce from "../assets/visualGallery-assets/v6.jpg";
import bluecave from "../assets/visualGallery-assets/v5.png";
import cave from "../assets/visualGallery-assets/v7.png";

import me5 from "../assets/vd.gif";
import { i18n } from "../i18n";

export const getProjectsData = () => {
  const locale = i18n.global.locale.value;
  const isPt = locale === "pt-BR";

  return {
    about: {
      id: "about",
      type: "about-me",
      title: isPt ? "Sobre Mim" : "About Me",
      subtitle: isPt
        ? "Engenheiro de Software & Criativo Visual"
        : "Software Engineer & Visual Creative",
      story: isPt
        ? "Engenheiro de software. Simultaneamente, vivencio o nomadismo digital, trabalhando enquanto estou constantemente em movimento, explorando novos destinos."
        : "Software engineer. Simultaneously, I experience digital nomadism, working while constantly on the move, exploring new destinations.",
      current: isPt
        ? "Atualmente, crio soluções completas para a internet e sistemas, desde pequenos sistemas até sistemas mais robustos integrando modelos de Inteligência Artificial e aplicando Testes Automatizados. Além disso, busco fotografia e narrativa audiovisual como atividades paralelas."
        : "Currently, I create complete internet solutions and systems, from small systems to more robust systems integrating Artificial Intelligence models and applying Automated Testing. In addition, I pursue photography and storytelling as side activities.",
      experience: [
        {
          role: isPt ? "Engenheiro de Software" : "Software Engineer",
          company: "Motorola CIn/UFPE",
          date: "2026",
        },
        {
          role: isPt ? "Engenheiro de QA" : "QA Engineer",
          company: "Motorola CIn/UFPE",
          date: "2026",
        },
        {
          role: isPt ? "Desenvolvedor Full-Stack" : "Full-Stack Developer",
          company: "Freelancer",
          date: "2022 – 2026",
        },
        {
          role: isPt ? "Desenvolvedor Backend" : "Backend Developer",
          company: "Softex Pernambuco",
          date: "2023 – 2024",
        },
        {
          role: isPt ? "Desenvolvedor Frontend" : "Frontend Developer",
          company: "Softex Pernambuco",
          date: "2022 - 2023",
        },
        {
          role: isPt ? "Designer & Fotógrafo" : "Designer & Photographer",
          company: "Freelancer",
          date: "2022 – 2026",
        },
      ],
      skills: [
        {
          title: isPt ? "Engenheiro de Software" : "Software Engineer",
          desc: isPt
            ? "Tenho experiência prática no desenvolvimento de software, com foco em aplicações web full-stack. Trabalho principalmente com tecnologias dos ecossistemas Java e TypeScript, priorizando arquitetura definida, performance e testes de software como pilares centrais de cada projeto."
            : "I have practical experience in software development, focusing on full-stack web applications. I primarily work with Java and TypeScript ecosystem technologies, prioritizing defined architecture, performance, and software testing as central pillars of each project.",
        },
        {
          title: isPt ? "Fotografia e Direção Estética" : "Photography and Aesthetic Direction",
          desc: isPt
            ? "A fotografia é parte integrante de como crio narrativas visuais. Além de colaborar com ONGs, projetos de ecoturismo, campings e outras iniciativas por meio da fotografia e presença digital, busco trabalhar com pessoas e atmosferas para transmitir identidade e significado através de imagens e vídeos verticais e horizontais."
            : "Photography is integral to how I create visual narratives. In addition to collaborating with NGOs and ecotourism projects, campsites, and other initiatives through photography and digital presence, I strive to work with people and atmosphere to convey identity and meaning through vertical and horizontal images and videos.",
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
      title: isPt ? "Criador de Conteúdo Digital" : "Digital Content Creator",
      subtitle: isPt
        ? "Edição de vídeos e criação de thumbnails para YouTube e redes sociais, com foco em conteúdo atraente e maior engajamento."
        : "editing videos and creating thumbnails for YouTube and social networks, focusing on simple content, attractive visuals and greater engagement.",
      company: "NAUR",
      role: isPt ? "Designer de Thumbnails e Editor de Vídeo" : "Youtuber Thumbnail Designer and Video Editor",
      tools: ["DaVinci Resolve, Adobe Photoshop"],
      timeline: "2026",
      description: isPt
        ? "Como Criador de Conteúdo Digital na NAUR, foco na edição de vídeos e criação de thumbnails para YouTube e redes sociais. Meu objetivo é produzir conteúdo envolvente com visual atraente."
        : "As a Digital Content Creator at NAUR, I focus on editing videos and creating thumbnails for YouTube and social networks. My goal is to produce simple yet engaging content with attractive visuals.",
      context: isPt
        ? "Colaboro com outros criadores e clientes para entender sua visão e entregar conteúdo de alta qualidade que atenda às suas necessidades."
        : "I collaborate with other creators and clients to understand their vision and deliver high-quality content that meets their needs",
      image: me5,
      thumb:
        "https://images.unsplash.com/photo-1621111848501-8d3634f82336?q=80&w=1000&auto=format&fit=crop",
    },
    blogs: {
      id: "blogs",
      type: "blog-list",
      title: isPt ? "Artigos & Estudos de Tecnologia" : "Writing Technology Studies",
      subtitle: isPt
        ? "Pensamentos, Tutoriais e Insights sobre Estudos de Tecnologia"
        : "Thoughts, Tutorials, and Insights from Technology Studies",
      thumb:
        "https://images.pexels.com/photos/5951544/pexels-photo-5951544.jpeg?_gl=1*8vy6cx*_ga*MTc1OTQzMDY0Ny4xNzQ3OTk5OTU1*_ga_8JE65Q40S6*czE3NzAxNDMyOTIkbzEwJGcxJHQxNzcwMTQzMzMwJGoyMiRsMCRoMA..",
    },
    laptop: {
      id: "laptop",
      type: "visual-gallery",
      title: isPt ? "Portfólio Visual" : "Visual Portfolio",
      subtitle: isPt ? "Direção de Fotografia e Design Audiovisual" : "Photography Direction and Audiovisual Design",
      scrollText: isPt
        ? [
            "Na fotografia, busco explorar narrativas visuais que se expressam por meio de sensações.",
            "Paisagens e lugares remotos são, para mim, espaços onde a imponência e o silêncio revelam presença e contemplação.",
          ]
        : [
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
};

export const projectsData = new Proxy(
  {},
  {
    get(_target, prop) {
      const data = getProjectsData();
      return Reflect.get(data, prop);
    },
    ownKeys() {
      return Reflect.ownKeys(getProjectsData());
    },
    getOwnPropertyDescriptor(_target, prop) {
      return Reflect.getOwnPropertyDescriptor(getProjectsData(), prop);
    }
  }
);
