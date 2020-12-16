import { $db } from '@/services/firebase.service.js'

const COLLECTION_NAME = 'Locations'

class LocationService {
  async addLocation (location) {
    return $db()
      .collection(COLLECTION_NAME)
      .add({ Location: location })
  }

  async getLocations () {
    const locations = []
    const collections = await $db()
      .collection(COLLECTION_NAME)
      .get()
    collections.forEach(doc => {
      locations.push(doc.data().Location)
    })
    return locations
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
