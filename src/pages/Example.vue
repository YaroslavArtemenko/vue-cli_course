<template>
  <div class="wrapper-content wrapper-content--fixed">

    <section>
      <div class="container">
        <h1>Example Page</h1>
        <p>{{ message }}</p>
      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: "Example",
  data () {
    return {
      message: null,
    }
  },
  created() {
    this.message = this.$store.getters.getMessage
  },
  // computed: {
  //   getMessage () {
  //     return this.$store.getters.getMessage
  //   }
  // }
}
</script>

<style scoped>

</style>