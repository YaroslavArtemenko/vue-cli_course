<template>
  <div class="wrapper-content wrapper-content--fixed">

    <section>
      <div class="container">
        <h1>Example Page</h1>
        <input type="text" v-model="message">
        <button class="btn btnPrimary" @click="setMessage">Change message</button>
        <p>{{ getMessage }}</p>
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
  computed: {
    getMessage () {
      return this.$store.getters.getMessage
    }
  },
  methods: {
    setMessage() {
      this.$store.dispatch('setMessage')
    }
  }
}
</script>

<style scoped>

</style>