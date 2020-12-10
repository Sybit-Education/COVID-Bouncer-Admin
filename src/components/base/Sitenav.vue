<template>
  <div v-if="showNavbar" class="sitenav">
    <div class="sidenav-content">
      <h4 class="sidenav-headline">Rooms-Admin</h4>
      <hr/>
      <div class="sidenav-links" v-for="links in link" :key="links.id">
        <sitenavLink :title="links.title" :link="links.link" :icon="links.icon"></sitenavLink>
      </div>
    </div>
  </div>
</template>

<script>
import sitenavLink from '@/components/sitenav/sitenav-link'
export default {
  name: 'sitenav',
  data: function () {
    return {
      link: {
        anlegen: {
          title: 'anlegen',
          link: 'anlegen',
          icon: 'user-secret'
        },
        bearbeiten: {
          title: 'bearbeiten',
          link: 'bearbeiten',
          icon: 'chevron-left'
        },
        verwalten: {
          title: 'verwalten',
          link: 'verwalten',
          icon: 'border-all'
        }
      }

    }
  },
  computed: {
    showNavbar () {
      return this.$route.meta.displayNavbar ?? true
    }
  },
  components: {
    sitenavLink
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
  color: white

.sidenav-content
  padding: 16px

.sidenav-links
  margin-top: 16px

.sidenav-headline
  font-weight: 600
  margin-bottom: 16px
  font-size: 24px

hr
  color: white
  display: block
  height: 1px
  border-top: 1px solid white
</style>
