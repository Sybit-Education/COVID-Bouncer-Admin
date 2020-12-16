import { $db } from '@/services/firebase.service'
class ContactReportService {
  async getContactsOfUserByID (userId, date) {
    const userList = []
    const userRef = await $db().doc('User/' + userId)
    const querySnapshot = await $db().collectionGroup('CheckIn')
      .where('date', '==', date).get()

    querySnapshot.forEach((doc) => {
      const userRefs = doc.data().user
      userRefs.forEach(user => {
        if (user.id === userRef.id) {
          userRefs.forEach(u => {
            u.get().then(user => {
              userList.push(user.data())
            })
          })
        }
      })
    })

    return userList
  }
}

export const contactReportService = new ContactReportService()
