import { configService } from '@/services/config.service.js'
import { $db } from '@/services/firebase.service'
import { roomService } from '@/services/room.service'

const COLLECTION_NAME = 'User'

class UserService {
  constructor () {
    this.user = null
  }

  async signIn ({ firstName, lastName, initials, masterPassword }) {
    const loadedPassword = await configService.fetchMasterPassword()
    if (loadedPassword !== masterPassword) {
      return true
    } else {
      await this.fetchUserByInitials(initials)
        .then(user => {
          if (user) {
            return user
          } else {
            const user1 = {
              firstName,
              lastName,
              initials
            }
            return $db().collection(COLLECTION_NAME).add(user1).then(response => {
              user1.id = response.id
              return user1
            })
          }
        })
        .then(user2 => {
          this.user = user2
          localStorage.userId = user2.id
        })
    }
  }

  async fetchAllUsers () {
    const users = []
    const response = await $db().collection(COLLECTION_NAME).get()
    response.forEach(doc => {
      users.push({
        id: doc.id,
        firstName: doc.data().firstName,
        lastName: doc.data().lastName,
        initials: doc.data().initials,
        isAdmin: doc.data().isAdmin === undefined || doc.data().isAdmin === null ? false : doc.data().isAdmin
      })
    })
    return users
  }

  async fetchUserByInitials (initials) {
    const users = []
    const response = await $db().collection(COLLECTION_NAME)
      .where('initials', '==', initials)
      .get()
    response.forEach(userDoc => {
      const user = {
        id: userDoc.id,
        firstName: userDoc.data().firstName,
        lastName: userDoc.data().lastName,
        initials: userDoc.data().initials
      }
      users.push(user)
    })
    return users[0]
  }

  async fetchUserById (userId) {
    const userDoc = await $db().collection(COLLECTION_NAME).doc(userId).get()
    return {
      id: userDoc.id,
      isAdmin: userDoc.data().isAdmin,
      firstName: userDoc.data().firstName,
      lastName: userDoc.data().lastName,
      initials: userDoc.data().initials
    }
  }

  async currentUser () {
    const userId = localStorage.getItem('userId')
    let result = null

    if (userId) {
      if (this.user && this.user.userId === userId) {
        result = this.user
      } else {
        result = await this.fetchUserById(userId)
      }
    }
    return result
  }

  isLoggedIn () {
    return !!localStorage.getItem('userId')
  }

  logout () {
    localStorage.removeItem('userId')
    this.user = null
  }

  async getSignedRoom (date) {
    let myRoom
    const currentUserID = await this.currentUser()
    const userRef = await $db().doc('User/' + currentUserID.id)
    const querySnapshot = await $db().collectionGroup('CheckIn').where('date', '==', date).get()
    querySnapshot.forEach((doc) => {
      const roomID = doc.ref.parent.parent.id
      const user = doc.data().user
      user.forEach(user => {
        if (user.id === userRef.id) {
          myRoom = roomID
        }
      })
    })
    return await roomService.getRoomByID(myRoom)
  }

  async setAdminStatus (user) {
    console.log('🚀 ~ user', user)
    const updatedUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      initials: user.initials,
      isAdmin: user.isAdmin
    }
    try {
      await $db().collection(COLLECTION_NAME).doc(user.id).update(updatedUser)
    } catch (error) {
      console.log('Something went wrong with setting isAdmin to value x: ' + error)
      this.$notify({
        group: 'network',
        title: 'Error',
        type: 'error',
        text: error.message
      })
    }
  }
}

export const userService = new UserService()
