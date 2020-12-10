import { $db } from '@/services/firebase.service'

class ContactReportService {
  async getContactsOfUserByID (id) {
    const currentDate = new Date().toISOString().slice(0, 10)
    let occupancy = null

    await $db().collection('Rooms').get().then(querySnapshot => {
      querySnapshot.forEach((room) => {
        $db()
          .collection('Rooms/' + room.id + '/CheckIn')
          .where('date', '==', currentDate)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach((checkIn) => {
              occupancy = checkIn.data().user
              occupancy.forEach((user) => {
                console.log(user)
              })
            })
          })
      })
    })
  }
}

export const contactReportService = new ContactReportService()
