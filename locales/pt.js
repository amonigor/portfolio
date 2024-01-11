export default {
  navbar: {
    changeLanguage: 'Change language'
  },
  sections: {
    home: { title: 'início' },
    banner: {
      role: 'Engenheiro de Software',
      email: 'contato@amonigor.dev',
      button: 'saiba mais',
    },
    about: {
      title: 'sobre mim',
      firstParagraph: `Olá! Me chamo <span>Igor Amon</span> e atuo como
      <span>Engenheiro de Software</span>, com aproximadamente 5 anos de
      experiência na área de desenvolvimento web. Trabalho hoje na
      <a
        href="https://www.bentley.com/"
        target="_blank"
        >Bentley Systems</a
      >
      implementando front-end com Vue e React.`,
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
      timeline: {
        title: 'minha trajetória',
        items: [
          {
            "type": "study",
            "title": "Técnico em Informática",
            "place": "ETEC Dra. Ruth Cardoso",
            "time": "Fev. 2018 - Jun. 2019",
            "description": "Primeiro contato com o mundo da programação, onde aprendi HTML, CSS, JS e PHP"
          },
          {
            "type": "work",
            "title": "Estágio",
            "place": "Triad Productivity Solutions",
            "time": "Ago. 2019 - Fev. 2021",
            "description": "Primeira experiência profissional, aprendi muito com a empresa e tive a oportunidade de melhorar minhas skills com front e back-end"
          },
          {
            "type": "study",
            "title": "Bacharelado em Sistemas de Informação",
            "place": "Universidade Católica de Santos",
            "time": "Fev. 2020 - até o momento",
            "description": "Minha entrada no mundo acadêmico, onde estou aprendendo mais sobre computação, análise e desenvolvimento de sistemas e também administração."
          },
          {
            "type": "work",
            "title": "Desenvolvedor Full Stack - Júnior",
            "place": "XGrow Learning Experience",
            "time": "Fev. 2021 - Mai. 2022",
            "description": "Implementações de front-end, e quando necessário back-end. Onde tive meu primeiro contato com Laravel e VueJS."
          },
          {
            "type": "work",
            "title": "Desenvolvedor Full Stack - Júnior",
            "place": "Nerau CX",
            "time": "Jun. 2021 - Ago. 2021",
            "description": "Implementações de front-end e back-end. Onde tive mais experiência de desenvolvimento back-end utilizando Laravel."
          },
          {
            "type": "work",
            "title": "Desenvolvedor Front-end",
            "place": "Blueticket",
            "time": "Mai. 2022 - Ago. 2022",
            "description": "Implementações de front-end utilizando do framework VueJS e a biblioteca Vuetify."
          },
          {
            "type": "work",
            "title": "Engenheiro de Software | Front-end",
            "place": "Bentley Systems",
            "time": "Set. 2022 - Jan. 2024",
            "description": "Implementações de front-end utilizando do framework VueJS."
          }
        ]
      }
    },
    portfolio: {
      title: 'portfólio',
      items: [
        {
          "title": "Meu site",
          "description": "Meu próprio site, feito em Nuxt, com o código aberto no Github e deploy automático na Vercel.",
          "buttonLink": "https://github.com/amonigor/portfolio",
          "buttonText": "acessar github",
          "image": "amonigor.svg"
        },
        {
          "title": "Helptran - Soluções em CNH",
          "description": "Freelance feito com Lumen para fazer consultas à API do Youtube e envios de email.",
          "buttonLink": "http://helptran.com.br/",
          "buttonText": "acessar site",
          "image": "helptran.svg"
        }
      ]
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
