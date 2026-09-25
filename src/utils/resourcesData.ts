//import images
import carolPrintShopImg from "../assets/projects-assets/carol-print.gif";
import carolSportsImg from "../assets/projects-assets/carol-sports.gif";
import cantoAlegre from "../assets/projects-assets/canto-alegre.png";

export const resourcesData = [
  {
    id: 1,
    title: "Canto Alegre",
    subtitle: "React / Spring Boot / PWA / Google Gemini AI",
    price: "Open Source Project",
    area: "Full Stack",
    description:
      "An offline-first Progressive Web App (PWA) and botanical assistant. Uses Google Gemini AI multimodal vision to instantly identify plant species from leaf photos, calculate watering schedules, and provide step-by-step cutting propagation guides.",
    features: [
      "AI multimodal photo identification with Google Gemini",
      "100% offline-first PWA architecture with IndexedDB persistence",
      "Step-by-step cutting, propagation, and rooting guides",
      "Automated thirst alerts and daily watering logs",
      "Bilingual internationalization support (PT-BR / EN)",
      "Robust REST API built with Spring Boot 3, Java 21, and PostgreSQL",
    ],
    previewUrl: "https://canto-alegre-nine.vercel.app/",
    getUrl: "https://github.com/naur-Io/Canto-Alegre.git",
    image: cantoAlegre,
    techStack: [
      "React 18",
      "Vite",
      "PWA / Service Worker",
      "IndexedDB",
      "Java 21",
      "Spring Boot 3",
      "PostgreSQL",
      "Google Gemini AI API",
    ],
  },
  {
    id: 2,
    title: "Carol Print Shop - Website",
    subtitle: "HTML/CSS/JS",
    price: "Freelance Project",
    area: "Frontend",
    description:
      "Development of a professional portfolio website for Carol Print Shop. Built with HTML, CSS, JavaScript, and a RESTful API to dynamically retrieve and display content. A simple, modern, and functional website focused on showcasing services and products.",
    features: ["Responsive Layout", "Dynamic Loading via REST API"],
    previewUrl: "https://carolgrafica.com.br/",
    getUrl: "https://github.com/naur-Io/CarolCopiadoraKM",
    image: carolPrintShopImg,
    techStack: ["HTML", "CSS", "JavaScript", "REST API"],
  },
  {
    id: 3,
    title: "Carol Esportes - E-commerce",
    subtitle: "HTML/CSS/JavaScript",
    price: "Freelance Project",
    area: "Frontend",
    description:
      "Carol Esportes' sales website, a local sporting goods store. Designed to display and sell high-quality sporting goods with a fluid user experience and a responsive layout.",
    features: [
      "Product catalog by category",
      "Fully responsive design",
      "Fast loading and smooth navigation",
    ],
    previewUrl: "https://carol-sports-km.vercel.app/",
    getUrl: "https://github.com/SrLuc/CarolSportsKM",
    image: carolSportsImg,
    techStack: ["HTML", "CSS", "JavaScript"],
  },
];
