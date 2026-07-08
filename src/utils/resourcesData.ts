//import images
import carolSportsImg from "../assets/projects-assets/carol-sports.gif";
import wpbot from "../assets/projects-assets/wp-bot.png";

export const resourcesData = [
  {
    id: 1,
    title: "Carol Esportes - E-commerce",
    subtitle: "HTML/CSS/JavaScript",
    price: "Freelance Project",
    area: "Frontend",
    description:
      "Carol Esportes' sales website, a local sporting goods store. Designed to display and sell high-quality sporting goods with a fluid user experience and a responsive layout.",
    features: [
      "Product catalog by category", "Fully responsive design", "Fast loading and smooth navigation"],
    previewUrl: "https://carol-sports-km.vercel.app/",
    getUrl: "https://github.com/SrLuc/CarolSportsKM",
    image: carolSportsImg,
    techStack: ["HTML", "CSS", "JavaScript"],
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
