export default {
  navbar: {
    changeLanguage: 'Change language'
  },
  sections: {
    home: { title: 'início' },
    banner: {
      role: 'Desenvolvedor Full Stack',
      email: 'contato@amonigor.dev',
      button: 'saiba mais',
    },
    about: {
      title: 'sobre mim',
      firstParagraph: `Olá! Me chamo <span>Igor Amon</span> e atuo como
      <span>Desenvolvedor Full Stack</span>, com aproximadamente 3 anos de
      experiência na área de desenvolvimento web. Trabalho hoje na
      <a
        href="https://www.linkedin.com/company/xgrow-experience/"
        target="_blank"
        >XGrow Learning Experience</a
      >
      implementando front-end, e quando necessário back-end também.`,
      secondParagraph: `Tenho <span>formação técnica</span> pela
      <a href="https://etecdrc.com.br/" target="_blank"
        >ETEC Dra. Ruth Cardoso</a
      >, lugar responsável por me mostrar o mundo de desenvolvimento e que
      me fez apaixonar pela área. Hoje estou cursando
      <span>Sistemas de Informação</span> na
      <a href="https://www.unisantos.br/" target="_blank"
        >Universidade Católica de Santos</a
      >.`,
      myskills: {
        title: 'minhas skills',
        frontend: {
          firstParagraph: `Desde o começo da minha experiência profissional,
          fiz front-end voltados para a web, então tenho bastante experiência
          com HTML, CSS e JavaScript, também utilizei bibliotecas como BootStrap
          e JQuery para facilitar no desenvolvimento.`,
          secondParagraph: `Também tenho experiência com frameworks JavaScript
          como VueJS e Nuxt.`,
        },
        backend: {
          firstParagraph: `Para o desenvolvimento de back-end tenho muita
          experiência com PHP, e também com o framework Laravel e Lumen. Para
          a parte de banco de dados utilizo sempre o MySql.`,
          secondParagraph: `Estou no momento estudando outras ferramentas para
          back-end, como .NET e NestJS.`,
        }
      },
      timeline: 'minha trajetória'
    },
    portfolio: {
      title: 'portfólio',
    },
    contact: {
      title: 'contato',
      location: {
        title: 'Onde estou',
        content: 'São Vicente, São Paulo - Brasil'
      },
      email: {
        title: 'Envie um e-mail',
        content: 'contato@amonigor.dev'
      },
      call: {
        title: 'Chamada ou whatsapp',
      }
    },
    footer: 'Todos os Diretos Reservados'
  }
}