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
}

export const locationService = new LocationService()
