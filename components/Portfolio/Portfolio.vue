<template>
  <section class="container" id="portfolio">
    <div class="content">
      <h1 class="section-title">{{ $t('sections.portfolio.title') }}</h1>

      <div class="portfolio-container">
        <PortfolioItem
          v-for="(item, idx) in $t('sections.portfolio.items')"
          v-bind:key="idx"
          :title="item.title"
          :description="item.description"
          :button-link="item.buttonLink"
          :button-text="item.buttonText"
          :image="item.image"
          :id="idx"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Portfolio",
};
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: 100px;

  .portfolio-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 30px;
    justify-content: flex-start;
  }
}
</style>