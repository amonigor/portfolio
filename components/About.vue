<template>
  <section class="container" id="about-me">
    <div class="content">
      <h1 class="section-title">{{ $t('sections.about.title') }}</h1>
      <div class="description">
        <p v-html="$t('sections.about.firstParagraph')"></p>
        <p v-html="$t('sections.about.secondParagraph')"></p>
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

        ::v-deep span {
          color: $blue-green-1;
          font-weight: 600;
          font-size: 1rem;
          text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
        }

        ::v-deep a {
          color: $blue-green-1;
          font-size: 1rem;
          text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
        }
      }
      padding-bottom: 60px;
    }
  }
}
</style>