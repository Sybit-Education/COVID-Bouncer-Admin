import { $db } from '@/services/firebase.service.js'

const COLLECTION_NAME = 'Locations'

class LocationService {
  setLocation (location) {
    return $db()
      .collection(COLLECTION_NAME)
      .add({ Location: location })
      .then(() => true)
      .catch((error) => {
        console.log('Error writing document: ', +error)
        return false
      })
  }

  async getAllLocations () {
    const list = []
    const collections = await $db()
      .collection(COLLECTION_NAME)
      .get()
    collections.forEach(doc => {
      list.push(doc.data().Location)
    })
    console.log(list)
    return list
  }

  async addBuilding (building, location) {
    await $db()
      .collection(COLLECTION_NAME)
      .where('Location', '==', location)
      .get()
      .collection('Buildings')
      // TODO: collection add doesnt work
      .doc()
      .set({ Building: building })
      .then(() => true)
      .catch((error) => {
        console.log('Error writing document: ', error)
        return false
      })
  }
}

export const locationService = new LocationService()
