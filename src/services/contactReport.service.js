import { $db } from '@/services/firebase.service'
// import { roomService } from '@/services/room.service'
class ContactReportService {
  async getContactsOfUserByID (userId, date) {
    // let myRoom
    const userList = []
    const userRef = await $db().doc('User/' + userId)
    const querySnapshot = await $db().collectionGroup('CheckIn')
      .where('date', '==', date).get()
    querySnapshot.forEach((doc) => {
      // const roomID = doc.ref.parent.parent.id
      const userRefs = doc.data().user
      userRefs.forEach(user => {
        if (user.id === userRef.id) {
          // myRoom = roomID
          userRefs.forEach(u => {
            u.get().then(user => {
              userList.push(user.data())
            })
          })
        }
      })
    })
    // return await roomService.getRoomByID(myRoom)
    return userList
  }
}

export const contactReportService = new ContactReportService()
