import { createI18n } from 'vue-i18n'

export const messages = {
  en: {
    intro: {
      role: 'Software Engineer',
      title: "Hi, I'm Naur",
      location: 'Recife - Brasil',
      description: 'Software engineer, Photography and Audio-Visual Storytelling'
    },
    about: {
      title: 'About',
      description: 'know a little more about my kind of work'
    },
    language: {
      label: 'Language',
      en: 'EN',
      pt: 'PT-BR'
    },
    projects: {
      contentCreator: 'Content Creator',
      blogs: 'Blogs',
      visualPortfolio: 'Visual Portfolio'
    },
    recentProjects: {
      title: 'Recent Projects',
      subtitle: 'See some of my most recent works'
    },
    stack: {
      title: 'Tech Stack'
    },
    contact: {
      title: 'Do you have any projects in mind?',
      subtitle: "Let's create something.",
      emailCopied: 'Email copied to clipboard!',
      copyFailed: 'Failed to copy email',
      anyIdeas: 'Any ideas in mind ?',
      contactMe: 'Contact Me',
      emailCopiedShort: 'Email copied!',
      copyFailedShort: 'Failed to copy'
    },
    resources: {
      title: 'Resources',
      subtitle: 'Explore curated tools and links'
    },
    newsletter: {
      description: 'Content and insights sent directly to your email',
      emailPlaceholder: 'Your email address',
      subscribe: 'Subscribe',
      subscribing: 'Subscribing...',
      successMsg: '🎉 Thank you! Check your email to confirm.',
      invalidMsg: 'Please enter a valid email address.'
    },
    aboutMe: {
      title: 'Life is movement',
      labelAbout: 'ABOUT ME',
      labelCurrent: 'WHAT I CURRENTLY DO',
      companyExperience: 'Company Experience',
      whatIDoBest: 'WHAT I DO BEST',
      stackUse: 'Stack I use',
      at: 'at'
    },
    resourceModal: {
      title: 'Projects',
      subtitle: 'Recently Developed Websites and Systems',
      learnMore: 'Learn More'
    },
    resourcePage: {
      seeGithub: 'See in Github',
      liveDeploy: 'Live Deploy',
      description: 'Description',
      features: 'Features'
    }
  },
  'pt-BR': {
    intro: {
      role: 'Engenheiro de Software',
      title: 'Olá, eu sou o Naur',
      location: 'Recife - Brasil',
      description: 'Engenheiro de software, Fotografia e Narrativa Audiovisual'
    },
    about: {
      title: 'Sobre',
      description: 'conheça um pouco mais sobre o meu tipo de trabalho'
    },
    language: {
      label: 'Idioma',
      en: 'EN',
      pt: 'PT-BR'
    },
    projects: {
      contentCreator: 'Criador de Conteúdo',
      blogs: 'Blogs',
      visualPortfolio: 'Portfólio Visual'
    },
    recentProjects: {
      title: 'Projetos Recentes',
      subtitle: 'Veja alguns dos meus trabalhos mais recentes'
    },
    stack: {
      title: 'Tecnologias'
    },
    contact: {
      title: 'Tem algum projeto em mente?',
      subtitle: 'Vamos criar algo juntos.',
      emailCopied: 'E-mail copiado para a área de transferência!',
      copyFailed: 'Falha ao copiar e-mail',
      anyIdeas: 'Tem alguma ideia em mente?',
      contactMe: 'Entre em Contato',
      emailCopiedShort: 'E-mail copiado!',
      copyFailedShort: 'Falha ao copiar'
    },
    resources: {
      title: 'Recursos',
      subtitle: 'Explore ferramentas e links selecionados'
    },
    newsletter: {
      description: 'Conteúdos e insights enviados diretamente para o seu e-mail',
      emailPlaceholder: 'Seu endereço de e-mail',
      subscribe: 'Inscrever-se',
      subscribing: 'Insccrevendo-se...',
      successMsg: '🎉 Obrigado! Verifique seu e-mail para confirmar.',
      invalidMsg: 'Por favor, insira um endereço de e-mail válido.'
    },
    aboutMe: {
      title: 'A vida é movimento',
      labelAbout: 'SOBRE MIM',
      labelCurrent: 'O QUE FAÇO ATUALMENTE',
      companyExperience: 'Experiência Profissional',
      whatIDoBest: 'O QUE FAÇO DE MELHOR',
      stackUse: 'Tecnologias que utilizo',
      at: 'na'
    },
    resourceModal: {
      title: 'Projetos',
      subtitle: 'Sistemas e Websites Desenvolvidos Recentemente',
      learnMore: 'Saiba Mais'
    },
    resourcePage: {
      seeGithub: 'Ver no GitHub',
      liveDeploy: 'Acessar Projeto',
      description: 'Descrição',
      features: 'Recursos'
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'pt-BR',
  fallbackLocale: 'pt-BR',
  messages
})

export default i18n
