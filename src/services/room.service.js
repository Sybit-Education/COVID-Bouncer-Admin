import { $db } from './firebase.service.js'

class RoomService {
  async getRoomByID (id) {
    const room = await $db().doc('Rooms/' + id).get()
    return { roomID: id, roomData: room.data() }
  }

  async getRooms () {
    const rooms = []
    const response = await $db()
      .collection('Rooms')
      .orderBy('roomName', 'asc')
      .get()

    response.forEach(doc => {
      rooms.push(doc.data())
    })
    return rooms
  }

  async getOccupancyOfRoomByID (id) {
    const currentDate = new Date().toISOString().slice(0, 10)
    let occupancy = null

    await $db()
      .collection('Rooms/' + id + '/CheckIn')
      .where('date', '==', currentDate)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach((checkIn) => {
          occupancy = checkIn.data().user.length
        })
      })
    return occupancy
  }
}

export const roomService = new RoomService()
