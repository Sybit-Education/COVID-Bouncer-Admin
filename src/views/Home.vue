<template>
<b-container>
  <b-row>
    <b-col v-for="cards in card" :key="cards.id" cols=4>
      <dashboardCard :title="cards.title" :text="cards.text" :link="cards.link"></dashboardCard>
    </b-col>
  </b-row>
  </b-container>
</template>
<script>
import dashboardCard from '@/components/base/DashboardCard'
export default {
  data: function () {
    return {
      card: {
        raumErstellen: {
          title: 'Raum anlegen',
          text: 'Hier können sie einen Raum anlegen',
          link: 'test1'
        },
        raumVerwalten: {
          title: 'Raum verwalten',
          text: 'Hier können sie einen Raum verwalten',
          link: 'test2'
        },
        raumListe: {
          title: 'Raum liste',
          text: 'Hier können sie eine Liste sehen',
          link: 'test3'
        }
      }
    }
  },
  components: {
    dashboardCard
  }
}
</script>

<style>

</style>
