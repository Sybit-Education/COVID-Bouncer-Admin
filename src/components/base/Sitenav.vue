<template>
  <div v-if="showNavbar" class="sitenav">
    <div class="sidenav-content">
    <h4 class="sidenav-link">Test</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sitenav',
  computed: {
    showNavbar () {
      return this.$route.meta.displayNavbar ?? true
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../assets/variables'
.sitenav
  position: fixed
  width: $sitenav-size
  height: 100%
  background: linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5) ), url("../../assets/img/sitenav-bg.jpg")
  background-position: center
  background-size: cover
  background-repeat: no-repeat
  box-shadow: 2px 0px 10px gray
  border-top-right-radius: 8px
  border-bottom-right-radius: 8px

.sidenav-content
  padding: 16px

.sidenav-link
  color: white
</style>
