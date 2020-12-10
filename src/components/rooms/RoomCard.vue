<template>
<div>
    <h1>card</h1>
</div>
</template>

<script>
export default {
  props: {
    card: {}
  },
  mounted () {
    console.log(this.card)
  }
}
</script>

<style>

</style>
