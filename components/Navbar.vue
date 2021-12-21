<template>
  <nav class="container" id="navbar">
    <div class="content">
      <div class="logo">
        <img src="~/assets/img/logo.svg" alt="amonigor.dev" />
      </div>

      <div class="menu-button" @click.prevent="toggleMenu()">
        <button :class="[menu ? 'close' : '']">
          <img
            src="~/assets/img/icons/menu/white.svg"
            class="open"
            alt="Menu"
          />
          <img
            src="~/assets/img/icons/menu/bluegreen1.svg"
            class="open hover-img"
            alt="Menu"
          />
          <img
            src="~/assets/img/icons/menu/close-white.svg"
            class="close"
            alt="Menu"
          />
          <img
            src="~/assets/img/icons/menu/close-bluegreen1.svg"
            class="close hover-img"
            alt="Menu"
          />
        </button>
      </div>

      <div class="links" :class="[menu ? 'open' : '']">
        <a href="#" class="section" @click.prevent="scrollPage('start')">
          <p>início</p>
        </a>
        <a href="#" class="section" @click.prevent="scrollPage('about-me')">
          <p>sobre mim</p>
        </a>
        <a href="#" class="section" @click.prevent="scrollPage('portfolio')">
          <p>portfólio</p>
        </a>
        <a href="#" class="section" @click.prevent="scrollPage('contact')">
          <p>contato</p>
        </a>

        <div class="others">
          <a
            href="https://www.linkedin.com/in/igor-amon/"
            target="_blank"
            class="social"
            title="Linkedin"
          >
            <img src="~/assets/img/icons/linkedin/white40.svg" alt="Linkedin" />
            <img
              src="~/assets/img/icons/linkedin/bluegreen2.svg"
              class="hover-img"
              alt="Linkedin"
            />
          </a>
          <a
            href="https://github.com/amonigor"
            target="_blank"
            class="social"
            title="Github"
          >
            <img src="~/assets/img/icons/github/white40.svg" alt="Github" />
            <img
              src="~/assets/img/icons/github/bluegreen2.svg"
              class="hover-img"
              alt="Github"
            />
          </a>

          <a
            href="#"
            class="language"
            title="Mude o idioma"
            @click.prevent="changeLanguage"
          >
            <img
              src="~/assets/img/logos/brasil.svg"
              :class="[language == 'brasil' ? 'selected' : '']"
              alt="Português do Brasil"
            />
            <img
              src="~/assets/img/logos/usa.svg"
              :class="[language == 'usa' ? 'selected' : '']"
              alt="Português do Brasil"
            />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      language: "brasil",
      menu: false,
    };
  },
  methods: {
    changeLanguage: function () {
      if (this.language == "brasil") {
        this.language = "usa";
      } else {
        this.language = "brasil";
      }
    },
    toggleMenu: function () {
      this.menu = !this.menu;
    },
    scrollPage: function (element) {
      this.menu = false;
      if (element == "start") {
        window.scrollTo(0, 0);
        return;
      }

      const el = document.getElementById(element);
      window.scrollTo(0, el.offsetTop - 100); // Navbar offset
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: rgba(21, 21, 21, 0.8);
  backdrop-filter: blur(15px);
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  position: fixed;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      display: flex;
      align-items: center;
    }

    .menu-button {
      display: none;

      button {
        width: 2.5rem;
        height: 2.5rem;
        background-color: transparent;
        background-position: center center;
        border: none;
        transition-duration: 0.2s;
        position: relative;

        img {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 2rem;
          height: 2rem;
          transition-duration: 0.2s;

          &.hover-img {
            opacity: 0;
          }

          &.open {
            display: flex;
          }

          &.close {
            display: none;
          }
        }

        &.close {
          img {
            &.open {
              display: none;
            }

            &.close {
              display: flex;
            }
          }
        }

        &:hover,
        &:focus {
          img {
            opacity: 0;

            &.hover-img {
              opacity: 1;
            }
          }
        }
      }
    }

    .links {
      display: flex;
      align-items: center;

      .others {
        display: flex;
      }

      a {
        text-decoration: none;
        margin: 0 20px;
        display: flex;
        flex-direction: column;
        margin-top: 2px;
        transition-duration: 0.2s;

        p {
          font-size: 1rem;
          font-weight: 600;
          color: $white;
          opacity: 0.4;
          transition-duration: 0.2s;
        }

        &.active {
          p {
            color: $blue-green-1;
            opacity: 1;
          }
        }

        &:hover {
          p {
            color: $blue-green-2;
            opacity: 1;
          }

          &::after {
            width: 100%;
          }
        }

        &.section:first-child {
          margin-left: 0 !important;
        }

        &.social {
          width: 1.5rem;
          height: 1.5rem;
          background-repeat: no-repeat;
          background-size: 1rem;
          background-position: center center;
          transition-duration: 0.2s;
          margin: 0 5px;
          position: relative;

          img {
            width: 1rem;
            height: 1rem;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            transition-duration: 0.2s;

            &.hover-img {
              opacity: 0;
            }
          }

          &:hover,
          &:focus {
            img {
              &.hover-img {
                opacity: 1;
              }
            }
          }

          &::after {
            margin-top: 1.4rem;
          }
        }

        &::after {
          content: "";
          background-color: $blue-green-2;
          width: 0;
          height: 2px;
          transition-duration: 0.3s;
        }

        &.language {
          width: 1.5rem;
          height: 1.5rem;
          background-repeat: no-repeat;
          background-size: 1.5rem;
          background-position: center center;
          transition-duration: 0.2s;
          margin-top: 0;
          margin-right: 0;
          position: relative;

          img {
            width: 1.5rem;
            height: 1.5rem;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            transition-duration: 0.2s;
            opacity: 0;

            &.selected {
              opacity: 1;
            }
          }

          &::after {
            margin-top: 1.4rem;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .container {
    .content {
      flex-wrap: wrap;

      .logo {
        width: calc(100% - 2.5rem);
      }

      .menu-button {
        display: flex;
      }

      .links {
        height: 0;
        width: 100%;
        flex-direction: column;
        align-items: flex-end;
        transition-duration: 0.2s;

        a {
          opacity: 0;
          transition-duration: 0.2s;
          margin-right: -100px;
        }

        &.open {
          padding-top: 20px;
          height: 230px;

          a {
            opacity: 1;
            margin: 5px 0;
          }
        }

        .others {
          margin-top: 20px;

          .language {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
