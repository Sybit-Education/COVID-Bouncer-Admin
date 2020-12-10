<template>
  <b-row class="mx-0 pt-2 mb-4">
    <h1>{{headline}}</h1>
  </b-row>
</template>

<script>
export default {
  props: {
    headline: String
  }
}
</script>

<style lang="sass" scoped>
h1
  font-weight: bold
</style>
