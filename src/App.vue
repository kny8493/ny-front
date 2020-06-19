<template>
  <div id="app">
    <component :is="layout"></component>
  </div>
</template>

<script>
// vuetify 를 쓰기위해서는 Vapp, vuietify 이썽야함
import LayoutDefault from '@/views/layout/LayoutDefault'

export default {
  name: 'App',
  components: {
    LayoutDefault
  },
  computed: {
    layout () {
      return this.$store.state.layout
    }
  },
  methods: {
  }
}
</script>

<style :lang="css">
  @import "assets/css/main.css";
</style>
