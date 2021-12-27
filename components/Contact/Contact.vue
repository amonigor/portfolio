<template>
  <section class="container" id="contact">
    <div class="content">
      <h1 class="section-title">{{ $t('sections.contact.title') }}</h1>
      <div class="contact-container">
        <ContactItem
          :title="$t('sections.contact.location.title')"
          icon="location"
          :text="$t('sections.contact.location.content')"
          effect="left"
        />
        <ContactItem
          :title="$t('sections.contact.email.title')"
          icon="mail"
          :text="$t('sections.contact.email.content')"
        />
        <ContactItem
          :title="$t('sections.contact.call.title')"
          icon="phone"
          text="+55 13 99138-1661"
          effect="right"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: 60px;

  .content {
    .contact-container {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
    }
  }
}
</style>