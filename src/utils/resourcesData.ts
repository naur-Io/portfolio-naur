//import images
import carolPrintShopImg from "../assets/projects-assets/carol-print.gif";
import carolSportsImg from "../assets/projects-assets/carol-sports.gif";
import pinhoPort from "../assets/projects-assets/pinho-port.gif";
import wpbot from "../assets/projects-assets/wp-bot.png";

export const resourcesData = [
  {
    id: 1,
    title: "Carol Print Shop - Website",
    subtitle: "HTML/CSS/JS",
    price: "Freelance Project",
    area: "Frontend",
    description:
      "Desenvolvimento de um website de portfólio profissional para a Carol Print Shop. Construído com HTML, CSS, JavaScript e uma API RESTful para buscar e exibir conteúdo dinamicamente. Um website simples, moderno e funcional, focado na apresentação de serviços e produtos.",
    features: ["Layout Reponsivo", "Carregamento Dinâmico via REST API"],
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
      "Site de vendas da Carol Esportes, uma loja local de artigos esportivos. Projetado para exibir e vender itens esportivos de alta qualidade com uma experiência de usuário fluida e um layout responsivo.",
    features: [
      "Catálogo de produtos por categoria",
      "Design totalmente responsivo",
      "Carregamento rápido e navegação suave",
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
      "Portfólio online moderno para Mateus Pinho, personal trainer. Desenvolvido com Vue.js e TypeScript, seguindo um design limpo inspirado no Linktree. Destaca sua formação, certificações, planos de treinamento e serviços de coaching. O site é totalmente responsivo, garantindo uma experiência fluida em dispositivos móveis e desktops.",
    features: [
      "Arquitetura de Componentes em Vue.js",
      "TypeScript para segurança de tipos",
      "Layout minimalista inspirado no Linktree",
      "Design responsivo com foco em dispositivos móveis",
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
