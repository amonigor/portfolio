<template>
  <div class="portfolio-item">
    <img :src="require(`~/assets/img/portfolio/${image}`)" alt="" />
    <div class="portfolio-item-content">
      <p class="title">{{ title }}</p>
      <p class="description">{{ description }}</p>
      <a class="button" :href="buttonLink" target="_blank">{{ buttonText }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioItem",
  props: {
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    buttonLink: {
      required: true,
      type: String,
    },
    buttonText: {
      required: true,
      type: String,
    },
    image: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.portfolio-item {
  width: 320px;
  min-height: 365px;
  background-color: #464646;
  border-radius: 2rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  margin: 0 20px 20px 20px;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    border-radius: 32px 32px 0 0;
  }

  .portfolio-item-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 15px;
    color: $white;

    .title {
      font-size: 1.5rem;
      font-weight: 600;
    }

    .description {
      font-size: 1rem;
      flex: 1;
      margin: 10px 0;
    }

    .button {
      font-size: 1rem;
      font-weight: 600;
      text-decoration: none;
      color: $white;
      background-color: $blue-green-1;
      border-radius: 2rem;
      padding: 13px;
      text-align: center;
    }
  }
}

@media only screen and (max-width: 1330px) {
  .portfolio-item {
    width: 420px;
  }
}

@media only screen and (max-width: 1050px) {
  .portfolio-item {
    width: 320px;
  }
}

@media only screen and (max-width: 720px) {
  .portfolio-item {
    width: 100%;
    margin: 0 0 20px 0;
  }
}
</style>