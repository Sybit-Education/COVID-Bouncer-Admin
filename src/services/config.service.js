import { $db } from '@/services/firebase.service.js'

const COLLECTION_NAME = 'Config'

class ConfigService {
  fetchMasterPassword () {
    return $db()
      .collection(COLLECTION_NAME)
      .doc('password')
      .get()
      .then(doc => {
        return doc.data().value
      })
      .catch(e => console.log('No master password found'))
  }

  setMasterPassword (masterPassword) {
    return $db().collection(COLLECTION_NAME).doc('password').set({
      value: masterPassword
    })
      .then(function () {
        return true
      })
      .catch(function (error) {
        console.error('Error writing document: ', error)
        return false
      })
  }
}

export const configService = new ConfigService()
