<template>
  <section class="container" id="portfolio">
    <div class="content">
      <h1 class="section-title fade">{{ $t('sections.portfolio.title') }}</h1>

      <div class="portfolio-container fade-left">
        <PortfolioItem
          v-for="(item, idx) in items"
          v-bind:key="idx"
          :title="item.title"
          :description="item.description"
          :button-link="item.buttonLink"
          :button-text="item.buttonText"
          :image="item.image"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      items: [],
    };
  },
  async created() {
    let data;
    if (this.$i18n.locale == "en") {
      data = await import ("~/static/portfolio/en/data.json");
    } else {
      data = await import ("~/static/portfolio/pt/data.json");
    }
    this.items = data.default;
  },
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