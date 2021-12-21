<template>
  <div class="container">
    <div class="content">
      <div class="logo">
        <img src="~/assets/img/logo.svg" alt="amonigor.dev">
      </div>

      <div class="menu-button" @click.prevent="toggleMenu()">
        <button :class="[menu ? 'close' : '']"></button>
      </div>

      <div class="links" :class="[menu ? 'open' : '']">
        <a href="#" class="section active">
          <p>início</p>
        </a>
        <a href="#" class="section">
          <p>sobre mim</p>
        </a>
        <a href="#" class="section">
          <p>portfólio</p>
        </a>
        <a href="#" class="section">
          <p>contato</p>
        </a>

        <div class="others">
          <a href="https://www.linkedin.com/in/igor-amon/" target="_blank" class="social linkedin" title="Linkedin"></a>
          <a href="https://github.com/amonigor" target="_blank" class="social github" title="Github"></a>

          <a
            href="#"
            class="language"
            :class="[language]"
            title="Mude o idioma"
            @click.prevent="changeLanguage"
          ></a>
        </div>
      </div>
    </div>
  </div>
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
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: rgba(21, 21, 21, 0.8);
  backdrop-filter: blur(15px);
  width: 100%;
  padding: 20px 160px;
  position: fixed;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;

    .logo {
      display: flex;
      align-items: center;
    }

    .menu-button {
      display: none;

      button {
        width: 2rem;
        height: 2rem;
        background-image: url("~/assets/img/icons/menu/white.svg");
        background-color: transparent;
        background-position: center center;
        border: none;
        transition-duration: 0.2s;

        &:hover,
        &:focus {
          background-image: url("~/assets/img/icons/menu/bluegreen1.svg");
        }

        &.close {
          background-image: url("~/assets/img/icons/menu/close-white.svg");

          &:hover,
          &:focus {
            background-image: url("~/assets/img/icons/menu/close-bluegreen1.svg");
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

          &.linkedin {
            background-image: url("~/assets/img/icons/linkedin/white40.svg");

            &:hover {
              background-image: url("~/assets/img/icons/linkedin/bluegreen2.svg");
            }
          }

          &.github {
            background-image: url("~/assets/img/icons/github/white40.svg");

            &:hover {
              background-image: url("~/assets/img/icons/github/bluegreen2.svg");
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

          &.brasil {
            background-image: url("~/assets/img/logos/brasil.svg");
          }

          &.usa {
            background-image: url("~/assets/img/logos/usa.svg");
          }

          &::after {
            margin-top: 1.4rem;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 1200px) {
  .container {
    padding: 20px 80px;
  }
}

@media only screen and (max-width: 920px) {
  .container {
    padding: 20px 20px;
  }
}

@media only screen and (max-width: 768px) {
  .container {
    .content {
      flex-wrap: wrap;

      .logo {
        width: calc(100% - 2rem);
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
