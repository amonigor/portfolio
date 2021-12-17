<template>
  <div class="container">
    <div class="logo">
      <p>amonigor<span>.dev</span></p>
    </div>

    <div class="links">
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

      <a href="#" class="social linkedin" title="Linkedin"></a>
      <a href="#" class="social github" title="Github"></a>

      <a
        href="#"
        class="language"
        :class="[language]"
        title="Mude o idioma"
        @click.prevent="changeLanguage"
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      language: "brasil",
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
  },
};
</script>

<style lang="scss">
.container {
  background-color: #151515;
  width: 100%;
  padding: 20px 160px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    p {
      font-size: 2rem;
      line-height: 2rem;
      font-family: "Patua One", cursive;
      color: $white;

      span {
        font-size: 1rem;
        line-height: 1rem;
        font-family: "Patua One", cursive;
        color: $blue-green-1;
      }
    }
  }

  .links {
    display: flex;
    align-items: center;

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
</style>
