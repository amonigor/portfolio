<template>
  <div class="contact-item" :class="[`fade-${effect}`]">
    <p class="title">
      <img :src="require(`~/assets/img/icons/${icon}/bluegreen2.svg`)" />
      {{ title }}
    </p>
    <p class="text" v-if="link == ''">{{ text }}</p>
    <a :href="link" class="text" target="_blank" v-else>{{ text }}</a>
  </div>
</template>

<script>
export default {
  name: "ContactItem",
  props: {
    title: {
      required: true,
      type: String,
    },
    icon: {
      required: true,
      type: String,
    },
    text: {
      required: true,
      type: String,
    },
    effect: {
      required: false,
      type: String,
      default: 'top'
    },
    link: {
      required: false,
      type: String,
      default: ''
    }
  },
};
</script>

<style lang="scss" scoped>
.contact-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 180px;
  margin-top: 30px;
  margin-left: 17.5px;
  margin-right: 17.5px;
  width: calc(33% - 35px);
  background-color: #464646;
  padding: 30px;
  border-radius: 2rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;

    .text {
      margin-top: 30px;
    }
  }

  .title {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.5rem;
    color: $white;
    line-height: 100%;

    img {
      margin-right: 10px;
      width: 2rem;
      height: 2rem;
    }
  }

  .text {
    color: $white;
    font-size: 1rem;
    margin-top: 46px;
  }
}

@media only screen and (max-width: 1050px) {
  .contact-item {
    width: calc(50% - 35px);

    &:nth-child(2) {
      margin-left: 17.5px;
      margin-right: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}

@media only screen and (max-width: 768px) {
  .contact-item {
    width: 100%;
    min-height: 100px;
    margin-left: 0 !important;
    margin-right: 0;

    .text {
      margin-top: 30px;
    }
  }
}
</style>