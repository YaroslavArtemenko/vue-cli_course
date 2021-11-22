<template>
  <div class="wrapper-content wrapper-content--fixed">

    <section>
      <div class="container">
        <h1>Home Page</h1>
        {{ message }}
      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    message () {
      return this.$store.getters.getMessage
    }
  }
}
</script>

<style scoped>

</style>