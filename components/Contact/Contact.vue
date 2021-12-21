<template>
  <section class="container" id="contact">
    <div class="content">
      <h1 class="section-title">contato</h1>
      <div class="contact-container">
        <ContactItem
          title="Onde estou"
          icon="location"
          text="São Vicente, São Paulo - Brasil"
        />
        <ContactItem
          title="Envie um e-mail"
          icon="mail"
          text="contato@amonigor.dev"
        />
        <ContactItem
          title="Chamada ou whatsapp"
          icon="phone"
          text="+55 13 99138-1661"
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