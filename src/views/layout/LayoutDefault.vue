<template>
  <div>
    <app-header/>
    <app-bar/>
    <div class="container">
      <div class="content container--fluid">
        <router-view/>
      </div>
    </div>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from '../../components/AppHeader'
import AppBar from '../../components/AppBar'
import AppFooter from '../../components/AppFooter'
export default {
  name: 'LayoutDefault',
  components: {AppFooter, AppBar, AppHeader}
}
</script>

<style scoped>

</style>
