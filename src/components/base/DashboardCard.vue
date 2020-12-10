<template>
  <div>
  <b-card
    img-src="https://picsum.photos/900/250/?image=3"
    img-alt="Card Image"
    :title="this.title"
    class="card my-4"
    @click="router()"
  >
    <b-card-text>
      {{text}}
    </b-card-text>
  </b-card>
</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'title'
    },
    text: {
      type: String,
      default: 'text'
    },
    link: {
      type: String,
      default: 'link'
    }
  },
  methods: {
    router () {
      this.$router.push(this.link)
    }
  }
}
</script>

<style scoped>
.card {
transition: box-shadow .3s ;
transition: all .5s ease;
}
.card:hover {
  transform: scale(1.03);
  transition: all .4s ease;
  box-shadow: 0 0 30px rgba(33,33,33,.2);
  cursor: pointer;
}
</style>
