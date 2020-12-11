import { $db } from '@/services/firebase.service.js'

const COLLECTION_NAME = 'Locations'

class LocationService {
  setLocation (location) {
    return $db()
      .collection(COLLECTION_NAME)
      .add({ Location: location })
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

  async addBuilding (building, locationId) {
    return $db()
      .collection(COLLECTION_NAME)
      .doc(locationId)
      .collection('Buildings')
      .add({ Building: building })
  }
}

export const locationService = new LocationService()
