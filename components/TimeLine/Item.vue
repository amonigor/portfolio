<template>
  <div class="timeline-item" :id="`timeline-item-${id}`">
    <div class="item-icon">
      <img src="~/assets/img/icons/hat/white.svg" v-if="type == 'study'" />
      <img src="~/assets/img/icons/work/white.svg" v-if="type == 'work'" />
    </div>
    <div class="item-text">
      <p class="title">{{ title }}</p>
      <p class="place">{{ place }}</p>
      <p class="time">{{ time }}</p>
      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeLineItem",
  props: {
    type: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
    place: {
      required: true,
      type: String,
    },
    time: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    id: {
      required: true,
      type: Number
    }
  },
};
</script>

<style lang="scss" scoped>
.timeline-item {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 60px;

  .item-icon {
    width: 3rem;
    height: 3rem;
    background-color: $blue-green-1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 15px;

    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  .item-text {
    width: calc(80% - 3.938rem);
    font-size: 1rem;
    line-height: 150%;
    font-weight: 400;

    .title {
      font-weight: 600;
      color: $white;
    }

    .place {
      color: rgba(255, 255, 255, 0.6);
    }

    .time {
      color: $blue-green-1;
    }

    .description {
      color: $white;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
}

@media only screen and (max-width: 768px) {
  .timeline-item {
    .item-text {
      width: calc(95% - 3.938rem);
    }
  }
}
</style>