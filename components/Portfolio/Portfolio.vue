<template>
  <section class="container" id="portfolio">
    <div class="content">
      <h1 class="section-title">portfólio</h1>

      <div
        class="portfolio-container"
        :class="[items.length > 2 ? 'spaced' : '']"
      >
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
import items from "~/static/portfolio/data.json";

export default {
  name: "Portfolio",
  data() {
    return {
      items: items,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: 120px;

  .portfolio-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 30px;
    justify-content: flex-start;

    &.spaced {
      justify-content: space-between !important;
    }
  }
}
</style>