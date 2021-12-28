<template>
  <div class="timeline">
    <h2 class="section-subtitle fade">{{ $t('sections.about.timeline') }}</h2>

    <div class="timeline-content fade-left">
      <div class="line">{{ items.length > 0 ? '&nbsp;' : '' }}</div>
      <div class="items">
        <TimeLineItem
          v-for="(item, idx) in items"
          v-bind:key="idx"
          :type="item.type"
          :title="item.title"
          :place="item.place"
          :time="item.time"
          :description="item.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeLine",
  data() {
    return {
      items: [],
    };
  },
  async created() {
    let data;
    if (this.$i18n.locale == "en") {
      data = await import ("~/static/timeline/en/data.json");
    } else {
      data = await import ("~/static/timeline/pt/data.json");
    }
    this.items = data.default;
  },
};
</script>

<style lang="scss" scoped>
.timeline {
  margin-top: 40px;
  padding-bottom: 120px;

  .timeline-content {
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    .line {
      content: "";
      flex: 1;
      width: 5px;
      background-color: $blue-green-1;
      border-radius: 50px;
      margin-left: 25px;
    }

    .items {
      margin-left: -26px;
    }
  }
}
</style>