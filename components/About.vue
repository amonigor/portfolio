<template>
  <section class="container" id="about-me">
    <div class="content">
      <h1 class="section-title">sobre mim</h1>
      <div class="description">
        <p>
          Olá! Me chamo <span>Igor Amon</span> e atuo como
          <span>Desenvolvedor Full Stack</span>, com aproximadamente 3 anos de
          experiência na área de desenvolvimento web. Trabalho hoje na
          <a
            href="https://www.linkedin.com/company/xgrow-experience/"
            target="_blank"
            >XGrow Learning Experience</a
          >
          implementando front-end, e quando necessário back-end também.
        </p>
        <p>
          Tenho <span>formação técnica</span> pela
          <a href="https://etecdrc.com.br/" target="_blank"
            >ETEC Dra. Ruth Cardoso</a
          >, lugar responsável por me mostrar o mundo de desenvolvimento e que
          me fez apaixonar pela área. Hoje estou cursando
          <span>Sistemas de Informação</span> na
          <a href="https://www.unisantos.br/" target="_blank"
            >Universidade Católica de Santos</a
          >.
        </p>
      </div>

      <Skills />
      <TimeLine />
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
.container {
  .content {
    .description {
      p {
        color: $white;
        margin-top: 20px;
        font-weight: 400;
        font-size: 1rem;

        span {
          color: $blue-green-1;
          font-weight: 600;
          font-size: 1rem;
        }

        a {
          color: $blue-green-1;
          font-size: 1rem;
        }
      }
      padding-bottom: 60px;
    }
  }
}
</style>