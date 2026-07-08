//import images
import carolPrintShopImg from "../assets/projects-assets/carol-print.gif";
import carolSportsImg from "../assets/projects-assets/carol-sports.gif";
import wpbot from "../assets/projects-assets/wp-bot.png";

export const resourcesData = [
  {
    id: 1,
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
    id: 2,
    title: "WhatsApp Finance Bot",
    subtitle: "Node.js + WhatsApp API",
    price: "Projeto Pessoal",
    area: "Backend",
    description:
      "Bot de finanças pessoais para WhatsApp para um acompanhamento rápido das suas finanças diárias. Registre receitas, despesas e anotações financeiras diretamente pelo WhatsApp. Gera relatórios mensais e anuais abrangendo todas as contas, despesas e receitas.",
    features: [
      "Registrar receitas/despesas via WhatsApp",
      "Relatórios financeiros mensais e anuais",
      "Interface de comando simples",
      "Pode ser executado em um cartão SIM pessoal",
    ],
    previewUrl: "https://github.com/naur-Io/WhatsApp-Finance-Bot",
    getUrl: "https://github.com/naur-Io/WhatsApp-Finance-Bot",
    image: wpbot,
    techStack: ["Node.js", "WhatsApp API", "REST API"],
  },
];
