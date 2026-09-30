import carolPrintShopImg from "../assets/projects-assets/carol-print.gif";
import carolSportsImg from "../assets/projects-assets/carol-sports.gif";
import cantoAlegre from "../assets/projects-assets/canto-alegre.png";
import { i18n } from "../i18n";

export const getResourcesData = () => {
  const locale = i18n.global.locale.value;
  const isPt = locale === "pt-BR";

  return [
    {
      id: 1,
      title: "Canto Alegre",
      subtitle: "React / Spring Boot / PWA / Google Gemini AI",
      price: isPt ? "Projeto Código Aberto" : "Open Source Project",
      area: "Full Stack",
      description: isPt
        ? "Uma aplicação web progressiva (PWA) offline-first e assistente botânico. Utiliza a visão multimodal do Google Gemini AI para identificar instantaneamente espécies de plantas a partir de fotos das folhas, calcular cronogramas de rega e fornecer guias de propagação por estquia."
        : "An offline-first Progressive Web App (PWA) and botanical assistant. Uses Google Gemini AI multimodal vision to instantly identify plant species from leaf photos, calculate watering schedules, and provide step-by-step cutting propagation guides.",
      features: isPt
        ? [
            "Identificação de fotos por IA multimodal com Google Gemini",
            "Arquitetura PWA 100% offline-first com persistência IndexedDB",
            "Guias de corte, propagação e enraizamento passo a passo",
            "Alertas automatizados de sede e diário de rega",
            "Suporte a internacionalização bilíngue (PT-BR / EN)",
            "API REST robusta construída com Spring Boot 3, Java 21 e PostgreSQL",
          ]
        : [
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
      price: isPt ? "Projeto Freelance" : "Freelance Project",
      area: "Frontend",
      description: isPt
        ? "Desenvolvimento do site portfólio profissional para a Carol Print Shop. Construído com HTML, CSS, JavaScript e uma API RESTful para recuperar e exibir conteúdo dinamicamente. Um site simples, moderno e funcional focado na apresentação de serviços e produtos."
        : "Development of a professional portfolio website for Carol Print Shop. Built with HTML, CSS, JavaScript, and a RESTful API to dynamically retrieve and display content. A simple, modern, and functional website focused on showcasing services and products.",
      features: isPt
        ? ["Layout Responsivo", "Carregamento Dinâmico via API REST"]
        : ["Responsive Layout", "Dynamic Loading via REST API"],
      previewUrl: "https://carolgrafica.com.br/",
      getUrl: "https://github.com/naur-Io/CarolCopiadoraKM",
      image: carolPrintShopImg,
      techStack: ["HTML", "CSS", "JavaScript", "REST API"],
    },
    {
      id: 3,
      title: "Carol Esportes - E-commerce",
      subtitle: "HTML/CSS/JavaScript",
      price: isPt ? "Projeto Freelance" : "Freelance Project",
      area: "Frontend",
      description: isPt
        ? "Website de vendas da Carol Esportes, loja local de artigos esportivos. Desenvolvido para exibir e vender produtos esportivos de alta qualidade com experiência fluida e layout responsivo."
        : "Carol Esportes' sales website, a local sporting goods store. Designed to display and sell high-quality sporting goods with a fluid user experience and a responsive layout.",
      features: isPt
        ? [
            "Catálogo de produtos por categoria",
            "Design totalmente responsivo",
            "Carregamento rápido e navegação fluida",
          ]
        : [
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
};

export const resourcesData = new Proxy([], {
  get(_target, prop) {
    const data = getResourcesData();
    return Reflect.get(data, prop);
  }
});
