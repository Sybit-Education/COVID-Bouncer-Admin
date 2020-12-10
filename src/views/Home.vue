<template>
<b-container>
  <b-row>
    <b-col v-for="cards in card" :key="cards.id" :cols="cards.col">
      <dashboardCard :title="cards.title" :text="cards.text" :link="cards.link" :imgLink="cards.imgLink"></dashboardCard>
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
          link: 'test1',
          imgLink: 'https://images.unsplash.com/photo-1524989899036-b1c54afba1c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          col: '4'
        },
        raumVerwalten: {
          title: 'Raum verwalten',
          text: 'Hier können sie einen Raum verwalten',
          link: 'test2',
          imgLink: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
          col: '4'
        },
        raumListe: {
          title: 'Raum liste',
          text: 'Hier können sie eine Liste sehen',
          link: 'test3',
          imgLink: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          col: '4'
        },
        UserListe: {
          title: 'Liste der Mitarbeiter',
          text: 'Hier können sie eine Liste sehen',
          link: 'test3',
          imgLink: 'https://wallpapercave.com/wp/wp2231069.jpg',
          col: '7'
        },
        UserRaum: {
          title: 'Trends der Räume',
          text: 'Hier können sie eine Liste sehen',
          link: 'test3',
          imgLink: 'https://images.unsplash.com/photo-1541194577687-8c63bf9e7ee3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          col: '5'
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
