<template>
  <div class="skills">
    <h2 class="section-subtitle">minhas skills</h2>

    <div class="skill-container">
      <div class="skill-set">
        <p class="title">
          <img src="~/assets/img/front.svg" />
          Front-end
        </p>

        <div class="description">
          <p>
            Desde o começo da minha experiência profissional, fiz front-end
            voltados para a web, então tenho bastante experiência com HTML, CSS
            e JavaScript, também utilizei bibliotecas como BootStrap e JQuery
            para facilitar no desenvolvimento.
          </p>
          <p>
            Também tenho experiência com frameworks JavaScript como VueJS e
            Nuxt.
          </p>
        </div>

        <div class="skills-icons">
          <img src="~/assets/img/logos/html.svg" alt="HTML" title="HTML" />
          <img src="~/assets/img/logos/css.svg" alt="CSS" title="CSS" />
          <img
            src="~/assets/img/logos/js.svg"
            alt="JavaScript"
            title="JavaScript"
          />
          <img
            src="~/assets/img/logos/bs.svg"
            alt="Bootstrap"
            title="Bootstrap"
          />
          <img src="~/assets/img/logos/vue.svg" alt="VueJS" title="VueJS" />
          <img src="~/assets/img/logos/nuxt.svg" alt="Nuxt" title="Nuxt" />
        </div>
      </div>

      <div class="skill-set">
        <p class="title">
          <img src="~/assets/img/back.svg" />
          Back-end
        </p>

        <div class="description">
          <p>
            Para o desenvolvimento de back-end tenho muita experiência com PHP,
            e também com o framework Laravel e Lumen. Para a parte de banco de
            dados utilizo sempre o MySql.
          </p>
          <p>
            Estou no momento estudando outras ferramentas para back-end, como
            .NET e NestJS.
          </p>
        </div>

        <div class="skills-icons">
          <img src="~/assets/img/logos/php.svg" alt="PHP" title="PHP" />
          <img
            src="~/assets/img/logos/laravel.svg"
            alt="Laravel"
            title="Laravel"
          />
          <img src="~/assets/img/logos/lumen.svg" alt="Lumen" title="Lumen" />
          <img src="~/assets/img/logos/mysql.svg" alt="MySQL" title="MySQL" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
};
</script>

<style lang="scss" scoped>
.skills {
  .skill-container {
    padding: 20px 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .skill-set {
      width: calc(50% - 30px);
      max-width: 530px;
      min-height: 376px;
      background-color: #464646;
      border-radius: 2rem;
      box-sizing: border-box;
      padding: 30px;
      display: flex;
      flex-direction: column;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

      .title {
        display: flex;
        align-items: center;
        font-weight: 600;
        font-size: 1.5rem;
        color: $white;
        line-height: 100%;

        img {
          margin-right: 10px;
        }
      }

      .description {
        padding-bottom: 0;
        flex: 1;

        p {
          margin: 20px 0;
          color: $white;
          font-weight: 400;
          font-size: 1rem;
        }
      }

      .skills-icons {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        img {
          height: 2rem;
          margin: 0 7.5px;

          &:first-child {
            margin-left: 0;
          }

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .skills {
    .skill-container {
      flex-direction: column;
      .skill-set {
        width: 100%;
        max-width: unset;
        min-height: unset;
        margin-bottom: 20px;

        .skills-icons {
          img {
            height: 1.5rem;
          }
        }
      }
    }
  }
}
</style>