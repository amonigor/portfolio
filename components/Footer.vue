<template>
  <footer class="container">
    <div class="content">
      <div class="left">
        <p>© {{ $t('sections.footer') }} - <span>Igor Amon</span></p>
        <p>Design by <span>Igor Amon</span></p>
      </div>
      <div class="right">
        <a href="https://www.linkedin.com/in/igor-amon/" target="_blank">
          <img src="~/assets/img/icons/linkedin/white.svg" alt="Linkedin" />
          Linkedin
        </a>
        <a href="https://www.linkedin.com/in/igor-amon/" target="_blank">
          <img src="~/assets/img/icons/github/white.svg" alt="Github" />
          Github
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: 60px;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .left {
      p {
        font-size: 1rem;
        line-height: 1.5rem;
        color: $white;

        span {
          font-weight: 600;
        }
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      a {
        text-decoration: none;
        line-height: 100%;
        font-size: 1rem;
        color: $white;
        display: flex;
        align-items: center;
        margin: 5px 0;

        img {
          width: 1rem;
          height: 1rem;
          margin-right: 5px;
        }
      }
    }
  }
}

@media only screen and (max-width: 475px) {
  .container {
    .content {
      justify-content: center;

      .left {
        p {
          text-align: center;
        }
      }

      .right {
        margin-top: 20px;
        align-items: center;
      }
    }
  }
}

@media only screen and (max-width: 386px) {
  .container {
    .content {
      .left {
        p {
          text-align: center;
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>