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
    stack: {
      title: 'Tech Stack'
    },
    contact: {
      title: "Let's talk",
      subtitle: 'Get in touch for projects or collaborations'
    },
    resources: {
      title: 'Resources',
      subtitle: 'Explore curated tools and links'
    },
    newsletter: {
      title: 'Newsletter',
      subtitle: 'Stay updated with my latest thoughts'
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
    stack: {
      title: 'Tecnologias'
    },
    contact: {
      title: 'Vamos conversar',
      subtitle: 'Entre em contato para projetos ou colaborações'
    },
    resources: {
      title: 'Recursos',
      subtitle: 'Explore ferramentas e links selecionados'
    },
    newsletter: {
      title: 'Boletim informativo',
      subtitle: 'Fique atualizado com minhas publicações'
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n
