<template>
  <div class="timeline" id="#timeline">
    <h2 class="section-subtitle">{{ $t('sections.about.timeline.title') }}</h2>

    <div class="timeline-content">
      <div class="line">&nbsp;</div>
      <div class="items">
        <TimeLineItem
          v-for="(item, idx) in $t('sections.about.timeline.items')"
          v-bind:key="idx"
          :type="item.type"
          :title="item.title"
          :place="item.place"
          :time="item.time"
          :description="item.description"
          :id="idx"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeLine",
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