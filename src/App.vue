<template>
  <div id="app">
    <sitenav />
    <div class="container" :class="{'main-container': showNavbar}">
    <router-view/>
    <notifications group="error" position="top center"/>
    </div>
  </div>
</template>

<script>
import sitenav from '@/components/base/Sitenav'

export default {
  components: {
    sitenav
  },
  computed: {
    showNavbar () {
      return this.$route.meta.displayNavbar ?? true
    }
  }
}
</script>

<style lang="sass" scoped>
@import 'assets/variables'
.main-container
  margin-left: $sitenav-size
  width: auto
  @media print
    margin-left: 0

</style>
