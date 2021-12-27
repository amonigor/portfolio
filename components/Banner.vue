<template>
  <header class="container">
    <div class="content fade-top">
      <h1>Igor Amon</h1>
      <p>{{ $t("sections.banner.role") }}</p>

      <div class="links">
        <a
          :href="`mailto:${$t('sections.banner.email')}`"
          target="_blank"
          title="e-mail"
        >
          <img src="~/assets/img/icons/mail/bluegreen1.svg" />
        </a>
        <a
          href="https://www.linkedin.com/in/igor-amon/"
          target="_blank"
          title="linkedin"
        >
          <img src="~/assets/img/icons/linkedin/bluegreen1.svg" />
        </a>
        <a href="https://github.com/amonigor" target="_blank" title="github">
          <img src="~/assets/img/icons/github/bluegreen1.svg" />
        </a>
      </div>

      <a href="#" class="more fade-top" @click.prevent="scrollPage('about-me')">
        {{ $t('sections.banner.button') }}
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    scrollPage: function (element) {
      const el = document.getElementById(element);
      window.scrollTo(0, el.offsetTop - 100); // Navbar offset
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 190px;
  padding-bottom: 120px;

  .content {
    h1 {
      font-size: 5rem;
      color: $white;
      margin: 0;
      text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
      line-height: 120%;
    }

    p {
      font-size: 1.5rem;
      font-weight: 700;
      color: $blue-green-1;
      margin: 10px 0;
    }

    .links {
      margin: 15px 0;
      display: flex;

      a {
        width: 1.5rem;
        margin: 0 10px;
        display: flex;
        flex-direction: column;

        img {
          height: 1.5rem;
        }

        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }

        &::after {
          content: "";
          background-color: $blue-green-2;
          width: 0;
          height: 2px;
          transition-duration: 0.3s;
        }

        &:hover {
          &::after {
            width: 100%;
          }
        }
      }
    }

    .more {
      box-sizing: border-box;
      display: inline-block;
      font-size: 1rem;
      text-decoration: none;
      color: $white;
      border: 2px solid $white;
      border-radius: 0.313rem;
      padding: 8px 12px;
      transition-duration: 0.2s;

      &:hover,
      &:focus {
        background-color: $white;
        color: $dark-grey;
        font-weight: bold;
      }
    }
  }
}
</style>