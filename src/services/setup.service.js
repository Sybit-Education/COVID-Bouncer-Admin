import { configService } from '@/services/config.service'
import { locationService } from '@/services/location.service'

class SetupService {
  isCompleted = false

  async isSetupCompleted () {
    if (!this.isCompleted) {
      const masterPassword = await configService.fetchMasterPassword()
      const locations = await locationService.getLocations()
      const buildings = await locationService.getBuildings()
      if (masterPassword && locations && buildings) {
        this.isCompleted = true
      }
    }
  }
}

export const setupService = new SetupService()
