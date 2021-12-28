export default {
  navbar: {
    changeLanguage: 'Mudar idioma'
  },
  sections: {
    home: { title: 'home' },
    banner: {
      role: 'Full Stack Developer',
      email: 'contact@amonigor.dev',
      button: 'learn more',
    },
    about: {
      title: 'about me',
      firstParagraph: `Hi! I'm <span>Igor Amon</span> and I work as
      <span>Full Stack Developer</span>, with approximately 3 years of experience
      in web development area. I work at
      <a
        href="https://www.linkedin.com/company/xgrow-experience/"
        target="_blank"
        >XGrow Learning Experience</a
      >
      implementing front-end, and when necessary, back-end as well.`,
      secondParagraph: `I have a <span>technical degree</span> from
      <a href="https://etecdrc.com.br/" target="_blank"
        >ETEC Dra. Ruth Cardoso</a
      >, the place responsible for showing me the world of development and
      who fell in love with the area. I'm also studying
      <span>Information Systems</span> at the
      <a href="https://www.unisantos.br/" target="_blank"
        >Catholic University of Santos</a
      >.`,
      myskills: {
        title: 'my skills',
        frontend: {
          firstParagraph: `Since the beginning of my professional experience,
          I made front-end facing the web, so I have a lot of experience with
          HTML, CSS and JavaScript, I also used libraries like BootStrap and
          JQuery to facilitate development.`,
          secondParagraph: `I also have experience with JavaScript frameworks
          like VueJS and Nuxt.`,
        },
        backend: {
          firstParagraph: `For backend development I have a lot of experience
          with PHP, and also with Laravel framework and Lumen. For the database
          part I always use MySql.`,
          secondParagraph: `I'm currently studying other backend tools, such
          as .NET and NestJS.`,
        }
      },
      timeline: {
        title: 'my timeline',
        items: [
          {
            "type": "study",
            "title": "Computer technician",
            "place": "ETEC Dra. Ruth Cardoso",
            "time": "Feb. 2018 - Jun. 2019",
            "description": "First contact with the world of programming, where I learned HTML, CSS, JS and PHP."
          },
          {
            "type": "work",
            "title": "Traineeship",
            "place": "Triad Productivity Solutions",
            "time": "Aug. 2019 - Feb. 2021",
            "description": "First professional experience, I learned a lot from the company and had the opportunity to improve my skills with front-end and back-end."
          },
          {
            "type": "study",
            "title": "Bachelor of Information Systems",
            "place": "Catholic University of Santos",
            "time": "Feb. 2020 - until the moment",
            "description": "My entry into the academic world, where I'm learning more about computing, systems analysis and development, and administration as well."
          },
          {
            "type": "work",
            "title": "Full Stack Developer - Junior",
            "place": "XGrow Learning Experience",
            "time": "Feb. 2021 - until the moment",
            "description": "Front-end implementation and when necessary back-end. Where I had my first contact with Laravel and VueJS."
          },
          {
            "type": "work",
            "title": "Full Stack Developer - Junior",
            "place": "Nerau CX",
            "time": "Jun. 2021 - Aug. 2021",
            "description": "Front-end and back-end implementation. Where did I get more experience with Laravel backend development."
          }
        ]
      }
    },
    portfolio: {
      title: 'portfolio',
      items: [
        {
          "title": "My website",
          "description": "My own website, made with Nuxt, open source on Github and automatic deployment on Vercel;",
          "buttonLink": "https://github.com/amonigor/portfolio",
          "buttonText": "access github",
          "image": "amonigor.svg"
        },
        {
          "title": "Helptran",
          "description": "Freelance made with Lumen to make requests on the Youtube API and send emails.",
          "buttonLink": "http://helptran.com.br/",
          "buttonText": "access website",
          "image": "helptran.svg"
        }
      ]
    },
    contact: {
      title: 'contact',
      location: {
        title: 'Where I am',
        content: 'São Vicente, São Paulo - Brazil'
      },
      email: {
        title: 'Send an e-mail',
        content: 'contact@amonigor.dev'
      },
      call: {
        title: 'Call or whatsapp',
      }
    },
    footer: 'All rights reserved'
  }
}