//import images
import carolPrintShopImg from "../assets/projects-assets/carol-print.gif"
import carolSportsImg from "../assets/projects-assets/carol-sports.gif";
import pinhoPort from "../assets/projects-assets/pinho-port.gif";
import wpbot from "../assets/projects-assets/wp-bot.png";

export const resourcesData = [
  {
    id: 1,
    title: "Carol Print Shop - Website Profissional",
    subtitle: "HTML/CSS/JS",
    price: "Freelance Project",
    area: "Frontend",
    description:
      "Development of a professional portfolio website for Carol Print Shop. Built with HTML, CSS, JavaScript and a RESTful API to dynamically fetch and display content. Simple, modern, and functional website focused on presenting services and products.",
    features: [
      "Responsive Layout",
      "Clean UI focused on clarity",
      "Dynamic content loading via REST API",
    ],
    previewUrl: "https://carolgrafica.com.br/",
    getUrl: "https://github.com/naur-Io/CarolCopiadoraKM",
    image: carolPrintShopImg,
    techStack: ["HTML", "CSS", "JavaScript", "REST API"],
  },
  {
    id: 2,
    title: "Carol Esportes - E-commerce",
    subtitle: "HTML/CSS/JavaScript",
    price: "Freelance Project",
    area: "Frontend",
    description:
      "Sales website for Carol Esportes, a local sports products store. Designed to showcase and sell high-quality sports items with smooth user experience and responsive layout.",
    features: [
      "Product catalog with categories",
      "Fully responsive design",
      "Fast loading and smooth browsing",
    ],
    previewUrl: "https://carol-sports-km.vercel.app/",
    getUrl: "https://github.com/SrLuc/CarolSportsKM",
    image: carolSportsImg,
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "Personal Trainer Portfolio",
    subtitle: "Vue.js + TypeScript",
    price: "Freelance Project",
    area: "Frontend",
    description:
      "Modern portfolio website for Mateus Pinho, a personal trainer. Built with Vue.js and TypeScript, following a clean Linktree-inspired design. Highlights background, certifications, training plans, and coaching services.",
    features: [
      "Vue.js Component Architecture",
      "TypeScript for type safety",
      "Linktree-inspired minimalist layout",
      "Mobile-first responsive design",
    ],
    previewUrl: "https://pinho-port.vercel.app/",
    getUrl: "https://github.com/SrLuc/PinhoPort",
    image: pinhoPort,
    techStack: ["Vue.js", "TypeScript"],
  },
  {
    id: 4,
    title: "WhatsApp Finance Bot",
    subtitle: "Node.js + WhatsApp API",
    price: "Personal Project",
    area: "Backend",
    description:
      "Personal WhatsApp finance bot for quick daily financial tracking. Register income, expenses, and financial notes directly through WhatsApp. Generates monthly and yearly reports covering all accounts, expenses, and income.",
    features: [
      "Register income/expenses via WhatsApp",
      "Monthly & yearly financial reports",
      "Simple command interface",
      "Can run on personal SIM card",
    ],
    previewUrl: "https://github.com/naur-Io/WhatsApp-Finance-Bot",
    getUrl: "https://github.com/naur-Io/WhatsApp-Finance-Bot",
    image: wpbot,
    techStack: ["Node.js", "WhatsApp API", "REST API"],
  },
];
