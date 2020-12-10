<template>
  <b-row @click="router()" class="ml-2">
    <b-col>
    <div cols="4" class="link-icon">
    </div>
    <div cols="8" class="link-text">
      <h5>
        {{title}}
      </h5>
    </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    link: {
      type: String
    },
    icon: {
      type: String
    }
  },
  methods: {
    router () {
      this.$router.push(this.link)
    }
  }
}
</script>

<style lang="sass" scoped>
h5
  font-size: 18px

h5:hover
  cursor: pointer
  transform: scale(1.03)
</style>
