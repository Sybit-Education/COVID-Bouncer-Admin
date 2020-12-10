<template>
<b-container>
    <headline headline="Test"></headline>
    <b-row>
        <b-col v-for="rooms in room" :key="rooms.id">
            <roomCard :card="rooms"> </roomCard>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import headline from '@/components/base/Headline'
import roomCard from '@/components/rooms/RoomCard'
import { roomService } from '@/services/room.service'
export default {
  components: {
    headline,
    roomCard
  },
  data: function () {
    return {
      room: {}
    }
  },
  async mounted () {
    this.room = await roomService.getRooms()
    console.log('mounted -> rooms', this.room)
  }
}
</script>

<style>

</style>
