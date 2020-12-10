<template>
  <b-row @click="router()">
    <b-col cols="2" class="link-icon">
      <font-awesome-icon :icon="['fas', icon]" />
    </b-col>
    <b-col cols="10" class="link-text align-self-center">
      <h5>
        {{title}}
      </h5>
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
  font-size: 16px
  margin: 0

h5:hover
  cursor: pointer
  transform: scale(1.03)
</style>
